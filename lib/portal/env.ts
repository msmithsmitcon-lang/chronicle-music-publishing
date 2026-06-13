import { z } from "zod";

export const portalEnvSchema = z.object({
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
  CLERK_SECRET_KEY: z.string().min(1),
  DATABASE_URL: z.string().min(1),
  NEXT_PUBLIC_APP_URL: z.string().url(),
  APP_ENV: z.enum(["local", "preview", "production"]).default("local"),
});

export type PortalEnv = z.infer<typeof portalEnvSchema>;

export function validatePortalEnv(env: NodeJS.ProcessEnv): PortalEnv {
  return portalEnvSchema.parse(env);
}
