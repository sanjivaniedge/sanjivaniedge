"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  const isServicesActive = pathname.startsWith("/services");
  const isAboutActive = pathname.startsWith("/about");
  const activeClass = "text-[#FD6858] font-medium";
  const linkClass = "text-foreground hover:text-brand";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 4);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`sticky top-0 z-50 w-full border-b border-[color:var(--tile-stroke)] py-4 ${scrolled ? "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/logo/logo.webp" 
              alt="Sanjivani Edge" 
              width={150} 
              height={150} 
              className="w-20 h-auto md:w-auto object-contain"
            />
          </Link>
          <div className="flex items-center gap-3 lg:hidden">
            <div className="h-6 w-px bg-gray-300"></div>
            <Image 
              src="/logo/logo2.webp" 
              alt="Sanjivani Group" 
              width={60} 
              height={24} 
              className="object-contain opacity-90" 
            />
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-sm">
          <Link href="/" className={isActive("/") ? activeClass : linkClass}>Home</Link>
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              className={`inline-flex items-center gap-1 ${isActive("/about") ? activeClass : linkClass}`}
              onClick={() => setAboutOpen((v) => !v)}
            >
              <span className={isActive("/about") ? activeClass : linkClass}>Who We Are</span> <ChevronDown className="h-4 w-4" />
            </button>
            {aboutOpen && (
              <div className="absolute left-0 -mt-1 w-40 rounded-md border border-[color:var(--tile-stroke)] bg-white shadow-[var(--shadow-soft)] z-50">
                <ul className="py-2 text-sm">
                  <li><Link href="/about" className="block px-3 py-2 hover:text-brand">About Us</Link></li>
                  <li><Link href="/about/leadership" className="block px-3 py-2 hover:text-brand">Leadership</Link></li>
                </ul>
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`inline-flex items-center gap-1 ${isServicesActive ? activeClass : linkClass}`}
              onClick={() => setServicesOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
            >
              <Link href="/services" className={isServicesActive ? activeClass : linkClass}>Services</Link> <ChevronDown className="h-4 w-4" />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 -mt-1 w-52 rounded-md border border-[color:var(--tile-stroke)] bg-white shadow-[var(--shadow-soft)] z-50">
                <ul className="py-2 text-sm">
                  <li><Link href="/services/software" className="block px-3 py-2 hover:text-brand">Software Development</Link></li>
                  <li><Link href="/services/cloud" className="block px-3 py-2 hover:text-brand">Cloud Services</Link></li>
                  <li><Link href="/services/cybersecurity" className="block px-3 py-2 hover:text-brand">Cyber Security</Link></li>
                  <li><Link href="/services/it-infrastructure" className="block px-3 py-2 hover:text-brand">IT Infrastructure</Link></li>
                  <li><Link href="/services/emerging" className="block px-3 py-2 hover:text-brand">Emerging Technologies</Link></li>
                  <li><Link href="/services/consulting" className="block px-3 py-2 hover:text-brand">Consulting & Support</Link></li>
                  <li><Link href="/services/bpo" className="block px-3 py-2 hover:text-brand">BPO</Link></li>
                  <li><Link href="/services/erp" className="block px-3 py-2 hover:text-brand">ERP Services</Link></li>




                </ul>
              </div>
            )}
          </div>
          <Link
            href="/blogs"
            className={isActive("/blogs") ? activeClass : linkClass}
          >
            Blogs
          </Link>
          <Link
            href="/careers"
            className={isActive("/careers") ? activeClass : linkClass}
          >
            Careers
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="lg:inline-flex hidden text-white items-center gap-2 rounded-md  px-6 py-2 bg-brand"
          >
            GET IN TOUCH <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
          <div className="hidden lg:block ml-4">
             <Image src="/logo/logo2.webp" alt="Sanjivani Edge Logo 2" width={100} height={40} className="object-contain" />
          </div>
          <button
            aria-label="menu"
            className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-[color:var(--tile-stroke)]"
            onClick={() => setOpen(!open)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          </button>
        </div>
      </div>
        {open && (
          <div className="lg:hidden border-t border-[color:var(--tile-stroke)] p-6">
            <div className="container py-3 flex flex-col gap-3 text-sm">
            <Link href="/" className={isActive("/") ? activeClass : "text-foreground"}>Home</Link>
              <button className="inline-flex items-center gap-1 text-foreground" onClick={() => setAboutOpen((v) => !v)}>
                Who We Are <ChevronDown className="h-4 w-4" />
              </button>
              {aboutOpen && (
                 <div className="pl-4 flex flex-col gap-2 z-10">
                   <Link href="/about" className={isActive("/about") ? activeClass : "font-medium"}>About Us</Link>
                   <Link href="/about/leadership" className={pathname === "/about/leadership" ? activeClass : undefined}>Leadership</Link>
                 </div>
              )}
              <button className="inline-flex items-center gap-1 text-foreground" onClick={() => setServicesOpen((v) => !v)}>
                Services <ChevronDown className="h-4 w-4" />
              </button>
              {servicesOpen && (
                <div className="pl-4 flex flex-col gap-2 z-10">
                <Link href="/services" className={isServicesActive ? activeClass : "font-medium"}>All Services</Link>
                <Link href="/services/software" className={pathname === "/services/software" ? activeClass : undefined}>Software Development</Link>
                <Link href="/services/cloud" className={pathname === "/services/cloud" ? activeClass : undefined}>Cloud Services</Link>
                <Link href="/services/cybersecurity" className={pathname === "/services/cybersecurity" ? activeClass : undefined}>Cybersecurity</Link>
                <Link href="/services/it-infrastructure" className={pathname === "/services/it-infrastructure" ? activeClass : undefined}>IT Infrastructure</Link>
                <Link href="/services/emerging" className={pathname === "/services/emerging" ? activeClass : undefined}>Emerging Technologies</Link>
                <Link href="/services/consulting" className={pathname === "/services/consulting" ? activeClass : undefined}>Consulting & Support</Link>
                <Link href="/services/bpo" className={pathname === "/services/bpo" ? activeClass : undefined}>BPO</Link>
                <Link href="/services/erp" className={pathname === "/services/erp" ? activeClass : undefined}>ERP Services</Link>
                </div>
              )}
            <Link
              href="/blogs"
              className={isActive("/blogs") ? activeClass : "text-foreground"}
              onClick={() => setOpen(false)}
            >
              Blogs
            </Link>
            <Link
              href="/careers"
              className={isActive("/careers") ? activeClass : "text-foreground"}
              onClick={() => setOpen(false)}
            >
              Careers
            </Link>
            <Link href="/contact" className={isActive("/contact") ? activeClass : "text-foreground"}>
              <Button variant="primary" size="sm" className="mt-2 w-full uppercase tracking-wide">
                GET IN TOUCH <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            </div>
          </div>
        )}
    </header>
  );
}
