"use client";
import React, { useState } from "react";
import ShimmerText from "@/components/kokonutui/shimmer-text";

const VisionMissionScroll = () => {
  const [active, setActive] = useState<"vision" | "mission">("vision");

  return (
    <div className="rounded-[10px] bg-[#1A1F3D] text-white p-6 md:p-10">
      <div className="flex items-baseline gap-8 ">
        <button
          type="button"
          onClick={() => setActive("vision")}
          aria-pressed={active === "vision"}
          className={`relative text-4xl md:text-6xl  font-medium cursor-pointer ${active === "vision" ? "opacity-100" : "opacity-80"}`}
        >
          {active === "vision" ? (
            <span>Vision</span>
          ) : (
            <ShimmerText variant="light" text="Vision" className="text-4xl md:text-6xl font-medium" />
          )}
        </button>
        <button
          type="button"
          onClick={() => setActive("mission")}
          aria-pressed={active === "mission"}
          className={`relative text-4xl md:text-6xl font-medium cursor-pointer ${active === "mission" ? "opacity-100" : "opacity-80"}`}
        >
          {active === "mission" ? (
            <span>Mission</span>
          ) : (
            <ShimmerText variant="light" text="Mission" className="text-4xl md:text-6xl font-medium" />
          )}
        </button>
      </div>
      <div className="mt-6 h-[2px] bg-white/60" />
      {active === "vision" ? (
        <p className="mt-6  text-[16px] md:text-[18px] leading-[1.6]">
         To be recognized as a trusted technology partner delivering sustainable digital transformation through innovation, reliability, and responsible execution.
        </p>
      ) : (
        <p className="mt-6 max-w-[800px] text-[16px] md:text-[18px] leading-[1.6]">
         To provide high-performance IT and IT-enabled services that enable enterprises to scale intelligently, foster enduring partnerships, and advance industry progress through continuous improvement.
        </p>
      )}
    </div>
  );
};

export default VisionMissionScroll;
