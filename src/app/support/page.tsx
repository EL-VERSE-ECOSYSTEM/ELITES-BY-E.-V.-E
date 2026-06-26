"use client";

import { useState } from "react";
import {
  HelpCircle,
  MessageSquare,
  LifeBuoy,
  FileText,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

export default function SupportPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950 flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center p-8 space-y-6">
          <div className="w-20 h-20 bg-elite-success/10 text-elite-success rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 size={40} />
          </div>
          <h1 className="text-2xl font-bold font-space-grotesk">Ticket Created</h1>
          <p className="text-elite-primary-500">We&apos;ve received your message. Our support team will get back to you within 24 hours.</p>
          <Button variant="accent" className="w-full" onClick={() => setSubmitted(false)}>Create Another Ticket</Button>
          <Button variant="ghost" className="w-full" asChild><Link href="/dashboard">Return to Dashboard</Link></Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950 p-6 pb-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center space-y-4">
           <Badge variant="accent">Help Center</Badge>
           <h1 className="text-4xl font-bold font-space-grotesk">How can we help you?</h1>
           <p className="text-elite-primary-500 max-w-lg mx-auto">Browse our knowledge base or get in touch with our dedicated support team.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <Card className="hover:border-elite-accent-500 transition-all cursor-pointer group">
              <CardContent className="p-6 space-y-3">
                 <div className="w-10 h-10 rounded-xl bg-elite-primary-100 flex items-center justify-center text-elite-primary-600 group-hover:bg-elite-accent-500 group-hover:text-white transition-all">
                    <FileText size={20} />
                 </div>
                 <h3 className="font-bold">Documentation</h3>
                 <p className="text-xs text-elite-primary-500">Detailed guides on how to use ELITE platform.</p>
                 <ChevronRight size={16} className="text-elite-primary-300 ml-auto" />
              </CardContent>
           </Card>
           <Card className="hover:border-elite-accent-500 transition-all cursor-pointer group">
              <Link href="/admin/disputes">
                <CardContent className="p-6 space-y-3">
                   <div className="w-10 h-10 rounded-xl bg-elite-primary-100 flex items-center justify-center text-elite-primary-600 group-hover:bg-elite-accent-500 group-hover:text-white transition-all">
                      <AlertCircle size={20} />
                   </div>
                   <h3 className="font-bold">Dispute Center</h3>
                   <p className="text-xs text-elite-primary-500">Raise a formal dispute regarding a course or project.</p>
                   <ChevronRight size={16} className="text-elite-primary-300 ml-auto" />
                </CardContent>
              </Link>
           </Card>
           <Card className="hover:border-elite-accent-500 transition-all cursor-pointer group">
              <CardContent className="p-6 space-y-3">
                 <div className="w-10 h-10 rounded-xl bg-elite-primary-100 flex items-center justify-center text-elite-primary-600 group-hover:bg-elite-accent-500 group-hover:text-white transition-all">
                    <LifeBuoy size={20} />
                 </div>
                 <h3 className="font-bold">Live Support</h3>
                 <p className="text-xs text-elite-primary-500">Talk directly to one of our support agents.</p>
                 <ChevronRight size={16} className="text-elite-primary-300 ml-auto" />
              </CardContent>
           </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
           <Card className="border-none shadow-xl">
              <CardHeader>
                 <CardTitle className="flex items-center gap-2">
                    <MessageSquare size={20} className="text-elite-accent-500" /> Create Support Ticket
                 </CardTitle>
              </CardHeader>
              <CardContent>
                 <form className="space-y-4" onSubmit={handleSubmit}>
                    <Input label="Subject" placeholder="How can we help?" required />
                    <div className="space-y-1.5">
                       <label className="text-sm font-medium">Message</label>
                       <textarea
                         className="w-full min-h-[150px] rounded-lg border border-elite-primary-200 bg-white p-3 text-sm focus:ring-2 focus:ring-elite-accent-500 dark:bg-elite-primary-950 dark:border-elite-primary-800"
                         placeholder="Describe your issue in detail..."
                         required
                       />
                    </div>
                    <Button variant="accent" size="lg" className="w-full">Submit Ticket <ArrowRight className="ml-2" size={18} /></Button>
                 </form>
              </CardContent>
           </Card>

           <div className="space-y-6">
              <div className="p-8 bg-elite-primary-900 text-white rounded-3xl space-y-4 relative overflow-hidden">
                 <HelpCircle className="absolute -right-8 -bottom-8 w-48 h-48 opacity-10" />
                 <h3 className="text-2xl font-bold font-space-grotesk">FAQ</h3>
                 <div className="space-y-4">
                    {[
                      "How do I withdraw my earnings?",
                      "How can I become a verified tutor?",
                      "What is the EL VERSE ecosystem?",
                      "How do disputes get resolved?"
                    ].map((q, i) => (
                      <button key={i} className="w-full flex items-center justify-between py-2 border-b border-white/10 text-sm hover:text-elite-accent-500 transition-colors">
                        {q} <ChevronRight size={16} />
                      </button>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
