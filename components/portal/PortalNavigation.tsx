"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiBarChart2,
  FiBookOpen,
  FiBox,
  FiBriefcase,
  FiChevronDown,
  FiDatabase,
  FiGrid,
  FiSettings,
  FiShield,
  FiUsers,
} from "react-icons/fi";

import { developmentPortalContext } from "@/lib/portal/development-auth";

const portalLinks = [
  { href: "/portal", label: "Dashboard", icon: FiBarChart2 },
  { href: "/portal/catalogue", label: "Catalogue", icon: FiGrid },
  { href: "/portal/intelligence", label: "Intelligence", icon: FiShield },
  { href: "/portal/workflows", label: "Operations", icon: FiBox },
  { href: "/portal/relationships", label: "Relationships", icon: FiUsers },
  { href: "/portal/business", label: "Business", icon: FiBriefcase },
  { href: "/portal/memory", label: "Institutional Memory", icon: FiDatabase },
  { href: "/portal/reports", label: "Reports", icon: FiBookOpen },
  { href: "/portal/settings", label: "Settings", icon: FiSettings },
];

export function PortalNavigation() {
  const pathname = usePathname();
  const developmentUser = developmentPortalContext.user;

  return (
    <aside className="hidden border-r border-[#e4e8f1] bg-white lg:flex lg:min-h-screen lg:flex-col">
      <div className="flex h-44 items-center justify-center border-b border-[#eef1f7] px-8">
        <Image
          src="/brand/chronicle-logo.svg"
          alt="Chronicle Music"
          width={150}
          height={118}
          priority
          className="h-auto w-[150px]"
        />
      </div>

      <nav aria-label="Portal navigation" className="flex-1 space-y-1 px-4 py-7">
        {portalLinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={[
                "flex items-center gap-3 rounded-md border-l-4 px-4 py-3 text-sm font-medium transition",
                isActive
                  ? "border-[#4548ff] bg-[#f0f2ff] text-[#3037ef] shadow-sm"
                  : "border-transparent text-[#4b587c] hover:bg-[#f7f8fd] hover:text-[#273056]",
              ].join(" ")}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-[#eef1f7] px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5346b7] text-xs font-semibold text-white">
            MM
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-[#101a3d]">{developmentUser.name}</p>
            <p className="text-xs text-[#6d7799]">{developmentUser.role}</p>
          </div>
          <FiChevronDown className="h-4 w-4 text-[#6d7799]" aria-hidden="true" />
        </div>
      </div>
    </aside>
  );
}
