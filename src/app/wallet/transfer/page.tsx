"use client";
import Link from "next/link";
import {  ArrowLeft, CheckCircle2, ChevronRight, Search, Shield, ShieldCheck , Send, Info } from "lucide-react";
import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";

export default function InternalTransferPage() {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [step, setStep] = useState(1);
  const [isVerified, setIsVerified] = useState(false);

  const handleVerify = () => {
    // Simulate verification
    if (recipient.includes("@") || recipient.startsWith("ELT-")) {
      setIsVerified(true);
      setStep(2);
    }
  };

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-6 border-b border-elite-primary-100 dark:border-elite-primary-900 bg-white flex items-center gap-4">
           <Button variant="ghost" size="icon" asChild><Link href="/wallet"><ArrowLeft size={20} /></Link></Button>
           <h1 className="text-xl font-bold font-space-grotesk">Internal Transfer</h1>
        </header>

        <main className="max-w-2xl mx-auto w-full p-6 pb-24">
           <div className="mb-12 space-y-2 text-center">
              <div className="w-16 h-16 bg-elite-primary-50 dark:bg-elite-primary-900 rounded-full flex items-center justify-center text-elite-primary-600 mx-auto mb-4">
                 <Send size={32} />
              </div>
              <h2 className="text-2xl font-bold font-space-grotesk">Send Funds via ELITES ID</h2>
              <p className="text-sm text-elite-primary-500 font-medium">Instantly send USD or ELITE Coins to any other learner or tutor on the platform.</p>
           </div>

           {step === 1 && (
             <div className="space-y-8 animate-in fade-in duration-300">
                <div className="space-y-4">
                   <label className="text-sm font-bold uppercase tracking-widest text-elite-primary-400">Recipient Details</label>
                   <div className="relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-elite-primary-400" size={20} />
                      <input
                        type="text"
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                        className="w-full h-16 pl-12 pr-4 rounded-2xl border-2 border-elite-primary-100 bg-white text-lg font-medium outline-none focus:border-elite-primary-600 transition-colors"
                        placeholder="Enter ELITES ID or Email"
                      />
                   </div>
                   <p className="text-[10px] text-elite-primary-400 font-bold uppercase tracking-tighter">TIP: You can find a user{"'"}s ELITES ID on their public profile.</p>
                </div>

                <Button variant="accent" size="lg" className="w-full h-14 text-lg font-bold" disabled={!recipient} onClick={handleVerify}>
                   Verify Recipient <ChevronRight size={20} className="ml-2" />
                </Button>

                <div className="p-4 bg-elite-info/10 rounded-xl flex gap-3 border border-elite-info/20">
                   <Info className="text-elite-info shrink-0" size={18} />
                   <p className="text-xs text-elite-info leading-relaxed">
                      Internal transfers are instant and carry zero transaction fees within the EL VERSE ecosystem.
                   </p>
                </div>
             </div>
           )}

           {step === 2 && (
             <div className="space-y-8 animate-in fade-in slide-in-from-right-5 duration-300">
                <Card className="border-none shadow-xl">
                   <CardContent className="p-8 space-y-8">
                      <div className="flex items-center gap-4 p-4 rounded-2xl bg-elite-primary-50 dark:bg-elite-primary-900/50 border border-elite-primary-100 dark:border-elite-primary-800">
                         <div className="w-14 h-14 rounded-xl bg-white dark:bg-elite-primary-900 flex items-center justify-center font-bold text-xl shadow-sm">SK</div>
                         <div className="flex-1">
                            <div className="font-bold flex items-center gap-2">
                               Sarah Kamau <ShieldCheck size={16} className="text-elite-success" />
                            </div>
                            <div className="text-xs text-elite-primary-400 uppercase font-bold tracking-widest">ELITES ID: ELT-8824-SK</div>
                         </div>
                         <button onClick={() => setStep(1)} className="text-xs font-bold text-elite-primary-600 hover:underline">Change</button>
                      </div>

                      <div className="space-y-4">
                         <label className="text-sm font-bold uppercase tracking-widest text-elite-primary-400">Transfer Amount</label>
                         <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-2xl text-elite-primary-400">$</div>
                            <input
                              type="number"
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
                              className="w-full h-16 pl-10 pr-4 rounded-2xl border-2 border-elite-primary-100 bg-white text-3xl font-bold outline-none focus:border-elite-primary-600"
                              placeholder="0.00"
                            />
                         </div>
                         <div className="flex justify-between text-[10px] font-bold uppercase text-elite-primary-400 px-1">
                            <span>Balance: $145.00</span>
                            <button className="text-elite-primary-600 hover:underline" onClick={() => setAmount("145")}>Send Max</button>
                         </div>
                      </div>

                      <div className="space-y-1.5">
                         <label className="text-sm font-medium">Add a note (Optional)</label>
                         <textarea
                          className="w-full p-4 rounded-xl border border-elite-primary-100 bg-white text-sm min-h-[100px] outline-none focus:ring-2 focus:ring-elite-primary-500"
                          placeholder="What's this for?"
                         />
                      </div>

                      <Button variant="accent" size="lg" className="w-full h-14 text-lg font-bold shadow-2xl" onClick={() => setStep(3)}>
                         Confirm Transfer
                      </Button>
                   </CardContent>
                </Card>
             </div>
           )}

           {step === 3 && (
             <div className="text-center space-y-8 animate-in fade-in zoom-in-95 duration-500">
                <div className="w-24 h-24 bg-elite-success/10 rounded-full flex items-center justify-center text-elite-success mx-auto shadow-2xl shadow-elite-success/20">
                   <CheckCircle2 size={48} />
                </div>
                <div className="space-y-2">
                   <h2 className="text-3xl font-bold font-space-grotesk text-elite-primary-900 dark:text-white">Transfer Sent!</h2>
                   <p className="text-elite-primary-500 max-w-sm mx-auto">You{"'"}ve successfully sent <span className="font-bold text-elite-primary-900 dark:text-white">${amount}.00</span> to Sarah Kamau.</p>
                </div>
                <div className="flex flex-col gap-3">
                   <Button variant="outline" className="w-full" asChild><Link href="/wallet">Back to Wallet</Link></Button>
                   <Button variant="ghost" className="w-full text-xs font-bold uppercase tracking-widest">Share Receipt</Button>
                </div>
             </div>
           )}
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}