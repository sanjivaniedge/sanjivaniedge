"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
  className?: string;
}

export function TableOfContents({ headings, className }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -80% 0px" }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <div className={cn("p-6 bg-[#F8FAFC] rounded-2xl border border-gray-100", className)}>
      <h3 className="text-lg font-bold text-[#1A1F3D] mb-4 uppercase tracking-wider text-sm">
        Table of Contents
      </h3>
      <nav className="space-y-1">
        {headings.map((heading) => (
          <Link
            key={heading.id}
            href={`#${heading.id}`}
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById(heading.id);
              if (element) {
                const y = element.getBoundingClientRect().top + window.scrollY - 100; // Offset for header
                window.scrollTo({ top: y, behavior: 'smooth' });
                setActiveId(heading.id);
                // Update URL without jump
                window.history.pushState(null, '', `#${heading.id}`);
              }
            }}
            className={cn(
              "block text-sm py-1.5 transition-colors border-l-2 pl-4",
              activeId === heading.id
                ? "border-[#0175B2] text-[#0175B2] font-medium"
                : "border-transparent text-[#606060] hover:text-[#0175B2] hover:border-[#0175B2]/30",
              heading.level === 1 && "font-bold",
              heading.level === 2 && "ml-0",
              heading.level === 3 && "ml-4",
              heading.level >= 4 && "ml-6"
            )}
          >
            {heading.text}
          </Link>
        ))}
      </nav>
    </div>
  );
}
