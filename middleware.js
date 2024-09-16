import { NextResponse } from "next/server";

export const middleware = (request) => {
    console.log("first")
//   return NextResponse.redirect(new URL("/", request.url));
};

export const config = {
  matcher: ["/about/:path*", "/tasks/:path*"],
};
