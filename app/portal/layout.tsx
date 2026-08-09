import type { ReactNode } from "react";

import { PortalNavigation } from "@/components/portal/PortalNavigation";
import {
  PortalClerkProvider,
  PortalDevelopmentAuthProvider,
} from "@/components/portal/PortalClerkProvider";
import { isDevelopmentAuthBypassEnabled } from "@/lib/portal/development-auth";

export default function PortalLayout({ children }: { children: ReactNode }) {
  const AuthProvider = isDevelopmentAuthBypassEnabled()
    ? PortalDevelopmentAuthProvider
    : PortalClerkProvider;

  return (
    <AuthProvider>
      <div className="min-h-screen bg-[#f8faff] text-[#101a3d]">
        <div className="grid min-h-screen lg:grid-cols-[270px_1fr]">
          <PortalNavigation />
          <main className="min-w-0">{children}</main>
        </div>
      </div>
    </AuthProvider>
  );
}
