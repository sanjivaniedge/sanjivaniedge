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
        <Image
          src="/clients/c3.webp"
          alt="Client 3"
          width={300}
          height={80}
          className="h-10 md:h-14 lg:h-16 w-auto object-contain"
        />
        <Image
          src="/clients/c4.webp"
          alt="Client 4"
          width={300}
          height={80}
          className="h-10 md:h-14 lg:h-16 w-auto object-contain"
        />
        <Image
          src="/clients/c5.webp"
          alt="Client 5"
          width={300}
          height={80}
          className="h-10 md:h-14 lg:h-16 w-auto object-contain"
        />
        <Image
          src="/clients/c6.webp"
          alt="Client 6"
          width={300}
          height={80}
          className="h-10 md:h-14 lg:h-16 w-auto object-contain"
        />
        <Image
          src="/clients/c7.webp"
          alt="Client 7"
          width={300}
          height={80}
          className="h-10 md:h-14 lg:h-16 w-auto object-contain"
        />
      </div>
      
    </section>
  );
}
