"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { useState } from "react";
import { Check, ArrowRight, User, School, Globe, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<"student" | "tutor" | null>(null);

  const totalSteps = 3;

  return (
    <div className="min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-xl space-y-8">
        <div className="flex flex-col items-center gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-elite-accent-500 rounded-lg flex items-center justify-center font-bold text-white text-xl">E</div>
            <span className="text-2xl font-bold font-space-grotesk tracking-tighter text-elite-primary-900 dark:text-white">ELITE</span>
          </Link>

          <div className="w-full bg-elite-primary-100 dark:bg-elite-primary-900 h-1 rounded-full overflow-hidden">
            <div
              className="bg-elite-accent-500 h-full transition-all duration-500"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
          <div className="flex justify-between w-full text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">
            <span>Account Details</span>
            <span>Role Selection</span>
            <span>Verification</span>
          </div>
        </div>

        <Card className="shadow-2xl border-none overflow-hidden">
          <CardContent className="p-8">
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-5 duration-300">
                <div className="text-center space-y-2">
                  <h1 className="text-2xl font-bold font-space-grotesk">Create Your Account</h1>
                  <p className="text-sm text-elite-primary-500">Start your journey into the EL VERSE ecosystem.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input label="First Name" placeholder="John" />
                  <Input label="Last Name" placeholder="Doe" />
                </div>
                <Input label="Email Address" type="email" placeholder="john@example.com" />
                <div className="space-y-4">
                  <Input label="Password" type="password" placeholder="••••••••" />
                  <div className="grid grid-cols-4 gap-1">
                     {[1, 2, 3, 4].map((i) => (
                       <div key={i} className="h-1 bg-elite-primary-100 dark:bg-elite-primary-800 rounded-full" />
                     ))}
                  </div>
                  <p className="text-[10px] text-elite-primary-400">Use 8 or more characters with a mix of letters, numbers & symbols.</p>
                </div>
                <Button variant="accent" size="lg" className="w-full" onClick={() => setStep(2)}>
                  Continue <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-5 duration-300">
                <div className="text-center space-y-2">
                  <h1 className="text-2xl font-bold font-space-grotesk">Select Your Role</h1>
                  <p className="text-sm text-elite-primary-500">How do you want to participate in the platform?</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <button
                    onClick={() => setRole("student")}
                    className={cn(
                      "p-6 rounded-2xl border-2 text-left transition-all space-y-4 group",
                      role === "student" ? "border-elite-accent-500 bg-elite-accent-50/50 dark:bg-elite-accent-500/10" : "border-elite-primary-100 dark:border-elite-primary-800 hover:border-elite-primary-300"
                    )}
                   >
                     <div className={cn(
                       "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                       role === "student" ? "bg-elite-accent-500 text-white" : "bg-elite-primary-100 dark:bg-elite-primary-800 text-elite-primary-600 group-hover:bg-elite-primary-200"
                     )}>
                       <School size={24} />
                     </div>
                     <div>
                       <div className="font-bold text-lg">Learner</div>
                       <div className="text-xs text-elite-primary-500">I want to learn skills and get hired.</div>
                     </div>
                     {role === "student" && <div className="ml-auto w-6 h-6 bg-elite-accent-500 rounded-full flex items-center justify-center text-white"><Check size={14} /></div>}
                   </button>

                   <button
                    onClick={() => setRole("tutor")}
                    className={cn(
                      "p-6 rounded-2xl border-2 text-left transition-all space-y-4 group",
                      role === "tutor" ? "border-elite-primary-600 bg-elite-primary-50 dark:bg-elite-primary-600/10" : "border-elite-primary-100 dark:border-elite-primary-800 hover:border-elite-primary-300"
                    )}
                   >
                     <div className={cn(
                       "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                       role === "tutor" ? "bg-elite-primary-600 text-white" : "bg-elite-primary-100 dark:bg-elite-primary-800 text-elite-primary-600 group-hover:bg-elite-primary-200"
                     )}>
                       <User size={24} />
                     </div>
                     <div>
                       <div className="font-bold text-lg">Tutor</div>
                       <div className="text-xs text-elite-primary-500">I want to teach and earn.</div>
                     </div>
                     {role === "tutor" && <div className="ml-auto w-6 h-6 bg-elite-primary-600 rounded-full flex items-center justify-center text-white"><Check size={14} /></div>}
                   </button>
                </div>

                <div className="space-y-4 pt-4 border-t border-elite-primary-50 dark:border-elite-primary-800">
                   <div className="flex items-center gap-4">
                     <Globe className="text-elite-primary-400" size={20} />
                     <select className="flex-1 bg-transparent border-none outline-none text-sm font-medium">
                        <option>Nigeria</option>
                        <option>Kenya</option>
                        <option>South Africa</option>
                        <option>Ghana</option>
                        <option>Egypt</option>
                        <option>Other</option>
                     </select>
                   </div>
                </div>

                <div className="flex gap-4">
                  <Button variant="ghost" size="lg" className="flex-1" onClick={() => setStep(1)}>Back</Button>
                  <Button variant="accent" size="lg" className="flex-[2]" disabled={!role} onClick={() => setStep(3)}>
                    Continue <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-5 duration-300">
                 <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-elite-success/10 rounded-full flex items-center justify-center text-elite-success mx-auto">
                      <ShieldCheck size={40} />
                    </div>
                    <h1 className="text-2xl font-bold font-space-grotesk">One Last Thing</h1>
                    <p className="text-sm text-elite-primary-500">Please review and accept our terms to create your account.</p>
                 </div>

                 <div className="bg-elite-primary-50 dark:bg-elite-primary-900/50 p-6 rounded-xl space-y-4">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input type="checkbox" className="mt-1 w-4 h-4 rounded border-elite-primary-200 text-elite-primary-600 focus:ring-elite-primary-500" />
                      <span className="text-xs text-elite-primary-600 dark:text-elite-primary-400 leading-relaxed">
                        I agree to the <Link href="/terms" className="underline font-bold">Terms of Service</Link> and <Link href="/privacy" className="underline font-bold">Privacy Policy</Link>.
                      </span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input type="checkbox" className="mt-1 w-4 h-4 rounded border-elite-primary-200 text-elite-primary-600 focus:ring-elite-primary-500" />
                      <span className="text-xs text-elite-primary-600 dark:text-elite-primary-400 leading-relaxed">
                        I would like to receive updates about new courses, features, and tech opportunities in Africa.
                      </span>
                    </label>
                 </div>

                 <div className="flex gap-4">
                  <Button variant="ghost" size="lg" className="flex-1" onClick={() => setStep(2)}>Back</Button>
                  <Button variant="accent" size="lg" className="flex-[2]" asChild>
                    <Link href="/dashboard">Create My Account</Link>
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <p className="text-center text-sm text-elite-primary-500">
          Already have an account? <Link href="/login" className="font-bold text-elite-primary-600 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}
