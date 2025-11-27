"use client";

import { Check } from "lucide-react";

interface StrategicValueSectionProps {
    data: {
        title: string;
        description: string;
        metrics: Array<{
            value: string;
            label: string;
            description?: string;
        }>;
    };
}

export function StrategicValueSection({ data }: StrategicValueSectionProps) {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-center gap-14 mb-16">
                    <div className="hidden md:flex justify-start  h-[2px] w-[350px] shrink-0 bg-[color:var(--tile-stroke)]" />

                    <h2
                        className="text-4xl md:text-6xl font-medium text-center ml-[-15vw] md:ml-0"
                        style={{
                            fontFamily: "Manrope",
                            fontWeight: 500,
                            lineHeight: "1.366em",
                            color: "#1A1F3D",
                        }}
                    >
                        {data.title}
                        <span className="text-[#FF6B5A]">.</span>
                    </h2>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {data.metrics.map((item, index) => (
                        <div key={index} className="flex gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <Check className="w-5 h-5 text-gray-600" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-medium text-[#1A1F3D]">
                                    {item.label}
                                </h3>
                                {/* {item.description && (
                                    <p className="text-gray-500 leading-relaxed">
                                        {item.description}
                                    </p>
                                )} */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
