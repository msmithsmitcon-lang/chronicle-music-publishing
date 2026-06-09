import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HueyDCollection } from "@/components/HueyDCollection";
import { getArtistProfile } from "@/lib/artists";

const artist = getArtistProfile("huey-d");

export const metadata: Metadata = {
  title: "Huey-D",
  description:
    "Huey-D is presented as a DJ and producer profile within the Chronicle Music Publishing creative ecosystem.",
};

export default function HueyDArtistPage() {
  if (!artist) {
    notFound();
  }

  return (
    <main>
      <section className="section-shell py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="cinematic-panel p-6 md:p-8">
            <p className="eyebrow">DJ and producer profile</p>
            <h1 className="brand-heading mt-4 text-5xl leading-tight text-ivory md:text-7xl">
              {artist.name}
            </h1>
            <p className="mt-5 text-lg leading-8 text-[color:var(--text-secondary)]">
              {artist.descriptor}
            </p>
            <p className="mt-6 text-sm leading-7 text-[color:var(--text-secondary)]">
              {artist.biography}
            </p>
            <p className="mt-8 rounded-full border border-[color:var(--line)] bg-black/25 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--text-secondary)]">
              {artist.streamingNote}
            </p>
          </div>

          <div className="cinematic-panel relative min-h-96 overflow-hidden">
            <Image
              src={artist.image ?? "/assets/shared/chronicle-placeholder-cover.jpg"}
              alt={`${artist.name} profile artwork`}
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover object-[58%_42%] brightness-90 contrast-110 saturate-95"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.32),rgba(10,10,10,0.02)_48%,rgba(10,10,10,0.52)),linear-gradient(180deg,transparent,rgba(10,10,10,0.68))]" />
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      <HueyDCollection />

      <section className="section-shell pb-14 md:pb-16">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1fr_0.9fr]">
          <section className="cinematic-panel p-6 md:p-8">
            <p className="eyebrow">Production Context</p>
            <h2 className="brand-heading mt-3 text-3xl text-ivory md:text-4xl">
              Artist development and producer identity
            </h2>
            <div className="mt-6 grid gap-3 text-sm leading-7 text-[color:var(--text-secondary)]">
              {artist.publishingFocus.map((item) => (
                <p key={item}>+ {item}</p>
              ))}
            </div>
          </section>

          <aside className="grid gap-5">
            <section className="premium-panel p-6">
              <p className="eyebrow">Profile Notes</p>
              <div className="mt-5 grid gap-3 text-sm text-[color:var(--text-secondary)]">
                {Object.entries(artist.metadata).map(([key, value]) => (
                  <div
                    key={key}
                    className="rounded-[0.85rem] border border-[color:var(--line)] bg-black/30 p-4"
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
              className="rounded-full border border-[color:var(--gold)] bg-[linear-gradient(135deg,var(--gold-accent),var(--gold))] px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-black shadow-[0_18px_55px_var(--glow)] transition hover:-translate-y-0.5"
            >
              Publishing / Production Discussion
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
