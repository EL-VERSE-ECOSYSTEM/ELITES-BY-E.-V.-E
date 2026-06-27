import { NextResponse } from "next/server";

export async function POST(_request: Request) {
  try {
    const body = await _request.json();
    // Logic to save withdrawal request to Prisma
    return NextResponse.json({ success: true, message: "Withdrawal request submitted" });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}

export async function GET() {
  // Logic to fetch withdrawal requests for admin
  return NextResponse.json({ requests: [] });
}
