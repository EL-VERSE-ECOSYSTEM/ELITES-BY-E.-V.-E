"use client";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ChevronRight, ShieldCheck, Send, Info } from "lucide-react";
import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Input } from "@/components/ui/Input";

export default function InternalTransferPage() {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [step, setStep] = useState(1);
  const [, setIsVerified] = useState(false);

  const handleVerify = () => {
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

        <main className="p-6 pb-24 max-w-2xl mx-auto w-full">
           {step === 1 && (
             <Card className="border-none shadow-xl">
                <CardContent className="p-8 space-y-6">
                   <div className="space-y-2">
                      <h2 className="text-lg font-bold">Transfer to ELITE Member</h2>
                      <p className="text-sm text-elite-primary-500">Enter recipient&apos;s email or ELITE ID.</p>
                   </div>
                   <Input
                      placeholder="e.g. user@example.com or ELT-8824"
                      value={recipient}
                      onChange={(e) => setRecipient(e.target.value)}
                   />
                   <Button className="w-full" onClick={handleVerify} disabled={!recipient}>
                      Verify Recipient <ChevronRight className="ml-2" size={18} />
                   </Button>
                </CardContent>
             </Card>
           )}

           {step === 2 && (
             <Card className="border-none shadow-xl">
                <CardContent className="p-8 space-y-8">
                   <div className="flex items-center gap-4 p-4 bg-elite-primary-50 rounded-2xl border border-elite-primary-100">
                      <div className="w-12 h-12 rounded-full bg-elite-primary-900 text-white flex items-center justify-center font-bold text-lg">
                         {recipient.charAt(0).toUpperCase()}
                      </div>
                      <div>
                         <div className="font-bold flex items-center gap-2">
                            {recipient} <ShieldCheck size={14} className="text-elite-success" />
                         </div>
                         <div className="text-xs text-elite-primary-400 font-bold uppercase tracking-widest">Verified Learner</div>
                      </div>
                   </div>

                   <div className="space-y-4">
                      <label className="text-xs font-bold uppercase tracking-widest text-elite-primary-400">Amount to send ($)</label>
                      <input
                         type="number"
                         className="w-full text-5xl font-black font-space-grotesk text-center outline-none bg-transparent"
                         placeholder="0.00"
                         value={amount}
                         onChange={(e) => setAmount(e.target.value)}
                         autoFocus
                      />
                   </div>

                   <div className="p-4 bg-amber-50 text-amber-800 rounded-xl text-xs flex gap-3">
                      <Info size={16} className="shrink-0" />
                      <p>Transfers are processed instantly and cannot be reversed. Please ensure the amount and recipient are correct.</p>
                   </div>

                   <div className="flex gap-4">
                      <Button variant="outline" className="flex-1" onClick={() => setStep(1)}>Back</Button>
                      <Button className="flex-2 h-12" disabled={!amount || parseFloat(amount) <= 0} onClick={() => setStep(3)}>
                         Send Funds <Send className="ml-2" size={18} />
                      </Button>
                   </div>
                </CardContent>
             </Card>
           )}

           {step === 3 && (
              <div className="text-center space-y-8 animate-in zoom-in-95 duration-500">
                 <div className="w-24 h-24 bg-elite-success/10 text-elite-success rounded-full flex items-center justify-center mx-auto border-4 border-white shadow-xl">
                    <CheckCircle2 size={48} />
                 </div>
                 <div className="space-y-2">
                    <h2 className="text-3xl font-black font-space-grotesk">Transfer Sent!</h2>
                    <p className="text-elite-primary-500 text-lg">
                       You successfully sent <b>${amount}</b> to <b>{recipient}</b>.
                    </p>
                 </div>
                 <Button size="lg" className="w-full shadow-xl shadow-elite-primary-900/10" asChild>
                    <Link href="/wallet">Back to Wallet</Link>
                 </Button>
              </div>
           )}
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}
