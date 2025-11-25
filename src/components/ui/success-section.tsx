"use client";

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
  return (
    <section className="py-10 bg-white relative overflow-hidden max-w-7xl mx-auto">
      {/* Background Decoration - Waves */}
      <div className="flex items-center justify-end gap-6 pb-10">
        <div className="h-px bg-gray-300 w-[490px]"></div>
        <h2 className="text-6xl font-medium text-right"
          style={{
            fontFamily: "Manrope",
            fontWeight: 500,
            fontSize: "64px",
            lineHeight: "1.366em",
            color: "#1A1F3D",
          }}>
          {data.title}
          <span className="text-[#FF6B5A]">.</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl relative z-10">
              <Image
                src={data.image}
                alt={data.imageAlt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
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

            <div className="pl-4">
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
