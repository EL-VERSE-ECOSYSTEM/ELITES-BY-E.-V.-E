"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Wallet, ArrowUpRight, ArrowDownLeft, RefreshCcw, Coins, Clock, ChevronRight, Landmark, CreditCard, Smartphone } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";



export default function WalletPage() {
  const transactions = [
    { id: 1, type: "deposit", title: "Wallet Funding (Card)", amount: "+$50.00", date: "Feb 12, 2024", status: "completed" },
    { id: 2, type: "purchase", title: "Course: Next.js Masterclass", amount: "-$15.00", date: "Feb 10, 2024", status: "completed" },
    { id: 3, type: "reward", title: "Achievement Reward: Code Ninja", amount: "+250 Coins", date: "Feb 08, 2024", status: "completed" },
    { id: 4, type: "withdrawal", title: "Withdraw to Bank", amount: "-$20.00", date: "Feb 05, 2024", status: "pending" },
  ];

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-12 space-y-8">
           <h1 className="text-3xl font-bold font-space-grotesk">My Wallet</h1>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-elite-primary-950 text-white border-none p-8 space-y-6 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 opacity-10 transform scale-150 group-hover:rotate-12 transition-transform">
                    <Wallet size={160} />
                 </div>
                 <div className="relative z-10 space-y-4">
                    <div className="text-xs font-bold uppercase tracking-widest text-elite-primary-400">Available Balance</div>
                    <div className="text-5xl font-bold font-space-grotesk">$145.00</div>
                    <div className="flex gap-3 pt-4">
                       <Button variant="accent" size="sm" className="flex-1">Deposit</Button>
                       <Button variant="outline" size="sm" className="flex-1 border-white/20 text-white hover:bg-white/10">Withdraw</Button>
                    </div>
                 </div>
              </Card>

              <Card className="bg-gradient-to-br from-elite-coin to-orange-500 text-white border-none p-8 space-y-6">
                 <div className="space-y-4">
                    <div className="text-xs font-bold uppercase tracking-widest opacity-80">Elite Coins</div>
                    <div className="text-5xl font-bold font-space-grotesk flex items-center gap-3">
                       2,450 <Coins size={40} fill="white" className="animate-pulse" />
                    </div>
                    <p className="text-xs opacity-80">Redeem coins for discounts and premium perks.</p>
                    <Button variant="ghost" size="sm" className="w-full bg-white/10 text-white hover:bg-white/20">Redeem Now</Button>
                 </div>
              </Card>

              <Card className="p-8 flex flex-col justify-center gap-6">
                 <div className="flex items-center justify-between">
                    <h3 className="font-bold text-sm uppercase tracking-widest text-elite-primary-400">Quick Transfer</h3>
                    <RefreshCcw size={18} className="text-elite-primary-400" />
                 </div>
                 <div className="space-y-4">
                    <div className="flex -space-x-2">
                       {[1, 2, 3, 4].map((i) => (
                         <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-elite-primary-900 bg-elite-primary-100 flex items-center justify-center font-bold text-xs">
                            {i}
                         </div>
                       ))}
                       <button className="w-10 h-10 rounded-full border-2 border-dashed border-elite-primary-200 text-elite-primary-400 flex items-center justify-center hover:bg-elite-primary-50 transition-colors">+</button>
                    </div>
                    <Button variant="secondary" className="w-full">Send Money</Button>
                 </div>
              </Card>
           </div>
        </header>

        <main className="px-6 pb-24 space-y-8">
           <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold font-space-grotesk">Recent Transactions</h3>
              <button className="text-xs font-bold uppercase tracking-widest text-elite-primary-600 hover:underline">View Full History</button>
           </div>

           <Card className="overflow-hidden border-none shadow-xl">
              <div className="divide-y divide-elite-primary-100 dark:divide-elite-primary-900">
                 {transactions.map((tx) => (
                   <div key={tx.id} className="p-6 flex items-center justify-between hover:bg-elite-primary-50 dark:hover:bg-white/5 transition-colors group cursor-pointer">
                      <div className="flex items-center gap-4">
                         <div className={cn(
                           "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110",
                           tx.type === "deposit" && "bg-elite-success/10 text-elite-success",
                           tx.type === "purchase" && "bg-elite-error/10 text-elite-error",
                           tx.type === "reward" && "bg-elite-coin/10 text-elite-coin",
                           tx.type === "withdrawal" && "bg-elite-info/10 text-elite-info",
                         )}>
                            {tx.type === "deposit" && <ArrowDownLeft size={24} />}
                            {tx.type === "purchase" && <ArrowUpRight size={24} />}
                            {tx.type === "reward" && <Coins size={24} />}
                            {tx.type === "withdrawal" && <Landmark size={24} />}
                         </div>
                         <div>
                            <div className="font-bold">{tx.title}</div>
                            <div className="text-xs text-elite-primary-400 flex items-center gap-2">
                               {tx.date} • {tx.status === "pending" ? <Badge variant="warning" className="text-[8px] h-3 px-1">Pending</Badge> : <span className="text-elite-success font-bold uppercase text-[8px]">Completed</span>}
                            </div>
                         </div>
                      </div>
                      <div className={cn(
                        "text-lg font-bold font-space-grotesk",
                        tx.amount.startsWith("+") ? "text-elite-success" : "text-elite-error"
                      )}>
                         {tx.amount}
                      </div>
                   </div>
                 ))}
              </div>
           </Card>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <Card className="p-6 space-y-4">
                 <h4 className="font-bold flex items-center gap-2 text-elite-primary-600"><CreditCard size={18} /> Payment Methods</h4>
                 <div className="space-y-2">
                    <div className="p-4 rounded-xl border border-elite-primary-100 dark:border-elite-primary-800 flex items-center justify-between">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-6 bg-slate-900 rounded flex items-center justify-center font-bold text-[8px] text-white italic">VISA</div>
                          <span className="text-sm font-medium">•••• 4242</span>
                       </div>
                       <Badge variant="primary" className="text-[8px]">Primary</Badge>
                    </div>
                    <Button variant="ghost" className="w-full text-xs font-bold uppercase tracking-widest">+ Add New Method</Button>
                 </div>
              </Card>

              <Card className="p-6 space-y-4">
                 <h4 className="font-bold flex items-center gap-2 text-elite-primary-600"><Smartphone size={18} /> Mobile Money</h4>
                 <div className="space-y-2">
                    <div className="p-4 rounded-xl border border-elite-primary-100 dark:border-elite-primary-800 flex items-center justify-between">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-yellow-400 rounded flex items-center justify-center font-extrabold text-[10px] text-white italic">MTN</div>
                          <span className="text-sm font-medium">+233 •••• 4567</span>
                       </div>
                    </div>
                 </div>
              </Card>
           </div>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}
