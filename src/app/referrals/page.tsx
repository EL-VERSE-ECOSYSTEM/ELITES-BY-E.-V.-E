import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import {
import { useState } from "react";
import { cn } from "@/lib/utils";
"use client";

  Users,
  Copy,
  Check,
  Share2,
  Twitter,
  Mail,
  MessageSquare,
  DollarSign,
  TrendingUp,
  Gift,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function ReferralProgramPage() {
  const [copied, setCopied] = useState(false);
  const referralCode = "ELITE-JDOE-2024";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`https://elites.africa/join?ref=${referralCode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-12 bg-elite-primary-950 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 p-12 opacity-5">
              <Gift size={400} />
           </div>
           <div className="relative z-10 max-w-4xl space-y-6">
              <Badge variant="accent">REFERRAL PROGRAM</Badge>
              <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk tracking-tighter">Share ELITE. Get Rewarded.</h1>
              <p className="text-xl text-elite-primary-300 max-w-2xl leading-relaxed">
                 Invite your friends to the EL VERSE ecosystem. They get 10% off their first course, and you earn ELITE coins and cash rewards.
              </p>
           </div>
        </header>

        <main className="px-6 pb-24 -mt-8 relative z-20 space-y-8">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Main Column */}
              <div className="lg:col-span-8 space-y-8">
                 <Card className="border-none shadow-xl overflow-hidden">
                    <CardContent className="p-8 md:p-12 space-y-8">
                       <div className="space-y-4">
                          <h2 className="text-2xl font-bold font-space-grotesk">Your Referral Link</h2>
                          <div className="flex flex-col md:flex-row gap-4">
                             <div className="flex-1 bg-elite-primary-50 dark:bg-elite-primary-900 rounded-xl p-4 font-mono text-sm border border-elite-primary-100 dark:border-elite-primary-800 flex items-center justify-between">
                                <span className="truncate">https://elites.africa/join?ref={referralCode}</span>
                                <button onClick={copyToClipboard} className="ml-4 text-elite-primary-600 hover:text-elite-primary-900 transition-colors shrink-0">
                                   {copied ? <Check size={20} /> : <Copy size={20} />}
                                </button>
                             </div>
                             <Button variant="accent" size="lg" className="px-8">
                                <Share2 size={20} className="mr-2" /> Share Link
                             </Button>
                          </div>
                       </div>

                       <div className="pt-8 border-t border-elite-primary-50 dark:border-elite-primary-800">
                          <h3 className="font-bold text-sm uppercase tracking-widest text-elite-primary-400 mb-6">Quick Share</h3>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                             {[
                               { name: "WhatsApp", icon: MessageSquare, color: "bg-[#25D366]" },
                               { name: "Twitter", icon: Twitter, color: "bg-[#1DA1F2]" },
                               { name: "Email", icon: Mail, color: "bg-slate-700" },
                               { name: "LinkedIn", icon: Share2, color: "bg-[#0077B5]" },
                             ].map((platform) => (
                               <button key={platform.name} className={cn(
                                 "flex flex-col items-center gap-3 p-4 rounded-2xl text-white transition-transform hover:-translate-y-1",
                                 platform.color
                               )}>
                                  <platform.icon size={24} />
                                  <span className="text-xs font-bold uppercase tracking-wider">{platform.name}</span>
                               </button>
                             ))}
                          </div>
                       </div>
                    </CardContent>
                 </Card>

                 <div className="space-y-6">
                    <h2 className="text-2xl font-bold font-space-grotesk">How it works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                       {[
                         { step: "01", title: "Send Invite", desc: "Share your unique link with fellow tech enthusiasts." },
                         { step: "02", title: "They Join", desc: "Friends sign up and enroll in their first course." },
                         { step: "03", title: "Earn Big", desc: "Get $5 credit and 500 ELITE coins for every referral." },
                       ].map((item, i) => (
                         <div key={i} className="space-y-4">
                            <div className="text-4xl font-bold font-space-grotesk text-elite-primary-100 dark:text-elite-primary-900">{item.step}</div>
                            <h4 className="font-bold text-lg">{item.title}</h4>
                            <p className="text-sm text-elite-primary-500 leading-relaxed">{item.desc}</p>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>

              {/* Sidebar Stats */}
              <div className="lg:col-span-4 space-y-6">
                 <Card className="bg-gradient-to-br from-elite-primary-600 to-elite-primary-800 text-white border-none shadow-xl">
                    <CardContent className="p-8 space-y-6">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center"><TrendingUp size={20} /></div>
                          <h3 className="font-bold uppercase tracking-widest text-xs">Total Earnings</h3>
                       </div>
                       <div className="text-5xl font-bold font-space-grotesk">$245.00</div>
                       <div className="flex justify-between items-center text-xs font-bold pt-4 border-t border-white/10">
                          <span className="opacity-80">Referrals: 12 Successful</span>
                          <span className="text-elite-accent-400 flex items-center gap-1"><Sparkles size={12} /> 6,000 Coins</span>
                       </div>
                       <Button className="w-full bg-white text-elite-primary-900 hover:bg-elite-primary-50">Withdraw Rewards</Button>
                    </CardContent>
                 </Card>

                 <Card>
                    <CardHeader>
                       <CardTitle className="text-lg font-space-grotesk">Recent Referrals</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                       <div className="divide-y divide-elite-primary-50 dark:divide-elite-primary-900">
                          {[
                            { name: "Amara O.", date: "Feb 12, 2024", status: "completed" },
                            { name: "Kofi A.", date: "Feb 10, 2024", status: "pending" },
                            { name: "Sarah K.", date: "Feb 05, 2024", status: "completed" },
                          ].map((ref, i) => (
                            <div key={i} className="p-4 flex items-center justify-between">
                               <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full bg-elite-primary-50 dark:bg-elite-primary-950 flex items-center justify-center font-bold text-[10px]">{ref.name[0]}</div>
                                  <div>
                                     <div className="text-xs font-bold">{ref.name}</div>
                                     <div className="text-[8px] text-elite-primary-400 uppercase font-bold">{ref.date}</div>
                                  </div>
                               </div>
                               <Badge variant={ref.status === 'completed' ? 'success' : 'warning'} className="text-[8px] uppercase">{ref.status}</Badge>
                            </div>
                          ))}
                       </div>
                       <div className="p-4 text-center border-t border-elite-primary-50 dark:border-elite-primary-900">
                          <button className="text-[10px] font-bold uppercase tracking-widest text-elite-primary-600 hover:underline">View All Referrals</button>
                       </div>
                    </CardContent>
                 </Card>
              </div>
           </div>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}
