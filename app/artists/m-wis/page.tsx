import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArtistCatalogue, getArtistProfile } from "@/lib/artists";
import { brand } from "@/lib/brand";

const artist = getArtistProfile("m-wis");

export const metadata: Metadata = {
  title: "M-WIS",
  description:
    "M-WIS is a represented artist within Chronicle Music Publishing.",
};

export default function MWisArtistPage() {
  if (!artist) {
    notFound();
  }

  const selectedCatalogue = getArtistCatalogue(artist.name);

  return (
    <main>
      <section className="relative min-h-[72vh] overflow-hidden border-b border-[color:var(--line)]">
        <Image
          src="/assets/chronicle-sections/studio-control-room.png"
          alt="M-WIS in the Chronicle studio environment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.94)_0%,rgba(5,5,5,0.78)_34%,rgba(5,5,5,0.28)_68%,rgba(5,5,5,0.58)_100%),linear-gradient(180deg,rgba(5,5,5,0.18)_0%,rgba(5,5,5,0.28)_52%,#0A0A0A_100%)]" />

        <div className="section-shell relative z-10 flex min-h-[72vh] items-center py-16 md:py-20">
          <div className="max-w-2xl">
            <p className="eyebrow">Sonic Project</p>
            <h1 className="brand-heading mt-4 text-[clamp(3.1rem,5.3vw,5.25rem)] leading-[0.98] text-ivory uppercase">
              {artist.name}
            </h1>
            <p className="mt-5 max-w-xl text-[0.98rem] leading-[1.75] text-[color:var(--text-secondary)]">
              {artist.descriptor}
            </p>
            <p className="mt-6 max-w-xl text-sm leading-7 text-[color:var(--text-secondary)]">
              {artist.biography}
            </p>
            <p className="mt-8 max-w-xl border border-[color:var(--line)] bg-black/35 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--text-secondary)]">
              {artist.streamingNote}
            </p>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      <section className="section-shell py-14 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="eyebrow">Selected Catalogue</p>
                <h2 className="brand-heading mt-3 text-3xl text-ivory md:text-4xl">
                  Selected represented works
                </h2>
              </div>
              <Link
                href="/catalogue"
                className="hidden rounded-full border border-[color:var(--gold)] bg-[linear-gradient(135deg,rgba(212,175,55,0.1),rgba(0,0,0,0.24))] px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--gold-accent)] transition hover:border-[color:var(--gold-accent)] hover:bg-[linear-gradient(135deg,rgba(212,175,55,0.18),rgba(0,0,0,0.3))] hover:text-ivory md:inline-flex"
              >
                View Catalogue
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {selectedCatalogue.map((item) => (
                <article
                  key={item.title}
                  className="premium-panel overflow-hidden p-0"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.coverImage ?? item.artwork}
                      alt={`${item.title} catalogue artwork`}
                      fill
                      sizes="(min-width: 768px) 35vw, 100vw"
                      className="object-contain p-8"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.05),rgba(10,10,10,0.78))]" />
                  </div>
                  <div className="p-5">
                    <h3 className="brand-heading text-2xl text-ivory">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[color:var(--text-secondary)]">
                      {item.genre}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="grid gap-5">
            <section className="cinematic-panel p-6">
              <p className="eyebrow">Publishing Representation</p>
              <h2 className="brand-heading mt-3 text-3xl text-ivory">
                Representation and rights context
              </h2>
              <div className="mt-5 grid gap-3 text-sm leading-7 text-[color:var(--text-secondary)]">
                {artist.publishingFocus.map((item) => (
                  <p key={item}>+ {item}</p>
                ))}
              </div>
            </section>

            <section className="premium-panel p-6">
              <p className="eyebrow">Rights Notes</p>
              <div className="mt-5 grid gap-3 text-sm text-[color:var(--text-secondary)]">
                {Object.entries(artist.metadata).map(([key, value]) => (
                  <div
                    key={key}
                    className="border border-[color:var(--line)] bg-black/30 p-4"
                  >
                    <span className="block text-xs uppercase tracking-[0.16em] text-stone-500">
                      {key.replace(/([A-Z])/g, " $1")}
                    </span>
                    <span className="mt-2 block text-ivory">{value}</span>
                  </div>
                ))}
              </div>
            </section>

            <Link
              href="/contact"
              className="border border-[color:var(--gold)] bg-[linear-gradient(135deg,var(--gold-accent),var(--gold))] px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-black shadow-[0_18px_55px_var(--glow)] transition hover:-translate-y-0.5"
            >
              Publishing / Licensing Discussion
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}



