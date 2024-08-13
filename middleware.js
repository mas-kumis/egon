import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("middleware ran");
  return NextResponse.json({ success: "middleware" });
}

export const config = {
  matcher: ["/userslist/:path*"],
};
