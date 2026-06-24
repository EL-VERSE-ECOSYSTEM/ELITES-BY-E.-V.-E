"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {  ChevronLeft, ChevronRight, Plus, Settings, Users , Video } from "lucide-react";
import { useState } from "react";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Sidebar } from "@/components/layout/Sidebar";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function SessionSchedule() {
  const [view, setView] = useState<"week" | "month" | "day">("week");

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const hours = Array.from({ length: 12 }).map((_, i) => `${i + 8}:00`);

  const sessions = [
    { day: "Mon", time: "10:00", name: "John Doe", topic: "Next.js Help", type: "mentorship" },
    { day: "Wed", time: "14:00", name: "Sarah K.", topic: "UI Review", type: "consultation" },
    { day: "Fri", time: "09:00", name: "Kofi Anan", topic: "Python Basics", type: "mentorship" },
  ];

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 space-y-6">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                 <h1 className="text-3xl font-bold font-space-grotesk">Session Schedule</h1>
                 <p className="text-sm text-elite-primary-500 font-medium">Manage your 1-on-1 availability and upcoming student sessions.</p>
              </div>
              <div className="flex items-center gap-3">
                 <Button variant="outline" size="sm" asChild>
                    <Link href="/tutor/availability"><Settings size={18} className="mr-2" /> Availability Settings</Link>
                 </Button>
                 <Button variant="primary" size="sm"><Plus size={18} className="mr-2" /> Block Time</Button>
              </div>
           </div>

           <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white dark:bg-elite-primary-900 p-4 rounded-2xl shadow-sm">
              <div className="flex items-center gap-4">
                 <div className="flex border border-elite-primary-100 dark:border-elite-primary-800 rounded-xl p-1">
                    {["day", "week", "month"].map((v) => (
                      <button
                        key={v}
                        onClick={() => setView(v as unknown)}
                        className={cn(
                          "px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all",
                          view === v ? "bg-elite-primary-950 text-white shadow-lg" : "text-elite-primary-400 hover:text-elite-primary-900"
                        )}
                      >
                        {v}
                      </button>
                    ))}
                 </div>
                 <div className="h-6 w-[1px] bg-elite-primary-100 dark:bg-elite-primary-800 hidden md:block" />
                 <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="h-8 w-8"><ChevronLeft size={16} /></Button>
                    <span className="text-sm font-bold font-space-grotesk min-w-[150px] text-center">Feb 12 — Feb 18, 2024</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8"><ChevronRight size={16} /></Button>
                 </div>
              </div>
              <Badge variant="primary" className="bg-elite-primary-100 text-elite-primary-700">Africa/Lagos (GMT+1)</Badge>
           </div>
        </header>

        <main className="px-6 pb-24 overflow-x-auto">
           <Card className="min-w-[800px] border-none shadow-xl overflow-hidden">
              <div className="grid grid-cols-8 divide-x divide-elite-primary-100 dark:divide-elite-primary-900 bg-elite-primary-950 text-white">
                 <div className="p-4" /> {/* Time column header */}
                 {days.map((day) => (
                   <div key={day} className="p-4 text-center">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-elite-primary-400">{day}</div>
                      <div className="text-lg font-bold font-space-grotesk">12</div>
                   </div>
                 ))}
              </div>
              <div className="divide-y divide-elite-primary-100 dark:divide-elite-primary-900">
                 {hours.map((hour) => (
                   <div key={hour} className="grid grid-cols-8 divide-x divide-elite-primary-100 dark:divide-elite-primary-900 group">
                      <div className="p-4 text-[10px] font-bold text-elite-primary-400 text-right sticky left-0 bg-white dark:bg-gray-900 group-hover:bg-elite-primary-50 transition-colors">
                         {hour}
                      </div>
                      {days.map((day) => {
                        const session = sessions.find(s => s.day === day && s.time === hour);
                        return (
                          <div key={day} className="p-2 min-h-[80px] hover:bg-elite-primary-50/50 transition-colors relative group/cell">
                             {session ? (
                               <div className={cn(
                                 "absolute inset-1 p-2 rounded-lg text-[10px] shadow-sm cursor-pointer hover:shadow-md transition-all",
                                 session.type === 'mentorship' ? 'bg-elite-primary-100 text-elite-primary-800 border-l-2 border-elite-primary-600' : 'bg-emerald-100 text-emerald-800 border-l-2 border-emerald-600'
                               )}>
                                  <div className="font-bold truncate">{session.name}</div>
                                  <div className="opacity-80 truncate">{session.topic}</div>
                                  <div className="mt-1 flex items-center gap-1">
                                     <Video size={10} /> {hour}
                                  </div>
                               </div>
                             ) : (
                               <button className="absolute inset-0 w-full h-full opacity-0 group-hover/cell:opacity-100 flex items-center justify-center text-elite-primary-200">
                                  <Plus size={16} />
                               </button>
                             )}
                          </div>
                        );
                      })}
                   </div>
                 ))}
              </div>
           </Card>

           <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                 <CardHeader>
                    <CardTitle className="text-lg">Today{"'"}s Sessions</CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-4">
                    <div className="p-4 rounded-xl border border-elite-primary-100 dark:border-elite-primary-800 flex items-center justify-between">
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-elite-primary-100 flex items-center justify-center font-bold">JD</div>
                          <div>
                             <div className="font-bold text-sm">John Doe</div>
                             <div className="text-xs text-elite-primary-400">Next.js Debugging • 10:00 AM</div>
                          </div>
                       </div>
                       <Button variant="accent" size="sm">Join Session</Button>
                    </div>
                 </CardContent>
              </Card>

              <Card>
                 <CardHeader>
                    <CardTitle className="text-lg">Session Requests</CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-4 text-center py-8">
                    <div className="w-12 h-12 bg-elite-primary-50 rounded-full flex items-center justify-center mx-auto text-elite-primary-400 mb-4">
                       <Users size={24} />
                    </div>
                    <p className="text-sm text-elite-primary-500 font-medium">No pending session requests at the moment.</p>
                 </CardContent>
              </Card>
           </div>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}