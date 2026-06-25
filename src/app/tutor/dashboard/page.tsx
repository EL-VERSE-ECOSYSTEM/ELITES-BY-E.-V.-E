"use client";

import {
  Users,
  BookOpen,
  Star,
  DollarSign,
  TrendingUp,
  Plus,
  Calendar,
  ChevronRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import Link from "next/link";
import { cn } from "@/lib/utils";
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
    <div className="min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950 flex flex-col md:flex-row pb-20">
      <div className="flex-1 min-w-0">
        <header className="px-6 py-8 flex justify-between items-center bg-white dark:bg-elite-primary-950 border-b dark:border-elite-primary-800">
           <div>
              <h1 className="text-2xl font-bold font-space-grotesk">Tutor Dashboard</h1>
              <p className="text-sm text-elite-primary-500 font-medium">Empowering the next generation of African tech talent.</p>
           </div>
           <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="hidden md:flex">Manage Schedule</Button>
              <Button variant="accent" size="sm" asChild>
                 <Link href="/tutor/courses/create"><Plus size={18} className="mr-1" /> Create New Course</Link>
              </Button>
           </div>
        </header>

        <main className="p-6 pb-24 space-y-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Total Students", value: "1,245", icon: Users, change: "+12%", color: "text-blue-600", bg: "bg-blue-50" },
                { title: "Active Courses", value: "8", icon: BookOpen, change: "0", color: "text-purple-600", bg: "bg-purple-50" },
                { title: "Avg. Rating", value: "4.9", icon: Star, change: "+0.1", color: "text-elite-accent-500", bg: "bg-amber-50" },
                { title: "Monthly Revenue", value: "$4,800", icon: DollarSign, change: "+24%", color: "text-elite-success", bg: "bg-emerald-50" },
              ].map((stat, idx) => (
                <Card key={idx} className="border-none shadow-sm hover:shadow-md transition-all">
                   <CardContent className="p-6 flex items-center justify-between">
                      <div className="space-y-1">
                         <div className="text-xs font-bold text-elite-primary-400 uppercase tracking-widest">{stat.title}</div>
                         <div className="text-2xl font-bold font-space-grotesk">{stat.value}</div>
                         <div className={cn("text-[10px] font-bold flex items-center gap-1", stat.color)}>
                            <TrendingUp size={12} /> {stat.change} this month
                         </div>
                      </div>
                      <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center shrink-0", stat.bg)}>
                         <stat.icon className={stat.color} size={24} fill={stat.color === 'text-elite-accent-500' ? 'currentColor' : 'none'} />
                      </div>
                   </CardContent>
                </Card>
              ))}
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                 <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-lg">Revenue Overview</CardTitle>
                 </CardHeader>
                 <CardContent className="h-[300px] pt-4">
                    <ResponsiveContainer width="100%" height="100%">
                       <AreaChart data={revenueData}>
                          <defs>
                             <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.1}/>
                                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                             </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#88888811" />
                          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#888'}} />
                          <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#888'}} />
                          <Tooltip
                             contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                          />
                          <Area type="monotone" dataKey="revenue" stroke="#8B5CF6" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                       </AreaChart>
                    </ResponsiveContainer>
                 </CardContent>
              </Card>

              <Card>
                 <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-lg">Upcoming Sessions</CardTitle>
                    <Calendar size={18} className="text-elite-primary-400" />
                 </CardHeader>
                 <CardContent className="space-y-4">
                    {[
                      { name: "John Doe", time: "10:00 AM", topic: "Next.js Debugging", avatar: "JD" },
                      { name: "Sarah K.", time: "2:30 PM", topic: "UI Design Review", avatar: "SK" },
                      { name: "Kofi Anan", time: "Tomorrow, 9:00 AM", topic: "Career Mentorship", avatar: "KA" },
                    ].map((session, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-3 rounded-xl hover:bg-elite-primary-50 dark:hover:bg-white/5 transition-colors cursor-pointer group">
                         <div className="w-10 h-10 rounded-full bg-elite-primary-100 flex items-center justify-center font-bold text-xs">
                            {session.avatar}
                         </div>
                         <div className="flex-1 min-w-0">
                            <div className="text-sm font-bold truncate">{session.name}</div>
                            <div className="text-[10px] text-elite-primary-400 font-bold uppercase">{session.time} • {session.topic}</div>
                         </div>
                         <Button variant="ghost" size="icon" className="group-hover:text-elite-primary-600"><ChevronRight size={16} /></Button>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full text-xs uppercase tracking-widest font-bold">View Full Schedule</Button>
                 </CardContent>
              </Card>
           </div>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}
