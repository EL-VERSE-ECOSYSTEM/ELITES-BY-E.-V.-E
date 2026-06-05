"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Zap, Coins, Flame, Star, Award, Target, Rocket, ShieldCheck, Code, Users } from "lucide-react";
import { cn } from "@/lib/utils";



export default function AchievementsPage() {
  const categories = ["All", "Learning", "Coding", "Community", "Social"];

  const badges = [
    { id: 1, name: "Early Bird", desc: "Complete 5 lessons before 8 AM", icon: Zap, status: "unlocked", date: "Jan 12, 2024", reward: 100 },
    { id: 2, name: "Code Ninja", desc: "Solve 10 coding lab challenges", icon: Code, status: "unlocked", date: "Jan 15, 2024", reward: 250 },
    { id: 3, name: "Fast Learner", desc: "Finish a course in under 3 days", icon: Rocket, status: "locked", progress: 60, reward: 500 },
    { id: 4, name: "Social Butterfly", desc: "Connect with 10 fellow students", icon: Users, status: "locked", progress: 20, reward: 150 },
    { id: 5, name: "Streak Master", desc: "Maintain a 30-day learning streak", icon: Flame, status: "locked", progress: 7, reward: 1000 },
    { id: 6, name: "Contributor", desc: "Share 5 resources in discussions", icon: Award, status: "unlocked", date: "Feb 2, 2024", reward: 200 },
  ];

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-12 space-y-8">
           <div className="max-w-4xl">
              <h1 className="text-4xl font-bold font-space-grotesk">Achievements & Badges</h1>
              <p className="text-xl text-elite-primary-500 mt-2">Track your milestones and earn exclusive rewards.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-elite-xp text-white border-none p-6 space-y-4">
                 <div className="flex items-center justify-between">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center"><Zap size={20} fill="white" /></div>
                    <span className="text-xs font-bold uppercase tracking-widest opacity-80">Total Experience</span>
                 </div>
                 <div className="text-3xl font-bold font-space-grotesk">12,450 XP</div>
                 <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-bold uppercase">
                       <span>Progress to Lvl 13</span>
                       <span>450/1000</span>
                    </div>
                    <ProgressBar value={45} className="h-1.5 bg-white/20" indicatorClassName="bg-white" />
                 </div>
              </Card>

              <Card className="bg-elite-coin text-white border-none p-6 space-y-4">
                 <div className="flex items-center justify-between">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center"><Coins size={20} fill="white" /></div>
                    <span className="text-xs font-bold uppercase tracking-widest opacity-80">Coin Balance</span>
                 </div>
                 <div className="text-3xl font-bold font-space-grotesk">2,450</div>
                 <p className="text-xs opacity-80">Exchange coins for premium courses and 1-on-1 sessions.</p>
              </Card>

              <Card className="bg-elite-streak text-white border-none p-6 space-y-4">
                 <div className="flex items-center justify-between">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center"><Flame size={20} fill="white" /></div>
                    <span className="text-xs font-bold uppercase tracking-widest opacity-80">Highest Streak</span>
                 </div>
                 <div className="text-3xl font-bold font-space-grotesk">14 Days</div>
                 <p className="text-xs opacity-80">You're in the top 5% of consistent learners this month!</p>
              </Card>
           </div>
        </header>

        <main className="px-6 pb-24 space-y-12">
           <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button key={cat} className={cn(
                  "px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all",
                  cat === "All" ? "bg-elite-primary-900 text-white" : "bg-white dark:bg-elite-primary-900 border border-elite-primary-100 dark:border-elite-primary-800 text-elite-primary-400 hover:text-elite-primary-900"
                )}>
                  {cat}
                </button>
              ))}
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {badges.map((badge) => (
                <Card key={badge.id} className={cn(
                  "relative group transition-all hover:-translate-y-2",
                  badge.status === "locked" ? "opacity-60" : "border-elite-accent-500 shadow-xl"
                )}>
                   <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                      <div className={cn(
                        "w-24 h-24 rounded-3xl flex items-center justify-center relative transition-all duration-500",
                        badge.status === "unlocked" ? "bg-elite-primary-950 text-elite-accent-500 shadow-2xl rotate-3 group-hover:rotate-6 scale-110" : "bg-elite-primary-100 dark:bg-elite-primary-900 text-elite-primary-300"
                      )}>
                         <badge.icon size={48} fill={badge.status === "unlocked" ? "currentColor" : "none"} />
                         {badge.status === "locked" && (
                           <div className="absolute inset-0 flex items-center justify-center bg-black/10 rounded-3xl">
                              <ShieldCheck size={24} className="text-elite-primary-400" />
                           </div>
                         )}
                      </div>

                      <div className="space-y-1">
                         <h3 className="font-bold text-lg font-space-grotesk leading-tight">{badge.name}</h3>
                         <p className="text-xs text-elite-primary-500">{badge.desc}</p>
                      </div>

                      {badge.status === "unlocked" ? (
                        <div className="space-y-2">
                           <Badge variant="success" className="text-[10px] uppercase font-bold tracking-widest">Earned {badge.date}</Badge>
                           <div className="text-[10px] font-bold text-elite-xp uppercase tracking-tighter">+{badge.reward} XP Awarded</div>
                        </div>
                      ) : (
                        <div className="w-full space-y-2">
                           <div className="flex justify-between text-[10px] font-bold uppercase text-elite-primary-400">
                              <span>Progress</span>
                              <span>{badge.progress}%</span>
                           </div>
                           <ProgressBar value={badge.progress || 0} className="h-1.5" indicatorClassName="bg-elite-primary-400" />
                           <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-tighter">Reward: {badge.reward} XP</div>
                        </div>
                      )}
                   </CardContent>
                </Card>
              ))}
           </div>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}
