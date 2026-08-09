"use client";

import { useEffect, useRef, useState } from "react";

type PlaybackCommand = {
  id: number;
  action: "play" | "pause";
};

type CataloguePreviewPlayerProps = {
  audioPath: string;
  durationLimit: number;
  label: string;
  playbackCommand?: PlaybackCommand;
  onPlayingChange?: (isPlaying: boolean) => void;
  variant?: "default" | "showcase";
};

export function CataloguePreviewPlayer({
  audioPath,
  durationLimit,
  label,
  playbackCommand,
  onPlayingChange,
  variant = "default",
}: CataloguePreviewPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const onPlayingChangeRef = useRef(onPlayingChange);
  const [endedAtLimit, setEndedAtLimit] = useState(false);

  useEffect(() => {
    onPlayingChangeRef.current = onPlayingChange;
  }, [onPlayingChange]);

  useEffect(() => {
    if (!audioRef.current || !playbackCommand) {
      return;
    }

    if (playbackCommand.action === "pause") {
      audioRef.current.pause();
      return;
    }

    setEndedAtLimit(false);
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {
      onPlayingChangeRef.current?.(false);
    });
  }, [playbackCommand]);

  function handlePlay() {
    if (!audioRef.current) {
      return;
    }

    setEndedAtLimit(false);
    audioRef.current.currentTime = 0;
    onPlayingChangeRef.current?.(true);
  }

  function handlePause() {
    onPlayingChangeRef.current?.(false);
  }

  function stopAtLimit() {
    if (!audioRef.current || audioRef.current.currentTime < durationLimit) {
      return;
    }

    audioRef.current.pause();
    audioRef.current.currentTime = durationLimit;
    setEndedAtLimit(true);
    onPlayingChangeRef.current?.(false);
  }

  function keepWithinLimit() {
    if (!audioRef.current || audioRef.current.currentTime <= durationLimit) {
      return;
    }

    audioRef.current.currentTime = durationLimit;
  }

  const isShowcase = variant === "showcase";

  return (
    <div
      className={
        isShowcase
          ? "border border-[rgba(200,169,107,0.26)] bg-[linear-gradient(135deg,rgba(0,0,0,0.72),rgba(24,20,12,0.72))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
          : "border border-[color:var(--line)] bg-black/30 p-4"
      }
    >
      <div className="mb-3 flex flex-col gap-1">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--gold-accent)]">
          {label}
        </span>
        <span className="text-xs leading-5 text-[color:var(--text-secondary)]">
          Preview for catalogue context only.
        </span>
      </div>
      <div
        className={
          isShowcase
            ? "rounded-sm border border-white/10 bg-black/65 p-2 [color-scheme:dark]"
            : ""
        }
      >
        <audio
          ref={audioRef}
          controls
          controlsList="nodownload noplaybackrate"
          preload="metadata"
          src={audioPath}
          className={
            isShowcase
              ? "block w-full opacity-85 mix-blend-luminosity contrast-125 saturate-0"
              : "w-full"
          }
          onPlay={handlePlay}
          onPause={handlePause}
          onEnded={handlePause}
          onTimeUpdate={stopAtLimit}
          onSeeking={keepWithinLimit}
        />
      </div>
      {endedAtLimit ? (
        <p className="mt-3 text-xs leading-5 text-[color:var(--text-secondary)]">
          Preview stopped at {durationLimit} seconds.
        </p>
      ) : null}
    </div>
  );
}
