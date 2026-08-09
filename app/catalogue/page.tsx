import type { Metadata } from "next";
import CatalogueMockupPage from "./mockup/page";

export const metadata: Metadata = {
  title: "Catalogue",
  description:
    "Selected catalogue works, represented songs, rights-aware notes, and licensing discussion where applicable.",
};

export default function CataloguePage() {
  return <CatalogueMockupPage />;
}
