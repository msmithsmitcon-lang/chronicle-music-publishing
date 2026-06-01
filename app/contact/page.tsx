import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Chronicle Music Publishing for publishing, selected works, represented artist, catalogue, and licensing discussion enquiries.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="section-shell py-[var(--space-section)]">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.1fr]">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="brand-heading mt-4 text-4xl leading-tight text-ivory md:text-6xl">
              Publishing, catalogue, and licensing discussions.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[color:var(--text-secondary)]">
              Reach {brand.name} through the listed email addresses for
              publishing conversations, selected works and catalogue context,
              represented artist enquiries, rights documentation, and licensing
              discussion where applicable.
            </p>
            <div className="mt-10 grid gap-3 text-sm text-[color:var(--text-secondary)]">
              <p>{brand.emails.info}</p>
              <p>{brand.emails.licensing}</p>
              <p>{brand.emails.admin}</p>
              <p>{brand.location}</p>
            </div>
            <div className="cinematic-panel asset-placeholder mt-10 min-h-72 p-6">
              <div className="relative z-10 flex h-full min-h-60 flex-col justify-between">
                <p className="eyebrow">Publishing Desk</p>
                <p className="max-w-sm text-sm leading-7 text-[color:var(--text-secondary)]">
                  Publishing, selected works, catalogue, and licensing
                  enquiries can begin through the listed email addresses.
                </p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
