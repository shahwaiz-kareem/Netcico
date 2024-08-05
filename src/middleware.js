import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export function middleware(req) {
  const token =
    req.cookies.get("user-token")?.value || req.cookies.get("user-token");

  const requestHeaders = new Headers(req.headers);

  let response;

  if (token) {
    requestHeaders.set("user-token", token);
    response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  } else {
    const newToken = uuidv4();
    requestHeaders.set("user-token", newToken);
    response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
    response.cookies.set("user-token", newToken, {
      httpOnly: true,
      secure: true,
      maxAge: null,
      path: "/",
    });
  }

  return response;
}

export const config = {
  matcher: ["/biographies/:path*", "/blogs/:path*"],
};
