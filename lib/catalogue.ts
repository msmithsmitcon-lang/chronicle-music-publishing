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
    status: "Publishing details in preparation",
    publishingOwner: "Chronicle Music Publishing",
    notes:
      "Selected work for rights review, catalogue presentation, and licensing discussion where applicable.",
    artwork: "/assets/catalogue/catalogue-dit-is-tyd-cover.jpg",
  },
  {
    title: "Represented Catalogue Work 02",
    artist: "M-WIS",
    genre: "Contemporary",
    duration: "TBC",
    status: "Development catalogue entry",
    publishingOwner: "Chronicle Music Publishing",
    notes:
      "Reserved entry for a represented song as ownership details, splits, and publishing information are prepared.",
    artwork: "/assets/catalogue/catalogue-placeholder-01.jpg",
  },
  {
    title: "Represented Catalogue Work 03",
    artist: "M-WIS",
    genre: "Contemporary",
    duration: "TBC",
    status: "Development catalogue entry",
    publishingOwner: "Chronicle Music Publishing",
    notes:
      "Early-stage represented work for catalogue organization, rights notes, and future licensing suitability review.",
    artwork: "/assets/catalogue/catalogue-placeholder-02.jpg",
  },
];
