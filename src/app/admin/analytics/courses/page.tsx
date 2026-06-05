import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
import {
import { useState } from "react";
import { cn } from "@/lib/utils";
"use client";

  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';
  BookOpen,
  Star,
  TrendingUp,
  TrendingDown,
  Clock,
  Users,
  Award,
  ChevronRight,
  Filter,
  Download,
  Flame
} from "lucide-react";

export default function CourseAnalytics() {
  const topCourses = [
    { name: 'Next.js 15 Masterclass', students: 1240, rating: 4.9, completion: 85, color: '#8B5CF6' },
    { name: 'UI/UX Advanced', students: 850, rating: 4.8, completion: 72, color: '#F59E0B' },
    { name: 'Python for AI', students: 610, rating: 4.7, completion: 64, color: '#10B981' },
    { name: 'Cloud Architecture', students: 420, rating: 4.6, completion: 58, color: '#06B6D4' },
    { name: 'Cybersecurity', students: 380, rating: 4.9, completion: 91, color: '#EF4444' },
  ];

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 space-y-6">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h1 className="text-3xl font-bold font-space-grotesk">Course Analytics</h1>
              <div className="flex gap-2">
                 <Button variant="outline" size="sm"><Download size={18} className="mr-2" /> Course Reports</Button>
                 <Button variant="primary" size="sm"><Filter size={18} className="mr-2" /> Category Deep-dive</Button>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { label: "Avg. Completion", value: "68%", icon: Award, change: "+4%", trend: "up" },
                { label: "Course Satisfaction", value: "4.82", icon: Star, change: "+0.1", trend: "up" },
                { label: "Avg. Study Time", value: "4.5h", icon: Clock, change: "-10m", trend: "down" },
                { label: "New Enrollments", value: "1.2k", icon: Users, change: "+15%", trend: "up" },
              ].map((stat, i) => (
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

        <main className="px-6 pb-24 space-y-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Popularity Bar Chart */}
              <Card>
                 <CardHeader>
                    <CardTitle className="text-lg font-space-grotesk flex items-center gap-2">
                       <Flame size={20} className="text-elite-streak" /> Enrollment by Course
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="h-[400px] pt-8">
                    <ResponsiveContainer width="100%" height="100%">
                       <BarChart data={topCourses} layout="vertical">
                          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#88888811" />
                          <XAxis type="number" hide />
                          <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#888'}} width={120} />
                          <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                          <Bar dataKey="students" radius={[0, 4, 4, 0]} barSize={24}>
                             {topCourses.map((entry, index) => (
                               <Cell key={`cell-${index}`} fill={entry.color} />
                             ))}
                          </Bar>
                       </BarChart>
                    </ResponsiveContainer>
                 </CardContent>
              </Card>

              {/* Course Performance Table */}
              <Card className="flex flex-col">
                 <CardHeader>
                    <CardTitle className="text-lg font-space-grotesk">Content Health Metrics</CardTitle>
                 </CardHeader>
                 <CardContent className="flex-1 p-0">
                    <div className="divide-y divide-elite-primary-50 dark:divide-elite-primary-900">
                       {topCourses.map((c, i) => (
                         <div key={i} className="p-4 space-y-4 hover:bg-elite-primary-50 transition-colors cursor-pointer">
                            <div className="flex justify-between items-start">
                               <div className="font-bold text-sm truncate max-w-[250px]">{c.name}</div>
                               <Badge variant="primary" className="text-[8px]">{c.completion}% Done</Badge>
                            </div>
                            <div className="flex items-center gap-6 text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">
                               <div className="flex items-center gap-1.5"><Star size={12} className="text-elite-accent-500" fill="currentColor" /> {c.rating}</div>
                               <div className="flex items-center gap-1.5"><Users size={12} /> {c.students}</div>
                            </div>
                            <div className="h-1 w-full bg-elite-primary-50 dark:bg-elite-primary-900 rounded-full overflow-hidden">
                               <div className="h-full" style={{ width: `${c.completion}%`, backgroundColor: c.color }} />
                            </div>
                         </div>
                       ))}
                    </div>
                    <div className="p-4 border-t border-elite-primary-50">
                       <Button variant="ghost" className="w-full text-xs font-bold uppercase tracking-widest text-elite-primary-600">View In-depth Course Audit</Button>
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
