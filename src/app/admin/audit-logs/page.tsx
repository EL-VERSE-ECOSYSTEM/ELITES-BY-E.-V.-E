"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent } from "@/components/ui/Card";
import { History, Shield, Clock } from "lucide-react";

export default function AuditLogs() {
  const logs = [
    { id: 1, action: "User Suspended", admin: "Super Admin", target: "ELITES-4492", date: "2m ago" },
    { id: 2, action: "Course Approved", admin: "Moderator Sarah", target: "Next.js 15 Mastery", date: "15m ago" },
  ];

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8">
           <h1 className="text-3xl font-bold font-space-grotesk text-elite-primary-900 dark:text-white">Audit Logs</h1>
        </header>

        <main className="px-6 pb-24 space-y-6">
           <Card className="overflow-hidden border-none shadow-xl">
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead className="bg-elite-primary-950 text-white text-xs font-bold uppercase tracking-widest">
                       <tr>
                          <th className="px-6 py-4">Action</th>
                          <th className="px-6 py-4">Admin</th>
                          <th className="px-6 py-4">Target</th>
                          <th className="px-6 py-4 text-right">Timestamp</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-elite-primary-100 dark:divide-elite-primary-900">
                       {logs.map((log) => (
                         <tr key={log.id} className="hover:bg-elite-primary-50 dark:hover:bg-white/5 transition-colors group text-sm">
                            <td className="px-6 py-4 font-bold text-elite-primary-600">{log.action}</td>
                            <td className="px-6 py-4">{log.admin}</td>
                            <td className="px-6 py-4 font-mono text-xs">{log.target}</td>
                            <td className="px-6 py-4 text-right text-elite-primary-400">{log.date}</td>
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
