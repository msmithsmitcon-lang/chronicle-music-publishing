import Image from "next/image";
import Link from "next/link";
import { CataloguePreviewPlayer } from "@/components/CataloguePreviewPlayer";
import { assets } from "@/lib/assets";
import styles from "./page.module.css";

const stats = [
  ["35", "Registered works", "note"],
  ["Multi-genre", "R&B / Soul / Gospel", "pen"],
  ["South Africa", "Global vision", "pin"],
  ["Since 2023", "Building legacies", "calendar"],
] as const;

const features = [
  ["Rights Protection", "Securing creators. Protecting legacies.", "shield"],
  ["Global Reach", "Local roots. Global impact.", "signal"],
  ["Artist Development", "Nurturing talent. Building futures.", "people"],
  ["Catalogue Growth", "Building long-term music value.", "medal"],
] as const;

function Icon({ type }: { type: string }) {
  if (type === "note") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 18.5a3 3 0 1 1-2-2.83V5.5l11-2v12a3 3 0 1 1-2-2.83V7.1l-7 1.28v10.12Z" />
      </svg>
    );
  }

  if (type === "pen") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.7 3.5 20.5 9l-7.15 11.25-5.92 1.34 1.15-6.1L14.7 3.5Zm.54 3.58-4.05 8.12 2.25 2.14 5.2-8.2-3.4-3.06Z" />
      </svg>
    );
  }

  if (type === "pin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.8a7.1 7.1 0 0 0-7.1 7.1c0 5.4 7.1 11.9 7.1 11.9s7.1-6.5 7.1-11.9A7.1 7.1 0 0 0 12 2.8Zm0 9.9a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Z" />
      </svg>
    );
  }

  if (type === "calendar") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 2.5h2v2h6v-2h2v2h3v18H4v-18h3v-2Zm13 8H6v10h14v-10ZM6 8h14V6.5H6V8Z" />
      </svg>
    );
  }

  if (type === "shield") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.4 20 5v5.9c0 5.1-3.18 9.62-8 11.7-4.82-2.08-8-6.6-8-11.7V5l8-2.6Zm0 2.38L6 6.75v4.15c0 3.88 2.25 7.38 6 9.4 3.75-2.02 6-5.52 6-9.4V6.75l-6-1.97Z" />
      </svg>
    );
  }

  if (type === "signal") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.2 8.2a5.4 5.4 0 0 0 0 7.6l-1.45 1.45a7.45 7.45 0 0 1 0-10.5L8.2 8.2Zm8.6 0 1.45-1.45a7.45 7.45 0 0 1 0 10.5L16.8 15.8a5.4 5.4 0 0 0 0-7.6ZM11 9h3l-1.2 3H15l-4 5 .85-3H9.7L11 9Z" />
      </svg>
    );
  }

  if (type === "people") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.2 11.2a3.3 3.3 0 1 1 0-6.6 3.3 3.3 0 0 1 0 6.6Zm7.6 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM2.8 20.2c.34-3.55 2.5-5.8 5.4-5.8s5.06 2.25 5.4 5.8H2.8Zm10.55-5.24a5.67 5.67 0 0 1 2.6-.64c2.75 0 4.8 2.15 5.16 5.3h-4.36a8.48 8.48 0 0 0-3.4-4.66Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 2.5 2.32 6.1 6.52.32-5.1 4.08 1.7 6.3L12 15.7 6.56 19.3 8.26 13l-5.1-4.08 6.52-.32L12 2.5Zm0 5.55-.9 2.35-2.5.12 1.96 1.56-.65 2.42L12 13.12l2.09 1.38-.65-2.42 1.96-1.56-2.5-.12L12 8.05Z" />
    </svg>
  );
}

function Waveform({ compact = false }: { compact?: boolean }) {
  return (
    <svg
      className={compact ? styles.compactWave : styles.waveform}
      viewBox="0 0 620 56"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M2 31H38c6 0 8-3 10-8 3 13 5 19 10 19s7-8 10-25c3 17 5 25 11 25 5 0 8-5 10-13 3 10 5 13 10 13h30c5 0 8-4 11-13 3 14 5 19 10 19 6 0 8-10 11-30 4 25 6 35 13 35 6 0 8-9 11-25 4 14 7 18 12 18h38c5 0 8-4 11-13 3 12 5 16 10 16 6 0 8-9 12-25 4 19 7 29 14 29s10-12 14-37c5 30 8 43 16 43 7 0 10-11 14-32 4 16 7 22 13 22h34c5 0 8-3 11-10 3 9 6 13 11 13 6 0 9-8 13-24 4 17 7 25 14 25s10-10 15-30c5 26 9 36 18 36 7 0 10-8 14-24 4 13 8 17 14 17h42c6 0 9-4 12-12 4 13 7 18 13 18 7 0 10-9 14-26 5 22 10 30 20 30h35"
      />
      <path d="M2 31H618" className={styles.waveBase} />
    </svg>
  );
}

