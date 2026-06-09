import type { Metadata } from "next";
import ArtistsMockupPage from "./mockup/page";

export const metadata: Metadata = {
  title: "Artists",
  description:
    "A premium Chronicle Music Publishing artist presentation for M-WIS, selected works, publishing context, and represented catalogue identity.",
};

export default function ArtistsPage() {
  return <ArtistsMockupPage />;
}
