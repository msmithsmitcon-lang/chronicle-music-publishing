import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionCard } from "@/components/SectionCard";
import { brand } from "@/lib/brand";
import { catalogueItems } from "@/lib/catalogue";

export const metadata: Metadata = {
  title: "Independent Music Publishing",
  description:
    "Chronicle Music Publishing supports selected songs, works, artists, producers, and rights owners through publishing representation, rights administration, and licensing discussions.",
};

const focusAreas = [
  {
    title: "Publishing Rights",
    description:
      "Rights-aware publishing support for songs, compositions, writers, artists, producers, and ownership records.",
    icon: "/assets/icons/icon-rights.svg",
  },
  {
    title: "Catalogue Management",
    description:
      "A curated development catalogue for selected works, ownership details, licensing notes, and administration preparation.",
    icon: "/assets/icons/icon-catalogue.svg",
  },
  {
    title: "Royalty Administration",
    description:
      "Preparation of royalty and registration information for cleaner collection discussions and future administration.",
    icon: "/assets/icons/icon-royalties.svg",
  },
  {
    title: "Licensing & Sync",
    description:
      "A direct enquiry path for applicable music use across film, television, brand, digital, and commercial projects.",
    icon: "/assets/icons/icon-licensing.svg",
  },
  {
    title: "Publishing Representation",
    description:
      "Professional representation for writers, artists, producers, and rights owners preparing works for long-term publishing value.",
    icon: "/assets/icons/icon-protection.svg",
  },
  {
    title: "Metadata Documentation",
    description:
      "Practical documentation for ownership, splits, catalogue details, and licensing conversations where works are eligible.",
    icon: "/assets/icons/icon-metadata.svg",
  },
];

export default function HomePage() {
  const featuredCatalogue = catalogueItems.slice(0, 3);

  return (
    <>
      <Hero />

      <section
        id="publishing-home"
        className="section-shell pt-24 pb-16 md:pt-28 md:pb-20"
      >
        <div className="mx-auto grid max-w-7xl gap-1 lg:grid-cols-[1fr_1.25fr_1.05fr]">
          <div className="cinematic-panel p-6 md:p-7">
            <p className="eyebrow">Publishing House</p>
            <h2 className="brand-heading mt-4 text-3xl leading-tight text-ivory md:text-4xl">
              Publishing Support for Songs Built to Last.
            </h2>
            <div className="mt-5 grid gap-4 text-sm leading-7 text-[color:var(--text-secondary)]">
              <p>
                Chronicle Music Publishing is a developing independent music
                publishing and rights-focused brand for selected songs, works,
                artists, producers, and rights owners.
              </p>
              <p>
                We support publishing preparation, representation, ownership
                documentation, catalogue organization, and licensing
                conversations where the work and rights position allow it.
              </p>
              <p>
                Our catalogue is being developed as a curated showcase of
                selected and represented works.
              </p>
              <p>
                Chronicle exists to help songs become better organized,
                represented, and prepared for long-term value beyond release
                cycles.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-7 inline-flex border border-[color:var(--gold)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--gold-accent)] transition hover:bg-[color:var(--gold)] hover:text-black"
            >
              Learn More About Us
            </Link>
          </div>

          <article className="cinematic-panel group overflow-hidden p-0">
            <div className="relative aspect-[16/10] overflow-hidden bg-black">
              <Image
                src="/assets/chronicle-sections/studio-control-room.png"
                alt="Premium studio control room representing Chronicle publishing work"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.05),rgba(10,10,10,0.82)),radial-gradient(circle_at_72%_18%,rgba(212,175,55,0.24),transparent_17rem)]" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="eyebrow">Chronicle Practice</p>
                <h3 className="brand-heading mt-3 text-2xl leading-tight text-ivory">
                  Studio culture. Publishing discipline.
                </h3>
              </div>
            </div>
          </article>

          <article
            id="catalogue-preview"
            className="cinematic-panel p-6 md:p-7"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <p className="eyebrow">Featured Works</p>
              <Link
                href="/catalogue"
                className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--gold-accent)]"
              >
                View Catalogue
              </Link>
            </div>
            <div className="grid gap-3">
              {featuredCatalogue.map((item) => (
                <Link
                  href="/catalogue"
                  key={item.title}
                  className="group/item grid grid-cols-[4rem_1fr_auto] items-center gap-4 border border-[color:var(--line)] bg-black/25 p-3 transition hover:border-[color:var(--gold)]"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={item.artwork}
                      alt={`${item.title} catalogue artwork`}
                      fill
                      sizes="4rem"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-ivory">{item.title}</p>
                    <p className="mt-1 text-xs text-[color:var(--text-secondary)]">
                      {item.artist}
                    </p>
                  </div>
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--gold)] text-[color:var(--gold-accent)] transition group-hover/item:bg-[color:var(--gold)] group-hover/item:text-black">
                    -&gt;
                  </span>
                </Link>
              ))}
            </div>
            <p className="mt-5 text-xs leading-6 text-[color:var(--text-secondary)]">
              A curated preview of selected and represented works. Additional
              songs may be added as rights, publishing details, and licensing
              suitability are confirmed.
            </p>
          </article>
        </div>
      </section>

      <div className="gold-divider" />

      <section id="rights" className="section-shell py-16 md:py-20">
        <div className="mx-auto mb-8 max-w-7xl">
          <p className="eyebrow">Rights & Publishing Support</p>
          <h2 className="brand-heading mt-4 max-w-3xl text-3xl leading-tight text-ivory md:text-5xl">
            Grounded support for ownership clarity, selected works, and
            publishing administration.
          </h2>
        </div>
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {focusAreas.map((area) => (
            <SectionCard
              key={area.title}
              title={area.title}
              description={area.description}
              icon={area.icon}
            />
          ))}
        </div>
      </section>

      <section className="section-shell pb-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--gold-accent)]">
            Rights-Aware Catalogue View
          </p>
          <div className="cinematic-panel group relative h-24 overflow-hidden md:h-28">
            <Image
              src="/assets/chronicle-sections/Untitledrights-panel.png"
              alt="Compact rights workflow and partnership visual strip"
              fill
              sizes="100vw"
              className="object-cover opacity-80 transition duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.82),rgba(10,10,10,0.16),rgba(10,10,10,0.82))]" />
          </div>
        </div>
      </section>
    </>
  );
}
