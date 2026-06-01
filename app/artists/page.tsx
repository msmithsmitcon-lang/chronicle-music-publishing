import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { artistProfiles } from "@/lib/artists";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Artists",
  description:
    "Selected artist profiles and development-stage representation within Chronicle Music Publishing, with M-WIS as an early represented artist and catalogue example.",
};

export default function ArtistsPage() {
  return (
    <main>
      <section className="section-shell py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">Representation</p>
          <h1 className="brand-heading mt-4 max-w-4xl text-4xl leading-tight text-ivory md:text-6xl">
            Selected Artist Profiles
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--text-secondary)]">
            A rights-aware view of selected artist representation within{" "}
            {brand.name}. This area is developing around represented artist
            examples, publishing details, ownership notes, and rights context in
            preparation.
          </p>
        </div>
      </section>

      <div className="gold-divider" />

      <section className="section-shell py-14 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {artistProfiles.map((artist) => (
            <article
              key={artist.slug}
              className="cinematic-panel group overflow-hidden p-0"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                {artist.image ? (
                  <Image
                    src={artist.image}
                    alt={`${artist.name} profile image`}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="grid h-full place-items-center bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.2),transparent_14rem),#0A0A0A]">
                    <Image
                      src={brand.logoMark}
                      alt=""
                      width={132}
                      height={132}
                      className="h-28 w-28 object-contain opacity-80"
                    />
                  </div>
                )}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.1),rgba(10,10,10,0.84))]" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="eyebrow">Represented Artist</p>
                  <h2 className="brand-heading mt-3 text-4xl text-ivory">
                    {artist.name}
                  </h2>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-7 text-[color:var(--text-secondary)]">
                  {artist.descriptor}
                </p>
                <Link
                  href={`/artists/${artist.slug}`}
                  className="mt-6 inline-flex border border-[color:var(--gold)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--gold-accent)] transition hover:bg-[color:var(--gold)] hover:text-black"
                >
                  View Profile
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
