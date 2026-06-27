import { NextResponse } from "next/server";

export async function POST() {
  try {
    // Logic to save withdrawal request to Prisma
    return NextResponse.json({ success: true, message: "Withdrawal request submitted" });
  } // eslint-disable-next-line @typescript-eslint/no-unused-vars
  catch (error) {
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}

export async function GET() {
  // Logic to fetch withdrawal requests for admin
  return NextResponse.json({ requests: [] });
}
