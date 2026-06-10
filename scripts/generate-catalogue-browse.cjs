const fs = require("fs");
const path = require("path");
const xlsx = require("xlsx");

const workbookPath = path.join(
  process.cwd(),
  "data",
  "catalogue",
  "chronicle-master-catalogue.xlsx",
);

const outputPath = path.join(process.cwd(), "lib", "catalogueBrowse.ts");

function clean(value) {
  return value === undefined || value === null ? "" : String(value).trim();
}

function js(value) {
  return JSON.stringify(clean(value));
}

const workbook = xlsx.readFile(workbookPath);
const sheet = workbook.Sheets["Song Metadata"];

if (!sheet) {
  throw new Error("Sheet not found: Song Metadata");
}

const rows = xlsx.utils.sheet_to_json(sheet, { defval: "" });

const visibleRows = rows.filter((row) => {
  return clean(row["Website Visible"]).toLowerCase() === "yes";
});

const genreSortOrder = {
  "Adult Contemporary": 10,
  "Afrikaanse Adult Contemporary": 20,
  "Afrikaans Gospel Ballad": 30,
  "Christian Contemporary / CCM": 40,
  "Cape Folk": 50,
  Inspirational: 60,
  House: 70,
  "Dance / EDM": 80,
  Afrobeats: 90,
  Pop: 100,
  Trap: 110,
  "Hip-Hop": 120,
};

const songs = visibleRows
  .map((row) => {
    const title = clean(row["Song Title"]);
    const artist = clean(row["Artist"]);
    const genre = clean(row["Genre"]);
    const language = clean(row["Language"]);
    const mood =
      clean(row["Website Mood"]) ||
      clean(row["Mood / Theme"]) ||
      "Catalogue information available on request";

    const audioFileName = clean(row["Audio File Name"]);
    const audioBasePath = clean(row["Audio Base Path"]);
    const coverImageKey = clean(row["Cover Image Key"]).toLowerCase();

    const coverImage =
      coverImageKey === "hueyd"
        ? "assets.artists.hueyDProfile"
        : "catalogueBrowseCoverImage";

    return {
      title,
      artist,
      genre,
      language,
      mood,
      coverImage,
      audioFileName,
      audioBasePath,
      sortOrder: genreSortOrder[genre] ?? 999,
    };
  })
  .sort((a, b) => {
    if (a.sortOrder !== b.sortOrder) {
      return a.sortOrder - b.sortOrder;
    }

    return a.title.localeCompare(b.title);
  });

const lines = [];

lines.push('import { assets } from "@/lib/assets";');
lines.push("");
lines.push("export type CatalogueBrowseSong = {");
lines.push("  title: string;");
lines.push("  artist: string;");
lines.push("  genre: string;");
lines.push("  language: string;");
lines.push("  mood: string;");
lines.push("  coverImage: string;");
lines.push("  audioFileName?: string;");
lines.push('  audioBasePath?: "/catalogue/audio" | "/catalogue/audio-huey-d";');
lines.push("};");
lines.push("");
lines.push(
  "export const catalogueBrowseCoverImage = assets.catalogue.mWisSharedCover;",
);
lines.push("");
lines.push("export const catalogueBrowseSongs: CatalogueBrowseSong[] = [");

for (const song of songs) {
  lines.push("  {");
  lines.push(`    title: ${js(song.title)},`);
  lines.push(`    artist: ${js(song.artist)},`);
  lines.push(`    genre: ${js(song.genre)},`);
  lines.push(`    language: ${js(song.language)},`);
  lines.push(`    mood: ${js(song.mood)},`);
  lines.push(`    coverImage: ${song.coverImage},`);
  if (song.audioFileName) {
    lines.push(`    audioFileName: ${js(song.audioFileName)},`);
  }
  if (song.audioBasePath) {
    lines.push(`    audioBasePath: ${js(song.audioBasePath)},`);
  }
  lines.push("  },");
}

lines.push("];");
lines.push("");
lines.push("export const catalogueBrowseArtists = Array.from(");
lines.push("  new Set(catalogueBrowseSongs.map((song) => song.artist)),");
lines.push(").sort();");
lines.push("");
lines.push("export const catalogueBrowseGenres = Array.from(");
lines.push("  new Set(catalogueBrowseSongs.map((song) => song.genre)),");
lines.push(").sort();");
lines.push("");
lines.push("export const catalogueBrowseLanguages = Array.from(");
lines.push("  new Set(catalogueBrowseSongs.map((song) => song.language)),");
lines.push(").sort();");
lines.push("");

fs.writeFileSync(outputPath, lines.join("\n"), "utf8");

console.log(`Generated ${songs.length} catalogue songs.`);
console.log(`Output: ${outputPath}`);
