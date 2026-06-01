import { catalogueItems, type CatalogueItem } from "@/lib/catalogue";

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
  streamingLinks: {
    label: string;
    href: string | null;
  }[];
};

export const artistProfiles: ArtistProfile[] = [
  {
    slug: "m-wis",
    name: "M-WIS",
    descriptor:
      "Writer, recording artist, and represented artist within Chronicle Music Publishing.",
    biography:
      "M-WIS is a represented artist and development catalogue example within Chronicle Music Publishing. The profile is structured around rights-aware presentation, selected works, publishing details in preparation, and licensing discussion where applicable rather than social or fan-led promotion.",
    image: null,
    representedBy: "Chronicle Music Publishing",
    publishingFocus: [
      "Catalogue stewardship",
      "Composition rights documentation",
      "Licensing suitability review",
      "Metadata and ownership records",
    ],
    metadata: {
      role: "Writer / Recording Artist",
      catalogueStatus: "Development catalogue example",
      territory: "South Africa and international enquiries",
      publishingContext: "Represented by Chronicle Music Publishing",
    },
    streamingLinks: [
      { label: "Spotify TBC", href: null },
      { label: "Apple Music TBC", href: null },
      { label: "YouTube Music TBC", href: null },
    ],
  },
];

export function getArtistProfile(slug: string) {
  return artistProfiles.find((artist) => artist.slug === slug);
}

export function getArtistCatalogue(artistName: string): CatalogueItem[] {
  return catalogueItems.filter((item) => item.artist === artistName);
}
