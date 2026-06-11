import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Chronicle Music Publishing, an independent music publishing house focused on artists, catalogues, rights, and creative legacy.",
};

const values = [
  [
    "Ownership",
    "Protecting the rights, royalties, and creative work artists have earned.",
  ],
  [
    "Creativity",
    "Respecting the art, elevating the artist, and amplifying the vision.",
  ],
  [
    "Global Reach",
    "Positioning South African music and selected works for wider opportunities.",
  ],
  ["Longevity", "Building catalogues that can grow in value for generations."],
  ["Partnership", "Working as a long-term creative and publishing partner."],
];

export default function AboutPage() {
  return (
    <main>
      <section className="relative min-h-[72vh] overflow-hidden border-b border-[color:var(--line)] bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_32%,rgba(212,175,55,0.18),transparent_22rem),linear-gradient(90deg,rgba(3,3,3,0.96)_0%,rgba(3,3,3,0.72)_42%,rgba(3,3,3,0.36)_70%,rgba(3,3,3,0.88)_100%)]" />
        <Image
          src="/assets/ecosystem/chronicle-about-hero.png"
          alt="Chronicle Music Publishing studio atmosphere"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover opacity-25"
        />

        <div className="section-shell relative z-10 mx-auto flex min-h-[72vh] max-w-7xl items-center">
          <div className="max-w-[42rem]">
            <p className="eyebrow">About</p>
            <h1 className="brand-heading mt-5 text-[clamp(3.8rem,7vw,7rem)] leading-[0.9] tracking-[-0.055em] text-ivory">
              Chronicle
              <span className="block text-[color:var(--gold-accent)]">
                Music Publishing
              </span>
            </h1>
            <p className="mt-6 text-xs font-bold uppercase leading-7 tracking-[0.22em] text-[rgba(248,241,223,0.76)]">
              Curating. Protecting. Building legacy.
            </p>
            <div className="mt-6 h-px w-20 bg-[color:var(--gold-accent)]" />
            <p className="mt-6 max-w-[34rem] text-base leading-8 text-[color:var(--text-secondary)]">
              Chronicle Music Publishing is an independent music publishing
              company built on the belief that great music deserves to be
              protected, represented, and preserved for generations.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell py-12 md:py-16">
        <div className="relative mx-auto min-h-[38rem] max-w-7xl overflow-hidden rounded-[0.62rem] border border-[rgba(217,170,73,0.28)] bg-black shadow-[0_22px_70px_rgba(0,0,0,0.55)]">
          <Image
            src="/assets/ecosystem/chronicle-legacy-manuscript.png"
            alt="Chronicle Music legacy manuscript"
            fill
            sizes="100vw"
            className="absolute inset-0 object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_38%,rgba(212,175,55,0.18),transparent_20rem),linear-gradient(90deg,rgba(3,3,3,0.72)_0%,rgba(3,3,3,0.46)_46%,rgba(3,3,3,0.12)_72%,rgba(3,3,3,0.50)_100%),linear-gradient(180deg,rgba(3,3,3,0.16)_0%,rgba(3,3,3,0.25)_100%)]" />

          <article className="relative z-10 flex min-h-[38rem] max-w-[42rem] flex-col justify-center p-7 md:p-12">
            <p className="eyebrow">Our Purpose</p>
            <h2 className="brand-heading mt-4 text-3xl leading-tight text-ivory md:text-5xl">
              We do not just represent music.
              <span className="block text-[color:var(--gold-accent)]">
                We build legacy.
              </span>
            </h2>
            <div className="mt-6 h-px w-20 bg-[color:var(--gold-accent)]" />
            <p className="mt-6 text-sm leading-7 text-[color:var(--text-secondary)]">
              We work with artists, producers, songwriters, and catalogue owners
              to develop music with long-term value. From rights administration
              to creative positioning, Chronicle is committed to elevating the
              value of original works.
            </p>
          </article>
        </div>
      </section>

      <section className="section-shell py-10 md:py-14">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow text-center">What We Stand For</p>
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {values.map(([title, text]) => (
              <article
                key={title}
                className="border border-[color:var(--line)] bg-black/30 p-5 text-center"
              >
                <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--gold-accent)]">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[color:var(--text-secondary)]">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-12 md:py-16">
        <div className="relative mx-auto min-h-[34rem] max-w-7xl overflow-hidden rounded-[0.62rem] border border-[rgba(217,170,73,0.28)] bg-black shadow-[0_22px_70px_rgba(0,0,0,0.55)]">
          <Image
            src="/assets/ecosystem/chronicle-music-legacy.png"
            alt="Chronicle Music legacy and catalogue archive"
            fill
            sizes="100vw"
            className="absolute inset-0 object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_42%,rgba(212,175,55,0.18),transparent_20rem),linear-gradient(90deg,rgba(3,3,3,0.18)_0%,rgba(3,3,3,0.12)_45%,rgba(3,3,3,0.05)_72%,rgba(3,3,3,0.30)_100%),linear-gradient(180deg,rgba(3,3,3,0.18)_0%,rgba(3,3,3,0.25)_100%)]" />

          <article className="relative z-10 flex min-h-[34rem] max-w-[42rem] flex-col justify-center p-7 md:p-12">
            <p className="eyebrow">We Believe That</p>
            <h2 className="brand-heading mt-4 text-3xl leading-tight text-ivory md:text-5xl">
              Music is more than sound.
              <span className="block text-[color:var(--gold-accent)]">
                It is culture. It is story. It is legacy.
              </span>
            </h2>
            <div className="mt-6 h-px w-20 bg-[color:var(--gold-accent)]" />
            <p className="mt-6 text-sm leading-7 text-[color:var(--text-secondary)]">
              Our mission is to ensure music is protected, valued, and heard with dignity, care, and professional publishing support.
            </p>
          </article>
        </div>
      </section>

      <section className="section-shell py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[34rem] overflow-hidden rounded-[0.62rem] border border-[rgba(217,170,73,0.28)] bg-black shadow-[0_22px_70px_rgba(0,0,0,0.55)]">
            <Image
              src="/assets/chronicle-sections/chronicle-contact-studio-hero.png"
              alt="Chronicle Music publishing approach"
              fill
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-contain scale-90 object-center opacity-100"
            />
          </div>

          <article className="flex min-h-[34rem] flex-col justify-center rounded-[0.62rem] border border-[rgba(217,170,73,0.28)] bg-[linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018)),rgba(12,12,12,0.92)] p-7 shadow-[0_22px_70px_rgba(0,0,0,0.55)] md:p-12">
            <p className="eyebrow">Our Approach</p>
            <h2 className="brand-heading mt-4 text-3xl leading-tight text-ivory md:text-5xl">
              Bespoke publishing.
              <span className="block text-[color:var(--gold-accent)]">
                Personal attention. Global reach.
              </span>
            </h2>
            <div className="mt-6 h-px w-20 bg-[color:var(--gold-accent)]" />
            <p className="mt-6 text-sm leading-7 text-[color:var(--text-secondary)]">
              Every catalogue we represent is unique. We take a careful,
              relationship-based approach to publishing, combining industry
              discipline with respect for the people behind the music.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex w-fit rounded-full border border-[color:var(--gold)] bg-[linear-gradient(135deg,rgba(212,175,55,0.12),rgba(0,0,0,0.2))] px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--gold-accent)] transition hover:border-[color:var(--gold-accent)] hover:text-ivory"
            >
              Start a Conversation
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}









