import Link from "next/link";
import type { ReactNode } from "react";

import { PortalNavigation } from "@/components/portal/PortalNavigation";
import { PortalClerkProvider, PortalUserButton } from "@/components/portal/PortalClerkProvider";

export default function PortalLayout({ children }: { children: ReactNode }) {
  return (
    <PortalClerkProvider>
      <div className="min-h-screen bg-[#111111] text-[#f5f0e8]">
        <header className="border-b border-white/10 bg-black/30">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4">
            <Link href="/portal" className="text-sm font-semibold uppercase tracking-[0.18em]">
              Chronicle Operations
            </Link>
            <PortalUserButton />
          </div>
        </header>
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 lg:grid-cols-[260px_1fr]">
          <PortalNavigation />
          <main>{children}</main>
        </div>
      </div>
    </PortalClerkProvider>
  );
}
