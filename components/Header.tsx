import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/brand";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/artists", label: "Artists" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[#0A0A0A]/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between md:py-5">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src={brand.logoFull}
            alt="Chronicle Music"
            width={340}
            height={86}
            className="h-20 w-auto max-w-[18rem] object-contain md:h-24 md:max-w-[22rem]"
            priority
          />
        </Link>

        <nav className="flex w-full flex-wrap items-center gap-x-5 gap-y-3 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--text-secondary)] md:w-auto lg:gap-7 lg:text-[0.68rem] lg:tracking-[0.22em]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-2 transition duration-300 hover:text-[color:var(--gold-accent)] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[color:var(--gold-accent)] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/artists"
            className="rounded-full border border-[rgba(200,169,107,0.62)] bg-[linear-gradient(135deg,rgba(212,175,55,0.12),rgba(200,169,107,0.04))] px-4 py-2.5 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-300 hover:border-[color:var(--gold-accent)] hover:bg-[linear-gradient(135deg,rgba(212,175,55,0.22),rgba(200,169,107,0.08))] hover:text-ivory"
          >
            Explore Artists
          </Link>
        </div>
      </div>
    </header>
  );
}


