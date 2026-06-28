"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import {ArrowRight,
  Users,
  ShieldCheck,
  Zap,
  Globe,
  Award,
  BookOpen} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-elite-off-white dark:bg-elite-dark-bg transition-colors duration-300">
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-elite-blue-deep dark:bg-elite-dark-bg">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-20">
             <div className="absolute -top-24 -left-24 w-96 h-96 bg-elite-purple rounded-full blur-3xl animate-pulse" />
             <div className="absolute top-1/2 -right-24 w-80 h-80 bg-elite-violet-soft rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge variant="accent" className="px-4 py-1.5 text-xs font-black uppercase tracking-widest bg-elite-purple text-white mb-6 border-none">
                  ELITE LEARNERS PLATFORM
                </Badge>
                <h1 className="text-5xl md:text-8xl font-black font-space-grotesk text-white leading-[0.9] tracking-tighter">
                  LEARN TECH SKILLS.<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-elite-purple to-elite-violet-soft">
                    BUILD AFRICA&apos;S FUTURE.
                  </span>
                </h1>
              </motion.div>

              <motion.p
                className="text-lg md:text-xl text-elite-light-gray max-w-2xl mx-auto font-medium leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Connect with verified expert tutors and gain industry-recognized certifications.
                Train, certify, and connect to high-paying jobs in the global tech ecosystem.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Button size="lg" className="w-full sm:w-auto h-16 px-10 text-base font-black uppercase tracking-widest gradient-button border-none shadow-2xl" asChild>
                  <Link href="/register">Start Learning Free <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto h-16 px-10 text-base font-black uppercase tracking-widest border-2 border-white/20 text-white hover:bg-white/10" asChild>
                  <Link href="/courses">Browse Catalog</Link>
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-8 pt-12 opacity-50 grayscale contrast-200">
                 <div className="flex items-center gap-2 text-white font-bold"><ShieldCheck size={20} /> VERIFIED TUTORS</div>
                 <div className="flex items-center gap-2 text-white font-bold"><Globe size={20} /> GLOBAL ECOSYSTEM</div>
                 <div className="flex items-center gap-2 text-white font-bold"><Award size={20} /> CERTIFIED SKILLS</div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="py-12 bg-white dark:bg-elite-dark-surface border-y border-elite-border-gray dark:border-elite-dark-border">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Active Learners", value: "50,000+", icon: Users },
                { label: "Verified Tutors", value: "200+", icon: ShieldCheck },
                { label: "Courses", value: "100+", icon: BookOpen },
                { label: "Placements", value: "1,200+", icon: Award }
              ].map((stat, i) => (
                <div key={i} className="text-center space-y-1">
                  <div className="text-3xl md:text-4xl font-black font-space-grotesk text-elite-dark-blue dark:text-white">{stat.value}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-elite-slate-gray dark:text-elite-light-gray">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 text-center space-y-16">
            <div className="max-w-3xl mx-auto space-y-4">
              <Badge variant="primary" className="bg-elite-purple/10 text-elite-purple uppercase font-black px-4 py-1 border-none">Features</Badge>
              <h2 className="text-4xl md:text-5xl font-black font-space-grotesk text-elite-dark-blue dark:text-white leading-tight">Everything you need to succeed.</h2>
              <p className="text-elite-slate-gray dark:text-elite-light-gray font-medium text-lg">We bridge the gap between learning and building real-world projects.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                {
                  title: "Expert Mentorship",
                  desc: "Learn from vetted industry professionals who guide you step-by-step through complex tech stacks.",
                  icon: Zap,
                  color: "bg-blue-50 text-blue-600"
                },
                {
                  title: "Ecosystem Placements",
                  desc: "Get promoted to EL ACCESS, EL CODERS, or ELSPACE for internships, projects, and freelance gigs.",
                  icon: Globe,
                  color: "bg-purple-50 text-purple-600"
                },
                {
                  title: "Secure Wallets",
                  desc: "Manage your payments and project earnings through our robust multi-currency financial system.",
                  icon: ShieldCheck,
                  color: "bg-emerald-50 text-emerald-600"
                }
              ].map((feature, i) => (
                <Card key={i} className="border-none shadow-xl bg-white dark:bg-elite-dark-card hover:-translate-y-2 transition-transform duration-300">
                  <CardContent className="p-10 space-y-6">
                    <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center`}>
                      <feature.icon size={28} />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold font-space-grotesk text-elite-dark-blue dark:text-white">{feature.title}</h3>
                      <p className="text-elite-slate-gray dark:text-elite-light-gray leading-relaxed font-medium">{feature.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 bg-white dark:bg-elite-dark-surface border-t border-elite-border-gray dark:border-elite-dark-border overflow-hidden relative">
          <div className="container mx-auto px-6 text-center relative z-10 space-y-10">
            <h2 className="text-4xl md:text-6xl font-black font-space-grotesk text-elite-dark-blue dark:text-white tracking-tighter">Ready to join the next generation?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <Button size="lg" className="w-full sm:w-auto h-16 px-12 text-base font-black uppercase tracking-widest bg-elite-purple text-white shadow-xl hover:bg-elite-purple/90 border-none" asChild>
                  <Link href="/register">Create Your Account</Link>
               </Button>
               <Link href="/about" className="text-sm font-bold uppercase tracking-widest text-elite-slate-gray hover:text-elite-purple transition-colors">
                  Learn more about our mission
               </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
