import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await request.json();
    return NextResponse.json({ success: true, message: "Resource uploaded" });
  } catch {
    return NextResponse.json({ success: false, error: "Upload failed" }, { status: 500 });
  }
}
