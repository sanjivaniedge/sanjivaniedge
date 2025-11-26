import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-12 mb-6  px-4">
      <div className="rounded-[20px] text-white bg-no-repeat bg-cover md:bg-[length:100%_100%] bg-[url('/figma/footer-bg-4e3b73.png')] px-6 py-8 sm:px-8 sm:py-10 md:px-[78px] md:py-[44px]">
        <div className="flex md:flex-row flex-col gap-8 sm:gap-[60px] md:gap-[78px] justify-start">
          <div className="w-full   ">
            <div className="md:w-[250px] w-[200px] h-[111px] relative">
              <Image src="/logo/logo-white.webp" alt="Sanjivani Edge" fill className="object-contain" />
            </div>
            <p className="mt-6 md:mt-[56px] text-[16px] md:text-[18px] text-white/70">From cooperative fields to global networks, the journey continues. What began as an enterprise of farmers and visionaries now empowers enterprises of coders and creators.</p>
          </div>
          <div className="w-full ">
            <div className="text-[22px] md:text-[32px] font-bold">Services</div>
            <ul className="mt-6 md:mt-[56px] space-y-4 md:space-y-[28px] text-[16px] md:text-[18px] text-white/70">
              <li>ERP Solutions</li>
              <li>Digital Projects</li>
              <li>Cyber Security</li>
              <li>Staff Augmentation</li>
            </ul>
          </div>
          <div className="w-full  ">
            <div className="text-[22px] md:text-[32px] font-bold">Quick Links</div>
            <ul className="mt-6 md:mt-[56px] space-y-4 md:space-y-[29px] text-[16px] md:text-[18px] text-white/70">
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-6 md:mt-[24px] w-full h-px bg-white/30" />
        <div className="mt-6 md:mt-[24px] flex flex-wrap items-center justify-between gap-6 md:gap-[47px]">
          <div className="text-[14px] md:text-[18px] text-white/70">© {new Date().getFullYear()} Sanjivani Edge</div>
          <div className="flex flex-wrap items-center gap-4 md:gap-[47px] text-[14px] md:text-[18px] text-white/70">
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}