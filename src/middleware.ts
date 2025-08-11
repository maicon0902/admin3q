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
    pathname === "/statistical/games" ||
    pathname === "/statistical/operator" ||
    pathname === "/statistical/order" ||
    pathname === "/statistical/player" ||
    pathname === "/operator-management" ||
    pathname === "/money-management/money-history" ||
    pathname === "/game-management/banner-config" ||
    pathname === "/game-management/deal-config" ||
    pathname === "/game-management/sys-config" ||
    pathname === "/game-management/wheel-of-fortune" ||
    pathname === "/account-management/admin-list" ||
    pathname === "/account-management/user-list";
    pathname === "/account-management/role-management";

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
    "/operator-management",
    "/statistical/:path*",
    "/game-management/:path*",
    "/account-management/:path*",
  ],
};
