"use client";

import { ZoomParallax } from "@/components/ui/zoom-parallx";
import { EdgeLinkButton } from "@/components/ui/edge-link-button";

export default function ParallaxShowcase() {
  const images = [
       {
      src: "/gallery/modiji.webp",
      alt: "PM Modi",
    },
    {
      src: "/gallery/all.webp",
      alt: "All Team",
    },
 
    {
      src: "/gallery/amit.webp",
      alt: "Amit Shah",
    },
    {
      src: "/gallery/fadnavish.webp",
      alt: "Devendra Fadnavis",
    },
    // {
    //   src: "/gallery/shivaji.webp",
    //   alt: "Chhatrapati Shivaji Maharaj",
    // },
    // {
    //   src: "/gallery/shantam.webp",
    //   alt: "Shantam",
    // },
    {
      src: "/gallery/flowersall.webp",
      alt: "Flowers",
    },
  ];

  return (
    <section className="w-full bg-[#F5F5F7]">
      <div className="container mx-auto px-4 pt-20 pb-12 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-[#1A1F3D] mb-4">
          Gallery<span className="text-[#FF6B5A]">.</span>
        </h2>
        <p className="text-lg text-[#606060] max-w-2xl mx-auto mb-8">
          Delivering comprehensive technology solutions across the digital spectrum.
        </p>
        <div className="flex justify-center ">
            <EdgeLinkButton href="/gallery" className="bg-transparent border-[#0175B2] text-[#0175B2] hover:bg-[#0175B2] hover:text-white transition-colors">
                View All Gallery
            </EdgeLinkButton>
        </div>
       
      </div>
      <ZoomParallax images={images} />
       <div className="flex justify-center py-10">
            <EdgeLinkButton href="/gallery" className="bg-transparent border-[#0175B2] text-[#0175B2] hover:bg-[#0175B2] hover:text-white transition-colors">
                View All Gallery
            </EdgeLinkButton>
        </div>
    </section>
  );
}
