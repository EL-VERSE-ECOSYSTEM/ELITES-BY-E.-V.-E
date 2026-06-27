import { NextResponse } from "next/server";

export async function POST(_request: Request) {
  try {
    const body = await _request.json();
    // Logic to save resource metadata and link to Prisma
    return NextResponse.json({ success: true, message: "Resource uploaded" });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Upload failed" }, { status: 500 });
  }
}

export async function GET() {
  // Logic to fetch resources filtered by stack/level
  return NextResponse.json({ resources: [] });
}
