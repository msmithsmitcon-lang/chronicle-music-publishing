/*
 * Image asset registry for Chronicle Music Publishing.
 *
 * Manual replacement workflow:
 * - Keep file names stable and replace the file in /public with a new image.
 * - Rebuild or refresh the dev server; pages using this registry pick up the
 *   replacement without code edits.
 *
 * Adding new images:
 * - Put artist images in public/assets/artists using {artist-slug}-profile.ext.
 * - Put reusable/default artwork in public/assets/shared.
 * - Put catalogue-specific covers in public/catalogue/covers using
 *   {song-slug}-cover.ext or {artist-slug}-shared-cover.ext.
 * - Add one named export entry below only when introducing a new reusable asset.
 *
 * Fallback behavior:
 * - Use shared.defaultCover when a work has no individual cover.
 * - Use catalogue.mWisSharedCover for M-WIS catalogue/profile works that do not
 *   yet have individual artwork.
 */

export const assets = {
  artists: {
    mWisProfile: "/assets/artists/m-wis-profile.png",
    hueyDProfile: "/assets/artists/huey-d-profile.jpeg",
  },
  catalogue: {
    mWisSharedCover: "/catalogue/covers/m-wis-shared-cover.png",
    mWisCreativeArchive: "/assets/branding/m-wis-creative-archive.png",
    asEkVannagKonUitveeCover:
      "/catalogue/covers/As ek vannag kon uitvee Cover.jpeg",
    itsTimeToMoveOnCover: "/catalogue/covers/Its Time to Move On.jpg",
    vierGoueSterreCover: "/catalogue/covers/Vier goue sterre.jpg",
    showcasePlaceholderOne: "/assets/shared/chronicle-placeholder-cover.jpg",
    showcasePlaceholderTwo: "/assets/shared/chronicle-placeholder-cover-alt.png",
  },
  ecosystem: {
    hueyDMusicTechnologyLegacy: "/assets/ecosystem/huey-d-music-technology-legacy.png",
  },
  shared: {
    defaultCover: "/assets/shared/chronicle-placeholder-cover.jpg",
    defaultCoverAlt: "/assets/shared/chronicle-placeholder-cover-alt.png",
  },
} as const;

