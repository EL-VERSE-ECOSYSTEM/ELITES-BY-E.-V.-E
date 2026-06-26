"use client";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Ban, Mail, MapPin, Phone } from "lucide-react";

export default function UserDetailPage() {
  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
           <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-elite-primary-200 flex items-center justify-center text-elite-primary-600 font-bold text-2xl">DM</div>
              <div>
                 <h1 className="text-2xl font-bold font-space-grotesk">Daniel Mensah</h1>
                 <p className="text-xs text-elite-primary-500 font-medium">ID: #ELT-0042 • Member since Jan 2024</p>
              </div>
           </div>
           <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="text-elite-error border-elite-error/20 hover:bg-elite-error/5">
                 <Ban size={16} className="mr-2" /> Suspend Account
              </Button>
              <Button variant="primary" size="sm">Edit Details</Button>
           </div>
        </header>

        <main className="px-6 pb-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-1 space-y-6">
              <Card className="border-none shadow-xl">
                 <div className="p-6 space-y-6">
                    <h3 className="font-bold text-sm uppercase tracking-widest text-elite-primary-400">Contact Information</h3>
                    <div className="space-y-4">
                       <div className="flex items-center gap-3 text-sm">
                          <Mail size={16} className="text-elite-primary-400" />
                          <span className="font-medium">daniel.mensah@example.com</span>
                       </div>
                       <div className="flex items-center gap-3 text-sm">
                          <Phone size={16} className="text-elite-primary-400" />
                          <span className="font-medium">+233 24 123 4567</span>
                       </div>
                       <div className="flex items-center gap-3 text-sm">
                          <MapPin size={16} className="text-elite-primary-400" />
                          <span className="font-medium">Accra, Ghana</span>
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
