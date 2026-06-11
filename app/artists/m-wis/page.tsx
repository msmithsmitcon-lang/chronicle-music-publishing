import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArtistCatalogue, getArtistProfile } from "@/lib/artists";
import { assets } from "@/lib/assets";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const artist = getArtistProfile("m-wis");

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/mwis.chronicle/", icon: FaInstagram },
  { label: "Facebook", href: "https://www.facebook.com/mwis.chronicle", icon: FaFacebookF },
  { label: "YouTube", href: "https://www.youtube.com/@M-Wis", icon: FaYoutube },
  { label: "TikTok", href: "https://www.tiktok.com/@mwis.chronicle", icon: FaTiktok },
];

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
      <section className="relative min-h-[52svh] overflow-hidden border-b border-[color:var(--line)] sm:min-h-[72vh]">
        <Image
          src="/assets/chronicle-sections/studio-control-room.png"
          alt="M-WIS in the Chronicle studio environment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.94)_0%,rgba(5,5,5,0.78)_34%,rgba(5,5,5,0.28)_68%,rgba(5,5,5,0.58)_100%),linear-gradient(180deg,rgba(5,5,5,0.18)_0%,rgba(5,5,5,0.28)_52%,#0A0A0A_100%)]" />
        <div className="section-shell relative z-10 min-h-[52svh] sm:min-h-[72vh]" />
      </section>

      <div className="gold-divider" />

      <section className="relative overflow-hidden px-4 py-4 md:px-8">
        <article className="relative overflow-hidden rounded-[0.62rem] border border-[rgba(217,170,73,0.44)] bg-[rgba(3,3,3,0.76)] shadow-[0_22px_70px_rgba(0,0,0,0.6),inset_0_0_0_1px_rgba(255,255,255,0.035),inset_0_0_50px_rgba(217,170,73,0.035)] lg:min-h-[24rem]">
          <div className="absolute inset-0 lg:left-[30%]">
            <Image
              src="/assets/branding/chronicle music Artist Page Hero.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover object-[49%_22%] brightness-[0.88] contrast-[1.14] saturate-[1.06]"
            />
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.98)_0%,rgba(5,5,5,0.92)_28%,rgba(5,5,5,0.48)_49%,rgba(5,5,5,0.18)_70%,rgba(5,5,5,0.5)_100%),linear-gradient(180deg,rgba(5,5,5,0.08),rgba(5,5,5,0.62))]" />

          <div className="absolute right-4 top-5 z-10 hidden h-24 w-24 place-items-center rounded-full border border-[rgba(217,170,73,0.44)] bg-[radial-gradient(circle_at_50%_50%,rgba(217,170,73,0.12),rgba(0,0,0,0.4)_57%,rgba(0,0,0,0.64)),rgba(0,0,0,0.34)] shadow-[0_0_54px_rgba(217,170,73,0.18),inset_0_0_34px_rgba(217,170,73,0.1)] backdrop-blur sm:grid lg:right-[8.4%] lg:top-[44%] lg:h-[10.8rem] lg:w-[10.8rem] lg:-translate-y-1/2">
            <Image
              src={assets.catalogue.mWisSharedCover}
              alt="M-WIS"
              width={170}
              height={170}
              className="h-16 w-16 object-contain opacity-95 lg:h-[7.8rem] lg:w-[7.8rem]"
            />
          </div>

          <div className="relative z-10 flex w-full flex-col items-start p-5 pb-6 sm:p-8 lg:w-[min(48%,32rem)] lg:p-10">
            <p className="eyebrow">Represented Artist</p>
            <h2 className="mt-4 text-[clamp(3rem,18vw,4.4rem)] font-medium uppercase leading-[0.9] tracking-[-0.04em] text-ivory lg:mt-5 lg:text-[clamp(4rem,6.1vw,5.55rem)]">
              {artist.name}
            </h2>
            <p className="mt-4 max-w-[28rem] text-[0.68rem] font-bold uppercase leading-[1.65] tracking-[0.16em] text-[color:var(--gold-accent)] sm:text-xs sm:tracking-[0.21em]">
              Producer. Songwriter. Music Creator. Creative Visionary.
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={`Follow M-Wis on ${label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-[rgba(217,170,73,0.36)] bg-black/35 text-[color:var(--gold-accent)] transition hover:border-[color:var(--gold-accent)] hover:bg-[rgba(217,170,73,0.12)] hover:text-ivory"
                >
                  <Icon size={17} />
                </Link>
              ))}
            </div>

            <p className="mt-5 max-w-[28rem] text-sm leading-7 text-[rgba(248,241,223,0.76)] sm:text-[0.93rem] sm:leading-[1.75]">
              {artist.biography}
            </p>
          </div>

          <div className="relative z-20 mx-5 mb-5 grid grid-cols-2 gap-3 border border-[rgba(217,170,73,0.2)] bg-[linear-gradient(180deg,rgba(8,8,8,0.76),rgba(8,8,8,0.44))] p-3 backdrop-blur sm:mx-8 sm:gap-5 sm:p-4 lg:absolute lg:bottom-5 lg:left-8 lg:right-8 lg:mx-0 lg:mb-0 lg:grid-cols-4">
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
        <div className="relative mx-auto max-w-[96rem] overflow-hidden rounded-[0.62rem] border border-[rgba(217,170,73,0.28)] bg-black p-5 shadow-[0_22px_70px_rgba(0,0,0,0.55),inset_0_0_0_1px_rgba(255,255,255,0.03)] md:p-8 lg:min-h-[42rem]">
          <Image src={assets.catalogue.mWisCreativeArchive} alt="" fill sizes="100vw" className="absolute inset-0 object-cover opacity-82" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_28%,rgba(212,175,55,0.24),transparent_22rem),linear-gradient(90deg,rgba(3,3,3,0.58)_0%,rgba(3,3,3,0.34)_44%,rgba(3,3,3,0.88)_100%),linear-gradient(180deg,rgba(3,3,3,0.08)_0%,rgba(3,3,3,0.76)_100%)]" />

          <div className="relative z-10 grid gap-6 lg:min-h-[38rem] lg:grid-cols-[1.2fr_0.8fr]">
            <div className="flex h-full flex-col justify-between gap-8">
              <div className="max-w-[43rem]">
                <p className="eyebrow">Featured Catalogue</p>
                <h2 className="brand-heading mt-4 text-[clamp(2.35rem,13vw,3.6rem)] leading-[0.95] tracking-[-0.045em] text-ivory sm:mt-5 lg:text-[clamp(2.7rem,4.2vw,4.8rem)] lg:tracking-[-0.055em]">
                  The works of M-WIS.
                  <span className="block text-[color:var(--gold-accent)]">A creative archive.</span>
                </h2>
                <div className="mt-6 h-px w-16 bg-[color:var(--gold-accent)]" />
                <p className="mt-5 max-w-[31rem] text-base leading-7 text-[rgba(248,241,223,0.82)] sm:mt-6 sm:text-lg sm:leading-8">
                  Original works shaped through production, story, and sound. Built for catalogue value, licensing context, and long-term publishing representation.
                </p>
              </div>

              <Link href="/catalogue/browse" className="inline-flex w-fit rounded-full border border-[color:var(--gold)] bg-[linear-gradient(135deg,rgba(212,175,55,0.1),rgba(0,0,0,0.24))] px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--gold-accent)] transition hover:border-[color:var(--gold-accent)] hover:bg-[linear-gradient(135deg,rgba(212,175,55,0.18),rgba(0,0,0,0.3))] hover:text-ivory">
                View Catalogue <span className="ml-4">-&gt;</span>
              </Link>
            </div>

            <aside className="grid content-start gap-3">
              <section className="cinematic-panel bg-black/60 p-5 backdrop-blur-sm">
                <p className="eyebrow">Publishing Representation</p>
                <h2 className="brand-heading mt-3 text-3xl text-ivory">Creative Catalogue Representation</h2>
                <div className="mt-5 grid gap-3 text-sm leading-7 text-[color:var(--text-secondary)]">
                  {artist.publishingFocus.map((item) => (
                    <p key={item} className="border-b border-[color:var(--line)] pb-3 last:border-b-0">+ {item}</p>
                  ))}
                </div>
              </section>

              <section className="premium-panel bg-black/60 p-5 backdrop-blur-sm">
                <p className="eyebrow">Rights Profile</p>
                <div className="mt-5 grid gap-3 text-sm text-[color:var(--text-secondary)]">
                  {Object.entries(artist.metadata).map(([key, value]) => (
                    <div key={key} className="border border-[color:var(--line)] bg-black/40 p-4">
                      <span className="block text-xs uppercase tracking-[0.16em] text-stone-500">{key.replace(/([A-Z])/g, " $1")}</span>
                      <span className="mt-2 block text-ivory">{value}</span>
                    </div>
                  ))}
                </div>
              </section>

              <Link href="/contact" className="border border-[color:var(--gold)] bg-[linear-gradient(135deg,var(--gold-accent),var(--gold))] px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-black shadow-[0_18px_55px_var(--glow)] transition hover:-translate-y-0.5">
                Publishing / Licensing Discussion
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}



















