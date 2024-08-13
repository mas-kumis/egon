import { users } from "@/libs/utils/db";
import { NextResponse } from "next/server";

export function GET() {
  const data = users;
  return NextResponse.json(data);
}
