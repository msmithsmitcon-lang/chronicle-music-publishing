import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Publishing knowledge, rights awareness, catalogue preparation, and licensing reference material from Chronicle Music Publishing.",
};

const guideCards = [
  {
    title: "What is Music Publishing?",
    text: "Understand the role of music publishing and how it generates royalties for creators.",
    icon: "note",
  },
  {
    title: "Master Rights vs Composition Rights",
    text: "A clear breakdown of the difference between master recording and composition rights.",
    icon: "document",
  },
  {
    title: "SAMRO, CAPASSO & Royalty Readiness",
    text: "Prepare your work for collection societies and keep ownership information accurate.",
    icon: "network",
  },
  {
    title: "Metadata, Splits & Catalogue Records",
    text: "Best practices for cataloguing songs, setting splits, and maintaining accurate records.",
    icon: "folder",
  },
];

const supportCards = [
  {
    title: "Sentry Sound",
    href: "https://www.sentrysound.co.za",
    image: "/assets/chronicle-sections/hero-studio-wide.png",
    logo: "/assets/chronicle-sections/sentrysound-logo.png",
    text: "A music rights and administration platform focused on catalogue organisation, publishing workflows, metadata readiness, and creator infrastructure.",
    button: "Proceed to Website",
  },
  {
    title: "Sentry Sound Academy",
    href: "https://www.sentrysound.co.za",
    image: "/assets/chronicle-sections/studio-control-room.png",
    logo: "/assets/chronicle-sections/sentrysound-academy-logo.png",
    text: "An educational initiative supporting music publishing awareness, rights literacy, metadata preparation, and creator development.",
    button: "Proceed to Website",
  },
  {
    title: "StudyEdge",
    href: "https://www.studyedge.co.za",
    image: "/assets/chronicle-sections/studyedge-laptop-reference.png",
    logo: "/assets/chronicle-sections/studyedge-logo.png",
    text: "A separate learning and AI-supported education platform referenced within the broader creator and training ecosystem.",
    button: "Proceed to Website",
  },
];

function ResourceIcon({ type }: { type: string }) {
  if (type === "note") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 18.5a3 3 0 1 1-2-2.83V5.5l11-2v12a3 3 0 1 1-2-2.83V7.1l-7 1.28v10.12Z" />
      </svg>
    );
  }

  if (type === "document") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 2.8h9.2L20 8.6v12.6H5V2.8Zm9 1.95V9h4.25L14 4.75ZM7 5v14.2h11V11h-6V5H7Zm2.2 8.2h5.6v1.7H9.2v-1.7Zm0 3h5.6v1.7H9.2v-1.7Z" />
      </svg>
    );
  }

  if (type === "network") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.2a3 3 0 0 1 3 3c0 .68-.22 1.31-.6 1.81l2.15 2.16a3.45 3.45 0 0 1 4.25 3.36 3.45 3.45 0 0 1-6.82.78H10a3.45 3.45 0 1 1-2.55-4.14L9.6 8.01A3 3 0 0 1 12 3.2Zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM6.65 12a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9Zm10.7 0a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9Z" />
      </svg>
    );
  }

  if (type === "folder") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3.4 5.2h6.8l1.8 2.1h8.6v13.5H3.4V5.2Zm2 2v1.6h13.2V9.3h-7.5L9.3 7.2H5.4Zm0 4.6v7h13.2v-7H5.4Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 4h14v14H8l-3 3V4Zm2 2v10.2l1.2-1.2H17V6H7Zm2.2 2.6h5.6v1.6H9.2V8.6Zm0 3h4.2v1.6H9.2v-1.6Z" />
    </svg>
  );
}

function Waveform() {
  return (
    <svg className={styles.waveform} viewBox="0 0 620 58" preserveAspectRatio="none" aria-hidden="true">
      <path d="M2 31H44c8 0 10-4 14-15 4 23 8 34 16 34s11-11 15-30c5 20 9 27 17 27h35c7 0 10-5 15-16 5 22 9 32 18 32 10 0 14-15 20-45 7 34 12 47 23 47 9 0 14-12 20-34 5 19 10 26 19 26h36c7 0 11-4 16-14 5 19 10 28 19 28 11 0 15-16 22-48 7 34 13 48 25 48 10 0 15-12 21-33 6 20 11 27 20 27h38c8 0 12-5 17-16 6 23 11 32 21 32 12 0 17-17 25-47 7 28 14 40 27 40 10 0 16-10 23-28 6 16 12 22 21 22h58" />
      <path d="M2 31H618" className={styles.waveBase} />
    </svg>
  );
}

export default function ResourcesPage() {
  return (
    <main className={styles.resourcesPage}>
      <section className={styles.hero}>
        <Image
          src="/assets/chronicle-sections/hero-studio-wide.png"
          alt=""
          fill
          sizes="100vw"
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroVeil} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Resources</p>
          <h1>
            Publishing Resources
            <span>& Rights Guidance</span>
          </h1>
          <div className={styles.titleSignal}>
            <Waveform />
          </div>
          <p>
            Reference material for songs, rights, ownership preparation,
            catalogue development, licensing awareness, and creator support
            within Chronicle Music Publishing.
          </p>
          <Link href="#publishing-guides" className={styles.goldButton}>
            Explore Resources <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section id="publishing-guides" className={styles.resourcePanel}>
        <div className={styles.panelIntro}>
          <div>
            <p className={styles.eyebrow}>Music Publishing Guides</p>
            <h2>Practical publishing knowledge</h2>
          </div>
          <p>
            Compact reference material for creators, catalogue owners, and
            rights holders preparing songs and ownership details for publishing
            conversations.
          </p>
        </div>

        <div className={styles.guideGrid}>
          {guideCards.map((card) => (
            <article key={card.title} className={styles.guideCard}>
              <div className={styles.iconOrb}>
                <ResourceIcon type={card.icon} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.relatedSection}>
          <div className={styles.relatedIntro}>
            <p className={styles.eyebrow}>Related Context</p>
            <h2>Supporting references around publishing education</h2>
            <div className={styles.referenceLogoStack} aria-label="Related reference logos">
              {supportCards.map((card) => (
                <div key={card.title} className={styles.referenceLogoItem}>
                  <Image
                    src={card.logo}
                    alt={`${card.title} logo`}
                    width={170}
                    height={70}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.supportGrid}>
            {supportCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.supportCard}
              >
                <div className={styles.supportImageWrap}>
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 22vw, 100vw"
                    className={styles.supportImage}
                  />
                </div>
                <div className={styles.supportBody}>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <span className={styles.supportCta}>
                    {card.button} <span aria-hidden="true">→</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.enquiryStrip}>
        <div className={styles.enquiryIcon}>
          <ResourceIcon type="chat" />
        </div>
        <div>
          <h2>Need publishing guidance?</h2>
          <p>
            Our team is here to help you understand your rights, prepare your
            catalogue, and maximise your royalties.
          </p>
        </div>
        <Link href="/contact" className={styles.goldButton}>
          Submit Rights Enquiry <span aria-hidden="true">→</span>
        </Link>
        <div className={styles.stripWave}>
          <Waveform />
        </div>
      </section>
    </main>
  );
}
