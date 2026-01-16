"use client";

import Image from "next/image";

export default function ClientSection() {
  return (
    <section className="w-full max-w-[1392px] mx-auto px-4 py-16 flex flex-col items-center gap-[72px]">
           {/* Divider */}
        <div className="w-full">
          <Image
            src="/clients/clients-divider.svg"
            alt="Divider"
            width={1392}
            height={4}
            className="w-full h-auto"
          />
        </div>
      {/* Heading */}
      <div className="flex flex-col items-center gap-[72px] w-full">
        <h2 className="text-4xl md:text-[64px] font-medium text-[#1A1F3D] text-center leading-tight">
          Our Valuable Clients.
        </h2>
        
   
      </div>

      {/* Clients Grid */}
      <div className="w-full flex flex-wrap justify-center items-center lg:gap-[72px]">
        <Image
          src="/clients/c1.webp"
          alt="Our Clients"
          width={1200}
          height={50}
          className="lg:w-[300px] w-[150px] lg:h-26"
        />
        
        <Image
          src="/clients/c2.webp"
          alt="Our Clients"
          width={300}
          height={50}
          className="lg:w-[300px] w-[150px] lg:h-30"
        />
      </div>
      
    </section>
  );
}
