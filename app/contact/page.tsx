import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ContactEmailForm } from "./ContactEmailForm";
import styles from "./page.module.css";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Chronicle Music Publishing for artist, rights holder, catalogue, production, and licensing discussions.",
};

const contactDetails = [
  {
    icon: "@",
    label: "Email Us",
    value: "markus@chroniclemusic.co.za",
  },
  {
    icon: "SA",
    label: "Based in South Africa",
    value: "Working with creators globally",
  },
  {
    icon: "#",
    label: "Follow Chronicle",
    value: "Instagram / Facebook / YouTube / TikTok",
  },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/chroniclemusicsa/", icon: FaInstagram },
  { label: "Facebook", href: "https://www.facebook.com/chroniclemusicsa", icon: FaFacebookF },
  { label: "YouTube", href: "https://www.youtube.com/@chroniclemusicsa", icon: FaYoutube },
  { label: "TikTok", href: "https://www.tiktok.com/@chroniclemusicsa", icon: FaTiktok },
];

const supportPoints = [
  {
    icon: "P",
    title: "Protect",
    detail: "Your Work",
  },
  {
    icon: "M",
    title: "Maximise",
    detail: "Your Value",
  },
  {
    icon: "G",
    title: "Grow",
    detail: "Your Legacy",
  },
];

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Image
          src="/assets/chronicle-sections/hero-studio-wide.png"
          alt="Chronicle studio contact environment"
          fill
          sizes="100vw"
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroShade} />

        <div className={styles.shell}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Start the Conversation</p>
            <h1>
              Let&apos;s Build
              <br />
              Something
              <br />
              <span>That Lasts.</span>
            </h1>
            <div className={styles.signalLine} aria-hidden="true" />
            <p>
              Whether you&apos;re an artist, collaborator, or creative partner, we&apos;d love to hear your story. Chronicle Music works with artists, develops original music, and builds releases and catalogues with long-term creative value.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.shell}>
          <div className={styles.contactGrid}>
            <div className={styles.leftColumn}>
              <div className={styles.detailList} aria-label="Contact details">
                {contactDetails.map((item) => (
                  <div className={styles.detailItem} key={item.label}>
                    <span className={styles.detailIcon} aria-hidden="true">
                      {item.icon}
                    </span>
                    <div>
                      <p>{item.label}</p>
                      {item.label === "Follow Chronicle" ? (
                        <span className="flex gap-3">
                          {socialLinks.map(({ label, href, icon: Icon }) => (
                            <Link
                              key={label}
                              href={href}
                              aria-label={label}
                              className="text-[color:var(--text-secondary)] transition hover:text-[color:var(--gold-accent)]"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Icon size={18} />
                            </Link>
                          ))}
                        </span>
                      ) : (
                        <span>{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <article className={styles.audienceCard}>
                <Image
                  src="/assets/chronicle-sections/contact-mic-card-new.png"
                  alt="Studio microphone representing creator and rights holder conversations"
                  fill
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className={styles.audienceImage}
                />
                <div className={styles.audienceOverlay} />
                <div className={styles.audienceCopy}>
                  <p className={styles.eyebrow}>We Work With</p>
                  <h2>
                    Visionaries.
                    <br />
                    Creators.
                    <br />
                    Rights Holders.
                  </h2>
                  <p>
                    From independent artists to established catalogues, we
                    provide the structure, support, and strategy behind the
                    music.
                  </p>
                </div>
                <div className={styles.supportStrip}>
                  {supportPoints.map((point) => (
                    <div key={point.title}>
                      <span aria-hidden="true">{point.icon}</span>
                      <p>{point.title}</p>
                      <small>{point.detail}</small>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            <ContactEmailForm />
          </div>

          <aside className={styles.catalogueCta}>
            <Image
              src="/assets/chronicle-sections/studio-control-room.png"
              alt="Catalogue discussion studio setting"
              fill
              sizes="100vw"
              className={styles.catalogueImage}
            />
            <div className={styles.catalogueOverlay} />
            <div className={styles.catalogueIcon} aria-hidden="true">
              CM
            </div>
            <div className={styles.catalogueCopy}>
              <p className={styles.eyebrow}>Have a Catalogue?</p>
              <h2>Ready to unlock your catalogue&apos;s potential?</h2>
              <p>
                Submit your works for evaluation and discover new
                opportunities.
              </p>
            </div>
            <Link href="mailto:markus@chroniclemusic.co.za?subject=Catalogue%20Submission%20Enquiry&body=Chronicle%20Music%20catalogue%20submission%20enquiry%0A%0AName:%0AEmail:%0AArtist%20/%20Company:%0ACatalogue%20or%20works%20summary:%0A%0AMessage:" className={styles.catalogueButton}>
              Submit Works <span aria-hidden="true">-&gt;</span>
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}





