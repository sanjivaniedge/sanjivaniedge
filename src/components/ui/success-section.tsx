"use client";

import React, { useRef } from "react";
import Image from "next/image";

interface SuccessSectionProps {
  data: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    successMetrics?: string[];
    ctaText?: string;
    ctaLink?: string;
  };
}

export function SuccessSection({ data }: SuccessSectionProps) {
  const tiltRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - ny) * 8;
    const ry = (nx - 0.5) * 10;
    if (tiltRef.current) {
      tiltRef.current.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(1.03)`;
    }
    if (glowRef.current) {
      glowRef.current.style.left = `${nx * 100}%`;
      glowRef.current.style.top = `${ny * 100}%`;
      glowRef.current.style.opacity = "0.35";
    }
  };

  const handleLeave = () => {
    if (tiltRef.current) {
      tiltRef.current.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    }
    if (glowRef.current) {
      glowRef.current.style.opacity = "0";
    }
  };

  return (
    <section className="py-10 px-4 bg-white relative overflow-hidden max-w-7xl mx-auto">
      {/* Background Decoration - Waves */}
      <div className="flex items-center justify-end gap-6 pb-10 px-10">
    <div className="hidden md:flex h-px flex-1 bg-[color:var(--tile-stroke)]" />
        <h2 className="text-4xl md:text-6xl font-medium md:text-right text-center"
          style={{
            fontFamily: "Manrope",
            fontWeight: 500,
            // fontSize: "64px",
            lineHeight: "1.366em",
            color: "#1A1F3D",
          }}>
          {data.title}
          <span className="text-[#FF6B5A]">.</span><span className="text-[#17ABD6]">.<span className="text-[#0075B1]">.</span></span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div
              className="group rounded-lg overflow-hidden relative z-10 [perspective:1000px]"
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
            >
              <div
                ref={tiltRef}
                className="relative will-change-transform transition-transform duration-300 [transform-style:preserve-3d]"
              >
                <Image
                  src={data.image}
                  alt={data.imageAlt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  style={{ transform: "translateZ(18px)" }}
                />
              </div>
              <div
                ref={glowRef}
                className="pointer-events-none absolute w-56 h-56 rounded-full bg-white/15 blur-2xl mix-blend-soft-light"
                style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)", opacity: 0 }}
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-10">


            <div className="space-y-6 pl-4">
              {data.successMetrics?.map((metric, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-600 font-medium">{metric}</span>
                </div>
              ))}
            </div>

            <div className="pl-4 flex justify-center md:justify-start">
              {data.ctaText && (
                <a href={data.ctaLink || "#"} className="inline-flex items-center gap-2 bg-[#FF6B5A] text-white px-8 py-3 rounded hover:bg-[#e55a4a] transition-colors font-medium">
                  {data.ctaText}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
