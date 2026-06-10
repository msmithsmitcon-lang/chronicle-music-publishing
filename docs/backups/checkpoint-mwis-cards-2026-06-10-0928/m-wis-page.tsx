import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArtistCatalogue, getArtistProfile } from "@/lib/artists";
import { assets } from "@/lib/assets";

const artist = getArtistProfile("m-wis");

export const metadata: Metadata = {
  title: "M-WIS",
  description:
    "M-WIS is a represented artist within Chronicle Music Publishing.",
};

export default function MWisArtistPage() {
  if (!artist) {
    notFound();
  }

  const selectedCatalogue = getArtistCatalogue(artist.name);

  return (
    <main>
      <section className="relative min-h-[72vh] overflow-hidden border-b border-[color:var(--line)]">
        <Image
          src="/assets/chronicle-sections/studio-control-room.png"
          alt="M-WIS in the Chronicle studio environment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.94)_0%,rgba(5,5,5,0.78)_34%,rgba(5,5,5,0.28)_68%,rgba(5,5,5,0.58)_100%),linear-gradient(180deg,rgba(5,5,5,0.18)_0%,rgba(5,5,5,0.28)_52%,#0A0A0A_100%)]" />
        <div className="section-shell relative z-10 min-h-[72vh]" />
      </section>

      <div className="gold-divider" />

      <section className="relative overflow-hidden px-4 py-4 md:px-8">
        <article className="relative min-h-[24rem] overflow-hidden rounded-[0.62rem] border border-[rgba(217,170,73,0.44)] bg-[rgba(3,3,3,0.76)] shadow-[0_22px_70px_rgba(0,0,0,0.6),inset_0_0_0_1px_rgba(255,255,255,0.035),inset_0_0_50px_rgba(217,170,73,0.035)]">
          <div className="absolute inset-0 left-[30%]">
            <Image
              src="/assets/branding/chronicle music Artist Page Hero.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover object-[49%_22%] brightness-[0.88] contrast-[1.14] saturate-[1.06]"
            />
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.98)_0%,rgba(5,5,5,0.92)_28%,rgba(5,5,5,0.48)_49%,rgba(5,5,5,0.18)_70%,rgba(5,5,5,0.5)_100%),linear-gradient(180deg,rgba(5,5,5,0.08),rgba(5,5,5,0.62))]" />

          <div className="absolute right-[8.4%] top-[44%] z-10 grid h-[10.8rem] w-[10.8rem] -translate-y-1/2 place-items-center rounded-full border border-[rgba(217,170,73,0.44)] bg-[radial-gradient(circle_at_50%_50%,rgba(217,170,73,0.12),rgba(0,0,0,0.4)_57%,rgba(0,0,0,0.64)),rgba(0,0,0,0.34)] shadow-[0_0_54px_rgba(217,170,73,0.18),inset_0_0_34px_rgba(217,170,73,0.1)] backdrop-blur">
            <Image
              src={assets.catalogue.mWisSharedCover}
              alt="M-WIS"
              width={170}
              height={170}
              className="h-[7.8rem] w-[7.8rem] object-contain opacity-95"
            />
          </div>

          <div className="relative z-10 flex w-[min(48%,32rem)] flex-col items-start p-10">
            <p className="eyebrow">Represented Artist</p>
            <h2 className="mt-5 text-[clamp(4rem,6.1vw,5.55rem)] font-medium uppercase leading-[0.9] tracking-[-0.04em] text-ivory">
              {artist.name}
            </h2>
            <p className="mt-4 max-w-[28rem] text-xs font-bold uppercase leading-[1.65] tracking-[0.21em] text-[color:var(--gold-accent)]">
              Writer. Recording artist. Sonic storyteller.
            </p>
            <p className="mt-5 max-w-[28rem] text-[0.93rem] leading-[1.75] text-[rgba(248,241,223,0.76)]">
              {artist.biography}
            </p>
          </div>

          <div className="absolute bottom-5 left-8 right-8 z-20 grid grid-cols-4 gap-5 border border-[rgba(217,170,73,0.2)] bg-[linear-gradient(180deg,rgba(8,8,8,0.76),rgba(8,8,8,0.44))] p-4 backdrop-blur">
            <div>
              <strong className="block text-xs font-bold uppercase tracking-[0.17em] text-[color:var(--gold-accent)]">
                {selectedCatalogue.length} works
              </strong>
              <span className="mt-1 block text-[0.6rem] font-bold uppercase tracking-[0.11em] text-[rgba(248,241,223,0.68)]">
                Selected catalogue
              </span>
            </div>
            <div>
              <strong className="block text-xs font-bold uppercase tracking-[0.17em] text-[color:var(--gold-accent)]">
                South Africa
              </strong>
              <span className="mt-1 block text-[0.6rem] font-bold uppercase tracking-[0.11em] text-[rgba(248,241,223,0.68)]">
                Global vision
              </span>
            </div>
            <div>
              <strong className="block text-xs font-bold uppercase tracking-[0.17em] text-[color:var(--gold-accent)]">
                Story / Soul
              </strong>
              <span className="mt-1 block text-[0.6rem] font-bold uppercase tracking-[0.11em] text-[rgba(248,241,223,0.68)]">
                Creative focus
              </span>
            </div>
            <div>
              <strong className="block text-xs font-bold uppercase tracking-[0.17em] text-[color:var(--gold-accent)]">
                Chronicle
              </strong>
              <span className="mt-1 block text-[0.6rem] font-bold uppercase tracking-[0.11em] text-[rgba(248,241,223,0.68)]">
                Publishing home
              </span>
            </div>
          </div>
        </article>
      </section>
      <section className="section-shell px-4 py-6 md:px-8 md:py-8">
        <div className="mx-auto grid max-w-[96rem] gap-5 rounded-[0.62rem] border border-[rgba(217,170,73,0.28)] bg-[linear-gradient(135deg,rgba(6,6,6,0.96),rgba(14,10,4,0.72),rgba(3,3,3,0.96))] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.55),inset_0_0_0_1px_rgba(255,255,255,0.03)] lg:grid-cols-[1.2fr_0.8fr] md:p-8">
          <div>
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="eyebrow">Featured Catalogue</p>
                <h2 className="brand-heading mt-3 text-3xl text-ivory md:text-4xl">
                  THE WORKS OF M-WIS.
