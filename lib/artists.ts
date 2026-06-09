import { catalogueItems, type CatalogueItem } from "@/lib/catalogue";
import { assets } from "@/lib/assets";

const mWisLogo = assets.catalogue.mWisSharedCover;

const mWisProfileCatalogueItems: CatalogueItem[] = [
  ...catalogueItems
    .filter((item) => item.artist === "M-WIS")
    .map((item) => ({
      ...item,
      artwork: mWisLogo,
      coverImage: mWisLogo,
    })),
];

export type ArtistProfile = {
  slug: string;
  name: string;
  descriptor: string;
  biography: string;
  image: string | null;
  representedBy: string;
  publishingFocus: string[];
  metadata: {
    role: string;
    catalogueStatus: string;
    territory: string;
    publishingContext: string;
  };
  streamingNote: string;
};

export const artistProfiles: ArtistProfile[] = [
  {
    slug: "m-wis",
    name: "M-WIS",
    descriptor:
      "Writer, recording artist, and sonic storyteller within the Chronicle Music catalogue.",
    biography:
      "M-WIS is a Chronicle Music artist with a voice rooted in story, faith, memory, and lived experience. His work forms part of a growing catalogue shaped around original music, emotional connection, and long-term creative value.",
    image: assets.artists.mWisProfile,
    representedBy: "Chronicle Music Publishing",
    publishingFocus: [
      "Artist development",
      "Original music catalogue",
      "Release and discovery potential",
      "Long-term catalogue growth",
    ],
    metadata: {
      role: "Writer / Recording Artist",
      catalogueStatus: "Selected represented works",
      territory: "South Africa and international enquiries",
      publishingContext: "Part of the Chronicle Music catalogue",
    },
    streamingNote: "Selected music and catalogue links are available through Chronicle Music.",
  },
  {
    slug: "huey-d",
    name: "Huey-D",
    descriptor:
      "DJ, producer, and creative profile within the Chronicle / Sentry Sound ecosystem.",
    biography:
      "Huey-D is presented as a DJ and producer profile connected to the Chronicle and Sentry Sound creative ecosystem. This profile is structured around production identity, artist development context, metadata readiness, and future catalogue links where applicable.",
    image: assets.artists.hueyDProfile,
    representedBy: "Chronicle Music Publishing",
    publishingFocus: [
      "Production identity",
      "Artist development context",
      "Metadata and creator records",
      "Future catalogue readiness",
    ],
    metadata: {
      role: "DJ and producer",
      catalogueStatus: "DJ and producer profile",
      territory: "South Africa and international enquiries",
      publishingContext: "Creative profile within Chronicle Music Publishing",
    },
    streamingNote: "Selected music and catalogue links are available through Chronicle Music.",
  },
];

export function getArtistProfile(slug: string) {
  return artistProfiles.find((artist) => artist.slug === slug);
}

export function getArtistCatalogue(artistName: string): CatalogueItem[] {
  if (artistName === "M-WIS") {
    return mWisProfileCatalogueItems;
  }

  return catalogueItems.filter((item) => item.artist === artistName);
}

