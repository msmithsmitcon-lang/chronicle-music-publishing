import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { artistProfiles } from "@/lib/artists";
import { assets } from "@/lib/assets";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Artists",
  description:
    "Selected artist profiles and represented works within Chronicle Music Publishing, with M-WIS as a represented artist.",
};

export default function ArtistsPage() {
  return (
    <main>
      <section className="section-shell py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">Representation</p>
          <h1 className="brand-heading mt-4 max-w-4xl text-4xl leading-tight text-ivory md:text-6xl">
            Selected Artist Profiles
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--text-secondary)]">
            A rights-aware view of selected artist representation within{" "}
            {brand.name}. This section presents represented artists, selected
            works, publishing context, ownership notes, and rights information
            where available.
          </p>
        </div>
      </section>

      <div className="gold-divider" />

      <section className="section-shell py-14 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-5">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
            {artistProfiles.map((artist) => (
              <article
                key={artist.slug}
                className="group relative min-h-[24rem] overflow-hidden rounded-[var(--radius-card)] border border-[rgba(200,169,107,0.34)] bg-black shadow-[0_30px_100px_rgba(0,0,0,0.62)]"
              >
                <div className="absolute inset-y-0 right-0 w-[62%] overflow-hidden">
                  <Image
                    src={assets.catalogue.asEkVannagKonUitveeCover}
                    alt="As Ek Vannag Kon Uitvee catalogue artwork"
                    fill
                    sizes="(min-width: 1024px) 34vw, 100vw"
                    className="object-cover object-[54%_31%] brightness-110 contrast-110 saturate-110 transition duration-700 group-hover:scale-[1.02]"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.96)_0%,rgba(10,10,10,0.9)_38%,rgba(10,10,10,0.28)_68%,rgba(10,10,10,0.5)_100%),linear-gradient(180deg,rgba(10,10,10,0.08),rgba(10,10,10,0.72)),radial-gradient(circle_at_77%_44%,rgba(212,175,55,0.2),transparent_13rem)]" />
                <div className="absolute inset-x-5 top-5 h-px bg-[linear-gradient(90deg,rgba(212,175,55,0.72),transparent)] md:inset-x-6" />

                <div className="absolute right-7 top-[55%] z-10 grid h-32 w-32 -translate-y-1/2 place-items-center rounded-full border border-[rgba(200,169,107,0.42)] bg-black/46 shadow-[0_0_72px_rgba(212,175,55,0.2),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm">
                  {artist.image ? (
                    <Image
                      src={artist.image}
                      alt={`${artist.name} profile image`}
                      width={180}
                      height={180}
                      className="h-24 w-24 object-contain opacity-95 drop-shadow-[0_18px_42px_rgba(0,0,0,0.58)] transition duration-700 group-hover:scale-105"
                    />
                  ) : (
                      <Image
                        src={brand.logoMark}
                        alt=""
                        width={132}
                        height={132}
                        className="h-20 w-20 object-contain opacity-80"
                      />
                  )}
                </div>

                <div className="relative z-10 flex min-h-[24rem] flex-col justify-between p-6">
                  <div className="max-w-[19rem] pt-3">
                    <p className="eyebrow">Represented Artist</p>
                    <h2 className="brand-heading mt-3 text-6xl leading-none text-ivory">
                      {artist.name}
                    </h2>
                    <p className="mt-4 max-w-[15rem] text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-[color:var(--gold)]">
                      Writer. Recording artist. Sonic storyteller.
                    </p>
                    <p className="mt-5 max-w-[16rem] text-sm leading-6 text-[color:var(--text-secondary)]">
                      A voice rooted in truth. A sound that moves generations.
                    </p>
                    <Link
                      href={`/artists/${artist.slug}`}
                      className="mt-6 inline-flex rounded-full border border-[rgba(200,169,107,0.62)] bg-[linear-gradient(135deg,rgba(212,175,55,0.12),rgba(200,169,107,0.04))] px-4 py-2.5 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-300 hover:border-[color:var(--gold-accent)] hover:bg-[linear-gradient(135deg,rgba(212,175,55,0.22),rgba(200,169,107,0.08))] hover:text-ivory"
                    >
                      View Artist Profile
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-3 rounded-[var(--radius-card)] border border-[rgba(200,169,107,0.2)] bg-black/46 p-4 backdrop-blur-sm md:grid-cols-4">
                    {[
                      ["35", "Registered works"],
                      ["Multi-genre", "R&B / Soul / Gospel"],
                      ["South Africa", "Global vision"],
                      ["Since 2023", "Building legacies"],
                    ].map(([value, label]) => (
                      <div key={value}>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--gold)]">
                          {value}
                        </p>
                        <p className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-stone-400">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}

            <aside className="relative min-h-[24rem] overflow-hidden rounded-[var(--radius-card)] border border-[rgba(200,169,107,0.34)] bg-black shadow-[0_30px_100px_rgba(0,0,0,0.62)]">
              <div className="absolute inset-y-0 right-0 w-[72%] overflow-hidden">
                <Image
                  src="/assets/chronicle-sections/studio-control-room.png"
                  alt="Chronicle studio control room"
                  fill
                  sizes="(min-width: 1024px) 40vw, 80vw"
                  className="object-cover object-[66%_50%] opacity-90"
                  priority
                />
              </div>
              <div className="absolute inset-y-0 left-0 w-[46%] bg-[linear-gradient(90deg,rgba(10,10,10,0.96),rgba(10,10,10,0.86)_76%,rgba(10,10,10,0.16))]" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.9)_0%,rgba(10,10,10,0.76)_36%,rgba(10,10,10,0.18)_68%,rgba(10,10,10,0.44)_100%),linear-gradient(180deg,rgba(10,10,10,0.04),rgba(10,10,10,0.82)),radial-gradient(circle_at_22%_16%,rgba(212,175,55,0.22),transparent_15rem)]" />
              <div className="absolute inset-x-5 top-5 h-px bg-[linear-gradient(90deg,rgba(212,175,55,0.72),transparent)]" />
              <div className="relative z-10 flex min-h-[24rem] flex-col justify-start p-6">
                <div className="max-w-[18rem] pt-3">
                  <p className="eyebrow">Catalogue Context</p>
                  <h2 className="brand-heading mt-3 text-4xl leading-tight text-ivory">
                    Studio-rooted representation for selected works.
                  </h2>
                  <p className="mt-5 text-sm leading-6 text-[color:var(--text-secondary)]">
                    From songwriters to recording artists, we provide publishing
                    administration, rights notes, and strategic representation.
                  </p>
                  <Link
                    href="/catalogue"
                    className="mt-6 inline-flex rounded-full border border-[rgba(200,169,107,0.62)] bg-[linear-gradient(135deg,rgba(212,175,55,0.12),rgba(200,169,107,0.04))] px-4 py-2.5 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-300 hover:border-[color:var(--gold-accent)] hover:bg-[linear-gradient(135deg,rgba(212,175,55,0.22),rgba(200,169,107,0.08))] hover:text-ivory"
                  >
                    Browse Catalogue
                  </Link>
                </div>
              </div>
              <div className="absolute inset-x-5 bottom-4 z-10 h-7 opacity-65 [mask-image:linear-gradient(90deg,transparent,black_14%,black_86%,transparent)] md:inset-x-6">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 720 42"
                  preserveAspectRatio="none"
                  className="h-full w-full overflow-visible"
                >
                  <path
                    d="M0 27 C28 27 34 27 52 27 C61 27 62 22 66 17 C69 23 70 27 80 27 C93 27 96 27 110 27 C118 27 119 20 123 11 C128 22 130 27 142 27 C156 27 158 27 174 27 C184 27 184 24 188 19 C193 25 195 27 207 27 C220 27 222 27 236 27 C244 27 246 18 250 8 C255 21 257 27 270 27 C283 27 286 27 300 27 C309 27 310 22 314 16 C319 23 321 27 332 27 C344 27 347 27 360 27 C369 27 371 15 375 6 C381 21 382 27 396 27 C410 27 412 27 426 27 C435 27 436 23 440 18 C445 24 447 27 460 27 C475 27 477 27 492 27 C500 27 502 20 506 12 C511 22 513 27 526 27 C540 27 542 27 556 27 C565 27 566 24 570 20 C575 25 578 27 590 27 C604 27 607 27 620 27 C629 27 631 21 635 14 C640 23 642 27 654 27 C670 27 676 27 690 27 C704 27 710 27 720 27"
                    fill="none"
                    stroke="rgba(212,175,55,0.72)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.15"
                    vectorEffect="non-scaling-stroke"
                    className="drop-shadow-[0_0_7px_rgba(212,175,55,0.28)]"
                  />
                  <path
                    d="M0 27 H720"
                    fill="none"
                    stroke="rgba(200,169,107,0.22)"
                    strokeLinecap="round"
                    strokeWidth="0.7"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>
            </aside>
          </div>

        </div>
      </section>
    </main>
  );
}
