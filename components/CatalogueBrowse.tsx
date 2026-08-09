"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { CataloguePreviewPlayer } from "@/components/CataloguePreviewPlayer";
import {
  type CatalogueBrowseSong,
  catalogueBrowseGenres,
  catalogueBrowseLanguages,
  catalogueBrowseSongs,
} from "@/lib/catalogueBrowse";

function audioPath(fileName: string) {
  return `/catalogue/audio/${encodeURIComponent(fileName)}`;
}

type SelectedTrackPanelProps = {
  song?: CatalogueBrowseSong;
  playbackCommand?: {
    id: number;
    action: "play" | "pause";
  };
  onPlayingChange: (isPlaying: boolean) => void;
};

function SelectedTrackPanel({
  song,
  playbackCommand,
  onPlayingChange,
}: SelectedTrackPanelProps) {
  if (!song) {
    return (
      <aside className="cinematic-panel p-5">
        <p className="eyebrow">Selected Track</p>
        <p className="mt-4 text-sm leading-7 text-[color:var(--text-secondary)]">
          Select a catalogue work from the filtered list to review publishing
          context and preview availability.
        </p>
      </aside>
    );
  }

  return (
    <aside className="cinematic-panel overflow-hidden border-l-2 border-l-[color:var(--gold)] p-5">
      <div className="grid grid-cols-[5.5rem_1fr] gap-4">
        <div className="relative aspect-square overflow-hidden rounded-[var(--radius-card)] border border-[color:var(--line)] bg-black">
          <Image
            src={song.coverImage}
            alt="M-WIS catalogue cover"
            fill
            sizes="88px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.25))]" />
        </div>

        <div className="min-w-0">
          <p className="eyebrow">Selected Track</p>
          <h2 className="brand-heading mt-2 text-2xl leading-tight text-ivory md:text-3xl">
            {song.title}
          </h2>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">
            {song.artist}
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-5">
        <div className="grid gap-3 text-sm text-[color:var(--text-secondary)]">
          <div className="grid grid-cols-[7rem_1fr] gap-3 border-b border-[color:var(--line)] pb-3">
            <span className="text-xs uppercase tracking-[0.16em] text-stone-500">
              Category
            </span>
            <span className="text-ivory">{song.genre}</span>
          </div>
          <div className="grid grid-cols-[7rem_1fr] gap-3 border-b border-[color:var(--line)] pb-3">
            <span className="text-xs uppercase tracking-[0.16em] text-stone-500">
              Language
            </span>
            <span className="text-ivory">{song.language}</span>
          </div>
          <div className="grid grid-cols-[7rem_1fr] gap-3 border-b border-[color:var(--line)] pb-3">
            <span className="text-xs uppercase tracking-[0.16em] text-stone-500">
              Mood
            </span>
            <span className="text-ivory">{song.mood}</span>
          </div>
        </div>

        {song.audioFileName ? (
          <CataloguePreviewPlayer
            key={song.title}
            audioPath={audioPath(song.audioFileName)}
            durationLimit={60}
            label="60-second preview"
            playbackCommand={playbackCommand}
            onPlayingChange={onPlayingChange}
          />
        ) : (
          <div className="border border-[color:var(--line)] bg-black/30 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
              Preview pending
            </p>
            <p className="mt-2 text-sm leading-6 text-[color:var(--text-secondary)]">
              Preview for catalogue context only.
            </p>
          </div>
        )}

        <p className="text-xs leading-5 text-[color:var(--text-secondary)]">
          Streaming links pending.
        </p>

        <Link
          href="/contact"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-[color:var(--gold)] bg-[linear-gradient(135deg,rgba(212,175,55,0.1),rgba(0,0,0,0.24))] px-5 text-center text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--gold-accent)] transition hover:border-[color:var(--gold-accent)] hover:bg-[linear-gradient(135deg,rgba(212,175,55,0.18),rgba(0,0,0,0.3))] hover:text-ivory"
        >
          Publishing / Licensing Discussion
        </Link>
      </div>
    </aside>
  );
}

