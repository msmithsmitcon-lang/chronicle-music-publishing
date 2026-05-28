export type CatalogueItem = {
  title: string;
  artist: string;
  genre: string;
  duration: string;
  status: string;
  publishingOwner: string;
  notes: string;
  artwork: string;
};

export const catalogueItems: CatalogueItem[] = [
  {
    title: "Dit Is Tyd",
    artist: "M-WIS",
    genre: "Contemporary / Afrikaans",
    duration: "TBC",
    status: "Publishing metadata in preparation",
    publishingOwner: "Chronicle Music Publishing",
    notes:
      "Initial sample work for rights administration, catalogue review, and direct licensing enquiries.",
    artwork: "/assets/catalogue/catalogue-dit-is-tyd-cover.jpg",
  },
  {
    title: "Represented Catalogue Work 02",
    artist: "M-WIS",
    genre: "Contemporary",
    duration: "TBC",
    status: "Catalogue placeholder",
    publishingOwner: "Chronicle Music Publishing",
    notes:
      "Reserved catalogue entry for future composition metadata, split confirmation, and licensing review.",
    artwork: "/assets/catalogue/catalogue-placeholder-01.jpg",
  },
  {
    title: "Represented Catalogue Work 03",
    artist: "M-WIS",
    genre: "Contemporary",
    duration: "TBC",
    status: "Catalogue placeholder",
    publishingOwner: "Chronicle Music Publishing",
    notes:
      "Early-stage publishing record for catalogue ownership, administration, and rights documentation.",
    artwork: "/assets/catalogue/catalogue-placeholder-02.jpg",
  },
];
