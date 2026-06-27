"use client";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import {Card} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Download, Eye } from "lucide-react";
import Link from "next/link";

export default function UserManagement() {
  const users = [
    { id: 1, name: "David Mensah", email: "david@example.com", role: "Student", status: "Active", joined: "Jan 12, 2024" },
    { id: 2, name: "Sarah Konate", email: "sarah@example.com", role: "Tutor", status: "Active", joined: "Dec 05, 2023" },
  ];

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
           <h1 className="text-3xl font-bold font-space-grotesk">User Management</h1>
           <div className="flex gap-2">
              <Button variant="outline" size="sm"><Download size={18} className="mr-2" /> Export CSV</Button>
           </div>
        </header>
        <main className="px-6 pb-24 space-y-6">
           <Card className="overflow-hidden border-none shadow-xl">
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead className="bg-elite-primary-950 text-white text-xs font-bold uppercase tracking-widest">
                       <tr>
                          <th className="px-6 py-4">User</th>
                          <th className="px-6 py-4">Role</th>
                          <th className="px-6 py-4">Status</th>
                          <th className="px-6 py-4">Joined</th>
                          <th className="px-6 py-4 text-right">Actions</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-elite-primary-100 dark:divide-elite-primary-900">
                       {users.map((u) => (
                         <tr key={u.id} className="hover:bg-elite-primary-50 dark:hover:bg-white/5 transition-colors group text-sm">
                            <td className="px-6 py-4">
                               <div className="font-bold">{u.name}</div>
                               <div className="text-xs text-elite-primary-400">{u.email}</div>
                            </td>
                            <td className="px-6 py-4 font-medium">{u.role}</td>
                            <td className="px-6 py-4">
                               <Badge variant="success" className="text-[10px]">{u.status}</Badge>
                            </td>
                            <td className="px-6 py-4 text-elite-primary-500">{u.joined}</td>
                            <td className="px-6 py-4 text-right">
                               <Link href={`/admin/users/${u.id}`}>
                                  <Button variant="outline" size="sm" className="h-8 w-8 p-0"><Eye size={16} /></Button>
                               </Link>
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
