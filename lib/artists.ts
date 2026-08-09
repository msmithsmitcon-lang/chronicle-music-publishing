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
      "Writer, recording artist, and represented artist within Chronicle Music Publishing.",
    biography:
      "M-WIS is a represented artist within Chronicle Music Publishing. The profile is structured around rights-aware presentation, selected works, publishing context, and licensing discussion where applicable rather than social or fan-led promotion.",
    image: assets.artists.mWisProfile,
    representedBy: "Chronicle Music Publishing",
    publishingFocus: [
      "Catalogue stewardship",
      "Composition rights documentation",
      "Licensing suitability review",
      "Metadata and ownership records",
    ],
    metadata: {
      role: "Writer / Recording Artist",
      catalogueStatus: "Selected works under publishing review",
      territory: "South Africa and international enquiries",
      publishingContext: "Represented by Chronicle Music Publishing",
    },
    streamingNote: "Streaming links pending.",
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
      catalogueStatus: "Producer profile in development",
      territory: "South Africa and international enquiries",
      publishingContext: "Creative profile within Chronicle Music Publishing",
    },
    streamingNote: "Streaming links pending.",
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
