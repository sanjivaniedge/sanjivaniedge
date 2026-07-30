import Image from "next/image";

const certificates = [
  {
    title: "CMMI L3",
    src: encodeURI("/certificates/smmi l3.webp"),
  },
  {
    title: "ISMS Report",
    src: encodeURI("/certificates/isms report.webp"),
  },
  {
    title: "ISO 200000",
    src: encodeURI("/certificates/iso 200000.webp"),
  },
  {
    title: "ISO ISMS",
    src: encodeURI("/certificates/iso isms.webp"),
  },
  {
    title: "ISO IT SMS",
    src: encodeURI("/certificates/iso it sms.webp"),
  },
  {
    title: "ISO QMS",
    src: encodeURI("/certificates/iso qms.webp"),
  },
];

export default function CertificatesSection() {
  return (
    <section className="w-full max-w-[1392px] mx-auto px-4 py-16">
      <div className="w-full">
        <Image
          src="/clients/clients-divider.svg"
          alt="Divider"
          width={1392}
          height={4}
          className="w-full h-auto"
        />
      </div>

      <div className="mt-12 flex flex-col items-center gap-4 text-center">
        <h2 className="text-4xl md:text-[64px] font-medium text-[#1A1F3D] leading-tight">
          Our Certifications.
        </h2>
        <p className="max-w-3xl text-sm md:text-base text-[#556070]">
          Industry-recognized certifications that reflect our standards across
          quality, security, and IT service management.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate) => (
          <div
            key={certificate.src}
            className="rounded-2xl border border-[#E7ECF0] bg-white p-4 shadow-[0_10px_28px_rgba(15,23,42,0.05)]"
          >
            <div className="flex min-h-[156px] items-center justify-center">
              <Image
                src={certificate.src}
                alt={certificate.title}
                width={252}
                height={336}
                className="h-auto max-h-[192px] w-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
