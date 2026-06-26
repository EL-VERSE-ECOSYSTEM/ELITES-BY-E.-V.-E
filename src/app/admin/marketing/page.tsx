"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { BarChart3, Megaphone, Send } from "lucide-react";

export default function AdminMarketing() {
  const [activeTab, setActiveTab] = useState<"coupons" | "campaigns" | "notifications">("coupons");

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 border-b border-elite-primary-100 dark:border-elite-primary-900 bg-white">
           <h1 className="text-3xl font-bold font-space-grotesk">Marketing & Growth</h1>
           <p className="text-sm text-elite-primary-500 font-medium">Manage promotions, coupon codes, and engagement campaigns.</p>
        </header>

        <main className="p-6 pb-24 space-y-8">
           <div className="flex border-b border-elite-primary-100 dark:border-elite-primary-900">
              {["coupons", "campaigns", "notifications"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as "coupons" | "campaigns" | "notifications")}
                  className={`px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all border-b-2 ${
                    activeTab === tab
                      ? "border-elite-primary-950 text-elite-primary-950"
                      : "border-transparent text-elite-primary-400 hover:text-elite-primary-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
           </div>

           {activeTab === 'coupons' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {[
                   { id: 1, code: "ELITE2024", discount: "20% OFF", usage: "450/1000", expires: "Mar 15, 2024", status: "Active" },
                   { id: 2, code: "AFRICATECH", discount: "$10.00", usage: "124/500", expires: "Dec 31, 2024", status: "Active" }
                 ].map((c) => (
                   <Card key={c.id} className="border-none shadow-xl group">
                      <CardContent className="p-8 space-y-6">
                         <div className="flex justify-between items-start">
                            <div className="space-y-1">
                               <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">Coupon Code</div>
                               <div className="text-xl font-black font-space-grotesk text-elite-primary-950">{c.code}</div>
                            </div>
                            <div className="px-3 py-1 rounded-full bg-elite-success/10 text-elite-success text-[10px] font-bold uppercase">
                               {c.status}
                            </div>
                         </div>
                         <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                               <div className="text-[10px] font-bold text-elite-primary-400 uppercase">Discount</div>
                               <div className="font-bold text-elite-primary-900">{c.discount}</div>
                            </div>
                            <div className="space-y-1">
                               <div className="text-[10px] font-bold text-elite-primary-400 uppercase">Usage</div>
                               <div className="font-bold text-elite-primary-900">{c.usage}</div>
                            </div>
                         </div>
                         <Button variant="outline" className="w-full">Edit Coupon</Button>
                      </CardContent>
                   </Card>
                 ))}
                 <button className="border-2 border-dashed border-elite-primary-200 rounded-xl p-8 flex flex-col items-center justify-center gap-4 hover:border-elite-primary-400 transition-all group">
                    <div className="w-12 h-12 rounded-full bg-elite-primary-50 flex items-center justify-center text-elite-primary-400 group-hover:bg-elite-primary-950 group-hover:text-white transition-all">
                       <Plus size={24} />
                    </div>
                    <span className="font-bold text-sm text-elite-primary-600">Create New Coupon</span>
                 </button>
              </div>
           )}

           {activeTab === 'campaigns' && (
              <Card className="border-none shadow-xl overflow-hidden">
                 <CardContent className="p-0">
                    <div className="p-8 border-b border-elite-primary-50 flex justify-between items-center">
                       <h3 className="font-bold flex items-center gap-2"><Megaphone size={18} /> Active Campaigns</h3>
                       <Button variant="accent">New Campaign</Button>
                    </div>
                    <div className="divide-y divide-elite-primary-50">
                       {[
                         { name: "Winter Sale 2024", reach: "12.4k", ctr: "8.2%", status: "Active" },
                         { name: "New Tutor Onboarding", reach: "4.5k", ctr: "12.5%", status: "Paused" }
                       ].map((cam, i) => (
                         <div key={i} className="p-6 flex items-center justify-between hover:bg-elite-primary-50/50 transition-colors">
                            <div className="space-y-1">
                               <div className="font-bold text-elite-primary-950">{cam.name}</div>
                               <div className="flex gap-4 text-xs text-elite-primary-500">
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
              <Card className="max-w-2xl border-none shadow-xl">
                 <CardContent className="p-8 space-y-6">
                    <h3 className="font-bold flex items-center gap-2"><Send size={18} /> Push Announcement</h3>
                    <p className="text-sm text-elite-primary-500">Send a broadcast message to all users on the platform.</p>
                    <div className="space-y-4">
                       <textarea
                         className="w-full min-h-[120px] p-4 rounded-xl border border-elite-primary-100 bg-elite-primary-50 outline-none text-sm"
                         placeholder="Enter your announcement..."
                       />
                       <div className="flex gap-4">
                          <Button variant="accent" className="flex-1">Send Now</Button>
                          <Button variant="outline" className="flex-1">Schedule</Button>
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

function Plus({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );
}