A CREATIVE ARCHIVE.
                </h2>
              </div>
              <Link
                href="/catalogue"
                className="hidden rounded-full border border-[color:var(--gold)] bg-[linear-gradient(135deg,rgba(212,175,55,0.1),rgba(0,0,0,0.24))] px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--gold-accent)] transition hover:border-[color:var(--gold-accent)] hover:bg-[linear-gradient(135deg,rgba(212,175,55,0.18),rgba(0,0,0,0.3))] hover:text-ivory md:inline-flex"
              >
                View Catalogue
              </Link>
            </div>
            <Link
              href="/catalogue"
              className="group relative block min-h-[24rem] overflow-hidden rounded-[0.62rem] border border-[rgba(217,170,73,0.34)] bg-black shadow-[0_22px_70px_rgba(0,0,0,0.58)]"
            >
              <Image
                src={assets.catalogue.mWisCreativeArchive}
                alt="The works of M-WIS creative archive"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover opacity-90 transition duration-500 group-hover:scale-[1.025] group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,3,0.04),rgba(3,3,3,0.52))]" />
            </Link>
          </div>

          <aside className="grid gap-5">
            <section className="cinematic-panel p-6">
              <p className="eyebrow">Publishing Representation</p>
              <h2 className="brand-heading mt-3 text-3xl text-ivory">
                Creative Catalogue Representation
              </h2>
              <div className="mt-5 grid gap-3 text-sm leading-7 text-[color:var(--text-secondary)]">
                {artist.publishingFocus.map((item) => (
                  <p key={item} className="border-b border-[color:var(--line)] pb-3 last:border-b-0">+ {item}</p>
                ))}
              </div>
            </section>

            <section className="premium-panel p-6">
              <p className="eyebrow">Rights Profile</p>
              <div className="mt-5 grid gap-3 text-sm text-[color:var(--text-secondary)]">
                {Object.entries(artist.metadata).map(([key, value]) => (
                  <div
                    key={key}
                    className="border border-[color:var(--line)] bg-black/30 p-4"
                  >
                    <span className="block text-xs uppercase tracking-[0.16em] text-stone-500">
                      {key.replace(/([A-Z])/g, " $1")}
                    </span>
                    <span className="mt-2 block text-ivory">{value}</span>
                  </div>
                ))}
              </div>
            </section>

            <Link
              href="/contact"
              className="border border-[color:var(--gold)] bg-[linear-gradient(135deg,var(--gold-accent),var(--gold))] px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-black shadow-[0_18px_55px_var(--glow)] transition hover:-translate-y-0.5"
            >
              Publishing / Licensing Discussion
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}


















