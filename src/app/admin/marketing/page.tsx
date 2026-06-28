"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Plus, Zap, Megaphone, BarChart3, Send } from "lucide-react";

export default function AdminMarketing() {
  const [activeTab, setActiveTab] = useState<"coupons" | "campaigns" | "notifications">("coupons");

  const coupons = [
    { id: 1, code: "ELITE2024", discount: "20% OFF", usage: "450/1000", expires: "Mar 15, 2024", status: "Active" },
    { id: 2, code: "AFRICATECH", discount: "$10.00", usage: "124/500", expires: "Dec 31, 2024", status: "Active" }
  ];

  return (
    <div className="flex min-h-screen bg-elite-off-white dark:bg-elite-dark-bg">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 border-b border-elite-border-gray dark:border-elite-dark-border bg-white dark:bg-elite-dark-surface">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                 <h1 className="text-3xl font-black font-space-grotesk text-elite-admin">Marketing & Growth</h1>
                 <p className="text-sm text-elite-slate-gray font-medium">Manage promotions, coupon codes, and engagement campaigns.</p>
              </div>
              <div className="flex gap-2">
                 <Button variant="outline" size="sm"><Zap size={18} className="mr-2" /> Quick Broadcast</Button>
                 <Button variant="primary" size="sm"><Plus size={18} className="mr-2" /> New Promo</Button>
              </div>
           </div>
        </header>

        <main className="p-6 pb-24 space-y-8">
           <div className="flex border-b border-elite-border-gray dark:border-elite-dark-border">
              {["coupons", "campaigns", "notifications"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as "coupons" | "campaigns" | "notifications")}
                  className={cn(
                    "px-8 py-4 text-sm font-black uppercase tracking-widest transition-all border-b-2",
                    activeTab === tab
                      ? "border-elite-admin text-elite-admin"
                      : "border-transparent text-elite-light-gray hover:text-elite-slate-gray"
                  )}
                >
                  {tab}
                </button>
              ))}
           </div>

           {activeTab === 'coupons' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {coupons.map((c) => (
                   <Card key={c.id} className="border-none shadow-xl group">
                      <CardContent className="p-8 space-y-6">
                         <div className="flex justify-between items-start">
                            <div className="space-y-1">
                               <div className="text-[10px] font-black text-elite-light-gray uppercase tracking-widest">Coupon Code</div>
                               <div className="text-xl font-black font-space-grotesk text-elite-dark-blue dark:text-white">{c.code}</div>
                            </div>
                            <div className="px-3 py-1 rounded-full bg-elite-success/10 text-elite-success text-[10px] font-black uppercase">
                               {c.status}
                            </div>
                         </div>
                         <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                               <div className="text-[10px] font-black text-elite-light-gray uppercase">Discount</div>
                               <div className="font-bold text-elite-dark-blue dark:text-white">{c.discount}</div>
                            </div>
                            <div className="space-y-1">
                               <div className="text-[10px] font-black text-elite-light-gray uppercase">Usage</div>
                               <div className="font-bold text-elite-dark-blue dark:text-white">{c.usage}</div>
                            </div>
                         </div>
                         <Button variant="outline" className="w-full border-2">Edit Coupon</Button>
                      </CardContent>
                   </Card>
                 ))}
              </div>
           )}

           {activeTab === 'campaigns' && (
              <Card className="border-none shadow-xl overflow-hidden bg-white dark:bg-elite-dark-card">
                 <CardContent className="p-0">
                    <div className="p-8 border-b border-elite-border-gray dark:border-elite-dark-border flex justify-between items-center">
                       <h3 className="font-bold flex items-center gap-2 text-elite-dark-blue dark:text-white"><Megaphone size={18} /> Active Campaigns</h3>
                       <Button size="sm">New Campaign</Button>
                    </div>
                    <div className="divide-y divide-elite-border-gray dark:divide-elite-dark-border">
                       {[
                         { name: "Winter Sale 2024", reach: "12.4k", ctr: "8.2%", status: "Active" },
                         { name: "New Tutor Onboarding", reach: "4.5k", ctr: "12.5%", status: "Paused" }
                       ].map((cam, i) => (
                         <div key={i} className="p-6 flex items-center justify-between hover:bg-elite-off-white dark:hover:bg-elite-dark-surface transition-colors">
                            <div className="space-y-1">
                               <div className="font-bold text-elite-dark-blue dark:text-white">{cam.name}</div>
                               <div className="flex gap-4 text-xs text-elite-slate-gray">
                                  <span>Reach: <b>{cam.reach}</b></span>
                                  <span>CTR: <b>{cam.ctr}</b></span>
                               </div>
                            </div>
                            <Button variant="ghost" size="sm">Analytics <BarChart3 size={14} className="ml-2" /></Button>
                         </div>
                       ))}
                    </div>
                 </CardContent>
              </Card>
           )}

           {activeTab === 'notifications' && (
              <Card className="max-w-2xl border-none shadow-xl bg-white dark:bg-elite-dark-card">
                 <CardContent className="p-8 space-y-6">
                    <h3 className="font-bold flex items-center gap-2 text-elite-dark-blue dark:text-white"><Send size={18} /> Push Announcement</h3>
                    <p className="text-sm text-elite-slate-gray">Send a broadcast message to all users on the platform.</p>
                    <div className="space-y-4">
                       <textarea
                         className="w-full min-h-[120px] p-4 rounded-xl border border-elite-border-gray dark:border-elite-dark-border bg-elite-off-white dark:bg-elite-dark-surface outline-none text-sm focus:border-elite-purple transition-all"
                         placeholder="Enter your announcement..."
                       />
                       <div className="flex gap-4">
                          <Button className="flex-1 h-12 font-bold">Send Now</Button>
                          <Button variant="outline" className="flex-1 h-12 border-2 font-bold">Schedule</Button>
                       </div>
                    </div>
                 </CardContent>
              </Card>
           )}
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}
