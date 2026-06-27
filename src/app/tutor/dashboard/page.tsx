"use client";

import {Users,
  BookOpen,
  Star,
  DollarSign,
  TrendingUp,
  Plus,
  Calendar,
  ChevronRight,
  ShieldCheck} from "lucide-react";
import {Card, CardContent} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Sidebar } from "@/components/layout/Sidebar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const revenueData = [
  { month: "May", revenue: 1200 },
  { month: "Jun", revenue: 1800 },
  { month: "Jul", revenue: 1400 },
  { month: "Aug", revenue: 2200 },
  { month: "Sep", revenue: 3100 },
  { month: "Oct", revenue: 4800 },
];

export default function TutorDashboard() {
  return (
    <div className="flex min-h-screen bg-elite-off-white dark:bg-elite-dark-bg">
      <Sidebar />
      <div className="flex-1 min-w-0">
        <header className="px-6 py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-elite-dark-surface border-b border-elite-border-gray dark:border-elite-dark-border">
           <div>
              <h1 className="text-3xl font-black font-space-grotesk text-elite-purple dark:text-white">Tutor Studio</h1>
              <p className="text-sm text-elite-slate-gray font-medium">Empowering the next generation of African tech talent.</p>
           </div>
           <div className="flex items-center gap-3">
              <Badge variant="success" className="h-10 px-4 gap-2 font-black border-none bg-elite-success/10 text-elite-success hidden md:flex">
                 <ShieldCheck size={16} /> Verified Expert
              </Badge>
              <Button size="sm" className="gradient-button border-none font-black uppercase tracking-widest px-6" asChild>
                 <Link href="/tutor/courses/create"><Plus size={18} className="mr-1" /> Create Course</Link>
              </Button>
           </div>
        </header>

        <main className="p-6 pb-24 space-y-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Total Students", value: "1,245", icon: Users, change: "+12%", color: "text-blue-600" },
                { title: "Course Content", value: "8 Assets", icon: BookOpen, change: "Active", color: "text-purple-600" },
                { title: "Avg. Rating", value: "4.9", icon: Star, change: "+0.1", color: "text-elite-warning" },
                { title: "Wallet Balance", value: "$4,800.00", icon: DollarSign, change: "+24%", color: "text-elite-success" },
              ].map((stat, idx) => (
                <Card key={idx} className="border-none shadow-xl bg-white dark:bg-elite-dark-card overflow-hidden group">
                   <CardContent className="p-6 space-y-4">
                      <div className="flex justify-between items-center">
                         <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", stat.color.replace('text', 'bg') + "/10", stat.color)}>
                            <stat.icon size={20} fill={stat.title.includes('Rating') ? 'currentColor' : 'none'} />
                         </div>
                         <Badge variant="primary" className="bg-elite-off-white dark:bg-elite-dark-surface text-elite-slate-gray border-none text-[10px] font-black">{stat.change}</Badge>
                      </div>
                      <div>
                         <div className="text-[10px] font-black text-elite-light-gray uppercase tracking-widest">{stat.title}</div>
                         <div className="text-2xl font-black font-space-grotesk text-elite-dark-blue dark:text-white">{stat.value}</div>
                      </div>
                   </CardContent>
                </Card>
              ))}
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="lg:col-span-2 border-none shadow-xl bg-white dark:bg-elite-dark-card p-8 space-y-8">
                 <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                       <TrendingUp className="text-elite-success" size={20} /> Revenue Analytics
                    </h2>
                 </div>
                 <div className="h-64 pt-4">
                    <ResponsiveContainer width="100%" height="100%">
                       <AreaChart data={revenueData}>
                          <defs>
                             <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#6C2BD9" stopOpacity={0.1}/>
                                <stop offset="95%" stopColor="#6C2BD9" stopOpacity={0}/>
                             </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F033" />
                          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 700, fill: '#94A3B8'}} />
                          <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 700, fill: '#94A3B8'}} />
                          <Tooltip
                             contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)'}}
                          />
                          <Area type="monotone" dataKey="revenue" stroke="#6C2BD9" strokeWidth={4} fillOpacity={1} fill="url(#colorRevenue)" />
                       </AreaChart>
                    </ResponsiveContainer>
                 </div>
              </Card>

              <Card className="border-none shadow-xl bg-white dark:bg-elite-dark-card p-6 space-y-6">
                 <div className="flex justify-between items-center">
                    <h2 className="font-bold flex items-center gap-2"><Calendar size={18} className="text-elite-purple" /> Upcoming Sessions</h2>
                 </div>
                 <div className="space-y-4">
                    {[
                      { name: "John Doe", time: "10:00 AM", topic: "Next.js Debugging", avatar: "JD" },
                      { name: "Sarah K.", time: "2:30 PM", topic: "UI Design Review", avatar: "SK" },
                      { name: "Kofi Anan", time: "Tomorrow, 9:00 AM", topic: "Career Mentorship", avatar: "KA" },
                    ].map((session, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-3 rounded-2xl bg-elite-off-white dark:bg-elite-dark-surface border border-elite-border-gray dark:border-elite-dark-border group cursor-pointer hover:border-elite-purple transition-all">
                         <div className="w-10 h-10 rounded-full bg-elite-purple/10 text-elite-purple flex items-center justify-center font-bold text-xs">
                            {session.avatar}
                         </div>
                         <div className="flex-1 min-w-0">
                            <div className="text-sm font-bold truncate text-elite-dark-blue dark:text-white">{session.name}</div>
                            <div className="text-[10px] text-elite-light-gray font-bold uppercase">{session.time} • {session.topic}</div>
                         </div>
                         <ChevronRight size={14} className="text-elite-light-gray group-hover:text-elite-purple transition-colors" />
                      </div>
                    ))}
                 </div>
                 <Button variant="outline" className="w-full font-bold uppercase tracking-widest text-xs border-2">View Full Schedule</Button>
              </Card>
           </div>
        </main>
      </div>
      <MobileBottomNav />
    </div>
  );
}
