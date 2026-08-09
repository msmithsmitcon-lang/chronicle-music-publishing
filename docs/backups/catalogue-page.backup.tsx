import type { Metadata } from "next";
import { CatalogueList } from "@/components/CatalogueList";

export const metadata: Metadata = {
  title: "Catalogue",
  description:
    "Selected catalogue works, represented songs, rights-aware notes, and licensing discussion where applicable.",
};

export default function CataloguePage() {
  return (
    <main>
      <section className="section-shell py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">Catalogue</p>
          <h1 className="brand-heading mt-4 max-w-4xl text-4xl leading-tight text-ivory md:text-6xl">
            Selected catalogue works for rights-aware publishing context.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--text-secondary)]">
            A curated catalogue view for selected works, ownership context,
            publishing notes, and licensing discussion where applicable. M-WIS
            is shown here as a represented artist within Chronicle Music
            Publishing.
          </p>
        </div>
      </section>

      <div className="gold-divider" />

      <section className="section-shell py-14 md:py-16">
        <CatalogueList />
      </section>
    </main>
  );
}
