"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Check, Info, ArrowRight, Users } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Free",
      price: 0,
      description: "Start your learning journey with essential features.",
      features: [
        "Access to free courses",
        "Community forum access",
        "Public profile",
        "Standard support",
      ],
      cta: "Get Started",
      highlight: false,
    },
    {
      name: "Pro",
      price: billingCycle === "monthly" ? 15 : 12,
      description: "Accelerate your career with premium learning tools.",
      features: [
        "Everything in Free",
        "All premium courses included",
        "Course certificates",
        "Coding lab access",
        "Priority support",
        "Download lessons for offline",
      ],
      cta: "Go Pro",
      highlight: true,
    },
    {
      name: "Max",
      price: billingCycle === "monthly" ? 30 : 24,
      description: "The ultimate package for job-ready tech talent.",
      features: [
        "Everything in Pro",
        "1-on-1 monthly tutor session",
        "CV Builder & review",
        "Priority job placement",
        "Advanced learning paths",
        "Exclusive hackathons",
      ],
      cta: "Go Max",
      highlight: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 bg-elite-primary-50 dark:bg-elite-primary-950/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk">Simple, Transparent Pricing</h1>
            <p className="text-xl text-elite-primary-500">Choose the plan that fits your ambition. Save up to 20% with annual billing.</p>

            <div className="flex items-center justify-center gap-4 mt-12">
               <span className={cn("font-bold transition-colors", billingCycle === "monthly" ? "text-elite-primary-900 dark:text-white" : "text-elite-primary-400")}>Monthly</span>
               <button
                onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
                className="w-14 h-8 bg-elite-primary-200 dark:bg-elite-primary-800 rounded-full relative p-1 transition-colors hover:bg-elite-primary-300"
               >
                 <div className={cn(
                   "w-6 h-6 bg-white dark:bg-elite-primary-400 rounded-full shadow transition-transform",
                   billingCycle === "yearly" ? "translate-x-6" : "translate-x-0"
                 )} />
               </button>
               <span className={cn("font-bold transition-colors flex items-center gap-2", billingCycle === "yearly" ? "text-elite-primary-900 dark:text-white" : "text-elite-primary-400")}>
                 Yearly <Badge variant="success" className="text-[10px]">SAVE 20%</Badge>
               </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card key={plan.name} className={cn(
                "relative flex flex-col p-8 transition-all hover:-translate-y-2",
                plan.highlight ? "border-elite-accent-500 ring-2 ring-elite-accent-500 shadow-2xl z-10 scale-105" : "bg-white dark:bg-elite-primary-900/50"
              )}>
                {plan.highlight && (
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <Badge variant="accent" className="px-4 py-1 text-sm shadow-lg">MOST POPULAR</Badge>
                   </div>
                )}

                <div className="space-y-4 mb-8">
                  <h3 className="text-2xl font-bold font-space-grotesk">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold font-space-grotesk text-elite-primary-900 dark:text-white">${plan.price}</span>
                    <span className="text-elite-primary-400 font-medium">/month</span>
                  </div>
                  <p className="text-sm text-elite-primary-500">{plan.description}</p>
                </div>

                <div className="space-y-4 flex-grow">
                   {plan.features.map((feature, idx) => (
                     <div key={idx} className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 bg-elite-success/10 rounded-full flex items-center justify-center shrink-0">
                           <Check className="w-3 h-3 text-elite-success" strokeWidth={3} />
                        </div>
                        <span className="text-sm text-elite-primary-700 dark:text-elite-primary-300">{feature}</span>
                     </div>
                   ))}
                </div>

                <div className="mt-12">
                   <Button variant={plan.highlight ? "accent" : "outline"} className="w-full" size="lg">
                     {plan.cta}
                   </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-24 text-center">
             <Card className="max-w-4xl mx-auto bg-elite-primary-950 text-white p-12 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                   <Users size={200} />
                </div>
                <div className="relative z-10 space-y-6">
                  <h2 className="text-3xl font-bold font-space-grotesk">Elite for Business</h2>
                  <p className="text-elite-primary-300 max-w-2xl mx-auto">Train your team with the skills of the future. Custom plans for teams of 5 to 5,000.</p>
                  <Button variant="accent" size="lg">Contact Sales <ArrowRight className="ml-2 w-4 h-4" /></Button>
                </div>
             </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
