import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { jwtVerify } from "jose";
const verifyToken = async (token) => {
  const { payload } = await jwtVerify(
    token,
    new TextEncoder().encode(process.env.JWT_SECRET),
    {
      algorithms: ["HS256"],
    }
  );
  return payload;
};

export function middleware(req) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/dashboard")) {
    const baseUrl = new URL(req.url);
    baseUrl.pathname = "/admin/signin";

    try {
      const jwtToken = req.cookies.get("dashboard-token")?.value;

      if (!jwtToken || jwtToken === "") {
        if (pathname !== "/admin/signin") {
          return NextResponse.redirect(baseUrl.toString());
        }
      }

      return verifyToken(jwtToken)
        .then(() => {
          return NextResponse.next();
        })
        .catch(() => {
          return NextResponse.redirect(baseUrl.toString());
        });
    } catch (error) {
      if (pathname !== "/admin/signin") {
        return NextResponse.redirect(baseUrl.toString());
      }
    }
  } else {
    let response;
    const requestHeaders = new Headers(req.headers);
    const token = req.cookies.get("user-token")?.value;
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
        maxAge: 60 * 60 * 24 * 365 * 190, // 100 years in seconds
        path: "/",
      });
    }

    return response;
  }
}

export const config = {
  matcher: ["/biographies/:path*", "/blogs/:path*", "/dashboard/:path*"],
};
