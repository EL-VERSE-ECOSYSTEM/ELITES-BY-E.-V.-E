"use client";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";

export default function ReferralsPage() {
  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1>Referrals</h1>
        <p>Invite friends and earn rewards.</p>
      </div>
      <MobileBottomNav />
    </div>
  );
}
