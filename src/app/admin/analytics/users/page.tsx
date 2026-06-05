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
  LineChart,
  Line,
  Cell,
  PieChart,
  Pie
} from 'recharts';
  Users,
  UserPlus,
  UserMinus,
  Target,
  Globe,
  TrendingUp,
  TrendingDown,
  Download,
  Filter,
  ArrowUpRight
} from "lucide-react";

export default function UserAnalytics() {
  const growthData = [
    { name: 'Jan', students: 12000, tutors: 120 },
    { name: 'Feb', students: 18000, tutors: 145 },
    { name: 'Mar', students: 25000, tutors: 180 },
    { name: 'Apr', students: 32000, tutors: 210 },
    { name: 'May', students: 44000, tutors: 230 },
    { name: 'Jun', students: 54230, tutors: 245 },
  ];

  const demographicData = [
    { name: '18-24', value: 45, color: '#8B5CF6' },
    { name: '25-34', value: 35, color: '#F59E0B' },
    { name: '35-44', value: 15, color: '#10B981' },
    { name: '45+', value: 5, color: '#06B6D4' },
  ];

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 space-y-6">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h1 className="text-3xl font-bold font-space-grotesk">User Analytics</h1>
              <div className="flex gap-2">
                 <Button variant="outline" size="sm"><Download size={18} className="mr-2" /> Export Data</Button>
                 <Button variant="primary" size="sm"><Filter size={18} className="mr-2" /> Cohort Analysis</Button>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { label: "Daily Active (DAU)", value: "8.4k", icon: Users, change: "+5%", trend: "up" },
                { label: "New Registrations", value: "450", icon: UserPlus, change: "+12%", trend: "up" },
                { label: "Churn Rate", value: "2.4%", icon: UserMinus, change: "-0.5%", trend: "down" },
                { label: "Retention", value: "84%", icon: Target, change: "+2%", trend: "up" },
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
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Growth Chart */}
              <Card className="lg:col-span-8">
                 <CardHeader className="flex flex-row items-center justify-between pb-8">
                    <CardTitle className="text-lg font-space-grotesk">User Growth (Last 6 Months)</CardTitle>
                    <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest">
                       <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-elite-primary-600" /> Students</span>
                       <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-elite-accent-500" /> Tutors</span>
                    </div>
                 </CardHeader>
                 <CardContent className="h-[350px]">
                    <ResponsiveContainer width="100%" height="100%">
                       <LineChart data={growthData}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#88888811" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#888'}} />
                          <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#888'}} />
                          <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                          <Line type="monotone" dataKey="students" stroke="#8B5CF6" strokeWidth={3} dot={{r: 4}} activeDot={{r: 6}} />
                          <Line type="monotone" dataKey="tutors" stroke="#F59E0B" strokeWidth={2} dot={{r: 4}} />
                       </LineChart>
                    </ResponsiveContainer>
                 </CardContent>
              </Card>

              {/* Age Demographics */}
              <Card className="lg:col-span-4">
                 <CardHeader>
                    <CardTitle className="text-lg font-space-grotesk">Age Demographics</CardTitle>
                 </CardHeader>
                 <CardContent className="h-[350px] flex flex-col items-center">
                    <ResponsiveContainer width="100%" height="100%">
                       <PieChart>
                          <Pie
                             data={demographicData}
                             cx="50%"
                             cy="50%"
                             innerRadius={70}
                             outerRadius={100}
                             paddingAngle={8}
                             dataKey="value"
                          >
                             {demographicData.map((entry, index) => (
                               <Cell key={`cell-${index}`} fill={entry.color} />
                             ))}
                          </Pie>
                          <Tooltip />
                       </PieChart>
                    </ResponsiveContainer>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 w-full mt-4">
                       {demographicData.map((d, i) => (
                         <div key={i} className="flex flex-col gap-1">
                            <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-elite-primary-400">
                               <div className="w-2 h-2 rounded-full" style={{backgroundColor: d.color}} />
                               {d.name}
                            </div>
                            <div className="text-sm font-bold ml-4">{d.value}%</div>
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
