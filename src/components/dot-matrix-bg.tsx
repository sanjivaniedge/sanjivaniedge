"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useMemo, useRef } from "react";

type UniformValue = number | number[] | number[][];
type Uniforms = Record<string, { value: UniformValue; type: string }>;
type PreparedValue = number | number[] | THREE.Vector2 | THREE.Vector3 | THREE.Vector3[];
type PreparedUniform = { value: PreparedValue; type?: "1f" | "1i" | "3f" | "1fv" | "3fv" | "2f" };
type PreparedUniforms = Record<string, PreparedUniform>;

interface ShaderProps {
  source: string;
  uniforms: Uniforms;
  maxFps?: number;
}

interface DotMatrixProps {
  colors?: number[][];
  opacities?: number[];
  totalSize?: number;
  dotSize?: number;
  shader?: string;
  center?: ("x" | "y")[];
}

function DotMatrix({
  colors = [[180, 190, 210]],
  opacities = [0.04, 0.04, 0.04, 0.04, 0.04, 0.08, 0.08, 0.08, 0.08, 0.14],
  totalSize = 20,
  dotSize = 2,
  shader = "",
  center = ["x", "y"],
}: DotMatrixProps) {
  const uniforms: Uniforms = useMemo(() => {
    let colorsArray = [colors[0], colors[0], colors[0], colors[0], colors[0], colors[0]];
    if (colors.length === 2) {
      colorsArray = [colors[0], colors[0], colors[0], colors[1], colors[1], colors[1]];
    } else if (colors.length === 3) {
      colorsArray = [colors[0], colors[0], colors[1], colors[1], colors[2], colors[2]];
    }
    return {
      u_colors: {
        value: colorsArray.map((c) => [c[0] / 255, c[1] / 255, c[2] / 255]),
        type: "uniform3fv",
      },
      u_opacities: { value: opacities, type: "uniform1fv" },
      u_total_size: { value: totalSize, type: "uniform1f" },
      u_dot_size: { value: dotSize, type: "uniform1f" },
      u_reverse: { value: shader.includes("u_reverse_active") ? 1 : 0, type: "uniform1i" },
    };
  }, [colors, opacities, totalSize, dotSize, shader]);

  return (
    <Shader
      source={`
        precision mediump float;
        in vec2 fragCoord;
        uniform float u_time;
        uniform float u_opacities[10];
        uniform vec3 u_colors[6];
        uniform float u_total_size;
        uniform float u_dot_size;
        uniform vec2 u_resolution;
        uniform int u_reverse;
        out vec4 fragColor;
        float PHI = 1.6180339887498948;
        float random(vec2 xy){return fract(tan(distance(xy*PHI,xy)*0.5)*xy.x);} 
        void main(){
          vec2 st = fragCoord.xy;
          ${center.includes("x") ? "st.x -= abs(floor((mod(u_resolution.x, u_total_size) - u_dot_size) * 0.5));" : ""}
          ${center.includes("y") ? "st.y -= abs(floor((mod(u_resolution.y, u_total_size) - u_dot_size) * 0.5));" : ""}
          float opacity = step(0.0, st.x);
          opacity *= step(0.0, st.y);
          vec2 st2 = vec2(int(st.x / u_total_size), int(st.y / u_total_size));
          float frequency = 5.0;
          float show_offset = random(st2);
          float rand = random(st2 * floor((u_time / frequency) + show_offset + frequency));
          opacity *= u_opacities[int(rand * 10.0)];
          opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.x / u_total_size));
          opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.y / u_total_size));
          vec3 color = u_colors[int(show_offset * 6.0)];
          float animation_speed_factor = 0.5;
          vec2 center_grid = u_resolution / 2.0 / u_total_size;
          float dist_from_center = distance(center_grid, st2);
          float timing_offset_intro = dist_from_center * 0.01 + (random(st2) * 0.15);
          float max_grid_dist = distance(center_grid, vec2(0.0, 0.0));
          float timing_offset_outro = (max_grid_dist - dist_from_center) * 0.02 + (random(st2 + 42.0) * 0.2);
          float current_timing_offset;
          if (u_reverse == 1){
            current_timing_offset = timing_offset_outro;
            opacity *= 1.0 - step(current_timing_offset, u_time * animation_speed_factor);
            opacity *= clamp((step(current_timing_offset + 0.1, u_time * animation_speed_factor)) * 1.25, 1.0, 1.25);
          } else {
            current_timing_offset = timing_offset_intro;
            opacity *= step(current_timing_offset, u_time * animation_speed_factor);
            opacity *= clamp((1.0 - step(current_timing_offset + 0.1, u_time * animation_speed_factor)) * 1.25, 1.0, 1.25);
          }
          fragColor = vec4(color, opacity);
        }
      `}
      uniforms={uniforms}
      maxFps={60}
    />
  );
}

