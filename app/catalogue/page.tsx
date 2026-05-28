import { CatalogueList } from "@/components/CatalogueList";

export default function CataloguePage() {
  return (
    <main>
      <section className="section-shell py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">Catalogue</p>
          <h1 className="brand-heading mt-4 max-w-4xl text-4xl leading-tight text-ivory md:text-6xl">
            Represented catalogue records for rights, publishing, and licensing
            review.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--text-secondary)]">
            A professional catalogue view for composition metadata, ownership
            status, administration notes, and direct licensing enquiries. M-WIS
            is shown here as an early represented catalogue example.
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
