"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  DollarSign,
  TrendingUp,
  ArrowUpRight,
  ArrowDownLeft,
  Clock,
  Download,
  Filter,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Landmark,
  CreditCard,
  ChevronRight
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function TutorEarnings() {
  const data = [
    { name: 'Feb 1', earnings: 450 },
    { name: 'Feb 5', earnings: 1200 },
    { name: 'Feb 10', earnings: 800 },
    { name: 'Feb 15', earnings: 2100 },
    { name: 'Feb 20', earnings: 1600 },
    { name: 'Feb 25', earnings: 2800 },
  ];

  const transactions = [
    { id: 1, type: "sale", title: "Course Sale: Next.js 15", amount: "+$15.00", date: "2 hours ago", status: "completed" },
    { id: 2, type: "session", title: "1-on-1: John Doe", amount: "+$25.00", date: "5 hours ago", status: "completed" },
    { id: 3, type: "withdrawal", title: "Payout to Bank", amount: "-$450.00", date: "Yesterday", status: "processing" },
    { id: 4, type: "sale", title: "Course Sale: UI Design", amount: "+$12.00", date: "2 days ago", status: "completed" },
  ];

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 space-y-6">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h1 className="text-3xl font-bold font-space-grotesk">Earnings & Payouts</h1>
              <Button variant="accent" size="lg"><ArrowDownLeft size={18} className="mr-2" /> Withdraw Funds</Button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-elite-primary-950 text-white border-none shadow-xl p-8 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-10"><DollarSign size={120} /></div>
                 <div className="relative z-10 space-y-4">
                    <div className="text-xs font-bold uppercase tracking-widest text-elite-primary-400">Total Balance</div>
                    <div className="text-5xl font-bold font-space-grotesk">$2,845.00</div>
                    <div className="flex items-center gap-2 text-xs font-bold text-elite-success">
                       <TrendingUp size={14} /> +24% from last month
                    </div>
                 </div>
              </Card>
              <Card className="p-8 space-y-4">
                 <div className="text-xs font-bold uppercase tracking-widest text-elite-primary-400">Pending Payouts</div>
                 <div className="text-3xl font-bold font-space-grotesk">$450.00</div>
                 <p className="text-xs text-elite-primary-500">Next payout scheduled for <span className="font-bold">March 1st</span>.</p>
              </Card>
              <Card className="p-8 space-y-4">
                 <div className="text-xs font-bold uppercase tracking-widest text-elite-primary-400">Net Revenue (All Time)</div>
                 <div className="text-3xl font-bold font-space-grotesk">$18,420.00</div>
                 <div className="flex gap-2">
                    <Badge variant="primary" className="text-[8px]">1,240 Sales</Badge>
                    <Badge variant="primary" className="text-[8px]">84 Sessions</Badge>
                 </div>
              </Card>
           </div>
        </header>

        <main className="px-6 pb-24 space-y-8">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Earnings Chart */}
              <Card className="lg:col-span-2">
                 <CardHeader className="flex flex-row items-center justify-between pb-8">
                    <CardTitle className="text-lg font-space-grotesk">Earnings Overview</CardTitle>
                    <div className="flex gap-2">
                       <Button variant="outline" size="sm">Monthly</Button>
                       <Button variant="outline" size="sm">Weekly</Button>
                    </div>
                 </CardHeader>
                 <CardContent className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                       <AreaChart data={data}>
                          <defs>
                             <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10B981" stopOpacity={0.1}/>
                                <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                             </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#88888811" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#888'}} />
                          <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#888'}} />
                          <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                          <Area type="monotone" dataKey="earnings" stroke="#10B981" strokeWidth={3} fillOpacity={1} fill="url(#colorEarnings)" />
                       </AreaChart>
                    </ResponsiveContainer>
                 </CardContent>
              </Card>

              {/* Transaction History */}
              <Card className="flex flex-col">
                 <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-lg font-space-grotesk">Recent Activity</CardTitle>
                    <button className="text-[10px] font-bold uppercase tracking-widest text-elite-primary-600 hover:underline">Download CSV</button>
                 </CardHeader>
                 <CardContent className="flex-1 p-0">
                    <div className="divide-y divide-elite-primary-50 dark:divide-elite-primary-900">
                       {transactions.map((tx) => (
                         <div key={tx.id} className="p-4 flex items-center justify-between group hover:bg-elite-primary-50/50 transition-colors">
                            <div className="flex items-center gap-3">
                               <div className={cn(
                                 "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
                                 tx.type === 'sale' ? "bg-blue-50 text-blue-600" : tx.type === 'session' ? "bg-emerald-50 text-emerald-600" : "bg-elite-error/10 text-elite-error"
                               )}>
                                  {tx.type === 'sale' ? <CheckCircle2 size={20} /> : tx.type === 'session' ? <Calendar size={20} /> : <ArrowUpRight size={20} />}
                               </div>
                               <div className="min-w-0">
                                  <div className="text-xs font-bold truncate">{tx.title}</div>
                                  <div className="text-[8px] text-elite-primary-400 uppercase font-bold tracking-tighter">{tx.date}</div>
                               </div>
                            </div>
                            <div className={cn(
                              "text-sm font-bold font-space-grotesk",
                              tx.amount.startsWith("+") ? "text-elite-success" : "text-elite-error"
                            )}>{tx.amount}</div>
                         </div>
                       ))}
                    </div>
                    <div className="p-4 border-t border-elite-primary-50">
                       <Button variant="ghost" className="w-full text-[10px] font-bold uppercase tracking-widest text-elite-primary-400">View Full History</Button>
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
