import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await request.json();
    return NextResponse.json({ success: true, message: "Withdrawal request submitted" });
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}
