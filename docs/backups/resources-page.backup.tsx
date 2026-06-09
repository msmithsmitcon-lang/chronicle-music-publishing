import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Publishing knowledge, rights awareness, catalogue preparation, and licensing reference material from Chronicle Music Publishing.",
};

const guideCards = [
  "What is Music Publishing?",
  "Master Rights vs Composition Rights",
  "SAMRO, CAPASSO & Royalty Readiness",
  "Metadata, Splits & Catalogue Records",
];

const supportCards = [
  {
    title: "Sentry Sound",
    logo: "/assets/chronicle-sections/sentrysound-logo.png",
    text: "A related music rights and administration initiative that may support future catalogue organization, metadata preparation, and rights-aware publishing work.",
    button: "Reference Note",
  },
  {
    title: "Sentry Sound Academy",
    logo: "/assets/chronicle-sections/sentrysound-academy-logo.png",
    text: "A related education context for music publishing awareness, rights literacy, metadata preparation, and creator business learning.",
    button: "Education Note",
  },
  {
    title: "StudyEdge",
    logo: "/assets/chronicle-sections/studyedge-logo.png",
    text: "A separate learning project referenced only as part of broader education and creator development context.",
    button: "Context Note",
  },
];

export default function ResourcesPage() {
  return (
    <main>
      <section className="section-shell py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">Resources</p>
          <h1 className="brand-heading mt-4 max-w-4xl text-4xl leading-tight text-ivory md:text-6xl">
            Publishing Resources & Rights Guidance
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--text-secondary)]">
            Reference material for songs, rights, ownership preparation,
            catalogue development, licensing awareness, and creator support
            within Chronicle Music Publishing.
          </p>
        </div>
      </section>

      <div className="gold-divider" />

      <section className="section-shell py-14 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Music Publishing Guides</p>
              <h2 className="brand-heading mt-3 text-3xl text-ivory md:text-4xl">
                Practical publishing knowledge
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[color:var(--text-secondary)]">
              Compact reference material for creators, catalogue owners, and
              rights holders preparing songs and ownership details for
              publishing conversations.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {guideCards.map((title) => (
              <article key={title} className="premium-panel p-6">
                <div className="mb-6 h-px w-14 bg-[linear-gradient(90deg,var(--gold-accent),transparent)]" />
                <h3 className="brand-heading text-2xl leading-tight text-ivory">
                  {title}
                </h3>
                <span className="mt-6 inline-flex border border-[color:var(--line)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--gold-accent)]">
                  In Preparation
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="eyebrow">Related Context</p>
            <h2 className="brand-heading mt-3 text-3xl text-ivory md:text-4xl">
              Supporting references around publishing education
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {supportCards.map((card) => (
              <article key={card.title} className="cinematic-panel p-6">
                <div className="mb-6 flex h-14 items-center">
                  <Image
                    src={card.logo}
                    alt={`${card.title} logo`}
                    width={190}
                    height={64}
                    className="max-h-12 w-auto max-w-[11rem] object-contain opacity-80"
                  />
                </div>
                <h3 className="brand-heading text-3xl leading-tight text-ivory">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[color:var(--text-secondary)]">
                  {card.text}
                </p>
                <button
                  type="button"
                  className="mt-7 border border-[color:var(--gold)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--gold-accent)] transition hover:bg-[color:var(--gold)] hover:text-black"
                >
                  {card.button}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
