export const developmentPortalContext = {
  user: {
    id: "dev-user-owner",
    name: "Mike Malak",
    initials: "MM",
    role: "Owner",
    email: "owner.dev@chronicle.local",
  },
  workspace: {
    id: "dev-workspace-chronicle",
    name: "Chronicle Music",
    slug: "chronicle-music",
  },
} as const;

export function isDevelopmentAuthBypassEnabled() {
  return process.env.NODE_ENV === "development" && process.env.DEV_AUTH_BYPASS === "true";
}
