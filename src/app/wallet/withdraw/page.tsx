"use client";

import {useState} from "react";
import {
  ArrowLeft,
  Banknote,
  Bitcoin,
  ShieldCheck,
  Info,
  ChevronRight,
  CheckCircle2
} from "lucide-react";
import {Card, CardContent} from "@/components/ui/Card";
import {Button} from "@/components/ui/Button";
import {Input} from "@/components/ui/Input";

import Link from "next/link";
import {cn} from "@/lib/utils";

type Method = "BANK_NGN" | "BANK_USD" | "BANK_GBP" | "BANK_EUR" | "CRYPTO_USDT_TRC20" | "CRYPTO_BEP20" | "CRYPTO_TRON";

export default function WithdrawPage() {
  const [step, setStep] = useState(1);
  const [method, setMethod] = useState<Method>("BANK_NGN");
  const [amount, setAmount] = useState("");
  const [details, setDetails] = useState({
    accountName: "",
    bankName: "",
    accountNumber: "",
    swift: "",
    walletAddress: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission to admin queue
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950 flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center p-8 space-y-6 border-none shadow-2xl">
          <div className="w-20 h-20 bg-elite-success/10 text-elite-success rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 size={48} />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold font-space-grotesk">Request Submitted</h1>
            <p className="text-elite-primary-500">Your withdrawal request for ${amount} has been sent to the admin for approval. This usually takes 24-48 hours.</p>
          </div>
          <Button variant="accent" className="w-full" asChild>
            <Link href="/wallet">Back to Wallet</Link>
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950 pb-20 p-6">
      <div className="max-w-2xl mx-auto space-y-8">
        <Link href="/wallet" className="flex items-center gap-2 text-sm font-bold text-elite-primary-500 hover:text-elite-primary-900 transition-colors">
          <ArrowLeft size={16} /> Back to Wallet
        </Link>

        <header>
          <h1 className="text-3xl font-bold font-space-grotesk">Withdraw Funds</h1>
          <p className="text-elite-primary-500">Securely move your earnings to your bank or crypto wallet</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 space-y-4">
            {[
              { s: 1, title: "Select Method", icon: Banknote },
              { s: 2, title: "Amount & Details", icon: Bitcoin },
              { s: 3, title: "Confirm", icon: ShieldCheck }
            ].map((item) => (
              <div key={item.s} className={cn(
                "flex items-center gap-3 p-4 rounded-xl transition-all",
                step === item.s ? "bg-white dark:bg-elite-primary-900 shadow-sm border-l-4 border-l-elite-accent-500" : "opacity-50"
              )}>
                <div className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center",
                  step === item.s ? "bg-elite-accent-500 text-white" : "bg-elite-primary-200 text-elite-primary-500"
                )}>
                  <item.icon size={18} />
                </div>
                <span className="text-sm font-bold">{item.title}</span>
              </div>
            ))}
          </div>

          <div className="md:col-span-2">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                {step === 1 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        { id: "BANK_NGN", label: "Nigerian Bank (NGN)", icon: Banknote },
                        { id: "BANK_USD", label: "US Bank (USD)", icon: Banknote },
                        { id: "CRYPTO_USDT_TRC20", label: "Crypto (USDT TRC20)", icon: Bitcoin },
                        { id: "CRYPTO_BEP20", label: "Crypto (BEP20)", icon: Bitcoin },
                        { id: "CRYPTO_TRON", label: "Crypto (TRON)", icon: Bitcoin },
                      ].map((m) => (
                        <button
                          key={m.id}
                          onClick={() => setMethod(m.id as Method)}
                          className={cn(
                            "flex items-center justify-between p-4 rounded-xl border-2 transition-all",
                            method === m.id ? "border-elite-accent-500 bg-elite-accent-500/5" : "border-elite-primary-50 hover:border-elite-primary-200"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <m.icon size={20} className={method === m.id ? "text-elite-accent-500" : "text-elite-primary-400"} />
                            <span className="text-sm font-bold">{m.label}</span>
                          </div>
                          <ChevronRight size={16} className="text-elite-primary-300" />
                        </button>
                      ))}
                    </div>
                    <Button variant="accent" className="w-full" onClick={() => setStep(2)}>
                      Continue
                    </Button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                    <div className="p-4 bg-elite-primary-50 dark:bg-elite-primary-900 rounded-xl flex items-start gap-3">
                      <Info size={18} className="text-elite-primary-600 shrink-0 mt-0.5" />
                      <p className="text-xs text-elite-primary-600">Ensure your account details are correct. Incorrect details may lead to loss of funds.</p>
                    </div>

                    <div className="space-y-4">
                      <Input
                        label="Amount to Withdraw ($)"
                        type="number"
                        placeholder="0.00"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                      />

                      {method.startsWith("BANK") ? (
                        <>
                          <Input label="Account Name" name="accountName" value={details.accountName} onChange={handleInputChange} placeholder="John Doe" />
                          <Input label="Bank Name" name="bankName" value={details.bankName} onChange={handleInputChange} placeholder="Access Bank" />
                          <Input label="Account Number" name="accountNumber" value={details.accountNumber} onChange={handleInputChange} placeholder="0123456789" />
                          {(method === "BANK_USD" || method === "BANK_GBP" || method === "BANK_EUR") && (
                            <Input label="SWIFT / IBAN" name="swift" value={details.swift} onChange={handleInputChange} placeholder="ABCDEFGHXXX" />
                          )}
                        </>
                      ) : (
                        <Input label="Wallet Address" name="walletAddress" value={details.walletAddress} onChange={handleInputChange} placeholder="T..." />
                      )}
                    </div>

                    <div className="flex gap-3">
                      <Button variant="ghost" className="flex-1" onClick={() => setStep(1)}>Back</Button>
                      <Button variant="accent" className="flex-2" onClick={() => setStep(3)} disabled={!amount}>Confirm Details</Button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                    <div className="p-6 bg-elite-primary-900 text-white rounded-2xl space-y-4">
                      <div className="flex justify-between items-center border-b border-white/10 pb-4">
                        <span className="text-xs text-elite-primary-400">Withdrawal Amount</span>
                        <span className="text-2xl font-bold font-space-grotesk text-elite-accent-500">${amount}</span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between text-xs">
                          <span className="text-elite-primary-400">Method</span>
                          <span className="font-bold">{method.replace('_', ' ')}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-elite-primary-400">Fees</span>
                          <span className="font-bold">$2.50</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-elite-primary-400">You will receive</span>
                          <span className="font-bold text-elite-success">${(parseFloat(amount) - 2.5).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>

                    <Button variant="accent" className="w-full h-12 text-lg" onClick={handleSubmit} disabled={loading}>
                      {loading ? "Processing..." : "Complete Withdrawal"}
                    </Button>
                    <button onClick={() => setStep(2)} className="w-full text-xs font-bold text-elite-primary-500 hover:text-elite-primary-900">
                      Edit Details
                    </button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
