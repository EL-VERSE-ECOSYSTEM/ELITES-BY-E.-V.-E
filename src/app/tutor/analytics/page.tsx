"use client";

import { MobileBottomNav from "@/components/layout/MobileBottomNav";, Card, CardContent, CardHeader, CardTitle from "@/components/ui/Card";, Button from "@/components/ui/Button";, Badge from "@/components/ui/Badge";, useState from "react";, cn from "@/lib/utils";, Users, BookOpen, Star, TrendingUp, TrendingDown, Clock, MapPin, Globe, BarChart3, PieChart as PieChartIcon, MousePointer2, Share2 } from "lucide-react";
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie
} from 'recharts';

export default function TutorAnalytics() {
  const engagementData = [
    { name: 'Mon', active: 450, total: 600 },
    { name: 'Tue', active: 520, total: 650 },
    { name: 'Wed', active: 480, total: 620 },
    { name: 'Thu', active: 610, total: 700 },
    { name: 'Fri', active: 590, total: 680 },
    { name: 'Sat', active: 750, total: 800 },
    { name: 'Sun', active: 680, total: 750 },
  ];

  const countryData = [
    { name: 'Nigeria', value: 45, color: '#8B5CF6' },
    { name: 'Kenya', value: 25, color: '#F59E0B' },
    { name: 'South Africa', value: 15, color: '#10B981' },
    { name: 'Ghana', value: 10, color: '#06B6D4' },
    { name: 'Other', value: 5, color: '#E2E8F0' },
  ];

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 space-y-6">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h1 className="text-3xl font-bold font-space-grotesk">Advanced Analytics</h1>
              <div className="flex gap-2">
                 <Button variant="outline" size="sm"><Share2 size={16} className="mr-2" /> Share Report</Button>
                 <Button variant="primary" size="sm">Download PDF</Button>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Total Reach", value: "24.5k", icon: Globe, change: "+15%", trend: "up" },
                { title: "Avg. Watch Time", value: "18m 42s", icon: Clock, change: "+2m", trend: "up" },
                { title: "Course Clicks", value: "8.4k", icon: MousePointer2, change: "-4%", trend: "down" },
                { title: "Conversion Rate", value: "12.8%", icon: TrendingUp, change: "+1.2%", trend: "up" },
              ].map((stat, i) => (
                <Card key={i} className="border-none shadow-sm">
                   <CardContent className="p-6 space-y-4">
                      <div className="flex justify-between items-center">
                         <div className="p-2 rounded-lg bg-elite-primary-50 dark:bg-elite-primary-900 text-elite-primary-600">
                            <stat.icon size={20} />
                         </div>
                         <div className={cn(
                           "text-[10px] font-bold flex items-center gap-1",
                           stat.trend === 'up' ? "text-elite-success" : "text-elite-error"
                         )}>
                            {stat.trend === 'up' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                            {stat.change}
                         </div>
                      </div>
                      <div className="space-y-1">
                         <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">{stat.title}</div>
                         <div className="text-2xl font-bold font-space-grotesk">{stat.value}</div>
                      </div>
                   </CardContent>
                </Card>
              ))}
           </div>
        </header>

        <main className="px-6 pb-24 space-y-8">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Engagement Chart */}
              <Card className="lg:col-span-2">
                 <CardHeader className="flex flex-row items-center justify-between pb-8">
                    <CardTitle className="text-lg font-space-grotesk flex items-center gap-2">
                       <BarChart3 size={20} className="text-elite-primary-600" /> Student Engagement
                    </CardTitle>
                    <select className="bg-transparent text-xs font-bold text-elite-primary-400 outline-none">
                       <option>Last 7 Days</option>
                       <option>Last 30 Days</option>
                    </select>
                 </CardHeader>
                 <CardContent className="h-[350px]">
                    <ResponsiveContainer width="100%" height="100%">
                       <BarChart data={engagementData}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#88888811" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#888'}} />
                          <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#888'}} />
                          <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                          <Bar dataKey="active" fill="#8B5CF6" radius={[4, 4, 0, 0]} barSize={20} />
                          <Bar dataKey="total" fill="#E2E8F0" radius={[4, 4, 0, 0]} barSize={20} />
                       </BarChart>
                    </ResponsiveContainer>
                 </CardContent>
              </Card>

              {/* Geographic Distribution */}
              <Card>
                 <CardHeader>
                    <CardTitle className="text-lg font-space-grotesk flex items-center gap-2">
                       <MapPin size={20} className="text-elite-accent-500" /> Reach by Country
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="h-[300px] flex flex-col items-center">
                    <ResponsiveContainer width="100%" height="100%">
                       <PieChart>
                          <Pie
                             data={countryData}
                             cx="50%"
                             cy="50%"
                             innerRadius={60}
                             outerRadius={80}
                             paddingAngle={5}
                             dataKey="value"
                          >
                             {countryData.map((entry, index) => (
                               <Cell key={`cell-${index}`} fill={entry.color} />
                             ))}
                          </Pie>
                          <Tooltip />
                       </PieChart>
                    </ResponsiveContainer>
                    <div className="grid grid-cols-1 gap-2 w-full mt-4">
                       {countryData.map((c, i) => (
                         <div key={i} className="flex justify-between items-center text-[10px] font-bold uppercase">
                            <div className="flex items-center gap-2">
                               <div className="w-2 h-2 rounded-full" style={{backgroundColor: c.color}} />
                               <span>{c.name}</span>
                            </div>
                            <span>{c.value}%</span>
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
