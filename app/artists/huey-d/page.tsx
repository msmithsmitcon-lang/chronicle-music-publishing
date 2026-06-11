import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HueyDCollection } from "@/components/HueyDCollection";
import { getArtistProfile } from "@/lib/artists";
import { assets } from "@/lib/assets";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const artist = getArtistProfile("huey-d");

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61590918562984", icon: FaFacebookF },
  { label: "Instagram", href: "https://www.instagram.com/hueyd.chronicle/", icon: FaInstagram },
  { label: "YouTube", href: "https://www.youtube.com/@HueyDOfficial", icon: FaYoutube },
  { label: "TikTok", href: "https://www.tiktok.com/@hueyd.chronicle", icon: FaTiktok },
];

export const metadata: Metadata = {
  title: "Huey-D",
  description:
    "Huey-D is presented as a DJ and producer profile within the Chronicle Music Publishing creative ecosystem.",
};

export default function HueyDArtistPage() {
  if (!artist) {
    notFound();
  }

  return (
    <main>
      <section className="section-shell py-8 sm:py-12 md:py-20">
        <div className="relative mx-auto min-h-[30rem] max-w-7xl overflow-hidden rounded-[0.62rem] border border-[rgba(217,170,73,0.28)] bg-black shadow-[0_22px_70px_rgba(0,0,0,0.55),inset_0_0_0_1px_rgba(255,255,255,0.03)] sm:min-h-[34rem]">
          <Image
            src={artist.image ?? "/assets/shared/chronicle-placeholder-cover.jpg"}
            alt={`${artist.name} profile artwork`}
            fill
            sizes="100vw"
            className="absolute inset-0 object-cover object-[62%_42%] opacity-82 brightness-90 contrast-110 saturate-95"
            priority
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(212,175,55,0.16),transparent_18rem),linear-gradient(90deg,rgba(3,3,3,0.92)_0%,rgba(3,3,3,0.72)_40%,rgba(3,3,3,0.22)_68%,rgba(3,3,3,0.78)_100%),linear-gradient(180deg,rgba(3,3,3,0.12)_0%,rgba(3,3,3,0.74)_100%)]" />

          <div className="relative z-10 flex min-h-[30rem] max-w-[42rem] flex-col justify-center p-5 sm:min-h-[34rem] sm:p-8 md:p-12">
            <p className="eyebrow">DJ and Producer Profile</p>
            <h1 className="brand-heading mt-4 text-[clamp(3rem,17vw,4.8rem)] leading-[0.9] tracking-[-0.045em] text-ivory sm:mt-5 md:text-[clamp(4rem,7vw,7.2rem)] md:tracking-[-0.055em]">
              {artist.name}
            </h1>
            <p className="mt-4 max-w-[34rem] text-base leading-7 text-[rgba(248,241,223,0.86)] sm:mt-5 sm:text-xl sm:leading-8">
              DJ, producer, creative profile, and future StudyEdge ambassador within the Chronicle / Sentry Sound ecosystem.
            </p>
            <p className="mt-6 max-w-[34rem] text-sm leading-7 text-[color:var(--text-secondary)]">
              Huey-D brings a producer-led sound shaped by rhythm, street culture, and creative collaboration. His profile reflects the energy behind the music, the people around it, and his future role as a visible face of the StudyEdge ecosystem.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={`Follow Huey-D on ${label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-[rgba(217,170,73,0.36)] bg-black/35 text-[color:var(--gold-accent)] transition hover:border-[color:var(--gold-accent)] hover:bg-[rgba(217,170,73,0.12)] hover:text-ivory"
                >
                  <Icon size={17} />
                </Link>
              ))}
            </div>

            <div className="mt-8 h-px w-16 bg-[color:var(--gold-accent)]" />
            <Link
              href="/catalogue/browse"
              className="mt-6 inline-flex w-fit rounded-full border border-[color:var(--gold)] bg-[linear-gradient(135deg,rgba(212,175,55,0.1),rgba(0,0,0,0.24))] px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--gold-accent)] transition hover:border-[color:var(--gold-accent)] hover:bg-[linear-gradient(135deg,rgba(212,175,55,0.18),rgba(0,0,0,0.3))] hover:text-ivory"
            >
              Browse Catalogue / Music
            </Link>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      <HueyDCollection />

      <section className="section-shell pb-14 md:pb-16">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="cinematic-panel overflow-hidden p-0">
            <div className="relative min-h-[20rem] sm:min-h-[30rem]">
              <Image
                src={assets.ecosystem.hueyDMusicTechnologyLegacy}
                alt="Huey-D Music Technology Legacy ecosystem"
                fill
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="object-cover"
              />
            </div>
          </section>

          <aside className="premium-panel p-6 md:p-8">
            <p className="eyebrow">Huey-D Ecosystem</p>
            <h2 className="brand-heading mt-3 text-3xl text-ivory md:text-5xl">
              Music. Technology. Legacy.
            </h2>
            <p className="mt-6 text-sm leading-7 text-[color:var(--text-secondary)]">
              Huey-D represents a new generation of creators using music, technology, and education to build ownership, knowledge, and long-term opportunity.
            </p>

            <div className="mt-7 grid gap-3 text-sm text-[color:var(--text-secondary)]">
              <div className="border border-[color:var(--line)] bg-black/30 p-4">
                <span className="block text-xs uppercase tracking-[0.16em] text-[color:var(--gold-accent)]">Music</span>
                <span className="mt-2 block text-ivory">Creative expression and publishing through Chronicle Music.</span>
              </div>
              <div className="border border-[color:var(--line)] bg-black/30 p-4">
                <span className="block text-xs uppercase tracking-[0.16em] text-[color:var(--gold-accent)]">Technology</span>
                <span className="mt-2 block text-ivory">Sentry Sound supports creator management, ownership, and career growth.</span>
              </div>
              <div className="border border-[color:var(--line)] bg-black/30 p-4">
                <span className="block text-xs uppercase tracking-[0.16em] text-[color:var(--gold-accent)]">Legacy</span>
                <span className="mt-2 block text-ivory">StudyEdge connects the journey to learning, education, and the next generation.</span>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-7 block border border-[color:var(--gold)] bg-[linear-gradient(135deg,var(--gold-accent),var(--gold))] px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-black shadow-[0_18px_55px_var(--glow)] transition hover:-translate-y-0.5"
            >
              Connect with the Ecosystem
            </Link>
          </aside>
        </div>
      </section>

    </main>
  );
}
