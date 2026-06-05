import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Target, Users, Award, Globe, Rocket, ShieldCheck, ChevronRight } from "lucide-react";
import Link from "next/link";
"use client";


export default function AboutPage() {
  const stats = [
    { label: "Active Learners", value: "50,000+" },
    { label: "African Countries", value: "30+" },
    { label: "Job Placements", value: "5,000+" },
    { label: "Expert Tutors", value: "200+" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-elite-primary-950 text-white overflow-hidden relative">
           <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-elite-accent-500 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-elite-primary-500 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
           </div>
           <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
              <Badge variant="accent">OUR MISSION</Badge>
              <h1 className="text-4xl md:text-7xl font-bold font-space-grotesk max-w-4xl mx-auto leading-tight">
                Empowering Africa's Next Generation of Tech Leaders.
              </h1>
              <p className="text-xl text-elite-primary-200 max-w-2xl mx-auto">
                ELITE is on a mission to train, certify, and connect 1 million African tech talents to global opportunities by 2030.
              </p>
           </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 border-b border-elite-primary-100 dark:border-elite-primary-900">
           <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                 {stats.map((stat, i) => (
                   <div key={i} className="text-center space-y-2">
                      <div className="text-3xl md:text-5xl font-bold font-space-grotesk text-elite-primary-900 dark:text-white">{stat.value}</div>
                      <div className="text-xs font-bold text-elite-primary-400 uppercase tracking-widest">{stat.label}</div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-white dark:bg-elite-primary-950">
           <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div className="space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk">Built by Africans, for the World.</h2>
                    <p className="text-lg text-elite-primary-600 dark:text-elite-primary-300 leading-relaxed">
                       ELITE was born out of the EL VERSE ECOSYSTEM with a clear vision: to bridge the global tech talent gap using Africa's greatest resource—its youth.
                    </p>
                    <p className="text-lg text-elite-primary-600 dark:text-elite-primary-300 leading-relaxed">
                       We understand the unique challenges faced by African learners, from internet accessibility to payment hurdles. That's why we've built a platform that is not only premium in quality but also localized for the African context.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                       {[
                         { title: "Localized Learning", desc: "Courses tailored for the African tech landscape.", icon: Globe },
                         { title: "Job Connectivity", desc: "Direct pipeline to global jobs via ELACCESS.", icon: Target },
                       ].map((item, i) => (
                         <div key={i} className="flex gap-4">
                            <div className="w-10 h-10 rounded-lg bg-elite-primary-50 dark:bg-elite-primary-900 flex items-center justify-center text-elite-primary-600 shrink-0">
                               <item.icon size={20} />
                            </div>
                            <div>
                               <h4 className="font-bold text-sm">{item.title}</h4>
                               <p className="text-xs text-elite-primary-500">{item.desc}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="aspect-square bg-elite-primary-100 rounded-3xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-elite-primary-600 to-elite-accent-500 opacity-20" />
                    {/* Placeholder for Team Photo */}
                    <div className="absolute inset-0 flex items-center justify-center text-elite-primary-200">
                       <Users size={120} />
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Ecosystem Section */}
        <section className="py-24 bg-elite-primary-50 dark:bg-elite-primary-900/20">
           <div className="container mx-auto px-4 text-center space-y-16">
              <div className="space-y-4">
                 <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk text-elite-primary-900 dark:text-white">Part of the EL VERSE Ecosystem</h2>
                 <p className="text-elite-primary-500 max-w-2xl mx-auto">We provide a complete lifecycle for tech talent, from the first line of code to the first paycheck.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                   { name: "ELITE", role: "Train & Certify", desc: "The educational engine of the ecosystem." },
                   { name: "ELACCESS", role: "Job Connect", desc: "Connecting talent to global companies." },
                   { name: "EL SPACE", role: "Co-work & Hub", desc: "Physical and virtual hubs for collaboration." },
                   { name: "ELCODERS", role: "Agency", desc: "Building world-class software solutions." },
                 ].map((p, idx) => (
                   <Card key={idx} className="hover:border-elite-accent-500 transition-all group border-none shadow-lg">
                      <CardContent className="p-8 space-y-4">
                         <div className="w-12 h-12 bg-elite-primary-950 text-white rounded-xl flex items-center justify-center font-bold text-xl mx-auto group-hover:bg-elite-accent-500 transition-colors">
                            {p.name[0]}
                         </div>
                         <h3 className="font-bold text-xl">{p.name}</h3>
                         <div className="text-xs font-bold text-elite-accent-500 uppercase tracking-widest">{p.role}</div>
                         <p className="text-sm text-elite-primary-500">{p.desc}</p>
                      </CardContent>
                   </Card>
                 ))}
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
