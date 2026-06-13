import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPortalRoute = createRouteMatcher(["/portal(.*)"]);

export default clerkMiddleware(async (auth, request) => {
  if (isPortalRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: ["/portal/:path*"],
};
