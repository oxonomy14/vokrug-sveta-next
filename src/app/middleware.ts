import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Якщо користувач на головній сторінці "/"
  if (pathname === "/") {
    const acceptLanguage = request.headers.get("accept-language") || "";
    const preferredLang = acceptLanguage.split(",")[0].toLowerCase();

    if (preferredLang.startsWith("uk")) {
      return NextResponse.redirect(new URL("/uk", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
