"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Trophy, Medal, Crown } from "lucide-react";

export default function LeaderboardPage() {
  const users = [
    { rank: 1, name: "Kofi Mensah", xp: 12450, country: "Ghana", level: 12 },
    { rank: 2, name: "Chinelo O.", xp: 11200, country: "Nigeria", level: 11 },
    { rank: 3, name: "Amara E.", xp: 9800, country: "Kenya", level: 10 },
  ];

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8">
           <h1 className="text-3xl font-bold font-space-grotesk text-elite-primary-900 dark:text-white">Elite Leaderboard</h1>
           <p className="text-sm text-elite-primary-500">Top learners this week from across Africa.</p>
        </header>

        <main className="px-6 pb-24 space-y-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {users.map((u) => (
                <Card key={u.rank} className="p-8 text-center space-y-4 border-none shadow-xl bg-white dark:bg-elite-primary-900">
                   <div className="w-16 h-16 bg-elite-primary-50 rounded-full mx-auto flex items-center justify-center text-elite-accent-500">
                      {u.rank === 1 ? <Crown size={32} /> : <Medal size={32} />}
                   </div>
                   <div>
                      <h3 className="font-bold text-lg">{u.name}</h3>
                      <p className="text-xs text-elite-primary-400 font-bold uppercase">{u.country}</p>
                   </div>
                   <div className="text-2xl font-black text-elite-primary-600">{u.xp} XP</div>
                   <Badge variant="accent">Level {u.level}</Badge>
                </Card>
              ))}
           </div>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}
