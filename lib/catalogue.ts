import { assets } from "@/lib/assets";

export type CatalogueItem = {
  title: string;
  artist: string;
  genre: string;
  status: string;
  publishingContext: string;
  notes: string;
  artwork: string;
  coverImage?: string;
  previewAudioPath?: string;
  previewDurationLimit?: number;
  previewLabel?: string;
};

export const catalogueItems: CatalogueItem[] = [
  {
    title: "As Ek Vannag Kon Uitvee",
    artist: "M-WIS",
    genre: "Afrikaanse Adult Contemporary",
    status: "Selected represented work",
    publishingContext: "Represented by Chronicle Music Publishing",
    notes:
      "Selected work for catalogue presentation, publishing context, and licensing discussion where applicable.",
    artwork: assets.catalogue.asEkVannagKonUitveeCover,
    coverImage: assets.catalogue.asEkVannagKonUitveeCover,
    previewAudioPath:
      "/catalogue/audio/As ek vannag kon uitvee.mp3",
    previewDurationLimit: 60,
    previewLabel: "60-second preview",
  },
  {
    title: "Its Time to Move On",
    artist: "M-WIS",
    genre: "Adult Contemporary",
    status: "Selected represented work",
    publishingContext: "Represented by Chronicle Music Publishing",
    notes:
      "Selected M-WIS work included for catalogue presentation, publishing notes, and licensing discussion where applicable.",
    artwork: assets.catalogue.itsTimeToMoveOnCover,
    coverImage: assets.catalogue.itsTimeToMoveOnCover,
    previewAudioPath: "/catalogue/audio/Its Time to Move On.mp3",
    previewDurationLimit: 60,
    previewLabel: "60-second preview",
  },
  {
    title: "Vier goue sterre",
    artist: "M-WIS",
    genre: "Afrikaans Pop",
    status: "Selected represented work",
    publishingContext: "Represented by Chronicle Music Publishing",
    notes:
      "Selected M-WIS work included for catalogue presentation, metadata notes, and publishing context.",
    artwork: assets.catalogue.vierGoueSterreCover,
    coverImage: assets.catalogue.vierGoueSterreCover,
    previewAudioPath: "/catalogue/audio/Vier goue sterre.mp3",
    previewDurationLimit: 60,
    previewLabel: "60-second preview",
  },
];
