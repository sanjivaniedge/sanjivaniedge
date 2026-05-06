import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-12 mb-6  px-4">
      <div className="rounded-[20px] text-white bg-no-repeat bg-cover md:bg-[length:100%_100%] bg-[url('/figma/footer-bg-4e3b73.png')] px-6 py-8 sm:px-8 sm:py-10 md:px-[78px] md:py-[44px]">
        <div className="flex md:flex-row flex-col gap-8 sm:gap-[60px] md:gap-[78px] justify-start">
          <div className="w-full">
            <div className="flex flex-row items-center gap-6">
              <div className="relative w-[140px] h-[60px] md:w-[180px] md:h-[80px] -translate-y-2">
                <Image src="/logo/logo-white.webp" alt="Sanjivani Edge" fill className="object-contain object-left" />
              </div>
              {/* <div className="h-12 w-[1px] bg-white/30"></div> */}
              {/* <div className="flex flex-col justify-center">
                <span className="text-[12px] text-white/80 mb-1">Powered by</span>
                <div className="relative w-[100px] h-[40px] md:w-[120px] md:h-[50px]">
                  <Image src="/logo/logo2-white.webp" alt="Sanjivani Group" fill className="object-contain object-left" />
                </div>
              </div> */}
            </div>
            <p className="mt-6 md:mt-[40px] text-[16px] md:text-[18px] text-white/70">From cooperative fields to global networks, the journey continues. What began as an enterprise of farmers and visionaries now empowers enterprises of coders and creators.</p>
          </div>
          <div className="w-full ">
            <div className="text-[22px] md:text-[32px] font-bold text-center">Services</div>
            <div className="mt-6 md:mt-[56px] grid grid-cols-1 md:grid-cols-2 gap-x-8">
              <ul className="space-y-4 mb-4 md:mb-0 md:space-y-[28px] text-[16px] md:text-[18px] text-white/70">
                <li><Link href="/services/software">Software Development</Link></li>
                <li><Link href="/services/cloud">Cloud Services</Link></li>
                <li><Link href="/services/cybersecurity">Cybersecurity</Link></li>
                <li><Link className="" href="/services/it-infrastructure">IT Infrastructure</Link></li>
              </ul>
              <ul className="space-y-4 md:space-y-[28px] text-[16px] md:text-[18px] text-white/70">
                <li><Link href="/services/emerging">Emerging Technologies</Link></li>
                <li><Link href="/services/consulting">Consulting & Support</Link></li>
                <li><Link href="/services/bpo">BPO Services</Link></li>
                <li><Link href="/services/erp">ERP Services</Link></li>
              </ul>
            </div>
          </div>
          <div className="w-full  ">
            <div className="text-[22px] md:text-[32px] font-bold">Quick Links</div>
            <ul className="mt-6 md:mt-[56px] space-y-4 md:space-y-[29px] text-[16px] md:text-[18px] text-white/70">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/about/leadership">Leadership</Link></li>
              <li><Link href="/blogs">Blogs</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-6 md:mt-[24px] w-full h-px bg-white/30" />
        <div className="mt-6 md:mt-[24px] flex flex-wrap items-center justify-between gap-6 md:gap-[47px]">
          <div className="text-[14px] md:text-[18px] text-white/70">© {new Date().getFullYear()} Sanjivani Edge</div>
          <div className="flex items-center gap-4 md:gap-6">
            <a
              href="https://www.linkedin.com/company/sanjivani-edge"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sanjivani Edge LinkedIn"
              className="text-white/70 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-4 md:gap-[47px] text-[14px] md:text-[18px] text-white/70">
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
