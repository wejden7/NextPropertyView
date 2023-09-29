import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAdmin } from "./service/auth";
import { getServerToken } from "./service/token";
export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/signin")) {
    const token = request.cookies.get("token");
    console.log("middleware signin check token :", token);
    if (token) return NextResponse.redirect(new URL("/accueil", request.url));
  }
  if (request.nextUrl.pathname.startsWith("/reset-password")) {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get("token");
    console.log("middleware reset-password check token :", token);
    if (!token) return NextResponse.redirect(new URL("/404", request.url));
  }
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    console.log("Middlaware dashboard check token");
    return getServerToken(request)
      .then((token) => isAdmin(token))
      .then((resualt) => console.log("isAdminServer => ", resualt))
      .catch((error) => NextResponse.redirect(new URL("/404", request.url)));
  }
  if (request.nextUrl.pathname.replace("/", "").length === 0) {
    return NextResponse.redirect(new URL("/accueil", request.url));
    
  }

}
