import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 bg-zinc-950 text-zinc-200">
      <div className="max-w-6xl grid gap-8 py-12 md:grid-cols-4">
        <div>
          <div className="text-xl font-semibold">Sanjivani Edge</div>
          <p className="mt-3 text-sm text-zinc-400">Rooted in Values. Engineered for the Future.</p>
        </div>
        <div>
          <div className="mb-3 font-medium">Services</div>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li>Software Development</li>
            <li>Cloud Services</li>
            <li>IT Infrastructure</li>
            <li>Cybersecurity</li>
          </ul>
        </div>
        <div>
          <div className="mb-3 font-medium">Quick Links</div>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li><Link href="#industries">Industries</Link></li>
            <li><Link href="#philosophy">Philosophy</Link></li>
            <li><Link href="#capabilities">Capabilities</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-3 font-medium">Contact</div>
          <p className="text-sm text-zinc-400">info@sanjivaniedge.com</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl py-6 text-xs text-zinc-400">© {new Date().getFullYear()} Sanjivani Edge. All rights reserved.</div>
      </div>
    </footer>
  );
}