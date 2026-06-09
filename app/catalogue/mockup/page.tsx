"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { catalogueItems, type CatalogueItem } from "@/lib/catalogue";
import { assets } from "@/lib/assets";
import styles from "./page.module.css";

function hasPreview(item: CatalogueItem) {
  return Boolean(item.previewAudioPath && item.previewDurationLimit);
}

function MetaIcon({ type }: { type: "genre" | "status" | "publishing" }) {
  if (type === "genre") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.8a3.5 3.5 0 0 1 2.2 6.22 4.9 4.9 0 0 1 2.7 4.38v1h-2v-1a2.9 2.9 0 1 0-5.8 0v1h-2v-1a4.9 4.9 0 0 1 2.7-4.38A3.5 3.5 0 0 1 12 2.8Zm0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM5.2 14.7h13.6l1.4 6.5H3.8l1.4-6.5Zm1.62 2-.54 2.5h9.1l-2.5-2.5H6.82Zm9.72 0 2.5 2.5h.42l-.54-2.5h-2.38Z" />
      </svg>
    );
  }

  if (type === "status") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.6 20 5v6.04c0 5.08-3.18 9.54-8 11.36-4.82-1.82-8-6.28-8-11.36V5l8-2.4Zm0 2.1L6 6.5v4.54c0 3.84 2.26 7.26 6 9.2 3.74-1.94 6-5.36 6-9.2V6.5l-6-1.8Zm3.65 6.15-4.45 4.45-2.32-2.32 1.27-1.27 1.05 1.05 3.18-3.18 1.27 1.27Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.6 15.8 6l5 .58-2.9 4.1.82 4.92-4.78-1.48L10 17.3V14.6l3.52-2.84 2.62.82-.44-2.66 1.58-2.24-2.72-.32L12 5.08 9.44 7.36l-2.72.32 1.58 2.24-.44 2.66 2.62-.82 1.7 1.38-1.28 1.56-1.84-1.48-4.78 1.48.82-4.92-2.9-4.1 5-.58L12 2.6Zm-5 16.3h10v2H7v-2Z" />
    </svg>
  );
}

function Waveform() {
  return (
    <svg className={styles.waveform} viewBox="0 0 720 80" preserveAspectRatio="none" aria-hidden="true">
      <path d="M2 42H50c9 0 12-5 16-16 5 26 9 40 18 40 8 0 12-12 17-34 5 19 10 26 18 26h42c8 0 13-6 18-18 5 24 10 36 20 36 11 0 15-16 22-52 7 34 13 48 25 48 10 0 15-13 21-38 6 20 12 28 22 28h38c8 0 13-4 18-15 6 23 12 33 22 33 12 0 17-19 24-58 8 39 15 55 29 55 11 0 17-14 24-36 7 21 13 29 24 29h42c8 0 14-5 20-17 7 24 13 34 24 34 13 0 19-19 28-54 8 32 16 46 30 46 12 0 18-11 26-33 7 19 14 26 25 26h74" />
      <path className={styles.waveBase} d="M2 42H718" />
    </svg>
  );
}

