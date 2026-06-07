"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Zap, Flame, Award, BookOpen, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function StudentDashboard() {
  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
           <div>
              <h1 className="text-2xl font-bold font-space-grotesk text-elite-primary-900 dark:text-white">Welcome back, David! 👋</h1>
              <p className="text-sm text-elite-primary-500">You're on a 12-day learning streak. Keep it up!</p>
           </div>
           <div className="flex items-center gap-4 bg-white dark:bg-elite-primary-900 p-2 rounded-2xl shadow-sm border border-elite-primary-100">
              <div className="flex items-center gap-2 px-3">
                 <Flame className="text-elite-streak w-5 h-5" fill="currentColor" />
                 <span className="font-bold text-sm">12</span>
              </div>
              <div className="w-[1px] h-8 bg-elite-primary-100" />
              <div className="flex items-center gap-2 px-3 text-elite-xp font-bold text-sm">
                 <Zap className="w-5 h-5" fill="currentColor" />
                 <span>2,450 XP</span>
              </div>
           </div>
        </header>
        <main className="px-6 pb-24 space-y-8">
           <Card className="bg-elite-primary-950 text-white overflow-hidden border-none shadow-xl">
              <CardContent className="p-8 flex flex-col md:flex-row items-center gap-8">
                 <div className="flex-1 space-y-4">
                    <Badge variant="accent">CONTINUE LEARNING</Badge>
                    <h2 className="text-3xl font-bold font-space-grotesk">Next.js 15: Deep Dive into Server Actions</h2>
                    <div className="flex items-center gap-6 text-sm text-elite-primary-300">
                       <span className="flex items-center gap-2"><Clock size={16} /> 15m remaining</span>
                       <span className="flex items-center gap-2"><Award size={16} /> 50 XP reward</span>
                    </div>
                    <Button variant="accent" size="lg" asChild>
                       <Link href="/learn/1">Resume Lesson</Link>
                    </Button>
                 </div>
              </CardContent>
           </Card>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}
