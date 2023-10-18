import { NextResponse } from "next/server";

export function middleware(request) {
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
