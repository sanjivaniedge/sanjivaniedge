"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

interface CapabilityItem {
  title: string;
  description: string;
  image: string;
  tools?: string | string[];
}

interface CapabilitiesAccordionProps {
  features: CapabilityItem[];
}

export function CapabilitiesAccordion({ features }: CapabilitiesAccordionProps) {
  const [activeTabId, setActiveTabId] = useState<number | null>(0);
  const [activeImage, setActiveImage] = useState(features[0]?.image || "");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center gap-14 mb-16">
          <h2
            className="text-4xl md:text-6xl font-medium text-right"
            style={{
              fontFamily: "Manrope",
              fontWeight: 500,
              // fontSize: "40px",
              lineHeight: "1.366em",
              color: "#1A1F3D",
            }}
          >
            Capabilities
             <span className="text-[#FF6B5A]">.</span>
          </h2>
          
          <div className="flex-1 h-1 bg-gray-200"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start cursor-pointer">
          <div className="space-y-10">
            <Accordion
              type="single"
              className="w-full space-y-4 cursor-pointer"
              defaultValue="item-0"
              onValueChange={(value) => {
                if (value) {
                  const id = parseInt(value.split("-")[1]);
                  setActiveTabId(id);
                  setActiveImage(features[id].image);
                }
              }}
            >
              {features.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-none cursor-pointer rounded-lg px-6 py-2 data-[state=open]:bg-[#F4F6F8] transition-colors duration-200"
                >
                  <AccordionTrigger
                    className="hover:no-underline py-4 cursor-pointer"
                    onClick={() => {
                      setActiveImage(item.image);
                      setActiveTabId(index);
                    }}
                  >
                    <div className="flex justify-between items-center w-full pr-4">
                      <h3
                        className="text-2xl font-medium text-left cursor-pointer"
                        style={{
                          fontFamily: "Manrope",
                          fontWeight: 500,
                          fontSize: "24px",
                          lineHeight: "1.366em",
                          color: "#1A1F3D",
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-2 pb-4">
                      <p
                        className="text-lg text-gray-800 mb-6"
                        style={{
                          fontFamily: "Manrope",
                          fontWeight: 500,
                          fontSize: "16px",
                          lineHeight: "1.6em",
                        }}
                      >
                        {item.description}
                      </p>

                   
                      {item.tools && (
                        <div className=" text-gray-700 text-lg">
                          <span className="font-semibold text-black text-lg">Tools: </span>
                          {Array.isArray(item.tools)
                            ? item.tools.join(", ")
                            : item.tools}
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <button className="bg-[#FF6B5A] text-white px-8 py-3 rounded-md flex items-center gap-3 hover:bg-[#e55a4a] transition-colors mt-8">
              CONNECT WITH US
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>

          <div className="relative h-[600px] w-full hidden lg:block rounded-lg overflow-hidden shadow-lg">
            {activeImage && (
              <Image
                src={activeImage}
                alt="Capability Preview"
                fill
                className="object-cover transition-opacity duration-500"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
