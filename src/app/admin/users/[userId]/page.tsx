"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";


  ArrowLeft,
  Mail,
  Shield,
  Activity,
  Wallet,
  BookOpen,
  Lock,
  UserX,
  MessageCircle,
  MoreVertical,
  Calendar,
  Zap,
  Globe,
  Smartphone
} from "lucide-react";

export default function UserDetail() {
  const [activeTab, setActiveTab] = useState<"activity" | "courses" | "wallet">("activity");

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-6 border-b border-elite-primary-100 dark:border-elite-primary-900 bg-white sticky top-0 z-30 flex items-center justify-between">
           <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild><Link href="/admin/users"><ArrowLeft size={20} /></Link></Button>
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-elite-primary-100 flex items-center justify-center font-bold">JD</div>
                 <div>
                    <h1 className="text-xl font-bold font-space-grotesk">John Doe</h1>
                    <div className="flex items-center gap-2">
                       <Badge variant="primary" className="text-[8px]">STUDENT</Badge>
                       <span className="text-[10px] text-elite-primary-400 font-bold uppercase tracking-widest">ELITES ID: ELT-8824-JD</span>
                    </div>
                 </div>
              </div>
           </div>
           <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="text-elite-error border-elite-error/20 hover:bg-elite-error/5"><UserX size={16} className="mr-2" /> Suspend Account</Button>
              <Button variant="primary" size="sm"><Shield size={16} className="mr-2" /> Impersonate</Button>
           </div>
        </header>

        <main className="p-6 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8">
           {/* Info Sidebar */}
           <div className="lg:col-span-4 space-y-6">
              <Card>
                 <CardHeader>
                    <CardTitle className="text-sm font-bold uppercase tracking-widest text-elite-primary-400">Account Details</CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-4">
                    <div className="space-y-1">
                       <div className="text-[10px] font-bold text-elite-primary-400 uppercase">Email Address</div>
                       <div className="text-sm font-medium flex items-center gap-2">
                          john@example.com <Badge variant="success" className="text-[8px] h-4">Verified</Badge>
                       </div>
                    </div>
                    <div className="space-y-1">
                       <div className="text-[10px] font-bold text-elite-primary-400 uppercase">Phone Number</div>
                       <div className="text-sm font-medium">+234 800 123 4567</div>
                    </div>
                    <div className="space-y-1">
                       <div className="text-[10px] font-bold text-elite-primary-400 uppercase">Location</div>
                       <div className="text-sm font-medium flex items-center gap-2"><Globe size={14} /> Lagos, Nigeria</div>
                    </div>
                    <div className="space-y-1">
                       <div className="text-[10px] font-bold text-elite-primary-400 uppercase">Joined Platform</div>
                       <div className="text-sm font-medium">Jan 12, 2024 (2 months ago)</div>
                    </div>
                 </CardContent>
              </Card>

              <Card className="bg-elite-primary-950 text-white border-none shadow-xl">
                 <CardContent className="p-6 space-y-6">
                    <div className="flex justify-between items-center">
                       <div className="text-xs font-bold uppercase tracking-widest text-elite-primary-400">Wallet Balance</div>
                       <Wallet size={18} className="text-elite-primary-400" />
                    </div>
                    <div className="text-3xl font-bold font-space-grotesk">$145.00</div>
                    <div className="space-y-2">
                       <div className="flex justify-between text-[10px] font-bold text-elite-primary-400">
                          <span>ELITE Coins</span>
                          <span>2,450</span>
                       </div>
                       <div className="h-1 bg-white/10 rounded-full" />
                    </div>
                    <Button variant="outline" size="sm" className="w-full border-white/20 text-white hover:bg-white/10">Adjust Balance</Button>
                 </CardContent>
              </Card>
           </div>

           {/* Main Content */}
           <div className="lg:col-span-8 space-y-6">
              <div className="flex gap-8 border-b border-elite-primary-100 dark:border-elite-primary-900">
                 {[
                   { id: "activity", label: "Activity Log", icon: Activity },
                   { id: "courses", label: "Courses", icon: BookOpen },
                   { id: "wallet", label: "Financials", icon: Wallet },
                 ].map((tab) => (
                   <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={cn(
                      "pb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider relative transition-all",
                      activeTab === tab.id ? "text-elite-primary-600 dark:text-white" : "text-elite-primary-400 hover:text-elite-primary-600"
                    )}
                   >
                     <tab.icon size={16} />
                     {tab.label}
                     {activeTab === tab.id && <div className="absolute bottom-0 left-0 w-full h-1 bg-elite-primary-600 rounded-full" />}
                   </button>
                 ))}
              </div>

              <div className="space-y-4">
                 {activeTab === 'activity' && (
                   <div className="space-y-4">
                      {[
                        { action: "Logged in from new device", ip: "192.168.1.1", time: "2 hours ago", color: "bg-blue-500" },
                        { action: "Purchased 'Next.js 15 Masterclass'", ip: "192.168.1.1", time: "1 day ago", color: "bg-elite-success" },
                        { action: "Started Quiz: Foundations", ip: "192.168.1.1", time: "2 days ago", color: "bg-elite-primary-600" },
                        { action: "Joined Study Group: Early Adopters", ip: "192.168.1.1", time: "3 days ago", color: "bg-purple-500" },
                      ].map((log, i) => (
                        <div key={i} className="flex gap-4 p-4 rounded-xl bg-white dark:bg-elite-primary-900 border border-elite-primary-50 dark:border-white/5 group hover:border-elite-primary-200 transition-colors">
                           <div className={cn("w-1 shrink-0 rounded-full", log.color)} />
                           <div className="flex-1">
                              <div className="font-bold text-sm">{log.action}</div>
                              <div className="text-[10px] text-elite-primary-400 uppercase font-bold tracking-widest mt-1">IP: {log.ip} • {log.time}</div>
                           </div>
                           <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity"><MoreVertical size={16} /></Button>
                        </div>
                      ))}
                   </div>
                 )}
              </div>
           </div>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}
