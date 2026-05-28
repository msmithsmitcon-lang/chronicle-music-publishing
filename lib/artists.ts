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
    publishingOwner: string;
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
      "Writer, recording artist, and represented catalogue within Chronicle Music Publishing.",
    biography:
      "M-WIS is a represented artist and catalogue within Chronicle Music Publishing. The profile is structured around rights-aware presentation, selected works, publishing metadata, and licensing readiness rather than social or fan-led promotion.",
    image: null,
    representedBy: "Chronicle Music Publishing",
    publishingFocus: [
      "Catalogue stewardship",
      "Composition rights documentation",
      "Licensing readiness",
      "Metadata and ownership records",
    ],
    metadata: {
      role: "Writer / Recording Artist",
      catalogueStatus: "Represented catalogue",
      territory: "South Africa and international enquiries",
      publishingOwner: "Chronicle Music Publishing",
    },
    streamingLinks: [
      { label: "Spotify", href: null },
      { label: "Apple Music", href: null },
      { label: "YouTube Music", href: null },
    ],
  },
];

export function getArtistProfile(slug: string) {
  return artistProfiles.find((artist) => artist.slug === slug);
}

export function getArtistCatalogue(artistName: string): CatalogueItem[] {
  return catalogueItems.filter((item) => item.artist === artistName);
}
