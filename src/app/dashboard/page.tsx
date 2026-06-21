"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Bell, BookOpen, ChevronRight, Clock, Flame, Play, Sun, Target, Trophy, X, Zap, Coins } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Navbar } from "@/components/layout/Navbar";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function StudentDashboard() {
  const activityData = [
    { name: 'Mon', hours: 2.5 },
    { name: 'Tue', hours: 3.8 },
    { name: 'Wed', hours: 1.2 },
    { name: 'Thu', hours: 4.5 },
    { name: 'Fri', hours: 2.0 },
    { name: 'Sat', hours: 5.2 },
    { name: 'Sun', hours: 3.0 },
  ];

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-30 bg-white/80 dark:bg-elite-primary-950/80 backdrop-blur-md border-b border-elite-primary-100 dark:border-elite-primary-900 px-6 py-4 flex items-center justify-between">
           <div className="flex flex-col">
              <h1 className="text-xl font-bold font-space-grotesk">Good Morning, David! 👋</h1>
              <p className="text-xs text-elite-primary-500 font-medium">Ready to continue your learning journey?</p>
           </div>
           <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-elite-primary-100 dark:hover:bg-elite-primary-900 rounded-lg transition-colors">
                 <Bell size={20} className="text-elite-primary-600" />
                 <span className="absolute top-2 right-2 w-2 h-2 bg-elite-error rounded-full" />
              </button>
              <Link href="/profile" className="flex items-center gap-2 group">
                 <div className="w-10 h-10 rounded-xl bg-elite-primary-200 border-2 border-transparent group-hover:border-elite-primary-600 transition-all" />
              </Link>
           </div>
        </header>

        <main className="p-6 pb-24 lg:pb-6 space-y-6 overflow-y-auto">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-gradient-to-br from-elite-primary-600 to-elite-primary-800 text-white border-none">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Zap size={24} fill="white" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider opacity-80">Current Level</div>
                  <div className="text-2xl font-bold font-space-grotesk">Level 12</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-elite-accent-500 to-elite-accent-600 text-white border-none">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Coins size={24} fill="white" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider opacity-80">Elite Coins</div>
                  <div className="text-2xl font-bold font-space-grotesk">2,450</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-elite-streak to-orange-600 text-white border-none">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Flame size={24} fill="white" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider opacity-80">Daily Streak</div>
                  <div className="text-2xl font-bold font-space-grotesk">7 Days</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-elite-success to-emerald-600 text-white border-none">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Trophy size={24} fill="white" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider opacity-80">Courses Done</div>
                  <div className="text-2xl font-bold font-space-grotesk">14</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
             {/* Main Column */}
             <div className="lg:col-span-2 space-y-6">
                {/* Resume Course */}
                <Card className="overflow-hidden border-elite-primary-100 dark:border-elite-primary-900 shadow-xl bg-white dark:bg-elite-primary-900/50">
                   <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="aspect-video md:aspect-auto bg-elite-primary-900 relative">
                         {/* Thumbnail Placeholder */}
                         <div className="absolute inset-0 flex items-center justify-center opacity-30">
                            <Play size={48} className="text-white" fill="white" />
                         </div>
                      </div>
                      <div className="md:col-span-2 p-6 space-y-4">
                         <div className="flex justify-between items-start">
                            <div className="space-y-1">
                               <Badge variant="primary" className="bg-elite-primary-100 text-elite-primary-700">Currently Learning</Badge>
                               <h3 className="text-xl font-bold font-space-grotesk">Mastering Next.js 15: From Zero to Pro</h3>
                            </div>
                            <div className="text-sm font-bold text-elite-primary-400">65%</div>
                         </div>
                         <ProgressBar value={65} className="h-2" />
                         <div className="flex items-center justify-between pt-4">
                            <div className="flex items-center gap-4 text-xs text-elite-primary-500 font-medium">
                               <span className="flex items-center gap-1"><BookOpen size={14} /> 12/18 Lessons</span>
                               <span className="flex items-center gap-1"><Clock size={14} /> 2h 45m left</span>
                            </div>
                            <Button variant="accent" size="sm" asChild>
                               <Link href="/learn/1">Resume Lesson <ChevronRight className="ml-1 w-4 h-4" /></Link>
                            </Button>
                         </div>
                      </div>
                   </div>
                </Card>

                {/* Activity Chart */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">Learning Activity</CardTitle>
                      <CardDescription>Your study hours over the last 7 days</CardDescription>
                    </div>
                    <Target className="text-elite-primary-400" />
                  </CardHeader>
                  <CardContent className="h-[250px] w-full pt-4">
                     <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={activityData}>
                           <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#88888822" />
                           <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#888'}} />
                           <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#888'}} />
                           <Tooltip
                            cursor={{fill: '#88888811'}}
                            contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                           />
                           <Bar dataKey="hours" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                        </BarChart>
                     </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* My Courses Grid Preview */}
                <div className="space-y-4">
                   <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold font-space-grotesk">My Courses</h3>
                      <Link href="/my-courses" className="text-sm font-bold text-elite-primary-600 hover:underline">View All</Link>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[1, 2].map((i) => (
                        <Card key={i} className="hover:border-elite-primary-300 transition-all cursor-pointer">
                           <CardContent className="p-4 flex gap-4">
                              <div className="w-20 h-20 bg-elite-primary-100 rounded-lg shrink-0" />
                              <div className="flex-1 space-y-2 min-w-0">
                                 <h4 className="font-bold text-sm truncate">Advanced UI/UX with Figma</h4>
                                 <ProgressBar value={30} className="h-1.5" />
                                 <div className="flex justify-between text-[10px] font-bold text-elite-primary-400">
                                    <span>30% Complete</span>
                                    <span>2 Lessons Left</span>
                                 </div>
                              </div>
                           </CardContent>
                        </Card>
                      ))}
                   </div>
                </div>
             </div>

             {/* Side Column */}
             <div className="space-y-6">
                {/* Daily Goal */}
                <Card className="text-center p-6 space-y-4">
                   <CardTitle className="text-lg">Daily Goal</CardTitle>
                   <div className="relative w-32 h-32 mx-auto">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle className="text-elite-primary-100 dark:text-elite-primary-900 stroke-current" strokeWidth="8" cx="50" cy="50" r="40" fill="transparent" />
                        <circle className="text-elite-accent-500 stroke-current" strokeWidth="8" strokeLinecap="round" cx="50" cy="50" r="40" fill="transparent" strokeDasharray="251.2" strokeDashoffset="62.8" />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                         <span className="text-2xl font-bold">45</span>
                         <span className="text-[10px] text-elite-primary-400 uppercase font-bold">Minutes</span>
                      </div>
                   </div>
                   <p className="text-sm text-elite-primary-500 font-medium">You've reached 75% of your daily goal. Keep it up!</p>
                   <Button variant="outline" className="w-full">Edit Goal</Button>
                </Card>

                {/* Upcoming Deadlines */}
                <Card>
                   <CardHeader>
                      <CardTitle className="text-lg">Upcoming Deadlines</CardTitle>
                   </CardHeader>
                   <CardContent className="space-y-4">
                      {[
                        { title: "Next.js Project Submission", date: "Tomorrow, 11:59 PM", color: "bg-elite-error" },
                        { title: "UI Design Review Session", date: "Friday, 2:00 PM", color: "bg-elite-warning" },
                        { title: "Python Quiz #4", date: "Sunday, 10:00 AM", color: "bg-elite-info" },
                      ].map((item, idx) => (
                        <div key={idx} className="flex gap-4 items-start">
                           <div className={cn("w-1 h-10 rounded-full", item.color)} />
                           <div>
                              <div className="text-sm font-bold">{item.title}</div>
                              <div className="text-xs text-elite-primary-400">{item.date}</div>
                           </div>
                        </div>
                      ))}
                   </CardContent>
                </Card>

                {/* Leaderboard Preview */}
                <Card>
                   <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle className="text-lg">Leaderboard</CardTitle>
                      <Trophy size={18} className="text-elite-accent-500" />
                   </CardHeader>
                   <CardContent className="space-y-4">
                      {[
                        { rank: 1, name: "Sarah K.", xp: 12450, avatar: "" },
                        { rank: 2, name: "John D.", xp: 11200, avatar: "" },
                        { rank: 3, name: "You", xp: 10800, avatar: "", active: true },
                      ].map((u) => (
                        <div key={u.rank} className={cn(
                          "flex items-center gap-3 p-2 rounded-lg",
                          u.active && "bg-elite-primary-50 dark:bg-elite-primary-900/50 ring-1 ring-elite-primary-200"
                        )}>
                           <div className="w-6 text-sm font-bold text-elite-primary-400">#{u.rank}</div>
                           <div className="w-8 h-8 rounded-full bg-elite-primary-200" />
                           <div className="flex-1 font-bold text-sm">{u.name}</div>
                           <div className="text-xs font-bold text-elite-xp">{u.xp} XP</div>
                        </div>
                      ))}
                      <Button variant="ghost" className="w-full text-xs" asChild>
                         <Link href="/leaderboard">View Full Leaderboard</Link>
                      </Button>
                   </CardContent>
                </Card>
             </div>
          </div>
        </main>

        <MobileBottomNav />
      </div>
    </div>
  );
}