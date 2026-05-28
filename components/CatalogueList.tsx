import Image from "next/image";
import { catalogueItems } from "@/lib/catalogue";

export function CatalogueList() {
  return (
    <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
      {catalogueItems.map((item) => (
        <article
          key={item.title}
          className="premium-panel group overflow-hidden p-0 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--gold)]"
        >
          <div className="relative aspect-[4/3] overflow-hidden border-b border-[color:var(--line)] bg-[#0F0F0F]">
            <Image
              src={item.artwork}
              alt={`${item.title} catalogue artwork`}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover opacity-[0.82] transition duration-500 group-hover:scale-105 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.1),rgba(10,10,10,0.82)),radial-gradient(circle_at_50%_20%,rgba(212,175,55,0.16),transparent_18rem)]" />
            <div className="relative z-10 flex h-full min-h-56 flex-col justify-between p-6">
              <p className="eyebrow">Publishing Work</p>
              <div>
                <div className="mb-5 h-px w-20 bg-[linear-gradient(90deg,var(--gold-accent),transparent)]" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                  Rights Record
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5 p-6">
            <div>
              <h2 className="brand-heading text-3xl text-ivory">
                {item.title}
              </h2>
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-stone-400">
                {item.artist}
              </p>
              <p className="mt-4 text-sm leading-7 text-[color:var(--text-secondary)]">
                {item.notes}
              </p>
            </div>

            <div className="grid gap-2 text-sm text-[color:var(--text-secondary)]">
              <div className="border border-[color:var(--line)] bg-black/30 p-4 transition group-hover:border-white/15">
                <span className="block text-xs uppercase tracking-[0.16em] text-stone-500">
                  Genre
                </span>
                <span className="mt-2 block text-ivory">{item.genre}</span>
              </div>
              <div className="border border-[color:var(--line)] bg-black/30 p-4 transition group-hover:border-white/15">
                <span className="block text-xs uppercase tracking-[0.16em] text-stone-500">
                  Duration
                </span>
                <span className="mt-2 block text-ivory">{item.duration}</span>
              </div>
              <div className="border border-[color:var(--line)] bg-black/30 p-4 transition group-hover:border-white/15">
                <span className="block text-xs uppercase tracking-[0.16em] text-stone-500">
                  Status
                </span>
                <span className="mt-2 block text-ivory">{item.status}</span>
              </div>
              <div className="border border-[color:var(--line)] bg-black/30 p-4 transition group-hover:border-white/15">
                <span className="block text-xs uppercase tracking-[0.16em] text-stone-500">
                  Publishing Owner
                </span>
                <span className="mt-2 block text-ivory">
                  {item.publishingOwner}
                </span>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
