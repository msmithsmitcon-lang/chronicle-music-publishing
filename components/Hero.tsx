import Image from "next/image";
import Link from "next/link";

const heroFeatures = [
  {
    title: "Artists",
    description:
      "A focused home for represented artists, creative voices, and long-term music development.",
  },
  {
    title: "Original Music",
    description:
      "Songs and releases shaped through story, sound, identity, and lasting catalogue value.",
  },
  {
    title: "Releases",
    description:
      "A growing public music layer for listeners, collaborators, and discovery.",
  },
  {
    title: "Creative Development",
    description:
      "Supporting artists from idea to release while building a stronger music future.",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[color:var(--line)]">
      <Image
        src="/assets/hero/hero-studio-dark-gold.jpg"
        alt="Dark premium studio environment for Chronicle Music"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-[0.82] brightness-110"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(212,175,55,0.22),transparent_25rem),linear-gradient(90deg,#0A0A0A_0%,rgba(10,10,10,0.68)_42%,rgba(10,10,10,0.08)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent" />

      <div className="section-shell relative">
        <div className="mx-auto flex min-h-[calc(100vh-5.5rem)] max-w-7xl items-center py-14 lg:py-16">
          <div className="max-w-4xl">
            <p className="eyebrow text-[0.72rem] tracking-[0.26em]">
              Independent music company
            </p>

            <h1 className="brand-heading mt-5 max-w-5xl text-5xl leading-[0.94] text-ivory md:text-7xl lg:text-[6.7rem]">
              Building Music
              <span className="block gold-text">That Lasts.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[color:var(--text-secondary)] md:text-[1.35rem] md:leading-9">
              Chronicle Music is an independent music company developing
              artists, releasing original music, and growing a catalogue for the
              future.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/artists"
                className="border border-[color:var(--gold)] bg-[linear-gradient(135deg,var(--gold-accent),var(--gold))] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-black shadow-[0_18px_55px_var(--glow)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_70px_var(--glow)]"
              >
                Explore Our Artists
              </Link>

              <Link
                href="/catalogue/browse"
                className="border border-[color:var(--line)] bg-white/[0.04] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-ivory transition duration-300 hover:-translate-y-0.5 hover:border-[color:var(--gold)] hover:text-[color:var(--gold-accent)]"
              >
                Discover The Music
              </Link>
            </div>
          </div>
        </div>

        <div className="premium-panel relative z-10 mx-auto mb-[-3rem] grid max-w-7xl gap-0 overflow-hidden md:grid-cols-4">
          {heroFeatures.map((feature) => (
            <div
              key={feature.title}
              className="border-b border-[color:var(--line)] p-5 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold-accent)]">
                {feature.title}
              </p>
              <p className="mt-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

