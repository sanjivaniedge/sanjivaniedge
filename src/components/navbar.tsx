"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  return (
    <header className="w-full bg-white border-b border-[color:var(--tile-stroke)] py-4">
      <div className="max-w-6xl flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo/logo.webp" alt="Sanjivani Edge" width={150} height={150} />
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-sm">
          <Link href="/" className="text-[#FD6858] font-medium">Home</Link>
          <Link href="/about" className="text-foreground hover:text-brand">About Us</Link>
          <div className="relative">
            <button
              className="inline-flex items-center gap-1 text-foreground hover:text-brand"
              onClick={() => setServicesOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
            >
              <Link href="/services" className="hover:text-brand">Services</Link> <ChevronDown className="h-4 w-4" />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 mt-2 w-52 rounded-md border border-[color:var(--tile-stroke)] bg-white shadow-[var(--shadow-soft)]">
                <ul className="py-2 text-sm">
                  <li><Link href="/services" className="block px-3 py-2 hover:text-brand font-medium">All Services</Link></li>
                  <li><Link href="/services/software" className="block px-3 py-2 hover:text-brand">Software Development</Link></li>
                  <li><Link href="/services/cloud" className="block px-3 py-2 hover:text-brand">Cloud Services</Link></li>
                  <li><Link href="/services/infra" className="block px-3 py-2 hover:text-brand">IT Infrastructure</Link></li>
                </ul>
              </div>
            )}
          </div>
          <Link href="/industries" className="text-foreground hover:text-brand">Industries</Link>
          <Link href="/resources" className="text-foreground hover:text-brand">Resources</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="lg:inline-flex hidden text-white items-center gap-2 rounded-md  px-6 py-2 bg-brand"
          >
            GET IN TOUCH <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
          <button
            aria-label="menu"
            className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-[color:var(--tile-stroke)]"
            onClick={() => setOpen(!open)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-[color:var(--tile-stroke)] p-6">
          <div className="container py-3 flex flex-col gap-3 text-sm">
            <Link href="/" className="text-[#FD6858] font-medium">Home</Link>
            <Link href="/about" className="text-foreground">About Us</Link>
            <button className="inline-flex items-center gap-1 text-foreground" onClick={() => setServicesOpen((v) => !v)}>
              Services <ChevronDown className="h-4 w-4" />
            </button>
            {servicesOpen && (
              <div className="pl-4 flex flex-col gap-2">
                <Link href="/services" className="font-medium">All Services</Link>
                <Link href="/services/software">Software Development</Link>
                <Link href="/services/cloud">Cloud Services</Link>
                <Link href="/services/infra">IT Infrastructure</Link>
              </div>
            )}
            <Link href="/industries" className="text-foreground">Industries</Link>
            <Link href="/resources" className="text-foreground">Resources</Link>
            <Button variant="primary" size="sm" className="mt-2 w-full uppercase tracking-wide">
              GET IN TOUCH <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}