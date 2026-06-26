"use client";
import {cn} from "@/lib/utils";
import {ChevronRight, MessageSquare, Plus, Search, TrendingUp, Users} from "lucide-react";
import {useState} from "react";
import {MobileBottomNav} from "@/components/layout/MobileBottomNav";
import {Sidebar} from "@/components/layout/Sidebar";

import {Badge} from "@/components/ui/Badge";
import {Button} from "@/components/ui/Button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/Card";

export default function StudyGroupsPage() {
  const [activeTab, setActiveTab] = useState<"my-groups" | "discover">("my-groups");

  const groups = [
    { id: 1, name: "Next.js 15 Early Adopters", members: 124, activeDiscussions: 12, category: "Web Dev", status: "active" },
    { id: 2, name: "Data Science Africa", members: 850, activeDiscussions: 45, category: "Data Science", status: "active" },
    { id: 3, name: "UI/UX Critique Circle", members: 320, activeDiscussions: 8, category: "Design", status: "active" },
  ];

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 space-y-6">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h1 className="text-3xl font-bold font-space-grotesk">Study Groups</h1>
              <Button variant="accent" size="sm"><Plus size={18} className="mr-2" /> Create New Group</Button>
           </div>

           <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="flex gap-4 p-1 bg-white dark:bg-elite-primary-900 rounded-xl w-fit border border-elite-primary-100 dark:border-elite-primary-800">
                 {["my-groups", "discover"].map((tab) => (
                   <button
                    key={tab}
                    onClick={() => setActiveTab(tab as "my-groups" | "discover")}
                    className={cn(
                      "px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all",
                      activeTab === tab ? "bg-elite-primary-950 text-white shadow-lg" : "text-elite-primary-400 hover:text-elite-primary-900"
                    )}
                   >
                     {tab.replace("-", " ")}
                   </button>
                 ))}
              </div>
              <div className="relative w-full md:w-72">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-elite-primary-400" size={16} />
                 <input placeholder="Search groups..." className="w-full pl-9 pr-4 py-2 text-sm bg-white dark:bg-elite-primary-900 border border-elite-primary-100 dark:border-elite-primary-800 rounded-xl outline-none" />
              </div>
           </div>
        </header>

        <main className="px-6 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8">
           {/* Groups Grid */}
           <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {groups.map((group) => (
                <Card key={group.id} className="hover:border-elite-primary-400 transition-all cursor-pointer group">
                   <CardContent className="p-6 space-y-6">
                      <div className="flex justify-between items-start">
                         <div className="w-14 h-14 rounded-2xl bg-elite-primary-50 dark:bg-elite-primary-950 flex items-center justify-center text-elite-primary-600 font-bold text-xl group-hover:bg-elite-primary-600 group-hover:text-white transition-all">
                            {group.name[0]}
                         </div>
                         <Badge variant="primary" className="text-[8px] uppercase tracking-widest">{group.category}</Badge>
                      </div>
                      <div className="space-y-1">
                         <h3 className="font-bold text-lg leading-tight">{group.name}</h3>
                         <div className="flex items-center gap-4 text-[10px] font-bold text-elite-primary-400 uppercase tracking-tighter">
                            <span className="flex items-center gap-1"><Users size={12} /> {group.members} Members</span>
                            <span className="flex items-center gap-1"><MessageSquare size={12} /> {group.activeDiscussions} Topics</span>
                         </div>
                      </div>
                      <div className="pt-4 border-t border-elite-primary-50 dark:border-elite-primary-800 flex items-center justify-between">
                         <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                              <div key={i} className="w-6 h-6 rounded-full border-2 border-white dark:border-elite-primary-900 bg-elite-primary-100" />
                            ))}
                         </div>
                         <Button variant="ghost" size="sm" className="text-xs font-bold uppercase tracking-widest text-elite-primary-600 group-hover:translate-x-1 transition-transform">
                            Join Group <ChevronRight size={14} className="ml-1" />
                         </Button>
                      </div>
                   </CardContent>
                </Card>
              ))}
           </div>

           {/* Sidebar */}
           <div className="lg:col-span-4 space-y-8">
              <Card className="bg-elite-primary-950 text-white p-6 border-none shadow-xl overflow-hidden relative">
                 <div className="absolute top-0 right-0 p-4 opacity-10">
                    <TrendingUp size={100} />
                 </div>
                 <div className="relative z-10 space-y-6">
                    <h3 className="text-lg font-bold font-space-grotesk">Global Leaderboard</h3>
                    <div className="space-y-4">
                       {[1, 2, 3].map((i) => (
                         <div key={i} className="flex items-center gap-3">
                            <span className="text-xs font-bold text-elite-primary-500">#{i}</span>
                            <div className="w-8 h-8 rounded-lg bg-white/10" />
                            <div className="flex-1 min-w-0">
                               <div className="text-xs font-bold truncate">Study Group Alpha</div>
                               <div className="text-[8px] text-elite-primary-400 uppercase font-bold tracking-widest">12,450 XP</div>
                            </div>
                         </div>
                       ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full border-white/20 text-white hover:bg-white/10 text-[10px] font-bold uppercase">View Rankings</Button>
                 </div>
              </Card>

              <Card>
                 <CardHeader>
                    <CardTitle className="text-lg font-space-grotesk">Active Discussions</CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-4">
                    {[
                      { title: "React 19 vs Next.js 15?", group: "Web Dev", time: "2m ago" },
                      { title: "Best resources for AWS?", group: "DevOps", time: "15m ago" },
                      { title: "Portfolio review session", group: "Design", time: "1h ago" },
                    ].map((topic, i) => (
                      <div key={i} className="p-3 rounded-xl hover:bg-elite-primary-50 dark:hover:bg-white/5 transition-colors cursor-pointer space-y-1">
                         <div className="text-sm font-bold truncate">{topic.title}</div>
                         <div className="flex justify-between text-[10px] font-bold text-elite-primary-400 uppercase tracking-tighter">
                            <span>{topic.group}</span>
                            <span>{topic.time}</span>
                         </div>
                      </div>
                    ))}
                 </CardContent>
              </Card>
           </div>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}