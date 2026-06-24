"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";

import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent,  } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {  } from "@/components/ui/Badge";
import {  } from "@/components/ui/Input";
import { , Plus, Zap } from "lucide-react";

export default function AdminMarketing() {
  const [activeTab, setActiveTab] = useState<"coupons" | "campaigns" | "notifications">("coupons");

  const _coupons = [
    { id: 1, code: "ELITE2024", discount: "20% OFF", usage: "450/1000", expires: "Mar 15, 2024", status: "Active" },
    { id: 2, code: "AFRICATECH", discount: "$10.00", usage: "124/500", expires: "Dec 31, 2024", status: "Active" },
  ];

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 space-y-6">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h1 className="text-3xl font-bold font-space-grotesk text-elite-primary-900 dark:text-white">Marketing & Growth</h1>
              <h1 className="text-3xl font-bold font-space-grotesk">Marketing & Growth</h1>
              <div className="flex gap-2">
                 <Button variant="outline" size="sm"><Zap size={18} className="mr-2" /> Quick Broadcast</Button>
                 <Button variant="accent" size="sm"><Plus size={18} className="mr-2" /> New Promo</Button>
              </div>
           </div>
        </header>

        <main className="px-6 pb-24 space-y-6">
           <Card className="p-6">
              <CardContent>
                 <p className="text-elite-primary-600">Marketing management modules.</p>
              </CardContent>
           </Card>
           <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white dark:bg-elite-primary-900 p-4 rounded-xl shadow-sm border border-elite-primary-100 dark:border-elite-primary-800">
              <div className="flex gap-4 p-1 bg-elite-primary-50 dark:bg-elite-primary-950 rounded-xl w-fit">
                 {["coupons", "campaigns", "notifications"].map((tab) => (
                   <button
                    key={tab}
                    onClick={() => setActiveTab(tab as unknown)}
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
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}