"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {AlertTriangle, CheckCircle2, Clock, Flag, MessageSquare, ShieldCheck, Activity} from "lucide-react";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Sidebar } from "@/components/layout/Sidebar";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function ModeratorDashboard() {
  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 space-y-6">
           <div className="flex items-center justify-between">
              <div className="space-y-1">
                 <h1 className="text-3xl font-bold font-space-grotesk">Moderator Dashboard</h1>
                 <p className="text-sm text-elite-primary-500 font-medium">Keeping the ELITE community safe and professional.</p>
              </div>
              <Badge variant="primary" className="bg-elite-success/10 text-elite-success border-none animate-pulse px-4 py-1">Online</Badge>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { label: "Pending Reviews", value: "42", icon: Flag, color: "text-elite-warning" },
                { label: "Community Flagged", value: "18", icon: AlertTriangle, color: "text-elite-error" },
                { label: "Resolved Today", value: "156", icon: CheckCircle2, color: "text-elite-success" },
                { label: "Avg. Action Time", value: "12m", icon: Clock, color: "text-blue-600" },
              ].map((stat, i) => (
                <Card key={i} className="p-4 border-none shadow-sm flex items-center justify-between">
                   <div className="space-y-1">
                      <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">{stat.label}</div>
                      <div className="text-xl font-bold">{stat.value}</div>
                   </div>
                   <stat.icon size={20} className={stat.color} />
                </Card>
              ))}
           </div>
        </header>

        <main className="px-6 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8">
           {/* Priority Queue */}
           <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center justify-between">
                 <h3 className="text-lg font-bold font-space-grotesk">High Priority Queue</h3>
                 <Button variant="ghost" size="sm" className="text-xs font-bold uppercase" asChild><Link href="/moderator/review">View All Queue</Link></Button>
              </div>

              <div className="space-y-4">
                 {[
                   { type: "Comment", user: "User_442", item: "Hate speech reported in Next.js discussion", priority: "critical" },
                   { type: "Profile", user: "Talent_88", item: "Impersonation suspected on profile", priority: "high" },
                   { type: "Tutor App", user: "Expert_01", item: "Verification documents pending review", priority: "medium" },
                 ].map((item, i) => (
                   <Card key={i} className={cn(
                     "group transition-all hover:border-elite-primary-400 overflow-hidden",
                     item.priority === 'critical' ? "border-l-4 border-l-elite-error" : "border-l-4 border-l-elite-warning"
                   )}>
                      <CardContent className="p-6 flex items-center justify-between gap-6">
                         <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-elite-primary-50 dark:bg-elite-primary-950 flex items-center justify-center text-elite-primary-600">
                               {item.type === 'Comment' ? <MessageSquare size={18} /> : <ShieldCheck size={18} />}
                            </div>
                            <div>
                               <div className="flex items-center gap-2">
                                  <span className="font-bold text-sm">{item.user}</span>
                                  <Badge variant={item.priority === 'critical' ? 'error' : 'warning'} className="text-[8px] h-4 px-1">{item.priority}</Badge>
                               </div>
                               <p className="text-xs text-elite-primary-500 mt-1">{item.item}</p>
                            </div>
                         </div>
                         <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" className="h-8 text-[10px] font-bold uppercase">View</Button>
                            <Button variant="primary" size="sm" className="h-8 text-[10px] font-bold uppercase bg-elite-success border-none">Resolve</Button>
                         </div>
                      </CardContent>
                   </Card>
                 ))}
              </div>
           </div>

           {/* Moderation Analytics */}
           <div className="lg:col-span-4 space-y-6">
              <Card className="bg-elite-primary-950 text-white border-none shadow-xl">
                 <CardHeader>
                    <CardTitle className="text-sm font-bold uppercase tracking-widest text-elite-primary-400">My Performance</CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-6">
                    <div className="text-center space-y-2">
                       <div className="text-4xl font-bold font-space-grotesk text-elite-accent-500">99.4%</div>
                       <p className="text-[10px] font-bold text-elite-primary-400 uppercase">Moderation Accuracy</p>
                    </div>
                    <div className="space-y-4">
                       {[
                         { label: "Cases Handled", value: 1240 },
                         { label: "Resolved Today", value: 48 },
                       ].map((s, i) => (
                         <div key={i} className="flex justify-between items-center text-xs">
                            <span className="text-elite-primary-400">{s.label}</span>
                            <span className="font-bold">{s.value}</span>
                         </div>
                       ))}
                    </div>
                    <hr className="border-white/10" />
                    <Button variant="outline" size="sm" className="w-full border-white/20 text-white hover:bg-white/10">Full History</Button>
                 </CardContent>
              </Card>

              <Card>
                 <CardHeader>
                    <CardTitle className="text-sm font-bold uppercase tracking-widest text-elite-primary-400">Recent System Actions</CardTitle>
                 </CardHeader>
                 <CardContent className="p-0">
                    <div className="divide-y divide-elite-primary-50">
                       {[1, 2, 3].map((i) => (
                         <div key={i} className="p-4 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-elite-primary-50 flex items-center justify-center text-elite-primary-600"><Activity size={14} /></div>
                            <div className="flex-1 min-w-0">
                               <div className="text-[10px] font-bold truncate">Auto-Mod blocked spam link</div>
                               <div className="text-[8px] text-elite-primary-400 font-bold uppercase">2m ago</div>
                            </div>
                         </div>
                       ))}
                    </div>
                 </CardContent>
              </Card>
           </div>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}