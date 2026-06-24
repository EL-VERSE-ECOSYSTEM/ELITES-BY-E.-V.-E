"use client";
import { cn } from "@/lib/utils";
import { AlertCircle, AlertTriangle, CheckCircle, Eye, Filter, Flag, MessageSquare, MoreVertical, ShieldAlert, UserX,  } from "lucide-react";
import { useState } from "react";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Sidebar } from "@/components/layout/Sidebar";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";

export default function ModerationPage() {
  const [activeTab, setActiveTab] = useState<"reported" | "content" | "disputes">("reported");

  const reports = [
    { id: 1, type: "Comment", user: "John Doe", reason: "Hate Speech", item: "Next.js Course Discussion", time: "5m ago" },
    { id: 2, type: "Profile", user: "Sarah K.", reason: "Inappropriate Avatar", item: "User Profile", time: "1h ago" },
    { id: 3, type: "Review", user: "Anonymous", reason: "Spam", item: "Python Course Review", time: "3h ago" },
  ];

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 space-y-6">
           <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold font-space-grotesk">Moderation Center</h1>
              <Badge variant="error" className="animate-pulse">Live Moderation Active</Badge>
           </div>

           <div className="flex gap-4 p-1 bg-white dark:bg-elite-primary-900 rounded-2xl w-fit border border-elite-primary-100 dark:border-elite-primary-800">
              {[
                { id: "reported", label: "Reported Users", icon: ShieldAlert },
                { id: "content", label: "Content Queue", icon: MessageSquare },
                { id: "disputes", label: "Active Disputes", icon: AlertTriangle },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as unknown)}
                  className={cn(
                    "px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2",
                    activeTab === tab.id ? "bg-elite-primary-950 text-white shadow-lg" : "text-elite-primary-400 hover:text-elite-primary-900"
                  )}
                >
                  <tab.icon size={16} /> {tab.label}
                </button>
              ))}
           </div>
        </header>

        <main className="px-6 pb-24 space-y-6">
           {/* Queue Card */}
           <Card className="border-none shadow-xl overflow-hidden">
              <CardHeader className="bg-elite-primary-950 text-white flex flex-row items-center justify-between">
                 <CardTitle className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                    <Flag size={18} /> Review Queue
                 </CardTitle>
                 <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/10"><Filter size={16} className="mr-2" /> Filter</Button>
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">Mark All as Resolved</Button>
                 </div>
              </CardHeader>
              <div className="divide-y divide-elite-primary-100 dark:divide-elite-primary-900">
                 {reports.map((report) => (
                   <div key={report.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-elite-primary-50 dark:hover:bg-white/5 transition-colors group">
                      <div className="flex items-start gap-4">
                         <div className="w-10 h-10 rounded-xl bg-elite-error/10 text-elite-error flex items-center justify-center shrink-0">
                            <AlertCircle size={24} />
                         </div>
                         <div className="space-y-1">
                            <div className="flex items-center gap-3">
                               <span className="text-sm font-bold">{report.user}</span>
                               <Badge variant="error" className="text-[8px] h-4 px-1">{report.reason}</Badge>
                            </div>
                            <p className="text-xs text-elite-primary-500">Reported {report.type} in <span className="font-bold text-elite-primary-700 dark:text-elite-primary-300">{report.item}</span></p>
                         </div>
                      </div>

                      <div className="flex items-center gap-4">
                         <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-tighter whitespace-nowrap">{report.time}</div>
                         <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" className="h-9 px-4 border-elite-primary-100 text-elite-primary-600 hover:bg-white">
                               <Eye size={16} className="mr-2" /> View
                            </Button>
                            <Button variant="outline" size="sm" className="h-9 w-9 p-0 text-elite-error hover:bg-elite-error/10 border-elite-error/20">
                               <UserX size={16} />
                            </Button>
                            <Button variant="primary" size="sm" className="h-9 px-4 bg-elite-success border-none">
                               <CheckCircle size={16} className="mr-2" /> Dismiss
                            </Button>
                         </div>
                         <button className="p-2 text-elite-primary-400 hover:text-elite-primary-900"><MoreVertical size={18} /></button>
                      </div>
                   </div>
                 ))}
              </div>
           </Card>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="p-6 space-y-4">
                 <h3 className="font-bold font-space-grotesk flex items-center gap-2">
                    <ShieldAlert size={18} className="text-elite-warning" /> Auto-Moderation Stats
                 </h3>
                 <div className="space-y-4">
                    {[
                      { label: "Spam Blocked", value: "1,240", color: "text-elite-success" },
                      { label: "Flagged Content", value: "450", color: "text-elite-warning" },
                      { label: "Suspended Accounts", value: "12", color: "text-elite-error" },
                    ].map((s, i) => (
                      <div key={i} className="flex justify-between items-center">
                         <span className="text-xs text-elite-primary-500 font-medium">{s.label}</span>
                         <span className={cn("font-bold", s.color)}>{s.value}</span>
                      </div>
                    ))}
                 </div>
              </Card>

              <Card className="lg:col-span-2 p-6 space-y-4">
                 <h3 className="font-bold font-space-grotesk">Recent Moderation Actions</h3>
                 <div className="space-y-4">
                    {[
                      { admin: "Alice Mod", action: "Deleted comment by User_123", time: "10m ago" },
                      { admin: "System", action: "Auto-suspended User_88 for spamming", time: "25m ago" },
                      { admin: "Bob Mod", action: "Approved flagged course: 'Intro to AI'", time: "45m ago" },
                    ].map((a, i) => (
                      <div key={i} className="flex items-center gap-4 text-xs">
                         <div className="w-8 h-8 rounded-full bg-elite-primary-100 flex items-center justify-center font-bold text-[8px]">{a.admin[0]}</div>
                         <div className="flex-1">
                            <span className="font-bold">{a.admin}</span>
                            <span className="text-elite-primary-500"> {a.action}</span>
                         </div>
                         <span className="text-[10px] text-elite-primary-400">{a.time}</span>
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