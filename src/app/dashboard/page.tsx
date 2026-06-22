
"use client";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/Card";

export default function StudentDashboard() {
  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <main className="p-6">
          <h1 className="text-2xl font-bold">Welcome back!</h1>
          <p>{"You've reached 75% of your daily goal. Keep it up!"}</p>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}
