"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { hueyDTracks, type HueyDTrack } from "@/lib/hueyDCollection";

function audioPath(fileName: string) {
  return `/catalogue/audio-huey-d/${encodeURIComponent(fileName)}`;
}

function Waveform() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 520 54"
      preserveAspectRatio="none"
      className="h-12 w-full overflow-visible"
    >
      <path
        d="M2 29H38c6 0 8-4 11-13 4 18 7 26 14 26 6 0 9-9 13-24 4 18 8 24 15 24h34c6 0 9-4 13-13 4 18 8 26 15 26 8 0 11-13 16-37 6 31 10 43 20 43 8 0 12-11 17-30 5 20 9 27 17 27h36c7 0 10-5 15-16 5 22 9 31 18 31 10 0 14-15 20-42 6 31 12 44 22 44 9 0 13-10 19-28 5 17 10 24 18 24h35c7 0 11-4 16-14 5 18 10 26 19 26 10 0 15-14 22-36 6 24 13 35 24 35h45"
        fill="none"
        stroke="rgba(212,175,55,0.74)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.05"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M2 29H518"
        fill="none"
        stroke="rgba(200,169,107,0.22)"
        strokeLinecap="round"
        strokeWidth="0.7"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function HueyDCollection() {
  const [selectedTrack, setSelectedTrack] = useState<HueyDTrack>(
    hueyDTracks[0],
  );
  const [playingTitle, setPlayingTitle] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  function playTrack(track: HueyDTrack) {
    const isCurrent = selectedTrack.title === track.title;
    const audio = audioRef.current;

    if (isCurrent && playingTitle === track.title && audio) {
      audio.pause();
      return;
    }

    setSelectedTrack(track);

    window.setTimeout(() => {
      if (!audioRef.current) {
        return;
      }

      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => setPlayingTitle(null));
    }, 0);
  }

  function stopAtLimit() {
    if (!audioRef.current || audioRef.current.currentTime < 60) {
      return;
    }

    audioRef.current.pause();
    audioRef.current.currentTime = 60;
    setPlayingTitle(null);
  }

  function keepWithinLimit() {
    if (audioRef.current && audioRef.current.currentTime > 60) {
      audioRef.current.currentTime = 60;
    }
  }

  return (
    <section className="section-shell py-14 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-start">
        <div className="cinematic-panel p-5 md:p-6">
          <div className="mb-5 flex flex-col gap-3 border-b border-[color:var(--line)] pb-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Huey-D Collection</p>
              <h2 className="brand-heading mt-3 text-3xl text-ivory md:text-4xl">
                Hip-hop works and production previews
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[color:var(--text-secondary)]">
              A compact hip-hop collection presented for producer identity,
              catalogue readiness, and development context.
            </p>
          </div>

          <div className="grid gap-2">
            {hueyDTracks.map((track) => {
              const isSelected = selectedTrack.title === track.title;
              const isPlaying = playingTitle === track.title;

              return (
                <button
                  key={track.title}
                  type="button"
                  onClick={() => playTrack(track)}
                  className={`group grid w-full gap-3 rounded-[0.9rem] border px-3 py-2.5 text-left transition md:grid-cols-[3.5rem_minmax(0,1fr)_auto_auto] md:items-center ${
                    isSelected
                      ? "border-[color:var(--gold)] bg-[rgba(212,175,55,0.08)]"
                      : "border-[color:var(--line)] bg-black/24 hover:border-white/20 hover:bg-black/38"
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="relative aspect-square overflow-hidden rounded-[0.65rem] border border-[color:var(--line)] bg-black">
                    <Image
                      src={track.coverImage}
                      alt="Huey-D profile artwork"
                      fill
                      sizes="56px"
                      className="object-cover object-[58%_36%] transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-semibold leading-tight text-ivory">
                      {track.title}
                    </h3>
                    <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-stone-400">
                      {track.artist}
                    </p>
                  </div>

                  <span className="w-fit rounded-full border border-[color:var(--line)] bg-black/30 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--gold-accent)]">
                    {track.genre}
                  </span>

                  <span
                    className={`inline-flex min-h-8 w-fit items-center rounded-full border px-3.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] ${
                      isSelected
                        ? "border-[color:var(--gold)] bg-[color:var(--gold-accent)] text-black"
                        : "border-[color:var(--line)] bg-black/25 text-ivory group-hover:border-[color:var(--gold)] group-hover:text-[color:var(--gold-accent)]"
                    }`}
                  >
                    {isPlaying ? "Playing" : "Play"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <aside className="cinematic-panel overflow-hidden border-l-2 border-l-[color:var(--gold)] p-5">
          <div className="grid grid-cols-[5rem_1fr] gap-4">
            <div className="relative aspect-square overflow-hidden rounded-[0.75rem] border border-[color:var(--line)] bg-black">
              <Image
                src={selectedTrack.coverImage}
                alt="Huey-D profile artwork"
                fill
                sizes="80px"
                className="object-cover object-[58%_36%]"
              />
            </div>
            <div className="min-w-0">
              <p className="eyebrow">Selected Track</p>
              <h2 className="brand-heading mt-2 text-2xl leading-tight text-ivory">
                {selectedTrack.title}
              </h2>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">
                Huey-D / Hip Hop
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-6 text-[color:var(--text-secondary)]">
            {selectedTrack.note}
          </p>

          <div className="mt-5 rounded-[0.9rem] border border-[rgba(200,169,107,0.26)] bg-[linear-gradient(135deg,rgba(0,0,0,0.72),rgba(24,20,12,0.72))] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--gold-accent)]">
              Preview for catalogue context only
            </p>
            <div className="mt-3 grid grid-cols-[2.5rem_1fr] items-center gap-3">
              <button
                type="button"
                onClick={() => playTrack(selectedTrack)}
                className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--gold)] bg-black/35 text-[color:var(--gold-accent)] transition hover:border-[color:var(--gold-accent)] hover:text-ivory"
                aria-label={
                  playingTitle === selectedTrack.title
                    ? "Pause Huey-D preview"
                    : "Play Huey-D preview"
                }
              >
                {playingTitle === selectedTrack.title ? "Ⅱ" : "▶"}
              </button>
              <Waveform />
            </div>
            <audio
              ref={audioRef}
              src={audioPath(selectedTrack.fileName)}
              preload="metadata"
              controlsList="nodownload noplaybackrate"
              onPlay={() => setPlayingTitle(selectedTrack.title)}
              onPause={() => setPlayingTitle(null)}
              onEnded={() => setPlayingTitle(null)}
              onTimeUpdate={stopAtLimit}
              onSeeking={keepWithinLimit}
              className="hidden"
            />
          </div>
        </aside>
      </div>
    </section>
  );
}
