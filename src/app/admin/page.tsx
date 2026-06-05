"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import Link from "next/link";


  Users,
  BookOpen,
  DollarSign,
  ShieldCheck,
  AlertTriangle,
  TrendingUp,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical,
  Bell,
  Search
} from "lucide-react";
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';

export default function AdminDashboard() {
  const revenueData = [
    { day: 'Mon', revenue: 4500, users: 120 },
    { day: 'Tue', revenue: 5200, users: 150 },
    { day: 'Wed', revenue: 4800, users: 140 },
    { day: 'Thu', revenue: 6100, users: 180 },
    { day: 'Fri', revenue: 5900, users: 170 },
    { day: 'Sat', revenue: 7500, users: 210 },
    { day: 'Sun', revenue: 6800, users: 195 },
  ];

  const categoryData = [
    { name: 'Web Dev', value: 45, color: '#8B5CF6' },
    { name: 'Data Science', value: 25, color: '#06B6D4' },
    { name: 'Design', value: 20, color: '#F59E0B' },
    { name: 'Mobile', value: 10, color: '#10B981' },
  ];

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-6 bg-white/80 dark:bg-elite-primary-950/80 backdrop-blur-md border-b border-elite-primary-100 dark:border-elite-primary-900 sticky top-0 z-30 flex items-center justify-between">
           <div className="flex items-center gap-4">
              <Badge variant="accent" className="hidden md:flex">ADMIN PORTAL</Badge>
              <h1 className="text-xl font-bold font-space-grotesk">Platform Overview</h1>
           </div>
           <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-elite-primary-400" size={16} />
                 <input placeholder="Search records..." className="pl-9 pr-4 py-2 text-xs bg-elite-primary-50 dark:bg-elite-primary-900 rounded-lg border-none outline-none focus:ring-2 focus:ring-elite-primary-500 w-64" />
              </div>
              <button className="relative p-2 hover:bg-elite-primary-100 dark:hover:bg-elite-primary-900 rounded-lg">
                 <Bell size={20} />
                 <span className="absolute top-2 right-2 w-2 h-2 bg-elite-error rounded-full" />
              </button>
           </div>
        </header>

        <main className="p-6 pb-24 space-y-6">
           {/* KPI Row */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Total Users", value: "54,230", icon: Users, change: "+12.5%", trending: "up" },
                { title: "Total Revenue", value: "$428,500", icon: DollarSign, change: "+8.2%", trending: "up" },
                { title: "Active Courses", value: "156", icon: BookOpen, change: "-2.4%", trending: "down" },
                { title: "Pending Reviews", value: "24", icon: ShieldCheck, change: "Critical", trending: "none" },
              ].map((kpi, idx) => (
                <Card key={idx} className="border-none shadow-sm overflow-hidden group">
                   <CardContent className="p-6 relative">
                      <div className="flex justify-between items-start">
                         <div className="space-y-1">
                            <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">{kpi.title}</div>
                            <div className="text-2xl font-bold font-space-grotesk">{kpi.value}</div>
                         </div>
                         <div className="w-10 h-10 rounded-xl bg-elite-primary-50 dark:bg-elite-primary-900 flex items-center justify-center text-elite-primary-600 group-hover:bg-elite-primary-600 group-hover:text-white transition-all">
                            <kpi.icon size={20} />
                         </div>
                      </div>
                      <div className="mt-4 flex items-center gap-2">
                         {kpi.trending === 'up' && <ArrowUpRight size={14} className="text-elite-success" />}
                         {kpi.trending === 'down' && <ArrowDownRight size={14} className="text-elite-error" />}
                         <span className={cn(
                           "text-xs font-bold",
                           kpi.trending === 'up' ? "text-elite-success" : kpi.trending === 'down' ? "text-elite-error" : "text-elite-warning"
                         )}>{kpi.change}</span>
                         <span className="text-[10px] text-elite-primary-400 font-medium">vs last month</span>
                      </div>
                   </CardContent>
                </Card>
              ))}
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Revenue & Growth Chart */}
              <Card className="lg:col-span-2">
                 <CardHeader className="flex flex-row items-center justify-between">
                    <div className="space-y-1">
                       <CardTitle className="text-lg font-space-grotesk">Platform Performance</CardTitle>
                       <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest">
                          <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-elite-primary-600" /> Revenue</span>
                          <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-elite-accent-500" /> New Users</span>
                       </div>
                    </div>
                    <Button variant="outline" size="sm">Export Report</Button>
                 </CardHeader>
                 <CardContent className="h-[350px] pt-4">
                    <ResponsiveContainer width="100%" height="100%">
                       <LineChart data={revenueData}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#88888811" />
                          <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#888'}} />
                          <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#888'}} />
                          <Tooltip
                             contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                          />
                          <Line type="monotone" dataKey="revenue" stroke="#8B5CF6" strokeWidth={3} dot={{fill: '#8B5CF6'}} activeDot={{r: 6}} />
                          <Line type="monotone" dataKey="users" stroke="#F59E0B" strokeWidth={3} dot={{fill: '#F59E0B'}} />
                       </LineChart>
                    </ResponsiveContainer>
                 </CardContent>
              </Card>

              {/* Course Distribution */}
              <Card>
                 <CardHeader>
                    <CardTitle className="text-lg font-space-grotesk">Enrollment by Category</CardTitle>
                 </CardHeader>
                 <CardContent className="h-[250px] flex flex-col items-center">
                    <ResponsiveContainer width="100%" height="100%">
                       <PieChart>
                          <Pie
                             data={categoryData}
                             cx="50%"
                             cy="50%"
                             innerRadius={60}
                             outerRadius={80}
                             paddingAngle={5}
                             dataKey="value"
                          >
                             {categoryData.map((entry, index) => (
                               <Cell key={`cell-${index}`} fill={entry.color} />
                             ))}
                          </Pie>
                          <Tooltip />
                       </PieChart>
                    </ResponsiveContainer>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-4">
                       {categoryData.map((cat, i) => (
                         <div key={i} className="flex items-center gap-2 text-[10px] font-bold uppercase text-elite-primary-500">
                            <div className="w-2 h-2 rounded-full" style={{backgroundColor: cat.color}} />
                            {cat.name} ({cat.value}%)
                         </div>
                       ))}
                    </div>
                 </CardContent>
              </Card>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Critical Alerts */}
              <Card className="border-l-4 border-l-elite-error">
                 <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                       <AlertTriangle className="text-elite-error" size={20} /> System Alerts
                    </CardTitle>
                    <Badge variant="error">3 Critical</Badge>
                 </CardHeader>
                 <CardContent className="space-y-4">
                    {[
                      { title: "Withdrawal Delay", desc: "15 pending withdrawals exceeding 48h limit.", time: "10m ago" },
                      { title: "Course Content Report", desc: "3 students reported 'Advanced Python' for broken links.", time: "1h ago" },
                      { title: "API Endpoint High Latency", desc: "/api/v1/certificates experiencing 500ms+ delay.", time: "2h ago" },
                    ].map((alert, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-elite-error/5 border border-elite-error/10 flex justify-between items-start group hover:bg-elite-error/10 transition-colors cursor-pointer">
                         <div className="space-y-1">
                            <div className="text-sm font-bold text-elite-error">{alert.title}</div>
                            <p className="text-xs text-elite-primary-500">{alert.desc}</p>
                         </div>
                         <span className="text-[10px] font-medium text-elite-primary-400">{alert.time}</span>
                      </div>
                    ))}
                 </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                 <CardHeader>
                    <CardTitle className="text-lg">Platform Activity</CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-4">
                    {[
                      { user: "Sarah Kamau", action: "purchased", item: "Next.js Masterclass", time: "2m ago" },
                      { user: "David Mensah", action: "submitted", item: "Tutor Application", time: "15m ago" },
                      { user: "System", action: "verified", item: "5 new certificates", time: "1h ago" },
                      { user: "John Doe", action: "completed", item: "UI Design Path", time: "3h ago" },
                    ].map((act, idx) => (
                      <div key={idx} className="flex items-center gap-4 text-sm">
                         <div className="w-8 h-8 rounded-full bg-elite-primary-100 flex items-center justify-center font-bold text-[10px]">{act.user[0]}</div>
                         <div className="flex-1">
                            <span className="font-bold">{act.user}</span>
                            <span className="text-elite-primary-500"> {act.action} </span>
                            <span className="font-medium text-elite-primary-600 underline cursor-pointer">{act.item}</span>
                         </div>
                         <span className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-tighter">{act.time}</span>
                      </div>
                    ))}
                    <Button variant="ghost" className="w-full text-xs" asChild>
                       <Link href="/admin/audit-logs">View All Logs</Link>
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
