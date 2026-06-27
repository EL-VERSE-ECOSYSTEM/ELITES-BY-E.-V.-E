"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";

import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import {Card, CardContent} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {BookOpen, CheckCircle2, DollarSign, Filter, MessageSquare, Trash2, Zap} from "lucide-react";

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState<"all" | "unread" | "achievements">("all");

  const notifications = [
    {
      id: 1,
      title: "Course Updated",
      msg: "New lessons added to 'Next.js 15 Masterclass'. Check them out!",
      type: "course",
      time: "2m ago",
      unread: true
    },
    {
      id: 2,
      title: "Achievement Unlocked",
      msg: "You earned the 'Code Ninja' badge! +250 XP awarded.",
      type: "achievement",
      time: "1h ago",
      unread: true
    },
    {
      id: 3,
      title: "Wallet Credit",
      msg: "Your referral reward of $5.00 has been credited to your wallet.",
      type: "finance",
      time: "3h ago",
      unread: false
    },
    {
      id: 4,
      title: "New Message",
      msg: "Amara Okafor replied to your comment in the study group.",
      type: "social",
      time: "Yesterday",
      unread: false
    },
  ];

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 space-y-6">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h1 className="text-3xl font-bold font-space-grotesk">Notifications</h1>
              <div className="flex items-center gap-3">
                 <Button variant="ghost" size="sm" className="text-elite-primary-400 hover:text-elite-error"><Trash2 size={18} className="mr-2" /> Clear All</Button>
                 <Button variant="primary" size="sm"><CheckCircle2 size={18} className="mr-2" /> Mark all read</Button>
              </div>
           </div>

           <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex gap-2 p-1 bg-white dark:bg-elite-primary-900 rounded-xl w-fit border border-elite-primary-100 dark:border-elite-primary-800">
                 {["all", "unread", "achievements"].map((tab) => (
                   <button
                    key={tab}
                    onClick={() => setActiveTab(tab as "all" | "unread" | "achievements")}
                    className={cn(
                      "px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all",
                      activeTab === tab ? "bg-elite-primary-950 text-white shadow-lg" : "text-elite-primary-400 hover:text-elite-primary-900"
                    )}
                   >
                     {tab}
                   </button>
                 ))}
              </div>
              <Button variant="outline" size="sm"><Filter size={16} className="mr-2" /> Filter by Type</Button>
           </div>
        </header>

        <main className="px-6 pb-24 max-w-4xl">
           <div className="space-y-4">
              {notifications.map((n) => (
                <Card key={n.id} className={cn(
                  "group transition-all hover:border-elite-primary-300 cursor-pointer overflow-hidden",
                  n.unread ? "border-l-4 border-l-elite-accent-500 shadow-md" : "opacity-80"
                )}>
                   <CardContent className="p-6 flex gap-6">
                      <div className={cn(
                        "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110",
                        n.type === 'course' && "bg-blue-50 text-blue-600",
                        n.type === 'achievement' && "bg-elite-xp/10 text-elite-xp",
                        n.type === 'finance' && "bg-elite-success/10 text-elite-success",
                        n.type === 'social' && "bg-elite-primary-50 text-elite-primary-600",
                      )}>
                         {n.type === 'course' && <BookOpen size={24} />}
                         {n.type === 'achievement' && <Zap size={24} />}
                         {n.type === 'finance' && <DollarSign size={24} />}
                         {n.type === 'social' && <MessageSquare size={24} />}
                      </div>
                      <div className="flex-1 space-y-1">
                         <div className="flex justify-between items-start">
                            <h3 className={cn("font-bold text-lg leading-tight", n.unread ? "text-elite-primary-900 dark:text-white" : "text-elite-primary-600")}>{n.title}</h3>
                            <span className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-tighter whitespace-nowrap ml-4">{n.time}</span>
                         </div>
                         <p className="text-sm text-elite-primary-500 leading-relaxed">{n.msg}</p>
                         <div className="pt-3 flex items-center gap-4">
                            <button className="text-[10px] font-bold uppercase tracking-widest text-elite-primary-600 hover:underline">View Details</button>
                            <button className="text-[10px] font-bold uppercase tracking-widest text-elite-primary-400 hover:text-elite-error transition-colors">Delete</button>
                         </div>
                      </div>
                   </CardContent>
                </Card>
              ))}
           </div>

           <div className="mt-12 text-center">
              <Button variant="ghost" className="text-xs font-bold uppercase tracking-widest text-elite-primary-400">Load older notifications</Button>
           </div>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}