import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Award, Download, Share2, Printer, CheckCircle2, ShieldCheck, ExternalLink, QrCode, Globe } from "lucide-react";
import Link from "next/link";
"use client";


export default function CertificateDetail() {
  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 border-b border-elite-primary-100 dark:border-elite-primary-900 bg-white flex flex-col md:flex-row md:items-center justify-between gap-4">
           <div className="space-y-1">
              <h1 className="text-2xl font-bold font-space-grotesk">Certificate of Completion</h1>
              <p className="text-sm text-elite-primary-500">Issued on Feb 12, 2024 • ID: ELT-8824-XM2</p>
           </div>
           <div className="flex items-center gap-3">
              <Button variant="outline" size="sm"><Share2 size={18} className="mr-2" /> Share</Button>
              <Button variant="accent" size="sm"><Download size={18} className="mr-2" /> Download PDF</Button>
           </div>
        </header>

        <main className="p-6 pb-24 max-w-6xl mx-auto w-full">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

              {/* Certificate Preview */}
              <div className="lg:col-span-8">
                 <Card className="aspect-[1.41/1] bg-white border-[16px] border-elite-primary-950 p-12 md:p-20 relative overflow-hidden shadow-2xl">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-elite-accent-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-elite-primary-500/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                    <div className="h-full flex flex-col items-center justify-between text-center relative z-10 border-2 border-elite-primary-100 p-8 md:p-12">
                       <div className="space-y-4">
                          <div className="w-16 h-16 bg-elite-primary-950 text-white rounded-2xl flex items-center justify-center font-bold text-3xl mx-auto shadow-xl">E</div>
                          <div className="text-[10px] md:text-xs font-bold text-elite-accent-500 uppercase tracking-[0.3em]">EL VERSE ECOSYSTEM Presents</div>
                       </div>

                       <div className="space-y-6">
                          <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk tracking-tighter text-elite-primary-950">Certificate of Mastery</h2>
                          <div className="space-y-2">
                             <p className="text-sm md:text-lg text-elite-primary-500 font-medium italic">This is to certify that</p>
                             <div className="text-2xl md:text-4xl font-bold font-space-grotesk text-elite-primary-900 border-b-2 border-elite-primary-100 inline-block px-12 pb-2">John Doe</div>
                          </div>
                          <p className="text-sm md:text-lg text-elite-primary-500 max-w-lg mx-auto leading-relaxed">
                             Has successfully completed all requirements for the professional certification program in
                             <span className="font-bold text-elite-primary-900"> Advanced Full Stack Web Development with Next.js 15.</span>
                          </p>
                       </div>

                       <div className="w-full flex justify-between items-end">
                          <div className="text-left space-y-4">
                             <div className="space-y-1">
                                <div className="font-bold text-xs md:text-sm text-elite-primary-900 border-b border-elite-primary-950/20 pb-2 mb-2 w-32 md:w-48">David Mensah</div>
                                <div className="text-[8px] md:text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">Lead Instructor, ELITE</div>
                             </div>
                             <div className="text-[8px] md:text-[10px] font-bold text-elite-primary-400 uppercase tracking-tighter">DATE: FEB 12, 2024</div>
                          </div>
                          <div className="w-16 h-16 md:w-24 md:h-24 bg-elite-primary-50 rounded-xl flex items-center justify-center border-2 border-white shadow-inner">
                             <QrCode size={40} className="md:size-60 text-elite-primary-950 opacity-20" />
                          </div>
                       </div>
                    </div>
                 </Card>
              </div>

              {/* Certificate Meta */}
              <div className="lg:col-span-4 space-y-8">
                 <div className="space-y-6">
                    <h3 className="text-xl font-bold font-space-grotesk">Validation Details</h3>
                    <Card>
                       <CardContent className="p-6 space-y-4">
                          <div className="flex items-center gap-3 p-3 rounded-xl bg-elite-success/5 border border-elite-success/10 text-elite-success">
                             <ShieldCheck size={20} />
                             <span className="text-xs font-bold uppercase tracking-widest">Verified on Blockchain</span>
                          </div>
                          <div className="space-y-3">
                             <div className="flex justify-between text-xs">
                                <span className="text-elite-primary-400 font-medium">Verify ID</span>
                                <span className="font-bold font-mono">0x4f...8824</span>
                             </div>
                             <div className="flex justify-between text-xs">
                                <span className="text-elite-primary-400 font-medium">Grade Earned</span>
                                <span className="font-bold text-elite-success">Distinction (98%)</span>
                             </div>
                             <div className="flex justify-between text-xs">
                                <span className="text-elite-primary-400 font-medium">Skills Validated</span>
                                <span className="font-bold">12 Total</span>
                             </div>
                          </div>
                          <Button variant="outline" className="w-full text-xs font-bold uppercase tracking-widest">
                             Verify on ELITE Portal <ExternalLink size={14} className="ml-2" />
                          </Button>
                       </CardContent>
                    </Card>
                 </div>

                 <div className="space-y-6">
                    <h3 className="text-xl font-bold font-space-grotesk">Skills Acquired</h3>
                    <div className="flex flex-wrap gap-2">
                       {["Next.js 15", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Cloud Architecture", "Unit Testing", "Server Actions"].map((skill) => (
                         <Badge key={skill} variant="primary" className="px-3 py-1">{skill}</Badge>
                       ))}
                    </div>
                 </div>

                 <Card className="bg-elite-primary-950 text-white p-8 space-y-6 border-none shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                       <Award size={80} />
                    </div>
                    <div className="relative z-10 space-y-4 text-center">
                       <h3 className="text-lg font-bold font-space-grotesk">Show it off!</h3>
                       <p className="text-xs text-elite-primary-300">Add this certificate to your LinkedIn profile or share your achievement on social media.</p>
                       <Button variant="accent" className="w-full">Add to LinkedIn</Button>
                    </div>
                 </Card>
              </div>
           </div>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}
