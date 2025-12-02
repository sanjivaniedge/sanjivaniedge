import LegacySection from "@/components/ui/legacy-section";
import ScrollVelocity from "@/components/ui/scroll-velocity";
import VisionMissionScroll from "@/components/VisionMissionScroll";
import Image from "next/image";

export default function AboutPage() {
  const principles = [
    {
      title: "Integrity As Infrastructure",
      desc: "Every engagement is governed by transparency and accountability.",
    },
    {
      title: "Innovation with Intention",
      desc: "Technology designed not just to disrupt, but to deliver lasting value.",
    },
    {
      title: "Client Centricity",
      desc: "Alignment with client goals, clarity in execution, and commitment to outcomes.",
    },
    {
      title: "Responsiveness",
      desc: "Agile structures and adaptive teams built for dynamic business environments.",
    },
    {
      title: "Social Responsibility",
      desc: "Growth that extends beyond profit to purpose and people.",
    },
  ];
  const velocity = 80;

  return (
    <main className="bg-white mx-auto max-w-6xl">
      {/* Hero */}
      <section className="px-4">
        <div className="">
          <div className="relative overflow-hidden rounded-[20px] h-auto">

            <div className="relative z-10 px-[24px] md:px-0 py-10 md:py-12">
              <div className="mx-auto max-w-7xl">
                <h1 className="text-[40px] md:text-[64px] font-bold leading-[1.366] text-[#1A1F3D]">
                  Legacy of Purpose<span className="text-[#FF6B5A]">.</span><span className="text-[#17ABD6]">.<span className="text-[#0075B1]">.</span></span>
                  <br />
                  Language of Progress<span className="text-[#FF6B5A]">.</span><span className="text-[#17ABD6]">.<span className="text-[#0075B1]">.</span></span>
                </h1>
                <p className="mt-[24px] text-[16px] md:text-[18px] font-medium leading-[1.6] text-[#606060] max-w-[900px]">
                  Sanjivani Edge is where six decades of trust meet the precision of modern technology — a convergence of experience, ethics, and enterprise transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative visual */}
      <section className="px-4">
        <div className="">
          <div className="relative h-[260px] md:h-[380px] w-full overflow-hidden rounded-[10px] shadow-[0px_10px_0px_0px_rgba(1,117,178,1)]">
            <Image src="/Images/about-banner.webp" alt="Decor" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="px-4 py-24">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-full w-full overflow-hidden rounded-[10px]">
            <Image src="/Images/who-about.webp" alt="Who We Are" fill className="object-cover" />
          </div>
          <div className="rounded-[10px] border border-[color:var(--tile-stroke)] bg-[#E8E4F34D] p-10">
            <h2 className="text-4xl md:text-6xl font-semibold text-[#1A1F3D]">Who We Are</h2>
            <p className="mt-4 text-[#606060] text-[16px] md:text-[18px] leading-[1.6]">
              Sanjivani Edge is the technology and workforce solutions division of the Sanjivani Group, a 60-year-old enterprise known for its contribution to India’s industrial, educational, and social growth.
              <br /><br />
              Rooted in a legacy of collaboration and integrity, Sanjivani Edge extends the Group’s vision into the digital era — empowering organizations through ERP modernization, digital engineering, cybersecurity, and workforce transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Belief strip */}
      <section className="px-4 py-4">
        <div className=" rounded-[10px] bg-[#E8E4F34D] border border-[color:var(--tile-stroke)] p-6 text-center">
          <div className="text-[32px] font-semibold text-[#1A1F3D]">The company operates on a <span className="text-[#FF6B5A]">simple belief:</span></div>
          <div className="mt-1 text-[18px] font-medium text-[#606060]">Technology is most powerful when it carries the discipline of ethics and the intent of progress.</div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="px-4 py-12">
        <VisionMissionScroll />
      </section>

      {/* Core Principles */}
      <section
        className="px-4 py-12 "
      >
        <div className=" rounded-[10px] px-4 py-20 text-white 
    bg-[linear-gradient(rgba(26,31,61,0.8),rgba(26,31,61,0.85)),url('/Images/who-about.webp')]
    bg-cover bg-center bg-no-repeat">
          <h3 className="text-4xl md:text-6xl font-medium text-center">
            Our Core Principles<span className="text-[#FF6B5A]">.</span><span className="text-[#17ABD6]">.<span className="text-[#0075B1]">.</span></span>
          </h3>

          <div className="mt-10  flex flex-wrap justify-center gap-4 mb-10">
            {principles.map((item, i) => (
              <div
                key={i}
                className="w-full md:w-[380px] rounded-xl bg-white text-[#0175B2] p-6 shadow-sm"
              >
                <div className="text-lg font-semibold mb-10">{item.title}</div>
                <div className="mt-2 text-black text-base font-medium">{item.desc}</div>
              </div>
            ))}
          </div>



          <p className="mt-3 text-white/80 text-center">
            These principles form the foundation of Sanjivani Edge’s operating model — a structure that balances human insight with digital precision.
          </p>
        </div>
      </section>

      {/* Legacy section */}
      <section className="px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <h3 className="text-4xl md:text-6xl font-medium mb-10">
            The Sanjivani Legacy<span className="text-[#FF6B5A]">.</span><span className="text-[#17ABD6]">.<span className="text-[#0075B1]">.</span></span>
          </h3>
          <div className="hidden md:flex h-px flex-1 bg-[color:var(--tile-stroke)]" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 items-start">
          <div className="rounded-[10px] bg-[#0175B2] text-white md:p-16 p-8">
            <p className="text-[16px] md:text-[18px] leading-[1.6]">
              For over six decades, the Sanjivani Group has been a name synonymous with trust, resilience, and progress.
              <br /><br />
              From rural cooperatives to modern industries in sugar, energy, chemicals, dairy, and education, the Group has continuously evolved while remaining true to its founding ethos — uplifting communities through enterprise.
              <br /><br />
              Sanjivani Edge continues this lineage, applying the same principles of governance, collaboration, and growth to the realm of digital transformation.
            </p>
          </div>

          <div className="relative h-full w-full overflow-hidden rounded-[10px]">
            <Image src="/Images/about-legacy.webp" alt="Legacy" fill className="object-cover" />
          </div>
        </div>

      </section>

      {/* Leadership */}
      {/* <section className="px-4 py-12">
        <div>
          <h3 className="text-4xl md:text-6xl font-medium  md:text-left text-center  text-[#1A1F3D]">
            Leadership<span className="text-[#FF6B5A]">.</span><span className="text-[#17ABD6]">.<span className="text-[#0075B1]">.</span></span>
          </h3>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Vivekbhaiya Kolhe",
                role: "Chairman, Sanjivani Group",
                image: "/Images/t-shantam.webp",
              },
              {
                name: "Shantham Shukla",
                role: "Director, Sanjivani Edge",
                image: "/Images/t-shantam.webp",
              },
              {
                name: "Shekhar Shukla",
                role: "Director, Sanjivani Edge",
                image: "/Images/t-shantam.webp",
              },
            ].map((p, i) => (
              <div
                key={p.name + "-" + i}
                className="rounded-[10px] overflow-hidden relative"
              >
               
                <div className="relative h-[420px] w-full">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover"
                  />
                </div>

              
                <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-md">
                  <div className="text-[#1A1F3D] font-medium text-lg">{p.name}</div>
                  <div className="text-[#606060] text-sm">{p.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Ethos CTA */}
      <section className="px-4 md:py-12">
        <LegacySection
          title="The Sanjivani Ethos."
          paragraphs={[
            "Sanjivani Edge believes that progress is not a product — it is a practice.",
            (<>
              <span className="font-medium text-[#1A1F3D]">   Every partnership, process, and platform reflects this principle. <br /><br /></span>{" "}


              Built on trust, refined through innovation,
              and executed with precision —

              Sanjivani Edge is not just an IT services company;
              it is a commitment to responsible transformation
            </>),
          ]}
          ctaHref="/legacy"
          ctaLabel="Contact With Us"
        />

      </section>

      {/* Marquee */}
      <section className="px-4 pt-12">
        <ScrollVelocity
          texts={[' SANJIVANI-EDGE ', '']}
          velocity={velocity}
          className="custom-scroll-text opacity-20"
        />

      </section>
    </main>
  );
}
