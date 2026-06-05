import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Trophy, Medal, Star, Target, Users, Globe, Zap, Flame, Crown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
"use client";


export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = useState<"global" | "country" | "weekly">("global");

  const topThree = [
    { rank: 2, name: "Amara Okafor", xp: 14250, country: "NG", level: 15, avatar: "AO" },
    { rank: 1, name: "Sarah Kamau", xp: 16800, country: "KE", level: 18, avatar: "SK" },
    { rank: 3, name: "John Dube", xp: 12400, country: "ZA", level: 14, avatar: "JD" },
  ];

  const rankings = Array.from({ length: 10 }).map((_, i) => ({
    rank: i + 4,
    name: ["Kofi Anan", "Zainab Yusuf", "You", "David Mensah"][i % 4],
    xp: 11000 - (i * 500),
    country: ["GH", "EG", "NG", "NG"][i % 4],
    level: 12 - Math.floor(i / 2),
    active: i === 2
  }));

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-12 bg-elite-primary-950 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12">
              <Trophy size={400} />
           </div>
           <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk tracking-tighter">ELITE Leaderboard</h1>
              <p className="text-xl text-elite-primary-300">Compete with the best tech talent across Africa.</p>

              <div className="flex justify-center gap-2 p-1 bg-white/5 backdrop-blur-xl rounded-2xl w-fit mx-auto mt-12 border border-white/10">
                 {["global", "country", "weekly"].map((tab) => (
                   <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={cn(
                      "px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all",
                      activeTab === tab ? "bg-elite-accent-500 text-white shadow-lg" : "text-elite-primary-400 hover:text-white"
                    )}
                   >
                     {tab}
                   </button>
                 ))}
              </div>
           </div>
        </header>

        <main className="px-6 pb-24 -mt-12 relative z-20">
           {/* Podium */}
           <div className="grid grid-cols-1 md:grid-cols-3 items-end gap-6 max-w-5xl mx-auto mb-12">
              {/* 2nd Place */}
              <div className="order-2 md:order-1 h-fit">
                 <Card className="bg-white/80 dark:bg-elite-primary-900/80 backdrop-blur-md border-none shadow-xl text-center p-8 space-y-4 transform hover:-translate-y-2 transition-all">
                    <div className="relative w-24 h-24 mx-auto">
                       <div className="w-full h-full rounded-2xl bg-slate-200 dark:bg-slate-800" />
                       <div className="absolute -top-3 -left-3 w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center text-white border-4 border-white dark:border-elite-primary-900">
                          <Medal size={20} />
                       </div>
                    </div>
                    <div>
                       <div className="font-bold text-lg font-space-grotesk">{topThree[0].name}</div>
                       <div className="text-xs text-elite-primary-400 uppercase font-bold tracking-widest flex items-center justify-center gap-1">
                          <span className="w-4 h-3 bg-elite-primary-100 rounded-sm" /> Level {topThree[0].level}
                       </div>
                    </div>
                    <div className="text-2xl font-bold text-elite-xp">{topThree[0].xp.toLocaleString()} XP</div>
                 </Card>
              </div>

              {/* 1st Place */}
              <div className="order-1 md:order-2">
                 <Card className="bg-gradient-to-br from-elite-accent-400 to-elite-accent-600 border-none shadow-2xl text-center p-12 space-y-4 transform scale-110 relative z-30">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                       <Crown size={64} className="text-elite-accent-500 drop-shadow-lg animate-bounce" fill="currentColor" />
                    </div>
                    <div className="relative w-32 h-32 mx-auto">
                       <div className="w-full h-full rounded-3xl bg-white/20" />
                       <div className="absolute -top-3 -left-3 w-12 h-12 bg-elite-accent-500 rounded-full flex items-center justify-center text-white border-4 border-white">
                          <Trophy size={24} />
                       </div>
                    </div>
                    <div className="text-white space-y-1">
                       <div className="font-bold text-2xl font-space-grotesk">{topThree[1].name}</div>
                       <div className="text-xs uppercase font-bold tracking-widest opacity-80">Level {topThree[1].level} • 1st Place</div>
                    </div>
                    <div className="text-4xl font-bold text-white drop-shadow-md">{topThree[1].xp.toLocaleString()} XP</div>
                 </Card>
              </div>

              {/* 3rd Place */}
              <div className="order-3 h-fit">
                 <Card className="bg-white/80 dark:bg-elite-primary-900/80 backdrop-blur-md border-none shadow-xl text-center p-8 space-y-4 transform hover:-translate-y-2 transition-all">
                    <div className="relative w-24 h-24 mx-auto">
                       <div className="w-full h-full rounded-2xl bg-amber-100 dark:bg-amber-950" />
                       <div className="absolute -top-3 -left-3 w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white border-4 border-white dark:border-elite-primary-900">
                          <Medal size={20} />
                       </div>
                    </div>
                    <div>
                       <div className="font-bold text-lg font-space-grotesk">{topThree[2].name}</div>
                       <div className="text-xs text-elite-primary-400 uppercase font-bold tracking-widest flex items-center justify-center gap-1">
                          <span className="w-4 h-3 bg-elite-primary-100 rounded-sm" /> Level {topThree[2].level}
                       </div>
                    </div>
                    <div className="text-2xl font-bold text-elite-xp">{topThree[2].xp.toLocaleString()} XP</div>
                 </Card>
              </div>
           </div>

           {/* Ranking Table */}
           <Card className="max-w-5xl mx-auto overflow-hidden shadow-2xl border-none">
              <div className="bg-elite-primary-950 px-8 py-4 flex justify-between text-[10px] font-bold uppercase tracking-widest text-elite-primary-400">
                 <div className="flex gap-12">
                    <span className="w-8">Rank</span>
                    <span>Talent</span>
                 </div>
                 <div className="flex gap-20">
                    <span>Level</span>
                    <span className="w-20 text-right">Experience</span>
                 </div>
              </div>
              <div className="divide-y divide-elite-primary-100 dark:divide-elite-primary-900">
                 {rankings.map((user) => (
                   <div key={user.rank} className={cn(
                     "px-8 py-5 flex items-center justify-between group transition-colors",
                     user.active ? "bg-elite-primary-50 dark:bg-elite-primary-900/50 border-x-4 border-l-elite-accent-500 border-r-transparent" : "hover:bg-elite-primary-50 dark:hover:bg-white/5"
                   )}>
                      <div className="flex items-center gap-12">
                         <div className="w-8 font-bold font-space-grotesk text-elite-primary-400">{user.rank}</div>
                         <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-elite-primary-100 dark:bg-elite-primary-800 flex items-center justify-center font-bold">
                               {user.name[0]}
                            </div>
                            <div>
                               <div className="font-bold text-sm flex items-center gap-2">
                                  {user.name}
                                  {user.active && <Badge variant="accent" className="text-[8px] px-1 py-0 h-fit">YOU</Badge>}
                               </div>
                               <div className="text-[10px] text-elite-primary-400 uppercase font-bold flex items-center gap-1">
                                  <span className="w-4 h-3 bg-slate-200 rounded-sm" /> {user.country}
                               </div>
                            </div>
                         </div>
                      </div>
                      <div className="flex items-center gap-20 text-right">
                         <div className="text-sm font-bold text-elite-primary-600">Lvl {user.level}</div>
                         <div className="w-20 font-bold text-sm text-elite-xp">{user.xp.toLocaleString()} XP</div>
                      </div>
                   </div>
                 ))}
              </div>
              <div className="p-6 bg-elite-primary-50 dark:bg-elite-primary-900/50 flex justify-center">
                 <Button variant="ghost" className="text-xs uppercase font-bold tracking-widest text-elite-primary-600">Show More Rankings</Button>
              </div>
           </Card>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}
