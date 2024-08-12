import { NextRequest, NextResponse } from "next/server";

// export const middleware = (request: NextRequest) => {
//   return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
//   matcher: "/profile"
// }
// If I go to profile page it will automaticly redirect me to the homepage

// export const middleware = (request: NextRequest) => {
//   if (request.nextUrl.pathname === "/profile") {
//     return NextResponse.redirect(new URL("/blog", request.url));
//   }
// }

export const middleware = (request: NextRequest) => {
  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }
  response.headers.set("custom-header", "custom value")
  return response;
}