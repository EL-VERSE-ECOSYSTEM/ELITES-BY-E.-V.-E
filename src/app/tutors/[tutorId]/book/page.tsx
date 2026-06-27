"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ChevronLeft, Wallet } from "lucide-react";

export default function BookTutorSession() {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const types = [
    { id: "consultation", label: "General Consultation", price: 20},
    { id: "code-review", label: "Code Review", price: 35 },
    { id: "mentorship", label: "Career Mentorship", price: 25 },
    { id: "interview", label: "Interview Prep", price: 40 },
  ];

  const times = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"];

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 flex items-center gap-4">
           <Button variant="ghost" size="icon" asChild>
              <Link href="/tutors/1"><ChevronLeft size={20} /></Link>
           </Button>
           <div>
              <h1 className="text-2xl font-bold font-space-grotesk text-elite-primary-950">Book a Session</h1>
              <p className="text-xs text-elite-primary-500 font-medium">Schedule your next learning milestone.</p>
           </div>
        </header>

        <main className="px-6 pb-24 max-w-4xl">
           {step === 1 && (
             <div className="space-y-6">
                <h2 className="text-lg font-bold">Select Session Type</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {types.map(t => (
                     <Card
                        key={t.id}
                        className={cn(
                          "cursor-pointer transition-all hover:border-elite-accent-500",
                          selectedType === t.id ? "border-elite-accent-500 ring-2 ring-elite-accent-500/20" : ""
                        )}
                        onClick={() => setSelectedType(t.id)}
                     >
                        <CardContent className="p-6">
                           <div className="flex justify-between items-start">
                              <div className="font-bold">{t.label}</div>
                              <div className="text-elite-accent-500 font-bold">${t.price}</div>
                           </div>
                        </CardContent>
                     </Card>
                   ))}
                </div>
                <Button className="w-full h-12" disabled={!selectedType} onClick={() => setStep(2)}>
                   Continue <ArrowRight className="ml-2" size={18} />
                </Button>
             </div>
           )}

           {step === 2 && (
             <div className="space-y-6">
                <h2 className="text-lg font-bold">Choose Date & Time</h2>
                <div className="grid grid-cols-7 gap-2 bg-white p-4 rounded-xl shadow-sm">
                   {Array.from({length: 30}).map((_, i) => (
                     <button
                        key={i}
                        className={cn(
                          "h-10 rounded-lg text-sm font-bold transition-colors",
                          selectedDate === `Mar ${i+1}` ? "bg-elite-primary-900 text-white" : "bg-white hover:bg-elite-primary-50"
                        )}
                        onClick={() => setSelectedDate(`Mar ${i+1}`)}
                     >
                        {i+1}
                     </button>
                   ))}
                </div>
                <div className="flex flex-wrap gap-3 mt-6">
                   {times.map(t => (
                     <Button
                        key={t}
                        variant={selectedTime === t ? "primary" : "outline"}
                        onClick={() => setSelectedTime(t)}
                     >
                        {t}
                     </Button>
                   ))}
                </div>
                <div className="flex gap-4 pt-6">
                   <Button variant="outline" className="flex-1" onClick={() => setStep(1)}>Back</Button>
                   <Button className="flex-1" disabled={!selectedDate || !selectedTime} onClick={() => setStep(3)}>Confirm</Button>
                </div>
             </div>
           )}

           {step === 3 && (
             <Card className="border-none shadow-xl bg-elite-primary-950 text-white p-8 space-y-6">
                <h2 className="text-2xl font-bold font-space-grotesk">Booking Summary</h2>
                <div className="space-y-4">
                   <div className="flex justify-between border-b border-white/10 pb-4">
                      <span className="text-elite-primary-400">Session Type</span>
                      <span className="font-bold">{types.find(t => t.id === selectedType)?.label}</span>
                   </div>
                   <div className="flex justify-between border-b border-white/10 pb-4">
                      <span className="text-elite-primary-400">Date & Time</span>
                      <span className="font-bold">{selectedDate} at {selectedTime}</span>
                   </div>
                   <div className="flex justify-between text-xl font-bold text-elite-accent-500 pt-4">
                      <span>Total Price</span>
                      <span>${types.find(t => t.id === selectedType)?.price}</span>
                   </div>
                </div>
                <Button variant="accent" className="w-full h-14 font-bold text-lg shadow-xl shadow-elite-accent-500/20">
                   Pay & Complete Booking <Wallet className="ml-2" size={20} />
                </Button>
             </Card>
           )}
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}
