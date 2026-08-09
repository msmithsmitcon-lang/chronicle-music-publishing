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
      <section className="section-shell py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="cinematic-panel p-6 md:p-8">
            <p className="eyebrow">Artist Profile</p>
            <h1 className="brand-heading mt-4 text-5xl leading-tight text-ivory md:text-7xl">
              {artist.name}
            </h1>
            <p className="mt-5 text-lg leading-8 text-[color:var(--text-secondary)]">
              {artist.descriptor}
            </p>
            <p className="mt-6 text-sm leading-7 text-[color:var(--text-secondary)]">
              {artist.biography}
            </p>
            <p className="mt-8 border border-[color:var(--line)] px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--text-secondary)]">
              {artist.streamingNote}
            </p>
          </div>

          <div className="cinematic-panel relative min-h-96 overflow-hidden">
            {artist.image ? (
              <div className="grid h-full min-h-96 place-items-center bg-[radial-gradient(circle_at_50%_28%,rgba(212,175,55,0.22),transparent_18rem),#0A0A0A] p-10">
                <Image
                  src={artist.image}
                  alt={`${artist.name} profile image`}
                  width={280}
                  height={280}
                  className="h-44 w-44 object-contain opacity-95 md:h-56 md:w-56"
                />
              </div>
            ) : (
              <div className="grid h-full min-h-96 place-items-center bg-[radial-gradient(circle_at_50%_28%,rgba(212,175,55,0.22),transparent_18rem),#0A0A0A]">
                <Image
                  src={brand.logoMark}
                  alt=""
                  width={180}
                  height={180}
                  className="h-36 w-36 object-contain opacity-85 md:h-44 md:w-44"
                />
              </div>
            )}
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
                  Works under publishing review
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
