import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
import { useState } from "react";
import { cn } from "@/lib/utils";
"use client";

  CheckCircle2,
  XCircle,
  Eye,
  Clock,
  Search,
  Filter,
  DollarSign,
  Image as ImageIcon,
  Landmark,
  CreditCard,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  MoreVertical
} from "lucide-react";

export default function DepositVerifications() {
  const [activeTab, setActiveTab] = useState<"pending" | "verified" | "rejected">("pending");

  const deposits = Array.from({ length: 5 }).map((_, i) => ({
    id: `DEP-${2000 + i}`,
    user: ["John Doe", "Sarah Kamau", "Kofi Anan", "Zainab Yusuf"][i % 4],
    amount: [100, 50, 250, 15][i % 4],
    method: ["Bank Transfer", "MTN Momo", "Credit Card", "AirtelTigo"][i % 4],
    date: "1 hour ago",
    status: i === 0 ? "Pending" : "Verified",
    hasReceipt: i % 2 === 0
  }));

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 space-y-6">
           <h1 className="text-3xl font-bold font-space-grotesk">Deposit Verifications</h1>

           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="p-4 border-none shadow-sm flex items-center gap-4">
                 <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">Total</div>
                 <div>
                    <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">Received Today</div>
                    <div className="text-lg font-bold">$12,450</div>
                 </div>
              </Card>
              {["Pending", "Verified", "Rejected"].map((s, i) => (
                <Card key={i} className="p-4 border-none shadow-sm flex items-center justify-between">
                   <div>
                      <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">{s}</div>
                      <div className="text-lg font-bold">{[8, 124, 2][i]}</div>
                   </div>
                   <div className={cn(
                     "w-8 h-8 rounded-lg flex items-center justify-center",
                     s === 'Pending' ? "bg-elite-warning/10 text-elite-warning" : s === 'Verified' ? "bg-elite-success/10 text-elite-success" : "bg-elite-error/10 text-elite-error"
                   )}>
                      {s === 'Pending' ? <Clock size={16} /> : s === 'Verified' ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
                   </div>
                </Card>
              ))}
           </div>
        </header>

        <main className="px-6 pb-24 space-y-6">
           <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white dark:bg-elite-primary-900 p-4 rounded-xl shadow-sm border border-elite-primary-100 dark:border-elite-primary-800">
              <div className="flex gap-4 p-1 bg-elite-primary-50 dark:bg-elite-primary-950 rounded-xl w-fit">
                 {["pending", "verified", "rejected"].map((tab) => (
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
              <Button variant="outline" size="sm"><Filter size={16} className="mr-2" /> More Filters</Button>
           </div>

           <Card className="overflow-hidden border-none shadow-xl">
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead className="bg-elite-primary-950 text-white text-[10px] font-bold uppercase tracking-widest">
                       <tr>
                          <th className="px-6 py-4">Transaction ID</th>
                          <th className="px-6 py-4">User</th>
                          <th className="px-6 py-4 text-center">Amount</th>
                          <th className="px-6 py-4">Method</th>
                          <th className="px-6 py-4 text-center">Receipt</th>
                          <th className="px-6 py-4 text-right">Actions</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-elite-primary-100 dark:divide-elite-primary-900">
                       {deposits.map((dep) => (
                         <tr key={dep.id} className="hover:bg-elite-primary-50 dark:hover:bg-white/5 transition-colors group">
                            <td className="px-6 py-4">
                               <div className="text-xs font-bold text-elite-primary-600 font-mono">{dep.id}</div>
                               <div className="text-[8px] font-bold text-elite-primary-400 uppercase mt-1">{dep.date}</div>
                            </td>
                            <td className="px-6 py-4">
                               <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full bg-elite-primary-100 flex items-center justify-center font-bold text-[10px]">{dep.user[0]}</div>
                                  <span className="text-sm font-bold">{dep.user}</span>
                               </div>
                            </td>
                            <td className="px-6 py-4 text-center font-bold font-space-grotesk text-elite-success">${dep.amount}</td>
                            <td className="px-6 py-4">
                               <div className="flex items-center gap-2 text-xs font-medium text-elite-primary-500">
                                  {dep.method.includes('Bank') ? <Landmark size={14} /> : dep.method.includes('Momo') ? <Smartphone size={14} /> : <CreditCard size={14} />}
                                  {dep.method}
                               </div>
                            </td>
                            <td className="px-6 py-4 text-center">
                               {dep.hasReceipt ? (
                                 <button className="p-2 bg-elite-primary-50 dark:bg-elite-primary-950 rounded-lg text-elite-primary-600 hover:bg-elite-primary-100 transition-colors">
                                    <ImageIcon size={18} />
                                 </button>
                               ) : (
                                 <span className="text-[10px] font-bold text-elite-primary-300 uppercase italic">No Proof</span>
                               )}
                            </td>
                            <td className="px-6 py-4 text-right">
                               <div className="flex justify-end gap-2">
                                  <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-elite-error border-elite-error/20"><XCircle size={16} /></Button>
                                  <Button variant="primary" size="sm" className="h-8 px-3 text-[10px] font-bold uppercase bg-elite-success border-none">Verify</Button>
                                  <button className="p-2 text-elite-primary-400"><MoreVertical size={16} /></button>
                               </div>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </Card>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}