function ShaderMaterial({ source, uniforms }: ShaderProps) {
  const { size } = useThree();
  const ref = useRef<THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const mat = ref.current.material as THREE.ShaderMaterial;
    mat.uniforms.u_time.value = clock.getElapsedTime();
  });
  const prepared = useMemo(() => {
    const p: PreparedUniforms = {};
    for (const k in uniforms) {
      const u = uniforms[k];
      if (u.type === "uniform1f") p[k] = { value: u.value as number, type: "1f" };
      else if (u.type === "uniform1i") p[k] = { value: u.value as number, type: "1i" };
      else if (u.type === "uniform3f") p[k] = { value: new THREE.Vector3().fromArray(u.value as number[]), type: "3f" };
      else if (u.type === "uniform1fv") p[k] = { value: u.value as number[], type: "1fv" };
      else if (u.type === "uniform3fv") p[k] = { value: (u.value as number[][]).map((v) => new THREE.Vector3().fromArray(v)), type: "3fv" };
      else if (u.type === "uniform2f") p[k] = { value: new THREE.Vector2().fromArray(u.value as number[]), type: "2f" };
    }
    p["u_time"] = { value: 0, type: "1f" };
    p["u_resolution"] = { value: new THREE.Vector2(size.width * 2, size.height * 2) };
    const m = new THREE.ShaderMaterial({
      vertexShader: `
        precision mediump float;
        uniform vec2 u_resolution;
        out vec2 fragCoord;
        void main(){
          gl_Position = vec4(position.x, position.y, 0.0, 1.0);
          fragCoord = (position.xy + vec2(1.0)) * 0.5 * u_resolution;
          fragCoord.y = u_resolution.y - fragCoord.y;
        }
      `,
      fragmentShader: source,
      uniforms: p,
      glslVersion: THREE.GLSL3,
      blending: THREE.NormalBlending,
    });
    return m;
  }, [size.width, size.height, source, uniforms]);
  return (
    <mesh ref={ref}>
      <planeGeometry args={[2, 2]} />
      <primitive object={prepared} attach="material" />
    </mesh>
  );
}

function Shader({ source, uniforms, maxFps = 60 }: ShaderProps) {
  return (
    <Canvas className="absolute inset-0 h-full w-full">
      <ShaderMaterial source={source} uniforms={uniforms} maxFps={maxFps} />
    </Canvas>
  );
}

export default function DotMatrixBackground({
  animationSpeed = 3,
  colors = [[180, 190, 210], [22, 117, 244]],
  opacities = [0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.9, 1],
  dotSize = 8,
  reverse = false,
  className,
}: {
  animationSpeed?: number;
  colors?: number[][];
  opacities?: number[];
  dotSize?: number;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <DotMatrix
        colors={colors}
        dotSize={dotSize}
        opacities={opacities}
        shader={`${reverse ? "u_reverse_active" : "false"}_;animation_speed_factor_${animationSpeed.toFixed(1)}_;`}
        center={["x", "y"]}
      />
    </div>
  );
}