"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useState } from "react";
import { cn } from "@/lib/utils";


  Activity,
  Search,
  Filter,
  Clock,
  User,
  Database,
  ShieldCheck,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Download,
  Eye
} from "lucide-react";

export default function AdminAuditLogs() {
  const logs = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    admin: ["Alice Mod", "Bob Super", "System", "Alice Mod"][i % 4],
    action: ["Deleted Comment", "Updated Course", "Auto-suspended User", "Approved Withdrawal"][i % 4],
    entity: ["Discussion", "Course #12", "User #450", "Transaction #99"][i % 4],
    time: "2m ago",
    status: "Success",
  }));

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 space-y-6">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h1 className="text-3xl font-bold font-space-grotesk">Audit Logs</h1>
              <Button variant="outline" size="sm"><Download size={18} className="mr-2" /> Export Logs</Button>
           </div>

           <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white dark:bg-elite-primary-900 p-4 rounded-xl shadow-sm border border-elite-primary-100 dark:border-elite-primary-800">
              <div className="relative w-full md:w-96">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-elite-primary-400" size={18} />
                 <input placeholder="Search action, admin or ID..." className="w-full pl-10 pr-4 py-2 text-sm border-none outline-none bg-transparent" />
              </div>
              <div className="flex items-center gap-3">
                 <div className="flex gap-2">
                    {["All Time", "Today", "Yesterday"].map((t) => (
                      <button key={t} className="px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest text-elite-primary-500 hover:bg-elite-primary-50">
                         {t}
                      </button>
                    ))}
                 </div>
                 <Button variant="outline" size="sm"><Filter size={16} /></Button>
              </div>
           </div>
        </header>

        <main className="px-6 pb-24">
           <Card className="overflow-hidden border-none shadow-xl">
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead className="bg-elite-primary-950 text-white text-[10px] font-bold uppercase tracking-widest">
                       <tr>
                          <th className="px-6 py-4">Timestamp</th>
                          <th className="px-6 py-4">Admin</th>
                          <th className="px-6 py-4">Action</th>
                          <th className="px-6 py-4">Target Entity</th>
                          <th className="px-6 py-4">Status</th>
                          <th className="px-6 py-4 text-right">Details</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-elite-primary-100 dark:divide-elite-primary-900">
                       {logs.map((log) => (
                         <tr key={log.id} className="hover:bg-elite-primary-50 dark:hover:bg-white/5 transition-colors group">
                            <td className="px-6 py-4 whitespace-nowrap">
                               <div className="flex items-center gap-2 text-xs font-medium text-elite-primary-500">
                                  <Clock size={14} /> {log.time}
                               </div>
                            </td>
                            <td className="px-6 py-4">
                               <div className="flex items-center gap-2">
                                  <div className="w-6 h-6 rounded-full bg-elite-primary-100 flex items-center justify-center font-bold text-[8px]">{log.admin[0]}</div>
                                  <span className="text-xs font-bold">{log.admin}</span>
                               </div>
                            </td>
                            <td className="px-6 py-4">
                               <span className="text-xs font-medium">{log.action}</span>
                            </td>
                            <td className="px-6 py-4">
                               <Badge variant="primary" className="text-[8px] uppercase">{log.entity}</Badge>
                            </td>
                            <td className="px-6 py-4">
                               <div className="flex items-center gap-1 text-elite-success text-xs font-bold">
                                  <ShieldCheck size={14} /> {log.status}
                               </div>
                            </td>
                            <td className="px-6 py-4 text-right">
                               <button className="p-2 text-elite-primary-400 hover:text-elite-primary-900"><Eye size={16} /></button>
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
