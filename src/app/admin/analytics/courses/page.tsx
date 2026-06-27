"use client";

import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Sidebar } from "@/components/layout/Sidebar";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Award, Download, Filter, Flame, Star, TrendingDown, TrendingUp, Users } from "lucide-react";

export default function CourseAnalytics() {
  const topCourses = [
    { name: "Advanced React", students: 1240, revenue: 62000, growth: "+12%" },
    { name: "Next.js 15 Masterclass", students: 980, revenue: 49000, growth: "+24%" },
    { name: "Python for AI", students: 850, revenue: 34000, growth: "+8%" },
    { name: "UI/UX Foundations", students: 720, revenue: 28800, growth: "-2%" },
    { name: "Solidity Deep Dive", students: 640, revenue: 51200, growth: "+45%" },
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
        </header>

        <main className="p-6 pb-24 space-y-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Active Courses", value: "84", change: "+4 this month", icon: Award, color: "text-blue-500" },
                { label: "Avg. Completion", value: "68%", change: "+5.2%", icon: Flame, color: "text-orange-500" },
                { label: "Total Enrollments", value: "12,450", change: "+1,204", icon: Users, color: "text-purple-500" },
                { label: "Avg. Rating", value: "4.8", change: "+0.1", icon: Star, color: "text-yellow-500" },
              ].map((stat, i) => (
                <Card key={i} className="border-none shadow-sm">
                   <CardContent className="p-6 space-y-4">
                      <div className="flex justify-between items-start">
                         <div className="w-10 h-10 rounded-xl bg-elite-primary-50 flex items-center justify-center">
                            <stat.icon className={stat.color} size={20} />
                         </div>
                         <Badge variant="primary" className="bg-elite-primary-50 text-elite-primary-600 border-none">{stat.change}</Badge>
                      </div>
                      <div className="space-y-1">
                         <div className="text-2xl font-black font-space-grotesk">{stat.value}</div>
                         <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">{stat.label}</div>
                      </div>
                   </CardContent>
                </Card>
              ))}
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="lg:col-span-2 border-none shadow-xl">
                 <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                       <TrendingUp size={20} className="text-elite-success" /> Enrollment Popularity
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                       <BarChart data={topCourses} layout="vertical">
                          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#F1F5F9" />
                          <XAxis type="number" hide />
                          <YAxis dataKey="name" type="category" width={150} tick={{fontSize: 12, fontWeight: 600}} axisLine={false} tickLine={false} />
                          <Tooltip
                            cursor={{fill: 'transparent'}}
                            contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}}
                          />
                          <Bar dataKey="students" radius={[0, 4, 4, 0]}>
                             {topCourses.map((entry, index) => (
                               <Cell key={`cell-${index}`} fill={index === 0 ? '#F59E0B' : '#0F0728'} />
                             ))}
                          </Bar>
                       </BarChart>
                    </ResponsiveContainer>
                 </CardContent>
              </Card>

              <Card className="border-none shadow-xl">
                 <CardHeader>
                    <CardTitle className="text-lg">Recent Performance</CardTitle>
                 </CardHeader>
                 <CardContent className="p-0">
                    <div className="divide-y divide-elite-primary-50">
                       {topCourses.map((c, i) => (
                         <div key={i} className="p-4 flex items-center justify-between hover:bg-elite-primary-50 transition-colors">
                            <div className="space-y-0.5">
                               <div className="font-bold text-sm">{c.name}</div>
                               <div className="text-[10px] text-elite-primary-400 uppercase font-bold">{c.growth.startsWith('+') ? <TrendingUp size={10} className="inline mr-1 text-elite-success" /> : <TrendingDown size={10} className="inline mr-1 text-elite-error" />}{c.growth} growth</div>
                            </div>
                            <div className="text-right">
                               <div className="font-bold text-sm">${(c.revenue / 1000).toFixed(1)}k</div>
                               <div className="text-[10px] text-elite-primary-400 uppercase font-bold">{c.students} enrolled</div>
                            </div>
                         </div>
                       ))}
                    </div>
                    <div className="p-4">
                       <Button variant="ghost" className="w-full text-xs">View Full Catalog Report</Button>
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
