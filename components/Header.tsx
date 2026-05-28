import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/brand";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/artists", label: "Artists" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[#0A0A0A]/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 md:py-5">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src={brand.logoFull}
            alt=""
            width={340}
            height={86}
            className="h-12 w-auto max-w-[13rem] object-contain md:h-14 md:max-w-[17rem]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--text-secondary)] lg:flex">
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
            href="/contact"
            className="border border-[color:var(--gold)] bg-[linear-gradient(135deg,rgba(212,175,55,0.16),rgba(200,169,107,0.05))] px-4 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)] transition duration-300 hover:bg-[color:var(--gold)] hover:text-black"
          >
            Rights Enquiry
          </Link>
        </div>
      </div>
    </header>
  );
}
