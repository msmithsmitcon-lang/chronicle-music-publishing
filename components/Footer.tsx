import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--line)] bg-[#0A0A0A]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 text-sm text-stone-400 sm:px-5 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:gap-10 md:py-12">
        <div>
          <Image
            src={brand.logoFull}
            alt=""
            width={340}
            height={86}
            className="h-12 w-auto max-w-[14rem] object-contain sm:h-14 sm:max-w-none"
          />
          <p className="brand-heading text-xl text-ivory">{brand.name}</p>
          <p className="mt-2 max-w-xl text-[color:var(--text-secondary)]">
            {brand.tagline}
          </p>
        </div>
        <div>
          <p className="eyebrow">Company</p>
          <div className="mt-5 grid gap-3 text-xs font-semibold uppercase tracking-[0.18em]">
            <Link
              href="/"
              className="transition hover:text-[color:var(--gold-accent)]"
            >
              Home
            </Link>
            <Link
              href="/artists"
              className="transition hover:text-[color:var(--gold-accent)]"
            >
              Artists
            </Link>
            <Link
              href="/catalogue/browse"
              className="transition hover:text-[color:var(--gold-accent)]"
            >
              Catalogue
            </Link>
            <Link
              href="/contact"
              className="transition hover:text-[color:var(--gold-accent)]"
            >
              Contact
            </Link>
            <Link
              href="/resources"
              className="transition hover:text-[color:var(--gold-accent)]"
            >
              Resources
            </Link>
          </div>
        </div>
        <div>
          <p className="eyebrow">Publishing</p>
          <div className="mt-5 grid gap-3 text-[color:var(--text-secondary)]">
            <p>Rights administration</p>
            <p>Catalogue licensing</p>
            <p>Royalty/admin readiness</p>
          </div>
        </div>
      </div>
      <div className="border-t border-[color:var(--line)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-[0.68rem] uppercase tracking-[0.13em] text-[color:var(--text-secondary)] sm:px-5 sm:text-xs sm:tracking-[0.16em] md:flex-row md:items-center md:justify-between">
          <p>{brand.name}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              href="/artists"
              className="transition hover:text-[color:var(--gold-accent)]"
            >
              Artists
            </Link>
            <Link
              href="/catalogue/browse"
              className="transition hover:text-[color:var(--gold-accent)]"
            >
              Catalogue
            </Link>
            <Link
              href="/resources"
              className="transition hover:text-[color:var(--gold-accent)]"
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="transition hover:text-[color:var(--gold-accent)]"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
