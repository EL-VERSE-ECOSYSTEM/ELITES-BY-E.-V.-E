"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Send,
  Search,
  Filter,
  Tag,
  MessageCircle,
  Plus,
  MoreVertical,
  Eye,
  Trash2,
  TrendingUp,
  Users,
  Calendar,
  Sparkles,
  Zap,
  Layout,
  Mail,
  Smartphone
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function AdminMarketing() {
  const [activeTab, setActiveTab] = useState<"coupons" | "campaigns" | "notifications">("coupons");

  const coupons = [
    { id: 1, code: "ELITE2024", discount: "20% OFF", usage: "450/1000", expires: "Mar 15, 2024", status: "Active" },
    { id: 2, code: "AFRICATECH", discount: "$10.00", usage: "124/500", expires: "Dec 31, 2024", status: "Active" },
  ];

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 space-y-6">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h1 className="text-3xl font-bold font-space-grotesk">Marketing & Growth</h1>
              <div className="flex gap-2">
                 <Button variant="outline" size="sm"><Zap size={18} className="mr-2" /> Quick Broadcast</Button>
                 <Button variant="accent" size="sm"><Plus size={18} className="mr-2" /> New Promo</Button>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-elite-primary-950 text-white border-none p-6 space-y-4">
                 <div className="flex justify-between items-center">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-elite-primary-400">Campaign Reach</div>
                    <Users size={18} className="text-elite-primary-400" />
                 </div>
                 <div className="text-3xl font-bold font-space-grotesk">124,500</div>
                 <p className="text-[10px] text-elite-primary-300">Across email, push, and social integrations.</p>
              </Card>
              <Card className="p-6 space-y-4">
                 <div className="flex justify-between items-center">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-elite-primary-400">Coupon Savings</div>
                    <Tag size={18} className="text-elite-primary-600" />
                 </div>
                 <div className="text-3xl font-bold font-space-grotesk">$4,820</div>
                 <p className="text-[10px] text-elite-primary-500">Total value redeemed by students this month.</p>
              </Card>
              <Card className="p-6 space-y-4 text-center flex flex-col items-center justify-center">
                 <Sparkles size={32} className="text-elite-accent-500 mb-2 animate-pulse" />
                 <h4 className="font-bold text-sm">Growth Score: 94/100</h4>
                 <div className="w-full h-1 bg-elite-primary-100 rounded-full mt-2">
                    <div className="h-full bg-elite-accent-500 w-[94%]" />
                 </div>
              </Card>
           </div>
        </header>

        <main className="px-6 pb-24 space-y-6">
           <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white dark:bg-elite-primary-900 p-4 rounded-xl shadow-sm border border-elite-primary-100 dark:border-elite-primary-800">
              <div className="flex gap-4 p-1 bg-elite-primary-50 dark:bg-elite-primary-950 rounded-xl w-fit">
                 {["coupons", "campaigns", "notifications"].map((tab) => (
                   <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={cn(
                      "px-6 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all",
                      activeTab === tab ? "bg-white dark:bg-elite-primary-800 text-elite-primary-900 shadow-sm" : "text-elite-primary-400"
                    )}
                   >
                     {tab}
                   </button>
                 ))}
              </div>
           </div>

           <Card className="overflow-hidden border-none shadow-xl">
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead className="bg-elite-primary-950 text-white text-[10px] font-bold uppercase tracking-widest">
                       <tr>
                          <th className="px-6 py-4">Promo Code</th>
                          <th className="px-6 py-4">Discount</th>
                          <th className="px-6 py-4 text-center">Usage</th>
                          <th className="px-6 py-4">Expires</th>
                          <th className="px-6 py-4">Status</th>
                          <th className="px-6 py-4 text-right">Actions</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-elite-primary-100 dark:divide-elite-primary-900">
                       {coupons.map((c) => (
                         <tr key={c.id} className="hover:bg-elite-primary-50 dark:hover:bg-white/5 transition-colors group">
                            <td className="px-6 py-4">
                               <div className="font-mono text-sm font-bold text-elite-primary-600">{c.code}</div>
                            </td>
                            <td className="px-6 py-4 font-bold text-sm">{c.discount}</td>
                            <td className="px-6 py-4 text-center text-xs font-medium text-elite-primary-500">{c.usage}</td>
                            <td className="px-6 py-4 text-xs font-medium">{c.expires}</td>
                            <td className="px-6 py-4">
                               <Badge variant="success" className="text-[8px] uppercase">{c.status}</Badge>
                            </td>
                            <td className="px-6 py-4 text-right">
                               <div className="flex justify-end gap-2">
                                  <Button variant="outline" size="sm" className="h-8 w-8 p-0 border-elite-primary-100"><Eye size={16} /></Button>
                                  <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-elite-error border-elite-error/20"><Trash2 size={16} /></Button>
                                  <button className="p-2 text-elite-primary-400"><MoreVertical size={16} /></button>
                               </div>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </Card>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 space-y-6">
                 <h3 className="font-bold font-space-grotesk flex items-center gap-2 text-xl">
                    <Mail size={24} className="text-blue-500" /> Email Broadcast
                 </h3>
                 <div className="space-y-4">
                    <Input label="Campaign Name" placeholder="Spring Enrollment 2024" />
                    <div className="space-y-1.5">
                       <label className="text-sm font-medium">Target Audience</label>
                       <select className="w-full h-10 px-3 rounded-lg border border-elite-primary-100 text-sm">
                          <option>All Students</option>
                          <option>Incomplete Courses Only</option>
                          <option>Inactive Users (30+ days)</option>
                       </select>
                    </div>
                    <Button variant="primary" className="w-full">Create Email Draft</Button>
                 </div>
              </Card>

              <Card className="p-8 space-y-6">
                 <h3 className="font-bold font-space-grotesk flex items-center gap-2 text-xl">
                    <Smartphone size={24} className="text-elite-xp" /> Push Notifications
                 </h3>
                 <div className="space-y-4">
                    <textarea
                     className="w-full p-4 rounded-xl border border-elite-primary-100 bg-elite-primary-50 dark:bg-white/5 text-sm min-h-[100px] outline-none"
                     placeholder="Your message to students..."
                    />
                    <div className="flex justify-between items-center text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">
                       <span>Characters: 0/140</span>
                       <span>Estimated Reach: 54,230</span>
                    </div>
                    <Button variant="accent" className="w-full">Send Instant Notification</Button>
                 </div>
              </Card>
           </div>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}