export default function ArtistsMockupPage() {
  return (
    <main className={styles.mockupPage}>
      <section className={styles.scene}>
        <div className={styles.hero}>
          <Image
            src="/assets/branding/chronicle music Artist Page Hero.png"
            alt=""
            fill
            sizes="100vw"
            className={styles.sceneImage}
            priority
          />
          <div className={styles.sceneVeil} />
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Premium music. Powerful stories.</p>
            <h1>
              Music Speaks.
              <span>Legacies Last.</span>
            </h1>
            <p>
              Chronicle Music Publishing represents powerful works and the people
              behind them. We protect rights, amplify voices and build lasting
              legacies.
            </p>
            <Link href="/catalogue" className={styles.goldPill}>
              Explore Catalogue <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className={styles.established}>
            <span>Est. 2023</span>
            <Waveform compact />
          </div>
        </div>

        <div className={styles.showcaseGrid}>
          <article className={styles.artistCard}>
            <div className={styles.artistVisual}>
              <Image
                src="/assets/branding/chronicle music Artist Page Hero.png"
                alt="M-WIS cinematic catalogue artwork"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className={styles.artistVisualImage}
                priority
              />
            </div>
            <div className={styles.cardShade} />
            <div className={styles.artistLogoOrb}>
              <Image
                src={assets.artists.mWisProfile}
                alt="M-WIS"
                width={170}
                height={170}
              />
            </div>
            <div className={styles.artistCopy}>
              <p className={styles.cardEyebrow}>Represented Artist</p>
              <h2>M-WIS</h2>
              <p className={styles.role}>Writer. Recording artist. Sonic storyteller.</p>
              <p className={styles.bodyText}>
                A voice rooted in truth. A sound that moves generations.
              </p>
              <Link href="/artists/m-wis" className={styles.goldPill}>
                View Artist Profile <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className={styles.statsStrip}>
              {stats.map(([value, label, icon]) => (
                <div key={value} className={styles.statItem}>
                  <Icon type={icon} />
                  <div>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className={styles.studioCard}>
            <div className={styles.studioVisual}>
              <Image
                src="/assets/chronicle-sections/studio-control-room.png"
                alt="Chronicle studio control room"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className={styles.studioVisualImage}
                priority
              />
            </div>
            <div className={styles.cardShade} />
            <div className={styles.studioCopy}>
              <p className={styles.cardEyebrow}>Catalogue Development</p>
              <h2>
                Music Built
                <span>Beyond Release</span>
              </h2>
              <p className={styles.role}>For selected artists and works.</p>
              <p className={styles.bodyText}>
                From artists to producers, Chronicle develops music, stories,
                and catalogue value around selected original works.
              </p>
              <Link href="/catalogue" className={styles.goldPill}>
                Browse Catalogue <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <div className={styles.studioSignal}>
              <Waveform />
            </div>
          </article>
        </div>

        <section className={styles.producerFeature}>
          <div className={styles.producerImage}>
            <Image
              src={assets.artists.hueyDProfile}
              alt="Huey-D DJ and producer artwork"
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
              className={styles.producerImageAsset}
            />
          </div>
          <div className={styles.producerShade} />
          <div className={styles.producerCopy}>
            <p className={styles.cardEyebrow}>DJ and producer</p>
            <h2>Huey-D</h2>
            <p className={styles.role}>DJ. Producer. Foundation builder.</p>
            <p className={styles.bodyText}>
              A creative profile rooted in production identity, artist
              development context, and future catalogue readiness.
            </p>
            <Link href="/artists/huey-d" className={styles.goldPill}>
              View Artist Profile <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <div className={styles.featureStrip}>
          {features.map(([title, text, icon]) => (
            <div key={title} className={styles.featureItem}>
              <Icon type={icon} />
              <div>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            </div>
          ))}
        </div>

        <footer className={styles.nowPlaying}>
          <div className={styles.trackInfo}>
            <Image
              src={assets.catalogue.itsTimeToMoveOnCover}
              alt="Its Time to Move On cover"
              width={64}
              height={64}
            />
            <div>
              <span>Now Playing</span>
              <strong>Its Time To Move On</strong>
              <p>M-WIS</p>
            </div>
          </div>
          <div className={styles.playerVisual}>
            <CataloguePreviewPlayer
              audioPath="/catalogue/audio/Its Time to Move On.mp3"
              durationLimit={60}
              label="Controlled Preview"
              variant="showcase"
            />
          </div>
          <p className={styles.quote}>
            Music speaks what cannot be expressed.
            <span>Unknown</span>
          </p>
        </footer>
      </section>
    </main>
  );
}







