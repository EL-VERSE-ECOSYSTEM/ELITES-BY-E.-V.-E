"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AlertCircle, ArrowDownLeft, ArrowLeft, CheckCircle2, ChevronRight, Clock, Landmark, Lock, Shield, ShieldCheck, Smartphone } from "lucide-react";
import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { ChevronRight, Wallet } from "lucide-react";

export default function WithdrawPage() {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState<"bank" | "momo">("bank");

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-6 border-b border-elite-primary-100 dark:border-elite-primary-900 bg-white flex items-center gap-4">
           <Button variant="ghost" size="icon" asChild><Link href="/wallet"><ArrowLeft size={20} /></Link></Button>
           <h1 className="text-xl font-bold font-space-grotesk">Withdraw Funds</h1>
        </header>

        <main className="max-w-2xl mx-auto w-full p-6 pb-24">
           <div className="mb-12 space-y-2 text-center">
              <div className="w-16 h-16 bg-elite-primary-50 dark:bg-elite-primary-900 rounded-full flex items-center justify-center text-elite-primary-600 mx-auto mb-4">
                 <ArrowDownLeft size={32} />
              </div>
              <h2 className="text-2xl font-bold font-space-grotesk">Cash Out</h2>
              <p className="text-sm text-elite-primary-500 font-medium">Move your earnings or wallet balance to your bank account or mobile money.</p>
           </div>

           {step === 1 && (
             <div className="space-y-8 animate-in fade-in duration-300">
                <div className="space-y-4">
                   <label className="text-sm font-bold uppercase tracking-widest text-elite-primary-400">Withdraw Amount</label>
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
                   <div className="flex justify-between text-[10px] font-bold uppercase text-elite-primary-400">
                      <span>Available: $145.00</span>
                      <button className="text-elite-primary-600 hover:underline" onClick={() => setAmount("145")}>Withdraw All</button>
                   </div>
                </div>

                <div className="space-y-4">
                   <label className="text-sm font-bold uppercase tracking-widest text-elite-primary-400">Select Destination</label>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <button
                        onClick={() => setMethod("bank")}
                        className={cn(
                          "p-6 rounded-2xl border-2 text-left transition-all flex items-center gap-4",
                          method === 'bank' ? "border-elite-primary-600 bg-elite-primary-50 dark:bg-elite-primary-900/50" : "border-elite-primary-100 bg-white"
                        )}
                      >
                         <Landmark size={24} className={method === 'bank' ? "text-elite-primary-600" : "text-elite-primary-400"} />
                         <div>
                            <div className="font-bold text-sm">Bank Transfer</div>
                            <div className="text-[10px] text-elite-primary-500">1-3 Business Days</div>
                         </div>
                      </button>
                      <button
                        onClick={() => setMethod("momo")}
                        className={cn(
                          "p-6 rounded-2xl border-2 text-left transition-all flex items-center gap-4",
                          method === 'momo' ? "border-elite-primary-600 bg-elite-primary-50 dark:bg-elite-primary-900/50" : "border-elite-primary-100 bg-white"
                        )}
                      >
                         <Smartphone size={24} className={method === 'momo' ? "text-elite-primary-600" : "text-elite-primary-400"} />
                         <div>
                            <div className="font-bold text-sm">Mobile Money</div>
                            <div className="text-[10px] text-elite-primary-500">Instant to 24 hours</div>
                         </div>
                      </button>
                   </div>
                </div>

                <Button variant="accent" size="lg" className="w-full h-14 font-bold" disabled={!amount} onClick={() => setStep(2)}>Review Withdrawal</Button>
             </div>
           )}

           {step === 2 && (
             <div className="space-y-8 animate-in fade-in slide-in-from-right-5 duration-300">
                <Card>
                   <CardContent className="p-8 space-y-6">
                      <div className="space-y-4">
                         <div className="flex justify-between text-sm font-bold">
                            <span className="text-elite-primary-400 uppercase tracking-widest">Amount</span>
                            <span>${amount}.00</span>
                         </div>
                         <div className="flex justify-between text-sm font-bold">
                            <span className="text-elite-primary-400 uppercase tracking-widest">Fee (2%)</span>
                            <span className="text-elite-error">${(Number(amount) * 0.02).toFixed(2)}</span>
                         </div>
                         <hr className="border-elite-primary-50" />
                         <div className="flex justify-between text-lg font-bold">
                            <span>You Receive</span>
                            <span className="text-elite-primary-600">${(Number(amount) * 0.98).toFixed(2)}</span>
                         </div>
                      </div>

                      <div className="p-4 rounded-xl bg-elite-primary-50 dark:bg-elite-primary-900/50 border border-elite-primary-100">
                         <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest mb-1">Sending to</div>
                         <div className="font-bold text-sm">{method === 'bank' ? 'Zenith Bank •••• 4567' : 'MTN Momo +234 •••• 1234'}</div>
                      </div>

                      <div className="space-y-1.5">
                         <label className="text-xs font-bold uppercase tracking-widest text-elite-primary-400">Confirm with PIN</label>
                         <input type="password" placeholder="••••" className="w-full h-12 text-center text-2xl tracking-[1em] rounded-xl border border-elite-primary-100 outline-none focus:ring-2 focus:ring-elite-primary-500" />
                      </div>

                      <Button variant="accent" size="lg" className="w-full" onClick={() => setStep(3)}>Confirm Withdrawal</Button>
                      <Button variant="ghost" className="w-full text-xs font-bold uppercase" onClick={() => setStep(1)}>Back</Button>
                   </CardContent>
                </Card>
             </div>
           )}

           {step === 3 && (
             <div className="text-center space-y-8 animate-in fade-in zoom-in-95 duration-500">
                <div className="w-24 h-24 bg-elite-primary-950 text-white rounded-full flex items-center justify-center mx-auto shadow-2xl">
                   <Clock size={48} />
                </div>
                <div className="space-y-2">
                   <h2 className="text-3xl font-bold font-space-grotesk">Withdrawal Requested</h2>
                   <p className="text-sm text-elite-primary-500 max-w-sm mx-auto">Your request is being processed. You&apos;ll receive a notification once the funds are sent.</p>
                </div>
                <div className="flex flex-col gap-3">
                   <Button variant="outline" className="w-full" asChild><Link href="/wallet">Back to Wallet</Link></Button>
                   <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-elite-primary-400 uppercase">
                      <ShieldCheck size={12} /> Ref: ELT-WTH-99231
                   </div>
                </div>
             </div>
           )}
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}