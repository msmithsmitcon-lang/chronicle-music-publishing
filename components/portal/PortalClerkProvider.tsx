"use client";

import { ClerkProvider, UserButton } from "@clerk/nextjs";
import type { ReactNode } from "react";

export function PortalClerkProvider({ children }: { children: ReactNode }) {
  return <ClerkProvider>{children}</ClerkProvider>;
}

export function PortalUserButton() {
  return <UserButton />;
}
