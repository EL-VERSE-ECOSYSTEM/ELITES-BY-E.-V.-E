"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Users, BookOpen, DollarSign, Activity } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { label: "Total Users", value: "54,230", icon: Users, color: "text-blue-500" },
    { label: "Active Courses", value: "124", icon: BookOpen, color: "text-emerald-500" },
    { label: "Monthly Revenue", value: "$42,500", icon: DollarSign, color: "text-amber-500" },
    { label: "System Load", value: "12%", icon: Activity, color: "text-purple-500" },
  ];

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 bg-white dark:bg-elite-primary-900 border-b border-elite-primary-100">
           <h1 className="text-2xl font-bold font-space-grotesk">Admin Command Center</h1>
        </header>
        <main className="p-6 space-y-8">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <Card key={i} className="p-6 shadow-lg border-none bg-white dark:bg-elite-primary-800">
                   <s.icon className={`w-5 h-5 ${s.color} mb-4`} />
                   <div className="text-2xl font-black">{s.value}</div>
                   <div className="text-[10px] font-bold uppercase text-elite-primary-400 tracking-widest">{s.label}</div>
                </Card>
              ))}
           </div>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}
