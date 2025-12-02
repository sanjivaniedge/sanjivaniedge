"use client";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Heart } from "lucide-react";
import LegacySection from "@/components/ui/legacy-section";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [registeredAddress, setRegisteredAddress] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; error?: string } | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, organization, email, phone, message, registeredAddress, consent }),
      });
      const json = await res.json();
      setStatus(json);
      if (json?.ok) {
        setName("");
        setOrganization("");
        setEmail("");
        setPhone("");
        setRegisteredAddress("");
        setMessage("");
        setConsent(false);
      }
    } catch (err) {
      setStatus({ ok: false, error: "Network error" });
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <main className="bg-white">
      <section className="px-4">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[20px] h-auto mt-14">
            <div className="">
              <Image src="/Images/contact-banner.webp" alt="Decor Waves" fill className="object-cover " />
            </div>
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 px-[24px] md:px-0 py-12 md:py-0 flex flex-col items-center text-center">
              <div className="mx-auto md:my-[80px] max-w-7xl">
                <h1 className="text-[40px] md:text-[64px] font-bold leading-[1.366] text-white">
                  Let’s Build What’s Next.
                </h1>
                <p className="mt-[24px] text-[16px] md:text-[18px] font-medium leading-[1.6] text-white max-w-[980px] mx-auto">
                  Whether it’s technology, transformation, or talent — every collaboration begins with a conversation.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center py-20  max-w-[1200px] mx-auto">
            <p className="text-[16px] md:text-[18px] font-medium leading-[1.6] text-black mx-auto">
              Sanjivani Edge engages with organizations seeking reliable, future-focused solutions across ERP, digital engineering, cybersecurity, and workforce transformation.
            </p>

            <p className="mt-[24px] text-[16px] md:text-[18px] font-medium leading-[1.6] text-black ">
              Each engagement begins with clarity, confidentiality, and a shared intent to create measurable progress.   </p>

            <p className="mt-[24px] text-[16px] md:text-[18px] font-medium leading-[1.6] text-black ">
              Our teams operate with the precision of process and the warmth of partnership — ensuring every dialogue leads to direction.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-8">

            <div className="hidden md:flex h-px flex-1 bg-[color:var(--tile-stroke)]" />
            <h2 className="text-3xl md:text-6xl font-medium">
              <span className="">Contact Channels</span>
              <span className="text-[#FF6B5A]">.</span><span className="text-[#17ABD6]">.<span className="text-[#0075B1]">.</span></span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-[10px] border border-[color:var(--tile-stroke)] bg-white p-6">
              <h3 className="text-2xl font-medium pb-14 text-[#1A1F3D]">General Inquiries</h3>
              <Link href="mailto:connect@sanjivaniedge.com" className="mt-3 text-[#0175B2] text-lg">connect@sanjivaniedge.com</Link>
              <p className="mt-1 text-[#606060]">For partnerships, collaborations, or enterprise solutions.</p>
            </div>
            <div className="rounded-[10px] border border-[color:var(--tile-stroke)] bg-white p-6">
              <h3 className="text-2xl font-medium pb-14 text-[#1A1F3D]">Business Enquiries</h3>
              <Link href="mailto:business@sanjivaniedge.com" className="mt-3  text-[#0175B2] text-lg">business@sanjivaniedge.com</Link>
              <p className="mt-1 text-[#606060]">For IT, ERP, or digital transformation projects.</p>
            </div>
            <div className="rounded-[10px] border border-[color:var(--tile-stroke)] bg-white p-6">
              <h3 className="text-2xl font-medium pb-14 text-[#1A1F3D]">Careers & Talent</h3>
              <Link href="mailto:careers@sanjivaniedge.com" className="mt-3 text-[#0175B2] text-lg">careers@sanjivaniedge.com</Link>
              <p className="mt-1 text-[#606060]">For opportunities within Sanjivani Edge or staffing engagements.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="rounded-[10px] h-fullflex flex-col justify-center items-center  border border-[color:var(--tile-stroke)] bg-[#E8E4F333] p-6">
            <h3 className="text-4xl font-medium text-[#1A1F3D] ">Office Address</h3>
            <div className="mt-4 text-[#606060] whitespace-pre-line">
              <p className="text-[#0175B2] font-semibold mb-4">
                SANJIVANI EDGE PRIVATE LIMITED
              </p>
              <p className="mb-2 text-2xl font-semibold">
                Corporate Office
              </p>

              <p className="mb-6">
                Trapezoid IT Park, C-27,<br />3rd Floor, Sec-62, Noida-201369
              </p>

              <p className="font-semibold mb-2 text-2xl">Registered Office Address</p>


              <p className="">
                At Khirdi Ganesh, S. No. 88/2,
                Kopergaon, Kopergaon,
                Ahmed Nagar – 423601,
                Maharashtra</p>

            </div>

          </div>
          <div className="relative h-full rounded-[10px] border border-[color:var(--tile-stroke)] overflow-hidden">
            {(() => {
              const officeAddress = "Trapezoid IT Park, C-27, 3rd Floor, Sec-62, Noida-201369";
              const src = `https://www.google.com/maps?q=${encodeURIComponent(officeAddress)}&output=embed`;
              return (
                <iframe
                  title="Office Map"
                  src={src}
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              );
            })()}
          </div>
        </div>
      </section>

      {/* Form & Map Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="rounded-[10px] border border-[color:var(--tile-stroke)] bg-white p-6">
            <h3 className="text-4xl font-medium mb-4 text-[#1A1F3D]">Reach Out to Sanjivani Edge.</h3>
            <p className="mt-2 text-[#606060]">Please share a few details about your requirement or area of interest, and a representative will connect with you.</p>
            <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1">
                <label className="block text-sm font-medium text-[#1A1F3D]">Name <span className="text-[#FF6B5A]">*</span></label>
                <input required value={name} onChange={(e) => setName(e.target.value)} className="mt-2 w-full rounded-md border border-[color:var(--tile-stroke)] bg-[#F4F6F8] px-4 py-3" placeholder="John Doe" />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-[#1A1F3D]">Organization <span className="text-[#FF6B5A]">*</span></label>
                <input required value={organization} onChange={(e) => setOrganization(e.target.value)} className="mt-2 w-full rounded-md border border-[color:var(--tile-stroke)] bg-[#F4F6F8] px-4 py-3" placeholder="Sanjivani Edge" />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-[#1A1F3D]">Email ID <span className="text-[#FF6B5A]">*</span></label>
                <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 w-full rounded-md border border-[color:var(--tile-stroke)] bg-[#F4F6F8] px-4 py-3" placeholder="name@company.com" />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-[#1A1F3D]">Phone No. <span className="text-[#FF6B5A]">*</span></label>
                <input required value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-2 w-full rounded-md border border-[color:var(--tile-stroke)] bg-[#F4F6F8] px-4 py-3" placeholder="+91 98765 43210" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-[#1A1F3D]">Registered Address <span className="text-[#FF6B5A]">*</span></label>
                <textarea required rows={3} value={registeredAddress} onChange={(e) => setRegisteredAddress(e.target.value)} className="mt-2 w-full rounded-md border border-[color:var(--tile-stroke)] bg-[#F4F6F8] px-4 py-3" placeholder="Your company's registered address" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-[#1A1F3D]">Requirement / Message <span className="text-[#FF6B5A]">*</span></label>
                <textarea required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className="mt-2 w-full rounded-md border border-[color:var(--tile-stroke)] bg-[#F4F6F8] px-4 py-3" placeholder="Briefly describe your requirement" />
              </div>
              <div className="md:col-span-2 flex items-center gap-3">
                <input id="consent-2" type="checkbox" required checked={consent} onChange={(e) => setConsent(e.target.checked)} className="h-4 w-4" />
                <label htmlFor="consent-2" className="text-sm text-[#606060]">I consent to being contacted for this inquiry <span className="text-[#FF6B5A]">*</span></label>
              </div>
              <div className="md:col-span-2">
                <button type="submit" disabled={submitting} className="inline-flex items-center gap-2 rounded-[6px] px-6 py-3 text-white disabled:opacity-70"
                  style={{
                    background: "linear-gradient(180deg, rgba(255, 107, 90, 1) 0%, rgba(229, 83, 67, 1) 100%)",
                    border: "1px solid",
                    borderImage: "",
                  }}
                >
                  {submitting ? "Sending..." : "Send Message"}
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              {!!status && (
                <div className="md:col-span-2 text-sm">
                  {status.ok ? (
                    <span className="text-green-600">Your message has been sent.</span>
                  ) : (
                    <span className="text-red-600">{status.error || "Something went wrong."}</span>
                  )}
                </div>
              )}
            </form>
          </div>
          <div className="relative w-full h-full rounded-[10px] border border-[color:var(--tile-stroke)] overflow-hidden shadow-[0px_10px_0px_0px_rgba(1,117,178,1)]">
            <Image src="/Images/contact/form-map-1833f9.png" alt="Map" fill className="object-cover" />
            <div className="absolute inset-0 p-4 md:p-6 flex items-center justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-[90%] max-w-[660px] ">
                <div className="rounded-[10px] bg-white border border-[color:var(--tile-stroke)] p-4 h-[150px]">
                  <div className="flex-1 items-start gap-4">
                    <div className="h-10 w-10 rounded-md mb-4bg-[#F4F6F8] flex items-center justify-center">
                      <Phone className="h-5 w-5 text-[#606060]" />
                    </div>
                    <div>
                      <div className="text-lg font-medium text-[#1A1F3D]">Phone</div>
                      <Link href="tel:+919599120082" className="text-[#606060]">+91 9599120082</Link>
                    </div>
                  </div>
                </div>
                <div className="rounded-[10px] bg-white border border-[color:var(--tile-stroke)] p-4">
                  <div className="flex-1 items-start gap-4">
                    <div className="h-10 w-10 rounded-md mb-4 bg-[#F4F6F8] flex items-center justify-center">
                      <Mail className="h-5 w-5 text-[#606060]" />
                    </div>
                    <div>
                      <div className="text-lg font-medium text-[#1A1F3D]">Email</div>
                      <Link href="mailto:debayan@sanjivaniedge.com" className="text-[#606060]">debayan@sanjivaniedge.com</Link>
                    </div>
                  </div>
                </div>
                <div className="rounded-[10px] bg-white border border-[color:var(--tile-stroke)] p-4">
                  <div className="flex-1 items-start gap-4">
                    <div className="h-10 w-10 rounded-md mb-4 bg-[#F4F6F8] flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-[#606060]" />
                    </div>
                    <div>
                      <div className="text-lg font-medium text-[#1A1F3D]">Address</div>
                      <div className="text-[#606060] whitespace-pre-line">{`Trapezoid IT Park, C-27,\n3rd Floor, Sec-62, Noida-201369`}</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-[10px] bg-white border border-[color:var(--tile-stroke)] p-4">
                  <div className="flex-1 items-start gap-4 ">
                    <div className="h-10 w-10 rounded-md mb-4 bg-[#F4F6F8] flex items-center justify-center">
                      <Heart className="h-5 w-5 text-[#606060] " />
                    </div>
                    <div>
                      <div className="text-lg font-medium text-[#1A1F3D]">Social Media</div>
                      <div className="text-[#606060]">@sanjivaniedge</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LegacySection
          title="Built on Values. Driven by Vision. "
          paragraphs={[
            "",
            (<>
              <span className="font-semibold text-[#1A1F3D]">Sanjivani Edge</span>{" "}
              At Sanjivani Edge, every engagement — however small — begins with intent and integrity. Because progress, when rooted in purpose, creates outcomes that last.
            </>),
          ]}
          ctaHref="/legacy"
          ctaLabel="Discover"
        />
      </section>
    </main>
  );
}
