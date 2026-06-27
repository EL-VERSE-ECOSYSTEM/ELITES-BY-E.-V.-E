"use client";
import {Building2, CreditCard, DollarSign, Download, TrendingUp} from "lucide-react";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Sidebar } from "@/components/layout/Sidebar";

import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

export default function AdminRevenue() {
  const data = [
    { name: 'Jan', revenue: 45000 },
    { name: 'Feb', revenue: 52000 },
    { name: 'Mar', revenue: 48000 },
    { name: 'Apr', revenue: 61000 },
    { name: 'May', revenue: 75000 },
    { name: 'Jun', revenue: 84500 },
  ];

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 space-y-6">
           <h1 className="text-3xl font-bold font-space-grotesk">Revenue Analytics</h1>

           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { label: "Annual Run Rate", value: "$1.2M", icon: TrendingUp, color: "text-elite-success" },
                { label: "Monthly Revenue", value: "$84.5k", icon: DollarSign, color: "text-blue-600" },
                { label: "Avg. Order Value", value: "$18.50", icon: CreditCard, color: "text-purple-600" },
                { label: "Platform Fee (15%)", value: "$12.6k", icon: Building2, color: "text-elite-accent-500" },
              ].map((stat, i) => (
                <Card key={i} className="p-4 border-none shadow-sm">
                   <CardContent className="p-0 space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">
                         {stat.label}
                         <stat.icon size={14} className={stat.color} />
                      </div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                   </CardContent>
                </Card>
              ))}
           </div>
        </header>

        <main className="px-6 pb-24 space-y-8">
           <Card className="p-8">
              <CardHeader className="px-0 pt-0 flex flex-row items-center justify-between pb-8">
                 <CardTitle className="text-lg font-space-grotesk">Monthly Revenue Growth</CardTitle>
                 <Button variant="outline" size="sm"><Download size={16} className="mr-2" /> Export Financials</Button>
              </CardHeader>
              <div className="h-[400px]">
                 <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                       <defs>
                          <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.1}/>
                             <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                          </linearGradient>
                       </defs>
                       <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#88888811" />
                       <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#888'}} />
                       <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#888'}} />
                       <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                       <Area type="monotone" dataKey="revenue" stroke="#8B5CF6" strokeWidth={4} fillOpacity={1} fill="url(#colorRev)" />
                    </AreaChart>
                 </ResponsiveContainer>
              </div>
           </Card>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}