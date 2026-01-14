import fs from 'fs';
import path from 'path';
import { Metadata } from 'next';
import GalleryGrid from '@/components/gallery-grid';

export const metadata: Metadata = {
  title: "Gallery | Sanjivani Edge",
  description: "Explore our gallery showcasing our team, culture, and events.",
};

export default function GalleryPage() {
  const galleryDir = path.join(process.cwd(), 'public/gallery-page');
  
  let files: string[] = [];
  try {
    files = fs.readdirSync(galleryDir)
      .filter(file => /\.(webp|png|jpg|jpeg)$/i.test(file))
      .sort((a, b) => {
        const numA = parseInt(a.replace(/\D/g, '') || '0');
        const numB = parseInt(b.replace(/\D/g, '') || '0');
        return numA - numB;
      });
  } catch (error) {
    console.error("Error reading gallery directory:", error);
  }

  return (
    <main className="min-h-screen bg-[#F5F5F7] lg:pt-12 pt-12 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1A1F3D] mb-4">
            Gallery<span className="text-[#FF6B5A]">.</span>
          </h1>
          <p className="text-lg text-[#606060] max-w-2xl mx-auto">
            Delivering comprehensive technology solutions across the digital spectrum.
          </p>
        </div>

        {/* Gallery Grid */}
        <GalleryGrid files={files} />
        
        {files.length === 0 && (
            <p className="text-center text-gray-500">No images found in the gallery.</p>
        )}
      </div>
    </main>
  );
}
