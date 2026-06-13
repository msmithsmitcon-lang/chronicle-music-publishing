import Link from "next/link";

const portalLinks = [
  { href: "/portal", label: "Command Centre" },
  { href: "/portal/catalogue", label: "Catalogue Readiness" },
  { href: "/portal/workflows", label: "Workflows" },
  { href: "/portal/health", label: "Health Signals" },
];

export function PortalNavigation() {
  return (
    <nav aria-label="Portal navigation" className="space-y-2">
      {portalLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="block border border-white/10 px-4 py-3 text-sm text-[#d7d0c3] transition hover:border-[#c7a55b] hover:text-white"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
