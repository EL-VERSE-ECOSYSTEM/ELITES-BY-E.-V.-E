import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import {
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
"use client";

  ArrowLeft,
  CreditCard,
  Smartphone,
  Landmark,
  Wallet,
  CheckCircle2,
  Lock,
  Info,
  ChevronRight,
  ShieldCheck
} from "lucide-react";

export default function DepositPage() {
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState<"card" | "momo" | "bank">("card");
  const [step, setStep] = useState(1);

  const presets = ["10", "20", "50", "100", "200"];

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-6 border-b border-elite-primary-100 dark:border-elite-primary-900 bg-white flex items-center gap-4">
           <Button variant="ghost" size="icon" asChild><Link href="/wallet"><ArrowLeft size={20} /></Link></Button>
           <h1 className="text-xl font-bold font-space-grotesk">Deposit Funds</h1>
        </header>

        <main className="max-w-2xl mx-auto w-full p-6 pb-24">
           <div className="mb-8 space-y-2 text-center">
              <div className="w-16 h-16 bg-elite-primary-50 dark:bg-elite-primary-900 rounded-full flex items-center justify-center text-elite-primary-600 mx-auto mb-4">
                 <Wallet size={32} />
              </div>
              <h2 className="text-2xl font-bold font-space-grotesk">Add Money to Wallet</h2>
              <p className="text-sm text-elite-primary-500 font-medium text-center">Fund your ELITE wallet to enroll in premium courses and book 1-on-1 sessions.</p>
           </div>

           {step === 1 && (
             <div className="space-y-8 animate-in fade-in duration-300">
                <div className="space-y-4">
                   <label className="text-sm font-bold uppercase tracking-widest text-elite-primary-400">Enter Amount (USD)</label>
                   <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-2xl text-elite-primary-400">$</div>
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full h-16 pl-10 pr-4 rounded-2xl border-2 border-elite-primary-100 bg-white text-3xl font-bold outline-none focus:border-elite-primary-600 transition-colors"
                        placeholder="0.00"
                      />
                   </div>
                   <div className="flex flex-wrap gap-2">
                      {presets.map((p) => (
                        <button
                          key={p}
                          onClick={() => setAmount(p)}
                          className={cn(
                            "px-6 py-2 rounded-xl border font-bold text-sm transition-all",
                            amount === p ? "bg-elite-primary-950 text-white border-elite-primary-950" : "bg-white border-elite-primary-100 text-elite-primary-600 hover:border-elite-primary-300"
                          )}
                        >
                           +${p}
                        </button>
                      ))}
                   </div>
                </div>

                <div className="space-y-4">
                   <label className="text-sm font-bold uppercase tracking-widest text-elite-primary-400">Payment Method</label>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { id: "card", label: "Card", icon: CreditCard },
                        { id: "momo", label: "Momo", icon: Smartphone },
                        { id: "bank", label: "Bank", icon: Landmark },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setMethod(item.id as any)}
                          className={cn(
                            "p-6 rounded-2xl border-2 text-center space-y-3 transition-all",
                            method === item.id ? "border-elite-primary-600 bg-elite-primary-50 dark:bg-elite-primary-900/50" : "border-elite-primary-100 hover:border-elite-primary-300 bg-white dark:bg-elite-primary-950"
                          )}
                        >
                           <item.icon size={24} className={cn(method === item.id ? "text-elite-primary-600" : "text-elite-primary-400")} />
                           <div className="text-xs font-bold uppercase tracking-widest">{item.label}</div>
                        </button>
                      ))}
                   </div>
                </div>

                <Button variant="accent" size="lg" className="w-full h-14 text-lg font-bold" disabled={!amount} onClick={() => setStep(2)}>
                   Continue to Payment <ChevronRight size={20} className="ml-2" />
                </Button>

                <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-elite-primary-400 uppercase tracking-tighter">
                   <Lock size={12} /> Secure 256-bit SSL Encrypted Payment
                </div>
             </div>
           )}

           {step === 2 && (
             <div className="space-y-8 animate-in fade-in slide-in-from-right-5 duration-300">
                <Card>
                   <CardContent className="p-8 space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-elite-primary-50">
                         <div className="text-sm font-bold text-elite-primary-400">Deposit Amount</div>
                         <div className="text-2xl font-bold font-space-grotesk">${amount}.00</div>
                      </div>

                      {method === 'card' && (
                        <div className="space-y-4">
                           <Input label="Cardholder Name" placeholder="JOHN DOE" />
                           <Input label="Card Number" placeholder="•••• •••• •••• 4242" />
                           <div className="grid grid-cols-2 gap-4">
                              <Input label="Expiry Date" placeholder="MM/YY" />
                              <Input label="CVC" placeholder="•••" />
                           </div>
                        </div>
                      )}

                      {method === 'momo' && (
                        <div className="space-y-4">
                           <div className="p-4 rounded-xl bg-yellow-50 border border-yellow-100 flex items-center gap-4">
                              <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center font-bold text-white text-[10px]">MTN</div>
                              <p className="text-xs text-yellow-800 font-medium">A prompt will be sent to your phone to authorize the transaction.</p>
                           </div>
                           <Input label="Phone Number" placeholder="+234 ••• ••• ••••" />
                           <select className="w-full h-10 px-3 rounded-lg border border-elite-primary-100 bg-white text-sm outline-none">
                              <option>MTN MoMo</option>
                              <option>AirtelTigo Money</option>
                              <option>Vodafone Cash</option>
                           </select>
                        </div>
                      )}

                      <Button variant="accent" size="lg" className="w-full" onClick={() => setStep(3)}>Pay Now</Button>
                      <Button variant="ghost" className="w-full text-xs font-bold uppercase" onClick={() => setStep(1)}>Go Back</Button>
                   </CardContent>
                </Card>
             </div>
           )}

           {step === 3 && (
             <div className="text-center space-y-8 animate-in fade-in zoom-in-95 duration-500">
                <div className="w-24 h-24 bg-elite-success/10 rounded-full flex items-center justify-center text-elite-success mx-auto shadow-2xl shadow-elite-success/20">
                   <ShieldCheck size={48} />
                </div>
                <div className="space-y-2">
                   <h2 className="text-3xl font-bold font-space-grotesk text-elite-primary-900 dark:text-white">Deposit Successful!</h2>
                   <p className="text-elite-primary-500 max-w-sm mx-auto">Your wallet has been updated. You can now use your funds across the platform.</p>
                </div>
                <Card className="bg-elite-primary-50 dark:bg-elite-primary-900 border-none">
                   <CardContent className="p-6 flex justify-between items-center">
                      <div className="text-left">
                         <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">New Balance</div>
                         <div className="text-xl font-bold font-space-grotesk text-elite-primary-900 dark:text-white">$195.00</div>
                      </div>
                      <div className="text-right text-[10px] font-bold text-elite-primary-400 uppercase tracking-tighter">
                         TXN ID: ELT-DEP-99231
                      </div>
                   </CardContent>
                </Card>
                <div className="flex gap-4">
                   <Button variant="outline" className="flex-1" asChild><Link href="/wallet">Go to Wallet</Link></Button>
                   <Button variant="primary" className="flex-1" asChild><Link href="/courses">Explore Courses</Link></Button>
                </div>
             </div>
           )}
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}
