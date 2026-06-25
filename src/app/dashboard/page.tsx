"use client";

import { useState } from "react";
import {
  BookOpen,
  Clock,
  Trophy,
  ChevronRight,
  Play,
  Target,
  Rocket,
  Bell,
  Calendar,
  MessageSquare,
  Search
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function LearnerDashboard() {
  const [notifications] = useState([
    { id: 1, text: "Tutor Smith promoted you to EL CODERS!", type: "PROMOTION", time: "2h ago" },
    { id: 2, text: "New resource uploaded in Frontend Path.", type: "RESOURCE", time: "5h ago" },
  ]);

  return (
    <div className="min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950 flex flex-col md:flex-row pb-20">
      <div className="flex-1 min-w-0">
        <header className="px-6 py-8 flex justify-between items-center bg-white dark:bg-elite-primary-950 border-b dark:border-elite-primary-800">
           <div className="space-y-1">
              <h1 className="text-3xl font-bold font-space-grotesk">Welcome back, Jules!</h1>
              <p className="text-elite-primary-500">Your learning journey is 65% complete.</p>
           </div>
           <div className="flex items-center gap-4">
              <div className="hidden md:flex relative">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-elite-primary-400" size={18} />
                 <input className="pl-10 pr-4 py-2 rounded-xl bg-elite-primary-50 dark:bg-elite-primary-900 border-none text-sm w-64 focus:ring-2 focus:ring-elite-accent-500" placeholder="Search courses..." />
              </div>
              <button className="relative w-10 h-10 rounded-xl bg-elite-primary-50 dark:bg-elite-primary-900 flex items-center justify-center text-elite-primary-600">
                 <Bell size={20} />
                 <span className="absolute top-2 right-2 w-2 h-2 bg-elite-error rounded-full" />
              </button>
           </div>
        </header>

        <main className="p-6 space-y-8">
           {/* KPI Row */}
           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { label: "ELITES ID", value: "#8824", icon: Target, color: "text-elite-primary-900" },
                { label: "Current XP", value: "10,800", icon: Trophy, color: "text-elite-xp" },
                { label: "Streak", value: "12 Days", icon: Calendar, color: "text-elite-success" },
                { label: "Unread", value: "3 Messages", icon: MessageSquare, color: "text-elite-accent-500" },
              ].map((stat, i) => (
                <Card key={i} className="border-none shadow-sm overflow-hidden">
                   <CardContent className="p-4 flex items-center justify-between">
                      <div className="space-y-1">
                         <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">{stat.label}</div>
                         <div className={cn("text-xl font-bold font-space-grotesk", stat.color)}>{stat.value}</div>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-elite-primary-50 dark:bg-elite-primary-900 flex items-center justify-center text-elite-primary-400">
                         <stat.icon size={20} />
                      </div>
                   </CardContent>
                </Card>
              ))}
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-8">
                 {/* Promotions Received Feed */}
                 <div className="space-y-4">
                    <h2 className="text-xl font-bold font-space-grotesk flex items-center gap-2">
                       <Rocket className="text-elite-accent-500" size={20} /> Ecosystem Promotions
                    </h2>
                    <div className="space-y-3">
                       {notifications.filter(n => n.type === "PROMOTION").map(promo => (
                         <Card key={promo.id} className="bg-elite-accent-500/5 border-elite-accent-500/20 shadow-none">
                            <CardContent className="p-4 flex items-center justify-between">
                               <div className="flex items-center gap-4">
                                  <div className="w-10 h-10 rounded-full bg-elite-accent-500 text-white flex items-center justify-center">
                                     <Rocket size={20} />
                                  </div>
                                  <div>
                                     <p className="text-sm font-bold">{promo.text}</p>
                                     <p className="text-[10px] text-elite-primary-500">{promo.time}</p>
                                  </div>
                               </div>
                               <Button variant="accent" size="sm" asChild>
                                  <Link href="/jobs">Apply Now</Link>
                               </Button>
                            </CardContent>
                         </Card>
                       ))}
                    </div>
                 </div>

                 {/* Learning Path */}
                 <div className="space-y-4">
                    <div className="flex items-center justify-between">
                       <h2 className="text-xl font-bold font-space-grotesk">Continue Learning</h2>
                       <Link href="/my-courses" className="text-sm font-bold text-elite-primary-600 hover:underline">View All</Link>
                    </div>
                    <Card className="overflow-hidden border-none shadow-xl bg-white dark:bg-elite-primary-900/50">
                       <div className="grid grid-cols-1 md:grid-cols-3">
                          <div className="aspect-video md:aspect-auto bg-elite-primary-900 relative">
                             <div className="absolute inset-0 flex items-center justify-center opacity-30">
                                <Play size={48} className="text-white" fill="white" />
                             </div>
                          </div>
                          <div className="md:col-span-2 p-6 space-y-4">
                             <div className="flex justify-between items-start">
                                <div className="space-y-1">
                                   <Badge variant="primary">Next.js Masterclass</Badge>
                                   <h3 className="text-xl font-bold font-space-grotesk">Building Scalable Apps with Next.js 15</h3>
                                </div>
                                <span className="text-sm font-bold text-elite-primary-400">65%</span>
                             </div>
                             <ProgressBar value={65} className="h-2" />
                             <div className="flex items-center justify-between pt-4">
                                <div className="flex items-center gap-4 text-xs text-elite-primary-500">
                                   <span className="flex items-center gap-1"><BookOpen size={14} /> 12/18 Lessons</span>
                                   <span className="flex items-center gap-1"><Clock size={14} /> 2h 45m left</span>
                                </div>
                                <Button variant="accent" size="sm" asChild>
                                   <Link href="/learn/1">Resume <ChevronRight className="ml-1" size={14} /></Link>
                                </Button>
                             </div>
                          </div>
                       </div>
                    </Card>
                 </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                 {/* Wallet Preview */}
                 <Card className="bg-elite-primary-900 text-white border-none shadow-xl overflow-hidden relative group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                       <Rocket size={80} />
                    </div>
                    <CardContent className="p-6 space-y-4 relative">
                       <div className="text-[10px] font-bold uppercase tracking-widest text-elite-primary-400">Wallet Balance</div>
                       <div className="text-3xl font-bold font-space-grotesk">$1,250.00</div>
                       <div className="flex gap-2">
                          <Button variant="accent" size="sm" className="h-8 text-[10px] font-bold" asChild>
                             <Link href="/wallet">Manage Wallet</Link>
                          </Button>
                       </div>
                    </CardContent>
                 </Card>

                 {/* Leaderboard */}
                 <Card className="border-none shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between">
                       <CardTitle className="text-lg">Top Learners</CardTitle>
                       <Trophy size={18} className="text-elite-accent-500" />
                    </CardHeader>
                    <CardContent className="space-y-4">
                       {[
                         { rank: 1, name: "Sarah K.", xp: 12450 },
                         { rank: 2, name: "John D.", xp: 11200 },
                         { rank: 3, name: "You", xp: 10800, active: true },
                       ].map((u) => (
                         <div key={u.rank} className={cn(
                           "flex items-center gap-3 p-2 rounded-xl transition-all",
                           u.active && "bg-elite-primary-50 dark:bg-elite-primary-800 ring-1 ring-elite-primary-100"
                         )}>
                            <div className="w-6 text-sm font-bold text-elite-primary-400">#{u.rank}</div>
                            <div className="w-8 h-8 rounded-full bg-elite-primary-200" />
                            <div className="flex-1 font-bold text-sm">{u.name}</div>
                            <div className="text-xs font-bold text-elite-xp">{u.xp} XP</div>
                         </div>
                       ))}
                    </CardContent>
                 </Card>
              </div>
           </div>
        </main>
      </div>
      <MobileBottomNav />
    </div>
  );
}
