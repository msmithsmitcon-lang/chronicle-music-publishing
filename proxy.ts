import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse, type NextRequest } from "next/server";

const isPortalRoute = createRouteMatcher(["/portal(.*)"]);

function isDevelopmentAuthBypassEnabled() {
  return process.env.NODE_ENV === "development" && process.env.DEV_AUTH_BYPASS === "true";
}

function developmentAuthBypassProxy(request: NextRequest) {
  if (isPortalRoute(request)) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

const clerkProtectedProxy = clerkMiddleware(async (auth, request) => {
  if (isPortalRoute(request)) {
    await auth.protect();
  }
});

export default isDevelopmentAuthBypassEnabled() ? developmentAuthBypassProxy : clerkProtectedProxy;

export const config = {
  matcher: ["/portal/:path*"],
};
