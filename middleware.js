import { NextResponse } from "next/server";

export function middleware(request) {
  // if localhost, allow - because we don't have a cookie
  if (request.headers.get("host").includes("localhost")) {
    return NextResponse.next();
  }
  let cookie = request.cookies.get("jwt");
  if (!cookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/", "/transactions", "/debt"],
};
