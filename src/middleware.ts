import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const session = request.cookies.get("name")?.value;
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/dashboard")) {
    if (!session) {
      return NextResponse.redirect(new URL("/auth", request.url));
    }
  }
  return NextResponse.next();
} 's'

export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*", "/", "/athlete/:path*"],
};
