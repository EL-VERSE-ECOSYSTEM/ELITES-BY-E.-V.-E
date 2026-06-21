"use client";
import { Bookmark } from "lucide-react";
import Link from "next/link";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Sidebar } from "@/components/layout/Sidebar";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { ChevronLeft, Share2, Shield, ShieldCheck } from "lucide-react";

export default function JobDetailPage() {
  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-6 border-b border-elite-primary-100 dark:border-elite-primary-900 bg-white sticky top-0 z-30 flex items-center justify-between">
           <Button variant="ghost" size="icon" asChild><Link href="/jobs"><ChevronLeft size={20} /></Link></Button>
           <div className="flex gap-3">
              <Button variant="outline" size="sm"><Share2 size={18} /></Button>
              <Button variant="outline" size="sm"><Bookmark size={18} /></Button>
           </div>
        </header>

        <main className="max-w-5xl mx-auto w-full p-6 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
           <div className="lg:col-span-8 space-y-8">
              <div className="space-y-4">
                 <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-elite-primary-950 flex items-center justify-center text-white font-bold text-2xl shadow-xl">E</div>
                    <div>
                       <h1 className="text-3xl font-bold font-space-grotesk">Senior Frontend Engineer</h1>
                       <div className="text-elite-primary-600 font-bold">ELCODERS • Lagos, Nigeria (Remote)</div>
                    </div>
                 </div>

                 <div className="flex flex-wrap gap-4">
                    <Badge variant="primary">Full-time</Badge>
                    <Badge variant="accent">$3.5k - $5.0k / mo</Badge>
                    <Badge variant="success">98% Match</Badge>
                 </div>
              </div>

              <div className="prose prose-elite dark:prose-invert max-w-none">
                 <h2 className="text-2xl font-bold font-space-grotesk">Job Description</h2>
                 <p>ELCODERS is looking for a Senior Frontend Engineer to join our core product team. You will be responsible for building and scaling our education technology platform using Next.js and TypeScript.</p>

                 <h3 className="text-xl font-bold font-space-grotesk mt-8">Responsibilities</h3>
                 <ul>
                    <li>Develop high-quality, reusable UI components.</li>
                    <li>Optimize application performance for millions of users.</li>
                    <li>Collaborate with designers and backend engineers.</li>
                    <li>Mentor junior engineers and lead code reviews.</li>
                 </ul>

                 <h3 className="text-xl font-bold font-space-grotesk mt-8">Required Skills</h3>
                 <div className="flex flex-wrap gap-2 not-prose">
                    {["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "GraphQL"].map(s => (
                      <Badge key={s} variant="primary" className="bg-elite-primary-50 text-elite-primary-900 border-none px-3 py-1 font-bold">{s}</Badge>
                    ))}
                 </div>
              </div>
           </div>

           <div className="lg:col-span-4 space-y-8">
              <Card className="border-none shadow-2xl overflow-hidden bg-elite-primary-950 text-white">
                 <CardContent className="p-8 space-y-6">
                    <div className="text-center space-y-4">
                       <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto text-elite-accent-500">
                          <ShieldCheck size={40} />
                       </div>
                       <div className="space-y-1">
                          <h3 className="font-bold text-xl">Apply with ELITE</h3>
                          <p className="text-xs text-elite-primary-300">We'll use your verified certificates and projects to fast-track your application.</p>
                       </div>
                    </div>
                    <Button variant="accent" size="lg" className="w-full h-14 font-bold shadow-xl shadow-elite-accent-500/20">Submit Application</Button>
                    <p className="text-[10px] text-center opacity-60 uppercase font-bold tracking-widest">Average response time: 2 days</p>
                 </CardContent>
              </Card>

              <Card>
                 <CardHeader>
                    <CardTitle className="text-lg">About the Company</CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-4">
                    <p className="text-xs text-elite-primary-500 leading-relaxed">ELCODERS is the leading software agency in the EL VERSE ecosystem, building world-class digital products for the African market.</p>
                    <Button variant="outline" size="sm" className="w-full">View Company Profile</Button>
                 </CardContent>
              </Card>
           </div>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}