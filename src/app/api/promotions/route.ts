import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await request.json();
    return NextResponse.json({ success: true, message: "Learner promoted successfully" });
  } catch {
    return NextResponse.json({ success: false, error: "Failed to promote learner" }, { status: 400 });
  }
}
