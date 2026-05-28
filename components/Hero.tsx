import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/brand";

const heroFeatures = [
  "Rights Management",
  "Catalogue Administration",
  "Royalty Readiness",
  "Sync Licensing",
  "Creator First",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[color:var(--line)]">
      <Image
        src="/assets/hero/hero-studio-dark-gold.jpg"
        alt="Dark premium studio environment for Chronicle Music Publishing"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-[0.52]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_16%,rgba(212,175,55,0.18),transparent_24rem),linear-gradient(90deg,#0A0A0A_0%,rgba(10,10,10,0.88)_39%,rgba(10,10,10,0.3)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0A0A0A] to-transparent" />

      <div className="section-shell relative">
        <div className="mx-auto flex min-h-[calc(100vh-5.5rem)] max-w-7xl items-center py-14 lg:py-16">
          <div className="max-w-3xl">
            <p className="eyebrow">Own the story. Protect the sound.</p>
            <h1 className="brand-heading mt-5 max-w-4xl text-5xl leading-[0.98] text-ivory md:text-7xl lg:text-8xl">
              We Build Legacies. <span className="gold-text">You Make History.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--text-secondary)] md:text-xl">
              Chronicle Music Publishing represents and administers musical
              works, catalogues, songwriters, artists, producers, and rights
              owners through professional rights management, licensing, metadata,
              and publishing administration.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/#rights"
                className="border border-[color:var(--gold)] bg-[linear-gradient(135deg,var(--gold-accent),var(--gold))] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-black shadow-[0_18px_55px_var(--glow)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_70px_var(--glow)]"
              >
                Our Services
              </Link>
              <Link
                href="/catalogue"
                className="border border-[color:var(--line)] bg-white/[0.03] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-ivory transition duration-300 hover:-translate-y-0.5 hover:border-[color:var(--gold)] hover:text-[color:var(--gold-accent)]"
              >
                Browse Catalogue
              </Link>
            </div>
          </div>
          <Image
            src={brand.logoMark}
            alt=""
            width={220}
            height={220}
            className="pointer-events-none absolute right-[7%] top-24 hidden h-40 w-40 object-contain opacity-80 drop-shadow-[0_0_50px_rgba(212,175,55,0.42)] lg:block"
          />
        </div>

        <div className="premium-panel relative z-10 mx-auto mb-[-3rem] grid max-w-7xl gap-0 overflow-hidden md:grid-cols-5">
          {heroFeatures.map((feature) => (
            <div
              key={feature}
              className="border-b border-[color:var(--line)] p-5 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--gold-accent)]">
                {feature}
              </p>
              <p className="mt-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                Built for professional rights conversations and catalogue
                stewardship.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
