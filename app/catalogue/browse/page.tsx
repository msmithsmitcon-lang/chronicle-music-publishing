import type { Metadata } from "next";
import { CatalogueBrowse } from "@/components/CatalogueBrowse";

export const metadata: Metadata = {
  title: "Catalogue Browse",
  description:
    "Browse the Chronicle Music catalogue by title, category, language, mood, and preview availability.",
};

export default function CatalogueBrowsePage() {
  return (
    <main>
      <section className="section-shell py-16 md:py-20">
        <CatalogueBrowse />
      </section>
    </main>
  );
}
