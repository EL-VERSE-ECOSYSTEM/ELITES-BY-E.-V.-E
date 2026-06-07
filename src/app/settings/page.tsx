"use client";

import { MobileBottomNav from "@/components/layout/MobileBottomNav";, Card, CardContent, CardHeader, CardTitle from "@/components/ui/Card";, Button from "@/components/ui/Button";, Badge from "@/components/ui/Badge";, Input from "@/components/ui/Input";, useState from "react";, cn from "@/lib/utils";, User, Lock, Bell, Shield, CreditCard, Globe, Trash2, ChevronRight, Camera, Mail, Smartphone, Eye, Monitor } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<"profile" | "account" | "notifications" | "privacy" | "payments" | "danger">("profile");

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "account", label: "Account", icon: Lock },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "privacy", label: "Privacy", icon: Shield },
    { id: "payments", label: "Payments", icon: CreditCard },
    { id: "danger", label: "Danger Zone", icon: Trash2 },
  ];

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 border-b border-elite-primary-100 dark:border-elite-primary-900 bg-white">
           <h1 className="text-3xl font-bold font-space-grotesk">Settings</h1>
           <p className="text-sm text-elite-primary-500 font-medium">Manage your account and platform preferences.</p>
        </header>

        <main className="p-6 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl">
           {/* Settings Navigation */}
           <div className="lg:col-span-3 space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm",
                    activeTab === tab.id
                      ? "bg-elite-primary-950 text-white shadow-xl"
                      : "text-elite-primary-400 hover:bg-white hover:text-elite-primary-900"
                  )}
                >
                  <tab.icon size={18} />
                  {tab.label}
                  {activeTab === tab.id && <ChevronRight size={14} className="ml-auto" />}
                </button>
              ))}
           </div>

           {/* Content Area */}
           <div className="lg:col-span-9">
              <Card className="border-none shadow-xl">
                 <CardContent className="p-8">
                    {activeTab === 'profile' && (
                      <div className="space-y-8 animate-in fade-in duration-300">
                         <div className="flex flex-col md:flex-row items-center gap-8 border-b border-elite-primary-50 dark:border-white/5 pb-8">
                            <div className="relative group">
                               <div className="w-32 h-32 rounded-3xl bg-elite-primary-100 flex items-center justify-center font-bold text-3xl">JD</div>
                               <button className="absolute inset-0 bg-black/40 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                                  <Camera size={24} />
                               </button>
                            </div>
                            <div className="space-y-4 flex-1 text-center md:text-left">
                               <h3 className="font-bold text-xl">Profile Photo</h3>
                               <p className="text-xs text-elite-primary-500 max-w-xs">Upload a clear photo to help tutors and students identify you. Min 400x400px.</p>
                               <div className="flex gap-2 justify-center md:justify-start">
                                  <Button variant="outline" size="sm">Upload New</Button>
                                  <Button variant="ghost" size="sm" className="text-elite-error">Remove</Button>
                               </div>
                            </div>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input label="First Name" defaultValue="John" />
                            <Input label="Last Name" defaultValue="Doe" />
                            <div className="md:col-span-2">
                               <Input label="Headline" defaultValue="Aspiring Full Stack Developer | Next.js Enthusiast" />
                            </div>
                            <div className="md:col-span-2">
                               <div className="space-y-1.5">
                                  <label className="text-sm font-medium">Bio</label>
                                  <textarea
                                    className="w-full p-4 rounded-xl border border-elite-primary-100 dark:border-white/10 bg-white dark:bg-elite-primary-950 text-sm min-h-[120px] outline-none"
                                    defaultValue="Passionate about building the future of Africa through technology."
                                  />
                               </div>
                            </div>
                         </div>
                         <Button variant="accent" className="px-8 h-12 font-bold shadow-2xl">Save Profile Changes</Button>
                      </div>
                    )}

                    {activeTab === 'notifications' && (
                      <div className="space-y-8 animate-in fade-in duration-300">
                         <div className="space-y-1">
                            <h2 className="text-xl font-bold font-space-grotesk">Notification Preferences</h2>
                            <p className="text-sm text-elite-primary-500">Control how and when we reach you.</p>
                         </div>

                         <div className="space-y-4">
                            {[
                              { title: "Email Notifications", desc: "Receive course updates and weekly summaries.", icon: Mail, checked: true },
                              { title: "Push Notifications", desc: "Get instant alerts for messages and rewards.", icon: Smartphone, checked: true },
                              { title: "Project Feedback", desc: "Receive email when a tutor grades your project.", icon: Monitor, checked: true },
                              { title: "Marketing & Offers", desc: "News about discounts and new features.", icon: Globe, checked: false },
                            ].map((item, i) => (
                              <div key={i} className="flex items-center justify-between p-4 rounded-2xl border border-elite-primary-50 dark:border-white/5">
                                 <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-elite-primary-50 dark:bg-elite-primary-950 flex items-center justify-center text-elite-primary-600 shrink-0">
                                       <item.icon size={20} />
                                    </div>
                                    <div className="space-y-0.5">
                                       <div className="font-bold text-sm">{item.title}</div>
                                       <p className="text-[10px] text-elite-primary-500 uppercase font-bold tracking-widest">{item.desc}</p>
                                    </div>
                                 </div>
                                 <button className={cn(
                                   "w-12 h-6 rounded-full relative p-1 transition-colors",
                                   item.checked ? "bg-elite-success" : "bg-elite-primary-100 dark:bg-elite-primary-950"
                                 )}>
                                    <div className={cn("w-4 h-4 bg-white rounded-full shadow-sm transition-transform", item.checked ? "translate-x-6" : "translate-x-0")} />
                                 </button>
                              </div>
                            ))}
                         </div>
                      </div>
                    )}

                    {activeTab === 'danger' && (
                      <div className="space-y-8 animate-in fade-in duration-300">
                         <div className="p-6 rounded-2xl bg-elite-error/10 border border-elite-error/20 flex gap-4">
                            <Trash2 className="text-elite-error shrink-0" size={24} />
                            <div className="space-y-2">
                               <h3 className="font-bold text-elite-error">Deactivate Account</h3>
                               <p className="text-sm text-elite-error/80 leading-relaxed">
                                  Deleting your account is permanent and cannot be undone. All your course progress, certificates, and ELITE coins will be lost.
                               </p>
                               <Button variant="danger" size="sm" className="mt-4 bg-elite-error border-none">Yes, Delete Everything</Button>
                            </div>
                         </div>
                      </div>
                    )}
                 </CardContent>
              </Card>
           </div>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}
