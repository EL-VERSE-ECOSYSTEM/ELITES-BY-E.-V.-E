"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Search, Filter, Mail, Shield, UserX, UserCheck, MoreVertical, ChevronLeft, ChevronRight, Download, Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function UserManagement() {
  const users = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    name: ["John Doe", "Sarah Kamau", "David Mensah", "Amara Okafor"][i % 4],
    email: `user${i + 1}@example.com`,
    role: ["Student", "Tutor", "Moderator", "Student"][i % 4],
    status: ["Active", "Active", "Suspended", "Active"][i % 4],
    joined: "Jan 12, 2024",
    avatar: ""
  }));

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 space-y-6">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h1 className="text-3xl font-bold font-space-grotesk">User Management</h1>
              <div className="flex items-center gap-3">
                 <Button variant="outline" size="sm"><Download size={18} className="mr-2" /> Export CSV</Button>
                 <Button variant="accent" size="sm"><Plus size={18} className="mr-2" /> Add New User</Button>
              </div>
           </div>

           <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white dark:bg-elite-primary-900 p-4 rounded-xl shadow-sm">
              <div className="relative w-full md:w-96">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-elite-primary-400" size={18} />
                 <input
                  placeholder="Search by name, email or ID..."
                  className="w-full pl-10 pr-4 py-2 text-sm border border-elite-primary-100 dark:border-elite-primary-800 rounded-lg outline-none focus:ring-2 focus:ring-elite-primary-500 bg-transparent"
                 />
              </div>
              <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto shrink-0">
                 <div className="flex gap-2">
                    {["All", "Students", "Tutors", "Admins"].map((role) => (
                      <button key={role} className="px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest text-elite-primary-500 hover:bg-elite-primary-50 transition-colors whitespace-nowrap">
                         {role}
                      </button>
                    ))}
                 </div>
                 <div className="h-6 w-[1px] bg-elite-primary-100 dark:bg-elite-primary-800" />
                 <Button variant="outline" size="sm"><Filter size={16} className="mr-2" /> More Filters</Button>
              </div>
           </div>
        </header>

        <main className="px-6 pb-24">
           <Card className="overflow-hidden border-none shadow-xl">
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead className="bg-elite-primary-950 text-white text-[10px] font-bold uppercase tracking-widest">
                       <tr>
                          <th className="px-6 py-4">User</th>
                          <th className="px-6 py-4">Role</th>
                          <th className="px-6 py-4">Status</th>
                          <th className="px-6 py-4">Joined Date</th>
                          <th className="px-6 py-4 text-right">Actions</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-elite-primary-100 dark:divide-elite-primary-900">
                       {users.map((user) => (
                         <tr key={user.id} className="hover:bg-elite-primary-50 dark:hover:bg-white/5 transition-colors group">
                            <td className="px-6 py-4">
                               <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-full bg-elite-primary-100 dark:bg-elite-primary-800 flex items-center justify-center font-bold text-xs shrink-0">
                                     {user.name[0]}
                                  </div>
                                  <div className="min-w-0">
                                     <div className="font-bold text-sm truncate">{user.name}</div>
                                     <div className="text-[10px] text-elite-primary-400 truncate">{user.email}</div>
                                  </div>
                               </div>
                            </td>
                            <td className="px-6 py-4">
                               <Badge variant={user.role === 'Student' ? 'primary' : user.role === 'Tutor' ? 'accent' : 'info'}>
                                  {user.role}
                               </Badge>
                            </td>
                            <td className="px-6 py-4">
                               <div className="flex items-center gap-2">
                                  <div className={cn("w-2 h-2 rounded-full", user.status === 'Active' ? "bg-elite-success" : "bg-elite-error")} />
                                  <span className="text-xs font-medium">{user.status}</span>
                               </div>
                            </td>
                            <td className="px-6 py-4 text-xs text-elite-primary-500 font-medium">{user.joined}</td>
                            <td className="px-6 py-4 text-right">
                               <div className="flex justify-end gap-2">
                                  <button title="Impersonate" className="p-2 text-elite-primary-400 hover:text-elite-primary-900 transition-colors">
                                     <Shield size={18} />
                                  </button>
                                  <button title={user.status === 'Active' ? 'Suspend' : 'Activate'} className={cn(
                                    "p-2 transition-colors",
                                    user.status === 'Active' ? "text-elite-error/40 hover:text-elite-error" : "text-elite-success/40 hover:text-elite-success"
                                  )}>
                                     {user.status === 'Active' ? <UserX size={18} /> : <UserCheck size={18} />}
                                  </button>
                                  <button title="More Options" className="p-2 text-elite-primary-400 hover:text-elite-primary-900 transition-colors">
                                     <MoreVertical size={18} />
                                  </button>
                               </div>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
              <div className="p-4 bg-elite-primary-50 dark:bg-elite-primary-900/50 flex items-center justify-between">
                 <div className="text-xs text-elite-primary-400 font-bold uppercase">Total Records: 54,230</div>
                 <div className="flex gap-2">
                    <Button variant="outline" size="sm" disabled><ChevronLeft size={16} /></Button>
                    <div className="flex gap-1">
                       <Button variant="primary" size="sm">1</Button>
                       <Button variant="outline" size="sm">2</Button>
                       <Button variant="outline" size="sm">3</Button>
                    </div>
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
