"use client";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";

export default function JobDetailPage() {
  return (
    <div className="flex min-h-screen bg-elite-primary-950 text-white">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1>Job Details</h1>
        <p>{"We're working on finding the best opportunities for you."}</p>
      </div>
      <MobileBottomNav />
    </div>
  );
}
