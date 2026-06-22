
"use client";
import { Sidebar } from "@/components/layout/Sidebar";

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen bg-elite-primary-950 text-white">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1>My Profile</h1>
      </div>
    </div>
  );
}
