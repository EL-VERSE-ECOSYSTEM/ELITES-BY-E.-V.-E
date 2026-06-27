"use client";

import { Trophy, Star, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";

export default function AchievementsPage() {
  const achievements = [
    { title: "First Lesson", desc: "Complete your first lesson", progress: 100, icon: Zap, color: "text-yellow-500" },
    { title: "Quick Learner", desc: "Complete 5 lessons in a day", progress: 60, icon: Star, color: "text-blue-500" },
    { title: "Top of Class", desc: "Rank #1 in any leaderboard", progress: 20, icon: Trophy, color: "text-elite-accent-500" },
  ];

  return (
    <div className="min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950 p-6 pb-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header>
          <h1 className="text-3xl font-bold font-space-grotesk">Achievements</h1>
          <p className="text-elite-primary-500">Track your milestones and rewards</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {achievements.map((a, i) => (
             <Card key={i} className="border-none shadow-sm overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                   <CardTitle className="text-sm">{a.title}</CardTitle>
                   <a.icon size={18} className={a.color} />
                </CardHeader>
                <CardContent className="space-y-4">
                   <p className="text-xs text-elite-primary-500">{a.desc}</p>
                   <div className="space-y-1.5">
                      <div className="flex justify-between text-[10px] font-bold">
                         <span>{a.progress}%</span>
                         <Badge variant={a.progress === 100 ? "success" : "primary"} className="h-4 text-[8px] uppercase">
                            {a.progress === 100 ? "Unlocked" : "Locked"}
                         </Badge>
                      </div>
                      <ProgressBar value={a.progress} className="h-1.5" />
                   </div>
                </CardContent>
             </Card>
           ))}
        </div>
      </div>
      <MobileBottomNav />
    </div>
  );
}
