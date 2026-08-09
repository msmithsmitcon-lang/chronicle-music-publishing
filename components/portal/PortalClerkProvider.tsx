"use client";

import { ClerkProvider, UserButton } from "@clerk/nextjs";
import type { ReactNode } from "react";

export function PortalClerkProvider({ children }: { children: ReactNode }) {
  return <ClerkProvider>{children}</ClerkProvider>;
}

export function PortalDevelopmentAuthProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export function PortalUserButton() {
  return <UserButton />;
}
