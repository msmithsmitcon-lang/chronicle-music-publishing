import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--line)] bg-[#0A0A0A]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 text-sm text-stone-400 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Image
            src={brand.logoFull}
            alt=""
            width={340}
            height={86}
            className="h-14 w-auto object-contain"
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
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs uppercase tracking-[0.16em] text-[color:var(--text-secondary)] md:flex-row md:items-center md:justify-between">
          <p>{brand.name}</p>
          <div className="flex gap-5">
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
