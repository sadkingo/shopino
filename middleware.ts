import { auth } from "@/auth/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default async function middleware(req: NextRequest) {
  const protectedPaths = ["/dashboard", "/admin", "/profile"];
  const isProtected = protectedPaths.some((path) => req.nextUrl.pathname.startsWith(path));

  // If the path is not protected, continue the request
  if (!isProtected) return NextResponse.next();

  // Fetch session data using NextAuth properly
  const session = await auth();

  // If user is not authenticated, redirect to log-in
  if (!session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}