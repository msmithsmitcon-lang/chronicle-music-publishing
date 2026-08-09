"use client";

import Image from "next/image";
import { useState } from "react";
import { CataloguePreviewPlayer } from "@/components/CataloguePreviewPlayer";
import { catalogueItems, type CatalogueItem } from "@/lib/catalogue";

type PlaybackCommand = {
  id: number;
  action: "play";
};

function hasPreview(item: CatalogueItem) {
  return Boolean(
    item.previewAudioPath && item.previewDurationLimit && item.previewLabel,
  );
}

export function CatalogueList() {
  const firstPreviewItem = catalogueItems.find(hasPreview) ?? catalogueItems[0];
  const [selectedItem, setSelectedItem] = useState(firstPreviewItem);
  const [playbackCommand, setPlaybackCommand] = useState<PlaybackCommand>();

  function playPreview(item: CatalogueItem) {
    setSelectedItem(item);
    setPlaybackCommand((current) => ({
      id: (current?.id ?? 0) + 1,
      action: "play",
    }));
  }

  return (
    <div className="mx-auto grid max-w-7xl gap-6">
      <div className="grid gap-5 lg:grid-cols-3">
        {catalogueItems.map((item) => (
          <article
            key={item.title}
            className="premium-panel group overflow-hidden p-0 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--gold)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden border-b border-[color:var(--line)] bg-[#0F0F0F]">
              <Image
                src={item.coverImage ?? item.artwork}
                alt={`${item.title} catalogue artwork`}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover opacity-[0.82] transition duration-500 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.1),rgba(10,10,10,0.82)),radial-gradient(circle_at_50%_20%,rgba(212,175,55,0.16),transparent_18rem)]" />
            </div>

            <div className="grid gap-5 p-6">
              <div>
                <h2 className="brand-heading text-3xl text-ivory">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm uppercase tracking-[0.18em] text-stone-400">
                  {item.artist}
                </p>
                <p className="mt-4 text-sm leading-7 text-[color:var(--text-secondary)]">
                  {item.notes}
                </p>
              </div>

              <div className="grid gap-2 text-sm text-[color:var(--text-secondary)]">
                <div className="border border-[color:var(--line)] bg-black/30 p-4 transition group-hover:border-white/15">
                  <span className="block text-xs uppercase tracking-[0.16em] text-stone-500">
                    Genre
                  </span>
                  <span className="mt-2 block text-ivory">{item.genre}</span>
                </div>
                <div className="border border-[color:var(--line)] bg-black/30 p-4 transition group-hover:border-white/15">
                  <span className="block text-xs uppercase tracking-[0.16em] text-stone-500">
                    Status
                  </span>
                  <span className="mt-2 block text-ivory">{item.status}</span>
                </div>
                <div className="border border-[color:var(--line)] bg-black/30 p-4 transition group-hover:border-white/15">
                  <span className="block text-xs uppercase tracking-[0.16em] text-stone-500">
                    Publishing Context
                  </span>
                  <span className="mt-2 block text-ivory">
                    {item.publishingContext}
                  </span>
                </div>
                <button
                  type="button"
                  disabled={!hasPreview(item)}
                  onClick={() => playPreview(item)}
                  className="group/action mt-3 inline-flex w-fit items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold-accent)] transition hover:text-ivory disabled:cursor-not-allowed disabled:text-stone-600"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full border border-[rgba(200,169,107,0.52)] bg-black/35 text-[0.62rem] leading-none transition group-hover/action:border-[color:var(--gold-accent)] group-hover/action:bg-[rgba(212,175,55,0.16)] disabled:border-[color:var(--line)]">
                    ▶
                  </span>
                  <span className="border-b border-[rgba(212,175,55,0.28)] pb-0.5 transition group-hover/action:border-[color:var(--gold-accent)]">
                    Play Preview
                  </span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedItem.previewAudioPath &&
      selectedItem.previewDurationLimit &&
      selectedItem.previewLabel ? (
        <section className="cinematic-panel grid gap-5 overflow-hidden border-t-2 border-t-[rgba(212,175,55,0.42)] p-5 md:grid-cols-[7.5rem_1fr] md:items-center md:p-6">
          <div className="relative aspect-square overflow-hidden border border-[color:var(--line)] bg-black">
            <Image
              src={selectedItem.coverImage ?? selectedItem.artwork}
              alt={`${selectedItem.title} catalogue artwork`}
              fill
              sizes="120px"
              className="object-cover"
            />
          </div>

          <div className="grid gap-4">
            <div>
              <p className="eyebrow">Catalogue Preview</p>
              <h2 className="brand-heading mt-2 text-3xl leading-tight text-ivory">
                {selectedItem.title}
              </h2>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">
                {selectedItem.artist}
              </p>
              <p className="mt-3 text-sm leading-6 text-[color:var(--text-secondary)]">
                {selectedItem.publishingContext}. Preview for catalogue context
                only.
              </p>
            </div>

            <CataloguePreviewPlayer
              key={selectedItem.title}
              audioPath={selectedItem.previewAudioPath}
              durationLimit={selectedItem.previewDurationLimit}
              label={selectedItem.previewLabel}
              playbackCommand={playbackCommand}
              variant="showcase"
            />
          </div>
        </section>
      ) : null}
    </div>
  );
}
