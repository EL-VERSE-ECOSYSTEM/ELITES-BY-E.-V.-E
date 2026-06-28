"use client";

import {Users, DollarSign, BookOpen, AlertCircle, TrendingUp} from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Badge } from "@/components/ui/Badge";

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-elite-off-white dark:bg-elite-dark-bg">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 border-b border-elite-border-gray dark:border-elite-dark-border bg-white dark:bg-elite-dark-surface">
           <h1 className="text-3xl font-black font-space-grotesk text-elite-admin">Admin Command Center</h1>
           <p className="text-sm text-elite-slate-gray font-medium">Real-time platform oversight and management.</p>
        </header>

        <main className="p-6 pb-24 space-y-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Total Platform Users", value: "54,230", icon: Users, change: "+124", color: "text-blue-600" },
                { title: "Gross Revenue", value: "$428,500", icon: DollarSign, change: "+18%", color: "text-emerald-600" },
                { title: "Active Catalog", value: "156 Courses", icon: BookOpen, change: "4 Pending", color: "text-purple-600" },
                { title: "System Disputes", value: "24 Open", icon: AlertCircle, change: "Critical", color: "text-red-600" },
              ].map((kpi, idx) => (
                <Card key={idx} className="border-none shadow-xl bg-white dark:bg-elite-dark-card overflow-hidden relative group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
                     <kpi.icon size={80} />
                  </div>
                  <CardContent className="p-6 space-y-4 relative">
                    <div className="flex justify-between items-center">
                       <div className={`w-10 h-10 rounded-xl ${kpi.color.replace('text', 'bg')}/10 flex items-center justify-center ${kpi.color}`}>
                          <kpi.icon size={20} />
                       </div>
                       <Badge variant="primary" className="bg-elite-off-white dark:bg-elite-dark-surface text-elite-slate-gray border-none text-[10px] font-black">{kpi.change}</Badge>
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-elite-light-gray uppercase tracking-widest">{kpi.title}</div>
                      <div className="text-3xl font-black font-space-grotesk text-elite-dark-blue dark:text-white">{kpi.value}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="lg:col-span-2 border-none shadow-xl bg-white dark:bg-elite-dark-card p-8 space-y-8">
                 <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                       <TrendingUp className="text-elite-success" size={20} /> Performance Trends
                    </h2>
                 </div>
                 <div className="h-64 bg-elite-off-white dark:bg-elite-dark-surface rounded-3xl flex items-center justify-center text-elite-light-gray font-bold text-xs uppercase tracking-widest border-2 border-dashed border-elite-border-gray dark:border-elite-dark-border">
                    Analytics Visualization Layer
                 </div>
              </Card>

              <Card className="border-none shadow-xl bg-white dark:bg-elite-dark-card p-8 space-y-6">
                 <h2 className="text-xl font-bold">Verification Queue</h2>
                 <div className="space-y-4">
                    {[
                      { name: "Sarah Jenkins", role: "Tutor", time: "2m ago", status: "PENDING" },
                      { name: "David Mensah", role: "Learner", time: "15m ago", status: "PENDING" },
                      { name: "Kofi Anan", role: "Tutor", time: "1h ago", status: "REVIEWING" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-elite-off-white dark:bg-elite-dark-surface rounded-2xl">
                         <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-elite-purple/10 text-elite-purple flex items-center justify-center font-bold">
                               {item.name.charAt(0)}
                            </div>
                            <div>
                               <div className="font-bold text-sm">{item.name}</div>
                               <div className="text-[10px] text-elite-light-gray font-bold uppercase">{item.role} • {item.time}</div>
                            </div>
                         </div>
                         <Badge variant="warning" className="text-[8px] px-2 h-5">{item.status}</Badge>
                      </div>
                    ))}
                 </div>
              </Card>
           </div>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}
