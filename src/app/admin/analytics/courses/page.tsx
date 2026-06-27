"use client";
import { cn } from "@/lib/utils";
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Sidebar } from "@/components/layout/Sidebar";


import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import {Award, Clock, Download, Filter, Star, TrendingDown, TrendingUp, Users} from "lucide-react";

export default function CourseAnalytics() {
  const topCourses = [
    { name: 'Next.js 15 Masterclass', students: 1240, rating: 4.9, completion: 85, color: '#8B5CF6' },
    { name: 'UI/UX Advanced', students: 850, rating: 4.8, completion: 72, color: '#F59E0B' },
    { name: 'Python for AI', students: 610, rating: 4.7, completion: 64, color: '#10B981' },
    { name: 'Cybersecurity 101', students: 540, rating: 4.6, completion: 58, color: '#EF4444' },
    { name: 'Solidity Deep Dive', students: 480, rating: 4.9, completion: 92, color: '#6366F1' },
  ];

  const stats = [
    { label: "Avg. Completion", value: "68%", icon: Award, change: "+4%", trend: "up" },
    { label: "Course Satisfaction", value: "4.82", icon: Star, change: "+0.1", trend: "up" },
    { label: "Avg. Study Time", value: "4.5h", icon: Clock, change: "-10m", trend: "down" },
    { label: "New Enrollments", value: "1.2k", icon: Users, change: "+15%", trend: "up" },
  ];

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 border-b border-elite-primary-100 dark:border-elite-primary-900 bg-white">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                 <h1 className="text-3xl font-bold font-space-grotesk text-elite-primary-950">Course Analytics</h1>
                 <p className="text-sm text-elite-primary-500 font-medium">Performance tracking for all catalog offerings.</p>
              </div>
              <div className="flex items-center gap-3">
                 <Button variant="outline" size="sm"><Download size={18} className="mr-2" /> Export CSV</Button>
                 <Button variant="primary" size="sm"><Filter size={18} className="mr-2" /> Filter Data</Button>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, i) => (
                <Card key={i} className="p-4 border-none shadow-sm space-y-3">
                   <div className="flex justify-between items-center">
                      <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">{stat.label}</div>
                      <stat.icon size={16} className="text-elite-primary-400" />
                   </div>
                   <div className="flex items-baseline gap-2">
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className={cn(
                        "text-[10px] font-bold flex items-center gap-1",
                        stat.trend === 'up' ? "text-elite-success" : "text-elite-error"
                      )}>
                         {stat.trend === 'up' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                         {stat.change}
                      </div>
                   </div>
                </Card>
              ))}
           </div>
        </header>

        <main className="p-6 pb-24 space-y-8">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="lg:col-span-2 border-none shadow-xl">
                 <CardHeader>
                    <CardTitle className="text-lg">Student Progress Distribution</CardTitle>
                 </CardHeader>
                 <CardContent className="h-[350px]">
                    <ResponsiveContainer width="100%" height="100%">
                       <BarChart data={topCourses}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 600}} />
                          <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 600}} />
                          <Tooltip
                            contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}}
                          />
                          <Bar dataKey="students" radius={[4, 4, 0, 0]}>
                             {topCourses.map((entry, index) => (
                               <Cell key={`cell-${index}`} fill={entry.color} />
                             ))}
                          </Bar>
                       </BarChart>
                    </ResponsiveContainer>
                 </CardContent>
              </Card>

              <Card className="border-none shadow-xl">
                 <CardHeader>
                    <CardTitle className="text-lg">Top Rated Courses</CardTitle>
                 </CardHeader>
                 <CardContent className="p-0">
                    <div className="divide-y divide-elite-primary-50">
                       {topCourses.map((c, i) => (
                         <div key={i} className="p-4 flex items-center justify-between hover:bg-elite-primary-50 transition-colors">
                            <div className="flex items-center gap-3">
                               <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs" style={{backgroundColor: `${c.color}20`, color: c.color}}>{i + 1}</div>
                               <div className="text-sm font-bold">{c.name}</div>
                            </div>
                            <div className="flex items-center gap-1 text-elite-accent-500 font-bold text-sm">
                               <Star size={14} fill="currentColor" /> {c.rating}
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