export default function CatalogueMockupPage() {
  const firstPreview = catalogueItems.find(hasPreview) ?? catalogueItems[0];
  const [selectedItem, setSelectedItem] = useState(firstPreview);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setIsPlaying(false);
  }, [selectedItem]);

  function playPreview(item: CatalogueItem) {
    setSelectedItem(item);

    window.setTimeout(() => {
      const audio = audioRef.current;
      if (!audio || !item.previewAudioPath) {
        return;
      }

      audio.currentTime = 0;
      audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }, 0);
  }

  function toggleSelectedPreview() {
    const audio = audioRef.current;
    if (!audio || !selectedItem.previewAudioPath) {
      return;
    }

    if (isPlaying) {
      audio.pause();
      return;
    }

    audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
  }

  function stopAtLimit() {
    const audio = audioRef.current;
    const limit = selectedItem.previewDurationLimit ?? 60;

    if (!audio || audio.currentTime < limit) {
      return;
    }

    audio.pause();
    audio.currentTime = limit;
    setIsPlaying(false);
  }

  function keepWithinLimit() {
    const audio = audioRef.current;
    const limit = selectedItem.previewDurationLimit ?? 60;

    if (audio && audio.currentTime > limit) {
      audio.currentTime = limit;
    }
  }

  return (
    <main className={styles.catalogueMockupPage}>
      <section className={styles.scene}>
        <div className={styles.heroBackdrop}>
          <Image
            src="/assets/chronicle-sections/studio-control-room.png"
            alt=""
            fill
            sizes="100vw"
            className={styles.heroImage}
            priority
          />
        </div>

        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Catalogue</p>
            <h1>Selected catalogue works for rights-aware publishing context.</h1>
            <p>
              A curated catalogue view for selected works, ownership context,
              publishing notes, and licensing discussion where applicable.
              M-WIS is shown here as a represented artist within Chronicle
              Music Publishing.
            </p>
            <span className={styles.goldRule} />
          </div>
          <div className={styles.heroSignal}>
            <Waveform />
          </div>
        </section>

        <section className={styles.cardGrid} aria-label="Selected catalogue works">
          {catalogueItems.map((item) => (
            <article key={item.title} className={styles.catalogueCard}>
              <div className={styles.coverWrap}>
                <Image
                  src={item.coverImage ?? item.artwork}
                  alt={`${item.title} catalogue artwork`}
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className={styles.coverImage}
                />
              </div>

              <div className={styles.cardBody}>
                <h2>{item.title}</h2>
                <p className={styles.artist}>{item.artist}</p>
                <p className={styles.notes}>{item.notes}</p>

                <div className={styles.metaBox}>
                  <div>
                    <MetaIcon type="genre" />
                    <span>Genre</span>
                    <strong>{item.genre}</strong>
                  </div>
                  <div>
                    <MetaIcon type="status" />
                    <span>Status</span>
                    <strong>{item.status}</strong>
                  </div>
                  <div>
                    <MetaIcon type="publishing" />
                    <span>Publishing Context</span>
                    <strong>{item.publishingContext}</strong>
                  </div>
                </div>

                <button
                  type="button"
                  disabled={!hasPreview(item)}
                  onClick={() => playPreview(item)}
                  className={styles.playAction}
                >
                  <span aria-hidden="true">▶</span>
                  {hasPreview(item) ? "Play Preview" : "Preview on request"}
                </button>
              </div>
            </article>
          ))}
        </section>

        <section className={styles.previewPanel} aria-label="Catalogue preview">
          <Image
            src={selectedItem.coverImage ?? selectedItem.artwork}
            alt={`${selectedItem.title} catalogue artwork`}
            width={128}
            height={128}
            className={styles.previewCover}
          />
          <div className={styles.previewContent}>
            <p className={styles.previewLabel}>Catalogue Preview</p>
            <h2>{selectedItem.title}</h2>
            <p className={styles.previewArtist}>{selectedItem.artist}</p>
            <p className={styles.previewNote}>
              {selectedItem.publishingContext}. Preview for catalogue context only.
            </p>
            <div className={styles.customPlayer}>
              <span>Preview (for catalogue context only)</span>
              <div className={styles.playerRow}>
                <button type="button" onClick={toggleSelectedPreview} aria-label={isPlaying ? "Pause preview" : "Play preview"}>
                  {isPlaying ? "Ⅱ" : "▶"}
                </button>
                <p>0:00 / 1:20</p>
                <Waveform />
              </div>
              {selectedItem.previewAudioPath ? (
                <audio
                  ref={audioRef}
                  src={selectedItem.previewAudioPath}
                  preload="metadata"
                  controlsList="nodownload noplaybackrate"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                  onTimeUpdate={stopAtLimit}
                  onSeeking={keepWithinLimit}
                />
              ) : null}
            </div>
          </div>
          <aside className={styles.fullCatalogueCard}>
            <div className={styles.fullCatalogueImage}>
              <Image
                src="/assets/chronicle-sections/resources-mic-reference.png"
                alt="Studio microphone reference"
                fill
                sizes="220px"
              />
            </div>
            <div>
              <p className={styles.previewLabel}>Catalogue Library</p>
              <h2>View Full Catalogue</h2>
              <p>
                Explore the deeper browse catalogue with filters, song details,
                preview status, and publishing context.
              </p>
              <Link href="/catalogue/browse" className={styles.fullCatalogueLink}>
                View Full Catalogue <span aria-hidden="true">→</span>
              </Link>
            </div>
          </aside>
        </section>

      </section>
    </main>
  );
}
