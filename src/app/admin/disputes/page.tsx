"use client";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";

export default function AdminDisputesPage() {
  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1>Disputes</h1>
        <p>Resolve student and tutor disputes.</p>
      </div>
      <MobileBottomNav />
    </div>
  );
}
