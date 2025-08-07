// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// export function middleware(request: NextRequest) {
//   const token = request.cookies.get('token')?.value

//   const isAuthPage = request.nextUrl.pathname.startsWith('/auth')

//   if (!token && !isAuthPage) {
//     // Chưa đăng nhập → redirect về /auth
//     return NextResponse.redirect(new URL('/login', request.url))
//   }

//   if (token && isAuthPage) {
//     // Đã đăng nhập nhưng đang ở /auth → chuyển về /dashboard
//     return NextResponse.redirect(new URL('/', request.url))
//   }

//   return NextResponse.next()
// }

// export const config = {
//   matcher: ['/login', '/main/:path*', '/'], // những route cần middleware check
// }

import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value;
  const { pathname } = request.nextUrl;

  const isAuthPage = pathname.startsWith("/login");
  const isProtectedPage =
    pathname === "/" ||
    pathname === "/history/current-play" ||
    pathname === "/history/dtc-to-playturn" ||
    pathname === "/history/play-turn" ||
    pathname === "/mini-game-management/condition-config" ||
    pathname === "/mini-game-management/content-config" ||
    pathname === "/mini-game-management/countdown-config" ||
    pathname === "/mini-game-management/point-config" ||
    pathname === "/mini-game-management/quantity-config" ||
    pathname === "/mini-game-management/update-play-turn" ||
    pathname === "/account-management/admin-list" ||
    pathname === "/account-management/user-list";

  if (!token && isProtectedPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/history/:path*",
    "/mini-game-management/:path*",
    "/account-management/:path*",
  ],
};
