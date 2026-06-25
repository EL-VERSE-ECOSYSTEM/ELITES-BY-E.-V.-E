"use client";

import { Users, DollarSign, BookOpen, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950 p-6 pb-24">
      <header className="mb-8">
        <h1 className="text-3xl font-bold font-space-grotesk">Admin Overview</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { title: "Total Users", value: "54,230", icon: Users },
          { title: "Total Revenue", value: "$428,500", icon: DollarSign },
          { title: "Active Courses", value: "156", icon: BookOpen },
          { title: "Pending Reviews", value: "24", icon: ShieldCheck },
        ].map((kpi, idx) => (
          <Card key={idx} className="border-none shadow-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">{kpi.title}</div>
                  <div className="text-2xl font-bold font-space-grotesk">{kpi.value}</div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-elite-primary-50 flex items-center justify-center text-elite-primary-600">
                  <kpi.icon size={20} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <MobileBottomNav />
    </div>
  );
}
