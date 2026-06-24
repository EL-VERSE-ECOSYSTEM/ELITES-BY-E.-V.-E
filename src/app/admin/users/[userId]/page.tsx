"use client";
import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";

import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card,  } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {  } from "@/components/ui/Badge";
import { , Ban, Calendar, Mail, MapPin, Phone,  } from "lucide-react";

export default function UserDetailPage() {
  const [_status, _setStatus] = useState("Active");

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
           <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-elite-primary-200 flex items-center justify-center text-elite-primary-600 font-bold text-2xl">DM</div>
              <div>
                 <h1 className="text-2xl font-bold font-space-grotesk">David Mensah</h1>
                 <p className="text-sm text-elite-primary-500">User ID: ELITES-9923485</p>
              </div>
           </div>
           <div className="flex gap-2">
              <Button variant="outline" size="sm" className="text-elite-error border-elite-error/20"><Ban size={18} className="mr-2" /> Suspend</Button>
              <Button variant="primary" size="sm">Manage Role</Button>
           </div>
        </header>
        <main className="p-6 pb-24 grid grid-cols-1 lg:grid-cols-3 gap-6">
           <Card className="lg:col-span-1 p-6 space-y-6 h-fit">
              <div className="space-y-4">
                 <h3 className="font-bold text-sm uppercase tracking-widest text-elite-primary-400">Account Details</h3>
                 <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                       <Mail size={16} className="text-elite-primary-400" />
                       <span>david@example.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                       <Phone size={16} className="text-elite-primary-400" />
                       <span>+233 24 123 4567</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                       <MapPin size={16} className="text-elite-primary-400" />
                       <span>Accra, Ghana</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                       <Calendar size={16} className="text-elite-primary-400" />
                       <span>Joined Jan 2024</span>
                    </div>
                 </div>
              </div>
           </Card>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}