import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Chronicle Music Publishing capabilities across creative production, publishing rights support, and artist catalogue development.",
};

const capabilityAreas = [
  {
    title: "Creative Production",
    intro:
      "Chronicle supports the creative development of songs from idea, writing, beat, sound, and vocal direction through to polished production-ready recordings.",
    services: [
      "Beat production",
      "Sound production",
      "Vocal recording",
      "Vocal production",
      "Songwriting",
      "Lyrics writing",
      "Composition support",
      "Mixing",
      "Mastering",
      "Engineering",
    ],
  },
  {
    title: "Publishing & Rights Support",
    intro:
      "Chronicle helps creators prepare works for publishing context, rights clarity, catalogue organisation, licensing discussions, and future royalty administration workflows.",
    services: [
      "Publishing support",
      "Rights administration",
      "Catalogue structuring",
      "Metadata preparation",
      "Ownership and split awareness",
      "Royalty readiness",
      "Publishing documentation",
      "Licensing discussion",
      "Sync licensing preparation",
    ],
  },
  {
    title: "Artist & Catalogue Development",
    intro:
      "Chronicle supports selected artists and creators in shaping works, identity, catalogue presentation, and long-term music value.",
    services: [
      "Artist development",
      "Artist direction",
      "Creator development",
      "Catalogue development",
      "Release preparation",
      "Brand positioning",
      "Song selection",
      "Portfolio readiness",
      "Campaign readiness",
      "Representation discussions",
    ],
  },
];

const workflowSteps = [
  {
    title: "Develop the song",
    description:
      "Shape the writing, sound, vocals, production, and final recording direction.",
  },
  {
    title: "Prepare the rights context",
    description:
      "Clarify ownership notes, metadata, splits, publishing documents, and administration readiness.",
  },
  {
    title: "Shape the catalogue",
    description:
      "Organise selected works into a clearer publishing and catalogue presentation.",
  },
  {
    title: "Support discussion",
    description:
      "Prepare for licensing, sync, release, representation, or publishing conversations where applicable.",
  },
];

export default function CapabilitiesPage() {
  return (
    <main>
      <section className="section-shell py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="cinematic-panel relative overflow-hidden p-6 md:p-8">
            <div className="absolute inset-0 opacity-35 [background:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] [background-size:88px_88px]" />
            <div className="relative z-10">
              <p className="eyebrow">Capabilities</p>
              <h1 className="brand-heading mt-5 text-4xl leading-tight text-ivory md:text-6xl">
                Creative music production, publishing support, and catalogue
                development.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[color:var(--text-secondary)] md:text-lg">
                Chronicle Music Publishing supports selected songs, creators,
                artists, producers, and rights owners through a practical mix of
                creative production, rights-aware preparation, catalogue
                organisation, and publishing discussion.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-full border border-[color:var(--gold)] bg-[linear-gradient(135deg,var(--gold-accent),var(--gold))] px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-black shadow-[0_18px_55px_var(--glow)] transition hover:-translate-y-0.5"
                >
                  Start a Conversation
                </Link>
                <Link
                  href="/catalogue"
                  className="rounded-full border border-[rgba(200,169,107,0.62)] bg-black/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--gold-accent)] transition hover:border-[color:var(--gold-accent)] hover:bg-[rgba(212,175,55,0.14)] hover:text-ivory"
                >
                  View Selected Works
                </Link>
              </div>
            </div>
          </div>

          <div className="cinematic-panel group relative min-h-[26rem] overflow-hidden">
            <Image
              src="/assets/chronicle-sections/studio-control-room.png"
              alt="Chronicle studio and publishing environment"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover object-center opacity-85 transition duration-700 group-hover:scale-[1.03]"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.22),rgba(10,10,10,0.78)),radial-gradient(circle_at_70%_22%,rgba(212,175,55,0.22),transparent_18rem)]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="eyebrow">Modern Publishing Ecosystem</p>
              <p className="brand-heading mt-3 max-w-lg text-2xl leading-tight text-ivory md:text-3xl">
                Studio craft, catalogue discipline, and rights-aware support in
                one creative framework.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      <section className="section-shell py-14 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 max-w-3xl">
            <p className="eyebrow">What Chronicle Does</p>
            <h2 className="brand-heading mt-4 text-3xl leading-tight text-ivory md:text-5xl">
              Three connected capability areas for songs, rights, and long-term
              catalogue value.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {capabilityAreas.map((area) => (
              <article key={area.title} className="cinematic-panel p-5 md:p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(200,169,107,0.5)] bg-[rgba(212,175,55,0.08)] text-lg text-[color:var(--gold-accent)]">
                  {area.title === "Creative Production"
                    ? "CP"
                    : area.title === "Publishing & Rights Support"
                      ? "PR"
                      : "AC"}
                </div>
                <h3 className="brand-heading text-2xl leading-tight text-ivory">
                  {area.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[color:var(--text-secondary)]">
                  {area.intro}
                </p>
                <div className="mt-6 grid gap-2">
                  {area.services.map((service) => (
                    <div
                      key={service}
                      className="rounded-full border border-[color:var(--line)] bg-black/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--gold-accent)]"
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-14 md:pb-20">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="cinematic-panel p-6 md:p-7">
            <p className="eyebrow">How Chronicle Works</p>
            <h2 className="brand-heading mt-4 text-3xl leading-tight text-ivory md:text-4xl">
              Practical support from song idea to publishing conversation.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[color:var(--text-secondary)]">
              The work stays rights-aware and creator-focused. Chronicle keeps
              the process grounded in preparation, presentation, and discussion
              rather than inflated promises.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {workflowSteps.map((step, index) => (
              <article
                key={step.title}
                className="border border-[color:var(--line)] bg-black/25 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold-accent)]">
                  Step {index + 1}
                </p>
                <h3 className="brand-heading mt-3 text-2xl text-ivory">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--text-secondary)]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-16 md:pb-24">
        <div className="cinematic-panel mx-auto grid max-w-7xl gap-6 overflow-hidden p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <p className="eyebrow">Publishing / Production Discussion</p>
            <h2 className="brand-heading mt-3 text-3xl leading-tight text-ivory md:text-4xl">
              Bring the song, the rights context, or the catalogue question.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[color:var(--text-secondary)]">
              Start a focused conversation around production, selected works,
              rights preparation, catalogue presentation, or licensing readiness.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex justify-center rounded-full border border-[color:var(--gold)] bg-[linear-gradient(135deg,rgba(212,175,55,0.12),rgba(0,0,0,0.28))] px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--gold-accent)] transition hover:border-[color:var(--gold-accent)] hover:bg-[linear-gradient(135deg,rgba(212,175,55,0.2),rgba(0,0,0,0.35))] hover:text-ivory"
          >
            Publishing / Production Discussion
          </Link>
        </div>
      </section>
    </main>
  );
}
