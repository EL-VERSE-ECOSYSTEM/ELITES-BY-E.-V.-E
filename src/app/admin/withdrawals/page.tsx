"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useState } from "react";
import { cn } from "@/lib/utils";


  DollarSign,
  Clock,
  CheckCircle2,
  XCircle,
  ArrowUpRight,
  Search,
  Filter,
  Landmark,
  Smartphone,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  MoreVertical
} from "lucide-react";

export default function WithdrawalApprovals() {
  const withdrawals = Array.from({ length: 6 }).map((_, i) => ({
    id: `WTH-${1000 + i}`,
    user: ["David Mensah", "Sarah Kamau", "Kofi Anan", "Amara Okafor"][i % 4],
    amount: [450, 1200, 85, 2400][i % 4],
    method: i % 2 === 0 ? "Bank Transfer" : "Mobile Money",
    account: i % 2 === 0 ? "Zenith Bank •••• 4567" : "MTN Momo •••• 1234",
    requestedAt: "2 hours ago",
    status: i === 0 ? "pending" : "processing",
  }));

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 space-y-6">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                 <h1 className="text-3xl font-bold font-space-grotesk">Withdrawal Requests</h1>
                 <p className="text-sm text-elite-primary-500 font-medium">Review and approve tutor payout requests.</p>
              </div>
              <div className="flex items-center gap-3">
                 <div className="text-right">
                    <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">Total Pending</div>
                    <div className="text-xl font-bold text-elite-error">$14,250.00</div>
                 </div>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-white dark:bg-elite-primary-900 border-none p-4 flex items-center justify-between">
                 <div>
                    <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">Approved Today</div>
                    <div className="text-lg font-bold text-elite-success">$4,200.00</div>
                 </div>
                 <div className="w-10 h-10 rounded-full bg-elite-success/10 text-elite-success flex items-center justify-center">
                    <CheckCircle2 size={20} />
                 </div>
              </Card>
              <Card className="bg-white dark:bg-elite-primary-900 border-none p-4 flex items-center justify-between">
                 <div>
                    <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">Avg. Processing Time</div>
                    <div className="text-lg font-bold text-elite-primary-600">4.5 Hours</div>
                 </div>
                 <div className="w-10 h-10 rounded-full bg-elite-primary-100 text-elite-primary-600 flex items-center justify-center">
                    <Clock size={20} />
                 </div>
              </Card>
              <Card className="bg-white dark:bg-elite-primary-900 border-none p-4 flex items-center justify-between">
                 <div>
                    <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">Withdrawal Fees (MTD)</div>
                    <div className="text-lg font-bold text-elite-accent-500">$840.00</div>
                 </div>
                 <div className="w-10 h-10 rounded-full bg-elite-accent-50/50 text-elite-accent-500 flex items-center justify-center">
                    <DollarSign size={20} />
                 </div>
              </Card>
           </div>
        </header>

        <main className="px-6 pb-24">
           <Card className="overflow-hidden border-none shadow-xl">
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead className="bg-elite-primary-950 text-white text-[10px] font-bold uppercase tracking-widest">
                       <tr>
                          <th className="px-6 py-4">Request ID</th>
                          <th className="px-6 py-4">User</th>
                          <th className="px-6 py-4">Amount</th>
                          <th className="px-6 py-4">Payment Method</th>
                          <th className="px-6 py-4">Status</th>
                          <th className="px-6 py-4 text-right">Actions</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-elite-primary-100 dark:divide-elite-primary-900">
                       {withdrawals.map((w) => (
                         <tr key={w.id} className="hover:bg-elite-primary-50 dark:hover:bg-white/5 transition-colors group">
                            <td className="px-6 py-4">
                               <div className="text-xs font-bold text-elite-primary-600 font-mono">{w.id}</div>
                               <div className="text-[8px] font-bold text-elite-primary-400 uppercase tracking-widest mt-1">{w.requestedAt}</div>
                            </td>
                            <td className="px-6 py-4">
                               <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full bg-elite-primary-100 flex items-center justify-center font-bold text-[10px]">
                                     {w.user[0]}
                                  </div>
                                  <span className="text-sm font-bold">{w.user}</span>
                               </div>
                            </td>
                            <td className="px-6 py-4">
                               <div className="text-lg font-bold font-space-grotesk">${w.amount.toLocaleString()}</div>
                            </td>
                            <td className="px-6 py-4">
                               <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-lg bg-elite-primary-50 dark:bg-elite-primary-900 flex items-center justify-center text-elite-primary-400 shrink-0">
                                     {w.method === "Bank Transfer" ? <Landmark size={14} /> : <Smartphone size={14} />}
                                  </div>
                                  <div className="min-w-0">
                                     <div className="text-xs font-bold truncate">{w.method}</div>
                                     <div className="text-[10px] text-elite-primary-400 truncate">{w.account}</div>
                                  </div>
                               </div>
                            </td>
                            <td className="px-6 py-4">
                               <Badge variant={w.status === 'pending' ? 'warning' : 'info'} className="text-[8px] uppercase tracking-widest h-5 px-2">
                                  {w.status}
                               </Badge>
                            </td>
                            <td className="px-6 py-4 text-right">
                               <div className="flex justify-end gap-2">
                                  <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-elite-error hover:bg-elite-error/10 border-elite-error/20"><XCircle size={16} /></Button>
                                  <Button variant="primary" size="sm" className="h-8 px-3 text-[10px] font-bold uppercase tracking-widest bg-elite-success border-none hover:bg-emerald-600">Approve</Button>
                                  <button className="p-2 text-elite-primary-400 hover:text-elite-primary-900 transition-colors"><MoreVertical size={16} /></button>
                               </div>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
              <div className="p-4 bg-elite-primary-50 dark:bg-elite-primary-900/50 flex items-center justify-between">
                 <div className="text-xs text-elite-primary-400 font-bold uppercase">Showing 6 requests</div>
                 <div className="flex gap-2">
                    <Button variant="outline" size="sm" disabled><ChevronLeft size={16} /></Button>
                    <Button variant="outline" size="sm"><ChevronRight size={16} /></Button>
                 </div>
              </div>
           </Card>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}
