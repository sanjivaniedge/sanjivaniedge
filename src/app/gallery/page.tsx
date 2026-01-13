import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-6xl font-bold text-[#1A1F3D] mb-4">
        Gallery<span className="text-[#FF6B5A]">.</span>
      </h1>
      <p className="text-lg text-[#606060] max-w-2xl text-center mb-8">
        Coming Soon. We are curating our best moments for you.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#0175B2] text-white rounded-lg hover:bg-[#015d8f] transition-colors"
      >
        Back to Home <ArrowUpRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
