import { assets } from "@/lib/assets";

export type HueyDTrack = {
  title: string;
  artist: "Huey-D";
  genre: "Hip Hop";
  fileName: string;
  coverImage: string;
  note: string;
};

export const hueyDTracks: HueyDTrack[] = [
  {
    title: "Growing Up at the Crossroads",
    artist: "Huey-D",
    genre: "Hip Hop",
    fileName: "Growing Up at the Crossroads.mp3",
    coverImage: assets.artists.hueyDProfile,
    note: "Producer-led hip-hop work presented for catalogue and development context.",
  },
  {
    title: "Huey-D French Inspired",
    artist: "Huey-D",
    genre: "Hip Hop",
    fileName: "Heuy-D French Inspired.mp3",
    coverImage: assets.artists.hueyDProfile,
    note: "Hip-hop production sketch presented for creative profile context.",
  },
  {
    title: "South Side Rhythm",
    artist: "Huey-D",
    genre: "Hip Hop",
    fileName: "South side Rythm.mp3",
    coverImage: assets.artists.hueyDProfile,
    note: "Hip-hop work presented for producer identity and catalogue readiness context.",
  },
  {
    title: "Windsor Knot",
    artist: "Huey-D",
    genre: "Hip Hop",
    fileName: "Windsor Knot.mp3",
    coverImage: assets.artists.hueyDProfile,
    note: "Hip-hop work presented for production context and future catalogue alignment.",
  },
];
