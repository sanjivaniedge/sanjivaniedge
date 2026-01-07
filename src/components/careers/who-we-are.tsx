import Image from "next/image";
import ScrollVelocity from "../ui/scroll-velocity";

export function WhoWeAre() {
  const velocity = 50;

  return (
    <section className="w-full">
      {/* Blue Banner */}
      <div className="bg-[#0175B2] text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-4xl font-semibold leading-tight">
            The company operates on a simple belief:
          </h2>
          <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed">
            Technology is most powerful when it carries the discipline of ethics and the intent of progress.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-[#F9F7FC] py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left: Image */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/figma/who-we-are.png"
              alt="Team collaborating at Sanjivani Edge"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-[#1A1F3D]">
              Who We Are<span className="text-[#FF6B5A]">.</span>
            </h2>
            <div className="space-y-6 text-lg text-[#606060] leading-relaxed">
              <p>
                Sanjivani Edge is the technology and workforce solutions division of the Sanjivani Group, a <span className="font-semibold text-[#1A1F3D]">60-year-old</span> enterprise known for its contribution to India's industrial, educational, and social growth.
              </p>
              <p>
                Rooted in a legacy of collaboration and integrity, Sanjivani Edge extends the Group's vision into the digital era — empowering organizations through ERP modernization, digital engineering, cybersecurity, and workforce transformation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
            <section className="px-4 pt-12">
              <ScrollVelocity
                texts={[' SANJIVANI-EDGE ', '']}
                velocity={velocity}
                className="custom-scroll-text opacity-20"
              />
      
            </section>
    </section>
  );
}
