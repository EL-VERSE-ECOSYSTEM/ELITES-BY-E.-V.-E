"use client";

import { MobileBottomNav from "@/components/layout/MobileBottomNav";, Card, CardContent, CardHeader, CardTitle from "@/components/ui/Card";, Button from "@/components/ui/Button";, Input from "@/components/ui/Input";, Badge from "@/components/ui/Badge";, useState from "react";, Link from "next/link";, cn from "@/lib/utils";, Calendar, Clock, Video, CreditCard, Wallet, Smartphone, ChevronLeft, CheckCircle2, ArrowRight, User, Star, Globe, Info } from "lucide-react";

export default function BookTutorSession() {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedDuration, setSelectedDuration] = useState("60");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedDate_Time] = useState<string | null>(null);

  const types = [
    { id: "consultation", label: "General Consultation", price: 20 },
    { id: "code-review", label: "Code Review", price: 35 },
    { id: "mentorship", label: "Career Mentorship", price: 25 },
    { id: "interview", label: "Interview Prep", price: 40 },
  ];

  const times = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"];

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-6 border-b border-elite-primary-100 dark:border-elite-primary-900 bg-white sticky top-0 z-30 flex items-center justify-between">
           <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild><Link href="/tutors"><ChevronLeft size={20} /></Link></Button>
              <div>
                 <h1 className="text-xl font-bold font-space-grotesk">Book Mentorship</h1>
                 <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">Step {step} of 3</span>
                    <div className="w-24 h-1 bg-elite-primary-100 rounded-full overflow-hidden">
                       <div className="h-full bg-elite-primary-600 transition-all" style={{ width: `${(step / 3) * 100}%` }} />
                    </div>
                 </div>
              </div>
           </div>
        </header>

        <main className="max-w-5xl mx-auto w-full p-6 pb-24">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8 space-y-12">
                 {step === 1 && (
                   <div className="space-y-8 animate-in fade-in duration-300">
                      <div className="space-y-4">
                         <h2 className="text-2xl font-bold font-space-grotesk">Select Session Type</h2>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {types.map((type) => (
                              <button
                                key={type.id}
                                onClick={() => setSelectedType(type.id)}
                                className={cn(
                                  "p-6 rounded-2xl border-2 text-left transition-all space-y-3 group",
                                  selectedType === type.id ? "border-elite-primary-600 bg-elite-primary-50 dark:bg-elite-primary-900/50" : "border-elite-primary-100 bg-white hover:border-elite-primary-300"
                                )}
                              >
                                 <div className="flex justify-between items-start">
                                    <h4 className="font-bold text-lg">{type.label}</h4>
                                    <div className="font-bold text-elite-primary-600">${type.price}</div>
                                 </div>
                                 <p className="text-xs text-elite-primary-500 leading-relaxed">Dedicated 1-on-1 session focused on {type.label.toLowerCase()}.</p>
                              </button>
                            ))}
                         </div>
                      </div>

                      <div className="space-y-4">
                         <h2 className="text-2xl font-bold font-space-grotesk">Duration</h2>
                         <div className="flex gap-4 p-1 bg-white border border-elite-primary-100 rounded-xl w-fit">
                            {["30", "60", "90", "120"].map((d) => (
                              <button
                                key={d}
                                onClick={() => setSelectedDuration(d)}
                                className={cn(
                                  "px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all",
                                  selectedDuration === d ? "bg-elite-primary-950 text-white shadow-lg" : "text-elite-primary-400 hover:text-elite-primary-900"
                                )}
                              >
                                 {d} Min
                              </button>
                            ))}
                         </div>
                      </div>
                   </div>
                 )}

                 {step === 2 && (
                   <div className="space-y-8 animate-in fade-in slide-in-from-right-5 duration-300">
                      <div className="space-y-4">
                         <h2 className="text-2xl font-bold font-space-grotesk">Schedule Your Session</h2>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Card className="p-6">
                               <CardHeader className="px-0 pt-0">
                                  <CardTitle className="text-sm font-bold uppercase tracking-widest text-elite-primary-400">February 2024</CardTitle>
                               </CardHeader>
                               <div className="grid grid-cols-7 gap-2 text-center text-[10px] font-bold text-elite-primary-400 uppercase mb-4">
                                  <span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span>
                               </div>
                               <div className="grid grid-cols-7 gap-2">
                                  {Array.from({ length: 28 }).map((_, i) => (
                                    <button
                                      key={i}
                                      onClick={() => setSelectedDate(`Feb ${i + 1}`)}
                                      className={cn(
                                        "h-10 rounded-lg flex items-center justify-center font-bold text-xs transition-all",
                                        i + 1 === 14 ? "bg-elite-accent-500 text-white shadow-lg" :
                                        i + 1 < 12 ? "opacity-20 cursor-not-allowed" : "hover:bg-elite-primary-50"
                                      )}
                                    >
                                       {i + 1}
                                    </button>
                                  ))}
                               </div>
                            </Card>

                            <div className="space-y-4">
                               <h3 className="text-xs font-bold text-elite-primary-400 uppercase tracking-widest">Available Time Slots</h3>
                               <div className="grid grid-cols-1 gap-2">
                                  {times.map((t) => (
                                    <button
                                      key={t}
                                      onClick={() => setSelectedDate_Time(t)}
                                      className={cn(
                                        "p-4 rounded-xl border-2 font-bold text-sm transition-all flex items-center justify-between group",
                                        selectedTime === t ? "border-elite-primary-600 bg-elite-primary-50" : "border-elite-primary-50 bg-white hover:border-elite-primary-200"
                                      )}
                                    >
                                       <span className={cn(selectedTime === t ? "text-elite-primary-900" : "text-elite-primary-600")}>{t}</span>
                                       <Clock size={16} className="text-elite-primary-300 group-hover:text-elite-primary-600" />
                                    </button>
                                  ))}
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                 )}

                 {step === 3 && (
                   <div className="space-y-8 animate-in fade-in slide-in-from-right-5 duration-300">
                      <div className="space-y-4">
                         <h2 className="text-2xl font-bold font-space-grotesk">Review & Payment</h2>
                         <Card>
                            <CardContent className="p-8 space-y-6">
                               <div className="space-y-4">
                                  <div className="flex justify-between items-center text-sm font-bold">
                                     <span className="text-elite-primary-400">Session</span>
                                     <span>Career Mentorship (60 Min)</span>
                                  </div>
                                  <div className="flex justify-between items-center text-sm font-bold">
                                     <span className="text-elite-primary-400">Date & Time</span>
                                     <span>Feb 14, 2024 • 10:30 AM (GMT+1)</span>
                                  </div>
                                  <hr className="border-elite-primary-50" />
                                  <div className="flex justify-between items-center text-lg font-bold">
                                     <span>Total to Pay</span>
                                     <span className="text-elite-primary-600">$25.00</span>
                                  </div>
                               </div>

                               <div className="space-y-4 pt-6">
                                  <label className="text-xs font-bold uppercase tracking-widest text-elite-primary-400">Payment Method</label>
                                  <div className="grid grid-cols-2 gap-4">
                                     <button className="p-4 rounded-xl border-2 border-elite-primary-600 bg-elite-primary-50 flex items-center gap-3">
                                        <Wallet size={20} className="text-elite-primary-600" />
                                        <div className="text-left">
                                           <div className="text-[10px] font-bold uppercase opacity-60">ELITE Wallet</div>
                                           <div className="text-sm font-bold">$145.00</div>
                                        </div>
                                     </button>
                                     <button className="p-4 rounded-xl border-2 border-elite-primary-50 bg-white flex items-center gap-3 opacity-40">
                                        <CreditCard size={20} />
                                        <div className="text-left font-bold text-sm">Add New Card</div>
                                     </button>
                                  </div>
                               </div>

                               <Button variant="accent" size="lg" className="w-full h-14 text-lg font-bold shadow-2xl">Confirm & Pay $25.00</Button>
                            </CardContent>
                         </Card>
                      </div>
                   </div>
                 )}
              </div>

              {/* Tutor Profile Preview */}
              <div className="lg:col-span-4 space-y-8">
                 <Card className="sticky top-32 overflow-hidden border-none shadow-2xl">
                    <div className="h-24 bg-elite-primary-950" />
                    <CardContent className="px-8 pb-8 -mt-12 text-center space-y-4">
                       <div className="w-24 h-24 rounded-3xl bg-elite-primary-100 border-4 border-white dark:border-elite-primary-900 mx-auto flex items-center justify-center font-bold text-3xl">DM</div>
                       <div className="space-y-1">
                          <h3 className="font-bold text-xl font-space-grotesk">David Mensah</h3>
                          <p className="text-xs text-elite-primary-500 font-medium">Senior Software Engineer @ ELCODERS</p>
                       </div>
                       <div className="flex items-center justify-center gap-1 text-elite-accent-500 font-bold">
                          <Star size={16} fill="currentColor" />
                          <span>4.9</span>
                          <span className="text-[10px] text-elite-primary-400 font-medium ml-1">(1.2k Students)</span>
                       </div>
                       <div className="flex flex-wrap justify-center gap-2">
                          <Badge variant="primary" className="text-[8px]">Next.js</Badge>
                          <Badge variant="primary" className="text-[8px]">Architecture</Badge>
                          <Badge variant="primary" className="text-[8px]">Node.js</Badge>
                       </div>
                       <hr className="border-elite-primary-50" />
                       <div className="space-y-4 text-left">
                          <h4 className="text-[10px] font-bold uppercase tracking-widest text-elite-primary-400">Bio</h4>
                          <p className="text-xs text-elite-primary-500 leading-relaxed">David is a veteran full-stack engineer with over 10 years of experience building scalable systems for tech giants and startups across Africa.</p>
                       </div>
                    </CardContent>
                 </Card>
              </div>
           </div>

           <div className="mt-12 flex justify-between">
              <Button variant="ghost" disabled={step === 1} onClick={() => setStep(step - 1)}>Back</Button>
              {step < 3 && (
                <Button variant="primary" disabled={step === 1 ? !selectedType : !selectedTime} onClick={() => setStep(step + 1)}>
                   Next Step <ArrowRight size={18} className="ml-2" />
                </Button>
              )}
           </div>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}
