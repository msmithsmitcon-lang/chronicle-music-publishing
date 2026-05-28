import Image from "next/image";

type SectionCardProps = {
  title: string;
  description: string;
  icon: string;
};

export function SectionCard({ title, description, icon }: SectionCardProps) {
  return (
    <article className="premium-panel group min-h-56 p-6 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--gold)] hover:shadow-[0_30px_100px_rgba(0,0,0,0.55)]">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div className="grid h-11 w-11 place-items-center border border-[color:var(--line)] bg-black/30">
          <Image
            src={icon}
            alt=""
            width={24}
            height={24}
            className="h-6 w-6 object-contain"
          />
        </div>
        <div className="h-px flex-1 bg-[linear-gradient(90deg,var(--gold-accent),transparent)] transition duration-300 group-hover:flex-[1.6]" />
      </div>
      <h3 className="brand-heading text-[1.55rem] leading-tight text-ivory">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[color:var(--text-secondary)]">
        {description}
      </p>
    </article>
  );
}
