"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";

import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AlertTriangle, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Clock, Filter, Mail, MessageSquare, MoreVertical, Search, User, Zap } from "lucide-react";

export default function AdminSupportTickets() {
  const [activeTab, setActiveTab] = useState<"open" | "assigned" | "closed">("open");

  const tickets = [
    { id: "TCK-8842", user: "John Doe", subject: "Unable to access course video", priority: "High", time: "12m ago", status: "Open" },
    { id: "TCK-8841", user: "Sarah K.", subject: "Refund request for Python course", priority: "Medium", time: "1h ago", status: "Open" },
    { id: "TCK-8840", user: "Kofi Anan", subject: "Certificate error - wrong name", priority: "Low", time: "3h ago", status: "Open" },
  ];

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 space-y-6">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h1 className="text-3xl font-bold font-space-grotesk">Support Center</h1>
              <div className="flex items-center gap-3">
                 <div className="text-right hidden md:block">
                    <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">Avg. Response Time</div>
                    <div className="text-xl font-bold text-elite-primary-900 dark:text-white">18 Minutes</div>
                 </div>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { label: "Unassigned", value: "24", icon: AlertTriangle, color: "text-elite-error" },
                { label: "My Tickets", value: "12", icon: User, color: "text-blue-600" },
                { label: "Resolved Today", value: "48", icon: CheckCircle2, color: "text-elite-success" },
                { label: "Satisfaction", value: "98%", icon: Zap, color: "text-elite-accent-500" },
              ].map((stat, i) => (
                <Card key={i} className="p-4 border-none shadow-sm flex items-center justify-between">
                   <div className="space-y-1">
                      <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">{stat.label}</div>
                      <div className="text-xl font-bold">{stat.value}</div>
                   </div>
                   <stat.icon className={stat.color} size={20} />
                </Card>
              ))}
           </div>
        </header>

        <main className="px-6 pb-24 space-y-6">
           <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white dark:bg-elite-primary-900 p-4 rounded-xl shadow-sm border border-elite-primary-100 dark:border-elite-primary-800">
              <div className="flex gap-4 p-1 bg-elite-primary-50 dark:bg-elite-primary-950 rounded-xl w-fit">
                 {["open", "assigned", "closed"].map((tab) => (
                   <button
                    key={tab}
                    onClick={() => setActiveTab(tab as "open" | "assigned" | "closed")}
                    className={cn(
                      "px-6 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all",
                      activeTab === tab ? "bg-white dark:bg-elite-primary-800 text-elite-primary-900 shadow-sm" : "text-elite-primary-400"
                    )}
                   >
                     {tab}
                   </button>
                 ))}
              </div>
              <div className="relative w-full md:w-72">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-elite-primary-400" size={16} />
                 <input placeholder="Search tickets..." className="w-full pl-9 pr-4 py-2 text-sm border border-elite-primary-100 dark:border-elite-primary-800 rounded-lg outline-none bg-transparent" />
              </div>
           </div>

           <Card className="overflow-hidden border-none shadow-xl">
              <div className="divide-y divide-elite-primary-100 dark:divide-elite-primary-900">
                 {tickets.map((t) => (
                   <div key={t.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-elite-primary-50 dark:hover:bg-white/5 transition-colors group cursor-pointer">
                      <div className="flex items-start gap-4">
                         <div className={cn(
                           "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
                           t.priority === 'High' ? "bg-elite-error/10 text-elite-error" : t.priority === 'Medium' ? "bg-elite-warning/10 text-elite-warning" : "bg-blue-50 text-blue-600"
                         )}>
                            <MessageSquare size={20} />
                         </div>
                         <div className="space-y-1">
                            <div className="flex items-center gap-3">
                               <span className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-mono">{t.id}</span>
                               <Badge variant={t.priority === 'High' ? 'error' : t.priority === 'Medium' ? 'warning' : 'primary'} className="text-[8px] h-4 px-1">{t.priority} Priority</Badge>
                            </div>
                            <h3 className="font-bold text-sm leading-tight">{t.subject}</h3>
                            <p className="text-xs text-elite-primary-500">Opened by <span className="font-bold text-elite-primary-700 dark:text-elite-primary-300">{t.user}</span> • {t.time}</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-4">
                         <Button variant="outline" size="sm" className="h-9 border-elite-primary-100 text-elite-primary-600">Assign to Me</Button>
                         <Button variant="primary" size="sm" className="h-9 px-6 bg-elite-primary-950 border-none group-hover:bg-elite-primary-800 transition-colors">
                            Reply <ArrowRight size={16} className="ml-2" />
                         </Button>
                      </div>
                   </div>
                 ))}
              </div>
           </Card>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}