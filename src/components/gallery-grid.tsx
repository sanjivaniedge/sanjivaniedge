"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface GalleryGridProps {
  files: string[];
}

export default function GalleryGrid({ files }: GalleryGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const showNext = useCallback(() => {
    setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % files.length));
  }, [files.length]);

  const showPrev = useCallback(() => {
    setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + files.length) % files.length));
  }, [files.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, showNext, showPrev]);

  // Determine grid columns based on number of images
  const gridClassName = cn(
    "gap-6 space-y-6 mx-auto",
    files.length === 1 && "flex justify-center max-w-2xl",
    files.length === 2 && "columns-1 md:columns-2 max-w-4xl",
    files.length >= 3 && "columns-1 md:columns-2 lg:columns-3"
  );

  return (
    <>
      <div className={gridClassName}>
        {files.map((file, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="break-inside-avoid relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/20 bg-white cursor-pointer group"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={`/gallery-page/${file}`}
              alt={`Gallery image ${index + 1}`}
              width={800}
              height={600}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                 <span className="text-white bg-black/50 px-3 py-1 rounded-full text-sm backdrop-blur-sm">View</span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-[110] bg-white/10 rounded-full hover:bg-white/20"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white transition-colors z-[110] bg-white/10 rounded-full hover:bg-white/20 hidden md:block"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white transition-colors z-[110] bg-white/10 rounded-full hover:bg-white/20 hidden md:block"
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>

            {/* Main Image Container */}
            <div 
                className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()} 
            >
                <motion.div
                    key={selectedIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative w-full h-full flex items-center justify-center"
                >
                    <Image
                        src={`/gallery-page/${files[selectedIndex]}`}
                        alt={`Gallery image ${selectedIndex + 1}`}
                        fill
                        className="object-contain"
                        sizes="100vw"
                        priority
                    />
                </motion.div>
            </div>
            
            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm z-[110]">
                {selectedIndex + 1} / {files.length}
            </div>

            {/* Mobile Navigation Controls (Bottom) */}
            <div className="md:hidden absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-8 z-[110]">
                 <button
                    onClick={(e) => {
                        e.stopPropagation();
                        showPrev();
                    }}
                    className="p-3 text-white/90 bg-white/10 rounded-full backdrop-blur-sm"
                >
                    <ChevronLeft size={24} />
                </button>
                 <button
                    onClick={(e) => {
                        e.stopPropagation();
                        showNext();
                    }}
                    className="p-3 text-white/90 bg-white/10 rounded-full backdrop-blur-sm"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
