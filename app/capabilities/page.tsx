import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { assets } from "@/lib/assets";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Chronicle Music Publishing capabilities across creative production, publishing rights support, and artist catalogue development.",
};

const visualFrames = [
  {
    src: "/assets/chronicle-sections/contact-page-mockup-reference.png",
    alt: "Songwriting notebook and studio planning reference",
    className: styles.frameNotebook,
  },
  {
    src: "/assets/chronicle-sections/resources-mic-reference.png",
    alt: "Studio microphone for vocal production and recording",
    className: styles.frameMic,
  },
  {
    src: "/assets/chronicle-sections/studio-control-room.png",
    alt: "Chronicle publishing and rights preparation desk",
    className: styles.frameStudio,
  },
  {
    src: assets.artists.hueyDProfile,
    alt: "Artist and catalogue development artwork",
    className: styles.frameArtist,
  },
  {
    src: assets.catalogue.vierGoueSterreCover,
    alt: "Selected represented work and audience opportunity",
    className: styles.frameRelease,
  },
];

const journeySteps = [
  {
    number: "01",
    label: "Idea",
    title: "Every song starts somewhere.",
    body:
      "We help capture ideas, shape your concepts, and build a strong creative foundation.",
    services: [
      "Concept development",
      "Song ideas",
      "Creative direction",
      "Pre-production guidance",
    ],
  },
  {
    number: "02",
    label: "Create",
    title: "We bring your sound to life.",
    body:
      "From writing to the final master, Chronicle supports production that helps the record feel ready for presentation.",
    services: [
      "Songwriting",
      "Beat production",
      "Recording",
      "Vocal production",
      "Mixing and mastering",
      "Quality control",
    ],
  },
  {
    number: "03",
    label: "Prepare",
    title: "We prepare your work for the world.",
    body:
      "We organise metadata, support split awareness, clarify ownership context, and prepare publishing information.",
    services: [
      "Metadata preparation",
      "Splits and ownership",
      "Rights administration",
      "Licensing readiness",
      "Publishing documentation",
    ],
  },
  {
    number: "04",
    label: "Publish",
    title: "We protect and publish your music.",
    body:
      "We support selected works with publishing context, rights information, and catalogue presentation.",
    services: [
      "Global publishing context",
      "PRO preparation",
      "Performance royalty readiness",
      "Digital link information",
      "Royalty collection readiness",
    ],
  },
  {
    number: "05",
    label: "Grow",
    title: "We position you for opportunity.",
    body:
      "We help shape catalogue value, audience readiness, and long-term creative direction.",
    services: [
      "Catalogue growth",
      "Sync opportunities",
      "Artist branding support",
      "Campaign support",
      "Long-term strategy",
    ],
  },
];

function StepIcon({ label }: { label: string }) {
  if (label === "Idea") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.8a7 7 0 0 0-4.2 12.6c.5.38.8.9.8 1.52v.68h8v-.68c0-.62.3-1.14.8-1.52A7 7 0 0 0 12 2.8Zm0 2a5 5 0 0 1 3 9c-.88.66-1.38 1.55-1.52 2.6h-2.96A4.35 4.35 0 0 0 9 13.8a5 5 0 0 1 3-9Zm-3.2 11.6h8v2h-8v-2Zm1.2 3h5.6v2H10v-2Z" />
      </svg>
    );
  }

  if (label === "Create") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 9h2v6H5V9Zm4-4h2v14H9V5Zm4 3h2v8h-2V8Zm4-5h2v18h-2V3Z" />
      </svg>
    );
  }

  if (label === "Prepare") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 2.8h10.2L20 7.6v12.6H5V2.8Zm9 1.95V8h3.25L14 4.75ZM7 5v15.2h11V10h-6V5H7Zm2 7.5h5.6v1.8H9v-1.8Zm0 3.4h5.6v1.8H9v-1.8Z" />
      </svg>
    );
  }

  if (label === "Publish") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m12 2.5 2.32 6.1 6.52.32-5.1 4.08 1.7 6.3L12 15.7 6.56 19.3 8.26 13l-5.1-4.08 6.52-.32L12 2.5Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 18h16v2H4v-2Zm1-4.2 4-4 3 3 6.4-7.2L20 7.1 12.1 16 9 12.9l-3.6 3.6L5 13.8Z" />
    </svg>
  );
}

function Waveform() {
  return (
    <svg className={styles.waveform} viewBox="0 0 420 54" preserveAspectRatio="none" aria-hidden="true">
      <path d="M2 29H38c6 0 8-4 11-13 4 18 7 26 14 26 6 0 9-9 13-24 4 18 8 24 15 24h34c6 0 9-4 13-13 4 18 8 26 15 26 8 0 11-13 16-37 6 31 10 43 20 43 8 0 12-11 17-30 5 20 9 27 17 27h36c7 0 10-5 15-16 5 22 9 31 18 31 10 0 14-15 20-42 6 31 12 44 22 44 9 0 13-10 19-28 5 17 10 24 18 24h35" />
      <path d="M2 29H418" className={styles.waveBase} />
    </svg>
  );
}

export default function CapabilitiesPage() {
  return (
    <main className={styles.page}>
      <section className={styles.scene}>
        <Image
          src="/assets/chronicle-sections/studio-control-room.png"
          alt="Chronicle studio and publishing environment"
          fill
          sizes="100vw"
          className={styles.sceneImage}
          priority
        />
        <div className={styles.sceneVeil} />

        <div className={styles.shell}>
          <header className={styles.hero}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Our Capabilities</p>
              <h1>
                The Journey from
                <span>Idea to Lasting Impact.</span>
              </h1>
              <p>
                We support creators at every stage of their music journey, from
                the first idea to publishing, protection, and positioning for
                long-term success.
              </p>
            </div>
          </header>

          <section className={styles.journeyLayout} aria-label="Chronicle capabilities journey">
            <div className={styles.visualStack}>
              {visualFrames.map((frame) => (
                <div className={styles.visualFrame} key={frame.alt}>
                  <Image
                    src={frame.src}
                    alt={frame.alt}
                    fill
                    sizes="(min-width: 1024px) 24vw, 100vw"
                    className={frame.className}
                  />
                </div>
              ))}
            </div>

            <div className={styles.timeline}>
              {journeySteps.map((step) => (
                <article className={styles.step} key={step.number}>
                  <div className={styles.stepMarker}>
                    <span className={styles.stepNumber}>{step.number}</span>
                    <span className={styles.iconOrb}>
                      <StepIcon label={step.label} />
                    </span>
                  </div>

                  <div className={styles.stepCopy}>
                    <p>{step.label}</p>
                    <h2>{step.title}</h2>
                    <span>{step.body}</span>
                  </div>

                  <ul className={styles.serviceList}>
                    {step.services.map((service) => (
                      <li key={service}>{service}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <aside className={styles.ctaBand}>
            <div className={styles.ctaIcon} aria-hidden="true">
              CM
            </div>
            <div>
              <h2>Ready to take the next step?</h2>
              <p>
                Let&apos;s turn your music into a legacy. We&apos;re here to
                guide you through the next conversation.
              </p>
            </div>
            <Link href="/contact" className={styles.ctaButton}>
              Talk to our team <span aria-hidden="true">-&gt;</span>
            </Link>
            <Waveform />
          </aside>
        </div>
      </section>
    </main>
  );
}
