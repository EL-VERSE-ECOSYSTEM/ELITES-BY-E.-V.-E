"use client";

import {Trophy, Award,
  BookOpen,
  Star,
  DollarSign,
  Rocket,
  ChevronRight,
  Zap,
  Globe,
  CheckCircle2} from "lucide-react";
import {Card, CardContent} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Sidebar } from "@/components/layout/Sidebar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

export default function LearnerDashboard() {
  return (
    <div className="flex min-h-screen bg-elite-off-white dark:bg-elite-dark-bg">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-elite-dark-surface border-b border-elite-border-gray dark:border-elite-dark-border">
           <div>
              <h1 className="text-3xl font-black font-space-grotesk text-elite-blue-deep dark:text-white">Welcome back, Learner!</h1>
              <p className="text-sm text-elite-slate-gray font-medium">Your learning journey continues.</p>
           </div>
           <div className="flex items-center gap-4">
              <Badge variant="warning" className="h-10 px-4 gap-2 font-black border-none bg-elite-warning/10 text-elite-warning">
                 <Zap size={16} fill="currentColor" /> 5 Day Streak
              </Badge>
              <div className="w-10 h-10 rounded-full bg-elite-purple flex items-center justify-center font-bold text-white shadow-lg">JD</div>
           </div>
        </header>

        <main className="p-6 pb-24 space-y-8">
           {/* KPI Cards */}
           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { title: "ELITES ID", value: "#8824", icon: Globe, color: "text-blue-600" },
                { title: "Current XP", value: "24,500", icon: Trophy, Award, color: "text-purple-600" },
                { title: "Courses", value: "12 Enrolled", icon: BookOpen, color: "text-emerald-600" },
                { title: "Wallet", value: "$1,250.00", icon: DollarSign, color: "text-elite-success" }
              ].map((kpi, idx) => (
                <Card key={idx} className="border-none shadow-xl bg-white dark:bg-elite-dark-card overflow-hidden group">
                  <CardContent className="p-6 space-y-3">
                    <div className="flex justify-between items-center">
                       <div className={`w-10 h-10 rounded-xl ${kpi.color.replace('text', 'bg')}/10 flex items-center justify-center ${kpi.color}`}>
                          <kpi.icon size={20} />
                       </div>
                    </div>
                    <div>
                       <div className="text-[10px] font-black text-elite-light-gray uppercase tracking-widest">{kpi.title}</div>
                       <div className="text-2xl font-black font-space-grotesk text-elite-dark-blue dark:text-white">{kpi.value}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                 <div className="space-y-4">
                    <div className="flex items-center justify-between">
                       <h2 className="text-xl font-bold flex items-center gap-2"><BookOpen size={20} /> Active Learning Path</h2>
                       <Button variant="ghost" size="sm" className="text-xs font-bold uppercase tracking-widest">See All</Button>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                       {[
                         { title: "Advanced Next.js 15 Masterclass", tutor: "Dr. Sarah Jenkins", progress: 65, color: "bg-elite-purple" },
                         { title: "Solidity & Smart Contract Security", tutor: "Kofi Anan", progress: 24, color: "bg-blue-600" }
                       ].map((course, i) => (
                         <Card key={i} className="border-none shadow-xl bg-white dark:bg-elite-dark-card overflow-hidden">
                            <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-center">
                               <div className={cn("w-20 h-20 rounded-2xl flex items-center justify-center shrink-0", course.color + "/10")}>
                                  <Rocket className={course.color.replace('bg', 'text')} size={32} />
                               </div>
                               <div className="flex-1 space-y-4 w-full">
                                  <div className="flex justify-between items-start">
                                     <div>
                                        <h3 className="font-bold text-lg text-elite-dark-blue dark:text-white">{course.title}</h3>
                                        <p className="text-xs text-elite-slate-gray">Instructor: {course.tutor}</p>
                                     </div>
                                     <Badge variant="primary" className="bg-elite-success/10 text-elite-success border-none text-[10px] font-black">{course.progress}%</Badge>
                                  </div>
                                  <div className="space-y-2">
                                     <div className="h-2 w-full bg-elite-off-white dark:bg-elite-dark-bg rounded-full overflow-hidden">
                                        <div className={cn("h-full transition-all duration-1000", course.color)} style={{ width: `${course.progress}%` }} />
                                     </div>
                                     <div className="flex justify-between text-[10px] font-black text-elite-light-gray uppercase tracking-widest">
                                        <span>12 / 24 Lessons</span>
                                        <span>Estimated 4h left</span>
                                     </div>
                                  </div>
                               </div>
                               <Button variant="primary" className="gradient-button border-none font-bold uppercase tracking-widest px-8">Resume</Button>
                            </CardContent>
                         </Card>
                       ))}
                    </div>
                 </div>

                 <div className="space-y-4">
                    <h2 className="text-xl font-bold flex items-center gap-2"><Award size={20} /> Recent Promotions</h2>
                    <Card className="border-none shadow-xl bg-elite-purple text-white p-8 overflow-hidden relative group">
                       <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:rotate-12 transition-transform duration-500">
                          <Rocket size={200} />
                       </div>
                       <div className="relative z-10 space-y-6">
                          <div className="flex items-center gap-4">
                             <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                                <Zap size={28} />
                             </div>
                             <div>
                                <h3 className="text-2xl font-black font-space-grotesk tracking-tight">Promoted to EL CODERS</h3>
                                <p className="text-white/80 font-medium">Recommended by Dr. Sarah Jenkins based on your performance.</p>
                             </div>
                          </div>
                          <div className="flex gap-4">
                             <Button size="lg" className="bg-white text-elite-purple hover:bg-white/90 font-black uppercase tracking-widest border-none px-10">Apply Now</Button>
                          </div>
                       </div>
                    </Card>
                 </div>
              </div>

              <div className="space-y-8">
                 <Card className="border-none shadow-xl bg-white dark:bg-elite-dark-card p-6 space-y-6">
                    <div className="flex justify-between items-center">
                       <h2 className="font-bold flex items-center gap-2"><Star size={18} className="text-elite-warning" /> Milestones</h2>
                       <Badge variant="primary" className="bg-elite-off-white text-elite-slate-gray border-none font-black text-[10px]">12 TOTAL</Badge>
                    </div>
                    <div className="space-y-4">
                       {[
                         { title: "Course Finisher", date: "2 days ago", icon: CheckCircle2, color: "text-emerald-500" },
                         { title: "Quiz Master", date: "Oct 12, 2023", icon: Zap, color: "text-amber-500" },
                         { title: "First Project", date: "Sep 24, 2023", icon: Trophy, Award, color: "text-blue-500" }
                       ].map((m, i) => (
                         <div key={i} className="flex items-center gap-4 p-3 rounded-2xl bg-elite-off-white dark:bg-elite-dark-surface border border-elite-border-gray dark:border-elite-dark-border">
                            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", m.color.replace('text', 'bg') + "/10", m.color)}>
                               <m.icon size={20} />
                            </div>
                            <div className="flex-1">
                               <div className="font-bold text-sm text-elite-dark-blue dark:text-white">{m.title}</div>
                               <div className="text-[10px] text-elite-light-gray font-black uppercase">{m.date}</div>
                            </div>
                            <ChevronRight size={14} className="text-elite-light-gray" />
                         </div>
                       ))}
                    </div>
                    <Button variant="outline" className="w-full font-bold uppercase tracking-widest text-xs border-2">View Achievement Hall</Button>
                 </Card>

                 <Card className="border-none shadow-2xl bg-elite-dark-blue text-white overflow-hidden group">
                    <CardContent className="p-8 space-y-6 relative">
                       <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
                          <DollarSign size={100} />
                       </div>
                       <div className="space-y-1">
                          <div className="text-[10px] font-black text-white/40 uppercase tracking-widest">Available Earnings</div>
                          <div className="text-4xl font-black font-space-grotesk text-elite-success">$1,250.00</div>
                       </div>
                       <div className="grid grid-cols-2 gap-4">
                          <div className="p-3 rounded-xl bg-white/5 space-y-1">
                             <div className="text-[9px] font-black text-white/40 uppercase">From Projects</div>
                             <div className="font-bold text-sm">$800.00</div>
                          </div>
                          <div className="p-3 rounded-xl bg-white/5 space-y-1">
                             <div className="text-[9px] font-black text-white/40 uppercase">From Referrals</div>
                             <div className="font-bold text-sm">$450.00</div>
                          </div>
                       </div>
                       <Button variant="accent" className="w-full font-black uppercase tracking-widest bg-elite-success hover:bg-emerald-600 border-none shadow-xl shadow-emerald-900/20" asChild>
                          <Link href="/wallet">Manage Funds</Link>
                       </Button>
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
