import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await request.json();
    // Logic to save dispute to Prisma
    return NextResponse.json({ success: true, message: "Dispute raised successfully" });
  } catch {
    return NextResponse.json({ success: false, error: "Failed to raise dispute" }, { status: 400 });
  }
}

export async function PATCH(request: Request) {
  try {
    await request.json();
    // Logic for admin to resolve dispute (update status, resolution)
    return NextResponse.json({ success: true, message: "Dispute resolved" });
  } catch {
    return NextResponse.json({ success: false, error: "Failed to resolve dispute" }, { status: 500 });
  }
}
