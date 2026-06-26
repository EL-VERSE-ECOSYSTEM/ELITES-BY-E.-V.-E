"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";

import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

import { ArrowRight, ChevronLeft, Clock, CreditCard, Star, Wallet } from "lucide-react";

export default function BookTutorSession() {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const types = [
    { id: "mentorship", title: "1-on-1 Mentorship", price: "$50", icon: Star },
    { id: "consultation", title: "Project Consultation", price: "$75", icon: Clock },
    { id: "review", title: "Code Review", price: "$40", icon: CreditCard },
  ];

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 flex items-center gap-4">
           <Button variant="ghost" size="icon" asChild>
              <Link href="/tutors/1"><ChevronLeft size={20} /></Link>
           </Button>
           <div>
              <h1 className="text-2xl font-bold font-space-grotesk">Book a Session</h1>
              <p className="text-xs text-elite-primary-500 font-medium">Schedule your next learning milestone with Dr. Sarah.</p>
           </div>
        </header>

        <main className="px-6 pb-24 max-w-4xl">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 space-y-6">
                 {step === 1 && (
                   <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                      <h2 className="text-lg font-bold font-space-grotesk">Select Session Type</h2>
                      <div className="grid grid-cols-1 gap-4">
                         {types.map((t) => (
                           <button
                             key={t.id}
                             onClick={() => setSelectedType(t.id)}
                             className={cn(
                               "flex items-center justify-between p-6 rounded-2xl border-2 transition-all",
                               selectedType === t.id ? "border-elite-primary-950 bg-white shadow-xl" : "border-transparent bg-white/50 hover:bg-white"
                             )}
                           >
                              <div className="flex items-center gap-4">
                                 <div className={cn(
                                   "w-12 h-12 rounded-xl flex items-center justify-center",
                                   selectedType === t.id ? "bg-elite-primary-950 text-white" : "bg-elite-primary-100 text-elite-primary-600"
                                 )}>
                                    <t.icon size={24} />
                                 </div>
                                 <div className="text-left">
                                    <div className="font-bold">{t.title}</div>
                                    <div className="text-xs text-elite-primary-400">Personalized guidance</div>
                                 </div>
                              </div>
                              <div className="text-lg font-black font-space-grotesk text-elite-primary-950">{t.price}</div>
                           </button>
                         ))}
                      </div>
                      <Button variant="accent" className="w-full h-14 font-black" onClick={() => setStep(2)} disabled={!selectedType}>
                         Continue <ArrowRight className="ml-2" size={20} />
                      </Button>
                   </div>
                 )}

                 {step === 2 && (
                   <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                      <h2 className="text-lg font-bold font-space-grotesk">Choose Date & Time</h2>
                      <Card className="border-none shadow-xl">
                         <CardContent className="p-6 space-y-6">
                            <div className="grid grid-cols-7 gap-2 text-center border-b border-elite-primary-50 pb-4">
                               {["S", "M", "T", "W", "T", "F", "S"].map(d => <div key={d} className="text-[10px] font-bold text-elite-primary-300 uppercase">{d}</div>)}
                               {Array.from({ length: 28 }).map((_, i) => (
                                 <button
                                   key={i}
                                   onClick={() => setSelectedDate(`Feb ${i + 1}`)}
                                   className={cn(
                                     "h-10 rounded-lg flex items-center justify-center font-bold text-xs transition-all",
                                     selectedDate === `Feb ${i + 1}` ? "bg-elite-accent-500 text-white shadow-lg" : "hover:bg-elite-primary-50"
                                   )}
                                 >
                                    {i + 1}
                                 </button>
                               ))}
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                               {["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"].map(t => (
                                 <button
                                   key={t}
                                   onClick={() => setSelectedTime(t)}
                                   className={cn(
                                     "py-3 rounded-xl border-2 font-bold text-xs transition-all",
                                     selectedTime === t ? "border-elite-primary-950 bg-elite-primary-950 text-white shadow-lg" : "border-elite-primary-50 hover:border-elite-primary-200"
                                   )}
                                 >
                                    {t}
                                 </button>
                               ))}
                            </div>
                         </CardContent>
                      </Card>
                      <div className="flex gap-4">
                         <Button variant="ghost" className="flex-1" onClick={() => setStep(1)}>Back</Button>
                         <Button variant="accent" className="flex-[2] h-14 font-black" onClick={() => setStep(3)} disabled={!selectedDate || !selectedTime}>
                            Review Booking <ArrowRight className="ml-2" size={20} />
                         </Button>
                      </div>
                   </div>
                 )}

                 {step === 3 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                       <h2 className="text-lg font-bold font-space-grotesk">Review & Payment</h2>
                       <Card className="border-none shadow-xl bg-elite-primary-950 text-white">
                          <CardContent className="p-8 space-y-6">
                             <div className="flex justify-between items-start border-b border-white/10 pb-6">
                                <div>
                                   <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest mb-1">Session</div>
                                   <div className="text-xl font-bold font-space-grotesk">{types.find(t => t.id === selectedType)?.title}</div>
                                </div>
                                <div className="text-3xl font-black font-space-grotesk text-elite-accent-500">{types.find(t => t.id === selectedType)?.price}</div>
                             </div>
                             <div className="grid grid-cols-2 gap-8">
                                <div>
                                   <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest mb-1">Date</div>
                                   <div className="font-bold">{selectedDate}, 2024</div>
                                </div>
                                <div>
                                   <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest mb-1">Time</div>
                                   <div className="font-bold">{selectedTime} (GMT+1)</div>
                                </div>
                             </div>
                          </CardContent>
                       </Card>
                       <Button variant="accent" className="w-full h-14 font-black shadow-2xl">
                          Pay & Confirm Booking
                       </Button>
                    </div>
                 )}
              </div>

              <div className="lg:col-span-4">
                 <Card className="border-none shadow-xl sticky top-8">
                    <CardHeader>
                       <CardTitle className="text-sm">Tutor Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                       <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-2xl bg-elite-primary-100 flex items-center justify-center font-bold text-xl">DS</div>
                          <div>
                             <div className="font-bold">Dr. Sarah</div>
                             <div className="text-xs text-elite-primary-500">Senior Next.js Expert</div>
                          </div>
                       </div>
                       <div className="space-y-4">
                          <div className="flex justify-between text-xs">
                             <span className="text-elite-primary-400">Total Bookings</span>
                             <span className="font-bold">1,240+</span>
                          </div>
                          <div className="flex justify-between text-xs">
                             <span className="text-elite-primary-400">Avg. Rating</span>
                             <span className="font-bold flex items-center gap-1"><Star size={12} className="fill-elite-accent-500 text-elite-accent-500" /> 4.9</span>
                          </div>
                       </div>
                       <div className="p-4 bg-elite-primary-50 rounded-xl space-y-2">
                          <div className="flex items-center gap-2 text-xs font-bold">
                             <Wallet size={14} className="text-elite-primary-600" /> Payment Protection
                          </div>
                          <p className="text-[10px] text-elite-primary-500 leading-relaxed">
                             Your payment is held securely and only released to the tutor after the session is completed successfully.
                          </p>
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