export function CatalogueBrowse() {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("All");
  const [language, setLanguage] = useState("All");
  const [previewOnly, setPreviewOnly] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState(
    catalogueBrowseSongs[0]?.title ?? "",
  );
  const [playingTitle, setPlayingTitle] = useState<string | null>(null);
  const [playbackCommand, setPlaybackCommand] = useState<{
    id: number;
    action: "play" | "pause";
  }>();

  const filteredSongs = useMemo(() => {
    const search = query.trim().toLowerCase();

    return catalogueBrowseSongs.filter((song) => {
      const matchesSearch =
        search.length === 0 ||
        [song.title, song.artist, song.genre, song.language, song.mood]
          .join(" ")
          .toLowerCase()
          .includes(search);
      const matchesGenre = genre === "All" || song.genre === genre;
      const matchesLanguage = language === "All" || song.language === language;
      const matchesPreview = !previewOnly || Boolean(song.audioFileName);

      return matchesSearch && matchesGenre && matchesLanguage && matchesPreview;
    });
  }, [genre, language, previewOnly, query]);

  const groupedSongs = useMemo(() => {
    return filteredSongs.reduce<Record<string, typeof filteredSongs>>(
      (groups, song) => {
        groups[song.genre] = [...(groups[song.genre] ?? []), song];
        return groups;
      },
      {},
    );
  }, [filteredSongs]);

  const previewCount = catalogueBrowseSongs.filter(
    (song) => song.audioFileName,
  ).length;

  const selectedSong = useMemo(() => {
    return filteredSongs.find((song) => song.title === selectedTitle);
  }, [filteredSongs, selectedTitle]);

  useEffect(() => {
    if (filteredSongs.length === 0 || selectedSong) {
      return;
    }

    setSelectedTitle(filteredSongs[0].title);
  }, [filteredSongs, selectedSong]);

  useEffect(() => {
    if (!selectedSong || playingTitle !== selectedSong.title) {
      setPlayingTitle(null);
    }
  }, [playingTitle, selectedSong]);

  function handleTrackClick(song: CatalogueBrowseSong) {
    setSelectedTitle(song.title);

    if (!song.audioFileName) {
      setPlayingTitle(null);
      return;
    }

    const action =
      selectedSong?.title === song.title && playingTitle === song.title
        ? "pause"
        : "play";

    setPlaybackCommand((current) => ({
      id: (current?.id ?? 0) + 1,
      action,
    }));
  }

  return (
    <div className="mx-auto grid max-w-7xl gap-8">
      <section className="cinematic-panel relative overflow-hidden p-6 md:p-8">
        <div className="absolute inset-y-0 right-0 hidden w-[42%] overflow-hidden lg:block">
          <Image
            src="/assets/chronicle-sections/resources-mic-reference.png"
            alt=""
            fill
            sizes="42vw"
            className="scale-[2.2] object-cover object-[45%_48%] opacity-55 brightness-110 contrast-125 saturate-90"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.98),rgba(10,10,10,0.4)_36%,rgba(10,10,10,0.78)),radial-gradient(circle_at_48%_48%,rgba(212,175,55,0.18),transparent_15rem)]" />
        </div>
        <div className="relative z-10 grid gap-6 lg:grid-cols-[1.15fr_0.62fr] lg:items-end">
          <div>
            <p className="eyebrow">Browse Catalogue</p>
            <h1 className="brand-heading mt-4 max-w-4xl text-4xl leading-tight text-ivory md:text-6xl">
              Deeper discovery across the represented M-WIS catalogue.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[color:var(--text-secondary)] md:text-lg">
              Search by title, language, category, or feel, with preview access
              limited to available catalogue audio and rights discussion kept at
              the centre of the experience.
            </p>
          </div>
          <div className="grid gap-3 rounded-[1rem] border border-[color:var(--line)] bg-black/45 p-5 text-sm text-[color:var(--text-secondary)] backdrop-blur-sm">
            <div className="flex items-center justify-between gap-4">
              <span className="uppercase tracking-[0.16em] text-stone-500">
                Works
              </span>
              <span className="text-ivory">{catalogueBrowseSongs.length}</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="uppercase tracking-[0.16em] text-stone-500">
                Previews
              </span>
              <span className="text-ivory">{previewCount}</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="uppercase tracking-[0.16em] text-stone-500">
                Artist
              </span>
              <span className="text-ivory">M-WIS</span>
            </div>
          </div>
        </div>
      </section>

      <section className="premium-panel p-4 md:p-5">
        <div className="grid gap-3 lg:grid-cols-[1.4fr_0.8fr_0.8fr_auto] lg:items-end">
          <label className="grid gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
              Search
            </span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search title, mood, language, category"
              className="min-h-12 border border-[color:var(--line)] bg-black/45 px-4 text-sm text-ivory outline-none transition placeholder:text-stone-600 focus:border-[color:var(--gold)]"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
              Category
            </span>
            <select
              value={genre}
              onChange={(event) => setGenre(event.target.value)}
              className="min-h-12 border border-[color:var(--line)] bg-black/45 px-4 text-sm text-ivory outline-none transition focus:border-[color:var(--gold)]"
            >
              <option>All</option>
              {catalogueBrowseGenres.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>

          <label className="grid gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
              Language
            </span>
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
              className="min-h-12 border border-[color:var(--line)] bg-black/45 px-4 text-sm text-ivory outline-none transition focus:border-[color:var(--gold)]"
            >
              <option>All</option>
              {catalogueBrowseLanguages.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>

          <label className="flex min-h-12 items-center gap-3 border border-[color:var(--line)] bg-black/35 px-4 text-sm text-[color:var(--text-secondary)]">
            <input
              type="checkbox"
              checked={previewOnly}
              onChange={(event) => setPreviewOnly(event.target.checked)}
              className="h-4 w-4 accent-[color:var(--gold-accent)]"
            />
            Preview available
          </label>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_25rem] lg:items-start">
        <div className="grid gap-6">
          <div className="flex flex-col gap-2 border-b border-[color:var(--line)] pb-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Filtered Works</p>
              <h2 className="brand-heading mt-2 text-3xl text-ivory">
                {filteredSongs.length} catalogue result
                {filteredSongs.length === 1 ? "" : "s"}
              </h2>
            </div>
            <p className="text-sm leading-6 text-[color:var(--text-secondary)]">
              Streaming links pending.
            </p>
          </div>

          {filteredSongs.length === 0 ? (
            <div className="premium-panel p-8 text-sm leading-7 text-[color:var(--text-secondary)]">
              No catalogue works match the current filters.
            </div>
          ) : (
            Object.entries(groupedSongs).map(([group, songs]) => (
              <div key={group} className="grid gap-3">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--gold-accent)]">
                  {group}
                </h3>
                <div className="grid gap-2">
                  {songs.map((song) => {
                    const isSelected = song.title === selectedSong?.title;

                    return (
                      <button
                        key={song.title}
                        type="button"
                        onClick={() => handleTrackClick(song)}
                        className={`group grid w-full gap-3 border px-3 py-2.5 text-left transition md:grid-cols-[3.5rem_minmax(12rem,1fr)_auto_auto_auto] md:items-center ${
                          isSelected
                            ? "border-[color:var(--gold)] bg-[rgba(212,175,55,0.08)] shadow-[inset_3px_0_0_var(--gold-accent)]"
                            : "border-[color:var(--line)] bg-black/24 hover:border-white/20 hover:bg-black/38"
                        }`}
                        aria-pressed={isSelected}
                      >
                        <div className="grid grid-cols-[3.5rem_1fr] gap-3 md:block">
                          <div className="relative aspect-square overflow-hidden rounded-[var(--radius-card)] border border-[color:var(--line)] bg-black">
                            <Image
                              src={song.coverImage}
                              alt="M-WIS catalogue cover"
                              fill
                              sizes="56px"
                              className="object-cover transition duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="min-w-0 md:hidden">
                            <h4 className="truncate text-sm font-semibold leading-tight text-ivory">
                              {song.title}
                            </h4>
                            <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-stone-400">
                              {song.artist}
                            </p>
                          </div>
                        </div>

                        <div className="min-w-0">
                          <div className="hidden md:block">
                            <h4 className="truncate text-sm font-semibold leading-tight text-ivory">
                              {song.title}
                            </h4>
                            <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-stone-400">
                              {song.artist}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 md:justify-end">
                          <span className="border border-[color:var(--line)] bg-black/30 px-2 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-ivory">
                            {song.genre}
                          </span>
                          <span className="border border-[color:var(--line)] bg-black/30 px-2 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-stone-300">
                            {song.language}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--text-secondary)] md:justify-end">
                          <span className={song.audioFileName ? "text-[color:var(--gold-accent)]" : "text-stone-500"}>
                            {song.audioFileName ? "Preview" : "Pending"}
                          </span>
                          <span className="text-stone-500">Streaming pending</span>
                        </div>

                        <div className="flex items-center justify-end">
                          <span
                            className={`inline-flex min-h-8 items-center rounded-full border px-3.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] ${
                              isSelected
                                ? "border-[color:var(--gold)] bg-[color:var(--gold-accent)] text-black"
                                : "border-[color:var(--line)] bg-black/25 text-ivory group-hover:border-[color:var(--gold)] group-hover:text-[color:var(--gold-accent)]"
                            }`}
                          >
                            {!song.audioFileName
                              ? "Preview Pending"
                              : isSelected && playingTitle === song.title
                                ? "Playing"
                                : "Play"}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="order-first lg:order-none">
          <SelectedTrackPanel
            song={selectedSong}
            playbackCommand={playbackCommand}
            onPlayingChange={(isPlaying) => {
              setPlayingTitle(isPlaying && selectedSong ? selectedSong.title : null);
            }}
          />
        </div>
      </section>
    </div>
  );
}
