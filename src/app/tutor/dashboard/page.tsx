"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {  BookOpen, ChevronRight, DollarSign, Plus, Star, TrendingUp, Users, X , Calendar } from "lucide-react";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Sidebar } from "@/components/layout/Sidebar";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Area, AreaChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function TutorDashboard() {
  const revenueData = [
    { month: 'Jan', revenue: 1200 },
    { month: 'Feb', revenue: 2100 },
    { month: 'Mar', revenue: 1800 },
    { month: 'Apr', revenue: 3500 },
    { month: 'May', revenue: 3200 },
    { month: 'Jun', revenue: 4800 },
  ];

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 border-b border-elite-primary-100 dark:border-elite-primary-900 bg-white/80 dark:bg-elite-primary-950/80 backdrop-blur-md sticky top-0 z-30">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
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
           </div>
        </header>

        <main className="p-6 pb-24 space-y-6">
           {/* Stats Grid */}
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
              {/* Revenue Chart */}
              <Card className="lg:col-span-2">
                 <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-lg">Revenue Overview</CardTitle>
                    <select className="bg-transparent text-xs font-bold text-elite-primary-400 uppercase tracking-widest outline-none border-none">
                       <option>Last 6 Months</option>
                       <option>Last Year</option>
                    </select>
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

              {/* Upcoming Sessions */}
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

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Reviews */}
              <Card>
                 <CardHeader>
                    <CardTitle className="text-lg">Recent Student Feedback</CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-6">
                    {[1, 2].map((i) => (
                      <div key={i} className="space-y-2">
                         <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                               <div className="w-8 h-8 rounded-full bg-elite-primary-50" />
                               <span className="text-sm font-bold">Anonymous Student</span>
                            </div>
                            <div className="flex text-elite-accent-500">
                               {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={12} fill="currentColor" />)}
                            </div>
                         </div>
                         <p className="text-xs text-elite-primary-500 leading-relaxed italic">
                            &quot;Excellent tutor! David explains complex Next.js concepts in a very simple way that is easy for beginners to understand.&quot;
                         </p>
                      </div>
                    ))}
                    <Button variant="ghost" className="w-full text-xs" asChild>
                       <Link href="/tutor/reviews">Read All Reviews</Link>
                    </Button>
                 </CardContent>
              </Card>

              {/* Course Performance */}
              <Card>
                 <CardHeader>
                    <CardTitle className="text-lg">Course Performance</CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-4">
                    {[
                      { title: "Next.js 15 Masterclass", students: 450, revenue: "$6,750", progress: 85 },
                      { title: "UI/UX for Developers", students: 320, revenue: "$4,800", progress: 72 },
                    ].map((course, idx) => (
                      <div key={idx} className="p-4 rounded-xl border border-elite-primary-100 dark:border-elite-primary-800 space-y-3">
                         <div className="flex justify-between items-start">
                            <h4 className="text-sm font-bold truncate max-w-[200px]">{course.title}</h4>
                            <div className="text-sm font-bold text-elite-success">{course.revenue}</div>
                         </div>
                         <div className="flex justify-between text-[10px] font-bold text-elite-primary-400">
                            <span>{course.students} Students</span>
                            <span>{course.progress}% Completion</span>
                         </div>
                         <div className="h-1.5 w-full bg-elite-primary-100 dark:bg-elite-primary-900 rounded-full overflow-hidden">
                            <div className="h-full bg-elite-primary-600" style={{ width: `${course.progress}%` }} />
                         </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full text-xs" asChild>
                       <Link href="/tutor/courses">Manage My Courses</Link>
                    </Button>
                 </CardContent>
              </Card>
           </div>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}