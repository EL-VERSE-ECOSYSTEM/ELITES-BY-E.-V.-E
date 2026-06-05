import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Code, Rocket, Award, Briefcase, ChevronRight, Star, Users, ArrowRight, Play, Globe, CheckCircle2, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-elite-primary-950">
          {/* Animated Code Background Placeholder */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <pre className="text-xs text-white p-4 font-jetbrains-mono">
              {`function buildFuture(africa) {
  return africa.map(talent => talent.train().certify().connect());
}

const elite = new Platform({
  mission: "Learn. Build. Earn. Repeat.",
  region: "Africa"
});`}
            </pre>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge variant="accent" className="animate-bounce">ELITE BY EL VERSE</Badge>
              <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk text-white leading-tight">
                Learn Tech Skills. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-elite-accent-400 to-elite-accent-600">
                  Build Africa's Future.
                </span>
              </h1>
              <p className="text-xl text-elite-primary-200 max-w-2xl mx-auto">
                Africa's premier tech skills learning platform designed to train, certify, and connect African tech talent to jobs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="accent" size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="/register">Start Learning Free <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white/10" asChild>
                  <Link href="/courses">Browse Courses</Link>
                </Button>
              </div>
              <div className="pt-8 flex flex-col items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-elite-primary-950 bg-elite-primary-800 flex items-center justify-center text-[10px] font-bold text-white">
                      {i === 5 ? "50k+" : `U${i}`}
                    </div>
                  ))}
                </div>
                <p className="text-elite-primary-400 text-sm font-medium">
                  Trusted by 50,000+ learners across 30 African countries
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="py-12 border-b border-elite-primary-100 dark:border-elite-primary-900 bg-white dark:bg-elite-primary-950">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
              {['ELCODERS', 'ELACCESS', 'EL SPACE', 'NEXEL'].map((partner) => (
                <span key={partner} className="text-xl font-bold font-space-grotesk tracking-tighter">{partner}</span>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-white dark:bg-elite-primary-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk">How It Works</h2>
              <p className="text-elite-primary-500 max-w-xl mx-auto">Our 4-step process to taking your tech career to the next level.</p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-elite-primary-100 dark:bg-elite-primary-900 -translate-y-1/2" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                {[
                  { step: "01", title: "Learn", desc: "Expert-led courses in high-demand tech skills.", icon: BookOpen },
                  { step: "02", title: "Build", desc: "Real-world projects and coding labs to practice.", icon: Code },
                  { step: "03", title: "Earn", desc: "Earn certificates and ELITE coins while learning.", icon: Award },
                  { step: "04", title: "Work", desc: "Connect with global opportunities via ELACCESS.", icon: Briefcase },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white dark:bg-elite-primary-900 p-8 rounded-2xl border border-elite-primary-100 dark:border-elite-primary-800 text-center space-y-4 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
                    <div className="w-16 h-16 bg-elite-primary-50 dark:bg-elite-primary-800 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-elite-accent-500 group-hover:text-white transition-colors">
                      <item.icon size={32} />
                    </div>
                    <div className="text-xs font-bold text-elite-accent-500 uppercase tracking-widest">Step {item.step}</div>
                    <h3 className="text-2xl font-bold font-space-grotesk">{item.title}</h3>
                    <p className="text-elite-primary-500 dark:text-elite-primary-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Course Categories */}
        <section className="py-24 bg-elite-primary-50 dark:bg-elite-primary-900/20">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div className="space-y-4 text-left">
                <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk">Explore Categories</h2>
                <p className="text-elite-primary-500">Find the path that's right for you.</p>
              </div>
              <Button variant="ghost" className="hidden md:flex" asChild>
                <Link href="/courses">View All <ChevronRight className="ml-1 w-4 h-4" /></Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Web Dev", icon: Code, count: "120+ Courses" },
                { name: "Mobile", icon: Rocket, count: "85+ Courses" },
                { name: "Data Science", icon: Globe, count: "64+ Courses" },
                { name: "Design", icon: Award, count: "92+ Courses" },
                { name: "DevOps", icon: Users, count: "45+ Courses" },
                { name: "Cybersecurity", icon: Award, count: "38+ Courses" },
                { name: "AI/ML", icon: Code, count: "56+ Courses" },
                { name: "Digital Marketing", icon: Rocket, count: "72+ Courses" },
              ].map((cat, idx) => (
                <Link href={`/courses?category=${cat.name}`} key={idx}>
                  <Card className="hover:border-elite-accent-500 transition-all cursor-pointer group">
                    <CardContent className="p-8 text-center space-y-3">
                      <div className="w-12 h-12 bg-elite-primary-100 dark:bg-elite-primary-800 rounded-xl flex items-center justify-center mx-auto text-elite-primary-600 group-hover:bg-elite-accent-500 group-hover:text-white transition-colors">
                        <cat.icon size={24} />
                      </div>
                      <h4 className="font-bold text-lg">{cat.name}</h4>
                      <p className="text-xs text-elite-primary-400">{cat.count}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk">Featured Courses</h2>
              <p className="text-elite-primary-500 max-w-xl mx-auto">Start your journey with our top-rated programs.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden group">
                  <div className="relative aspect-video bg-elite-primary-100">
                    <div className="absolute inset-0 flex items-center justify-center text-elite-primary-300">
                      <Play size={48} fill="currentColor" />
                    </div>
                    <Badge variant="accent" className="absolute top-4 left-4">Bestseller</Badge>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex justify-between items-center text-xs font-bold text-elite-primary-400 uppercase">
                      <span>Beginner</span>
                      <span>12 Hours</span>
                    </div>
                    <h3 className="text-xl font-bold leading-tight group-hover:text-elite-primary-600 transition-colors">
                      Complete Full Stack Web Development with Next.js 15
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-elite-primary-500">
                      <div className="w-6 h-6 rounded-full bg-elite-primary-200" />
                      <span>By El Versee</span>
                    </div>
                    <div className="flex items-center gap-1 text-elite-accent-500">
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <span className="text-xs text-elite-primary-400 font-medium ml-1">(1,240 students)</span>
                    </div>
                    <div className="pt-4 flex items-center justify-between border-t border-elite-primary-50">
                      <span className="text-2xl font-bold text-elite-primary-900 dark:text-white">$15.00</span>
                      <Button variant="primary" size="sm">Enroll Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pipeline Section */}
        <section className="py-24 bg-elite-primary-950 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk leading-tight">
                  The EL VERSE <br />
                  <span className="text-elite-accent-500 text-6xl md:text-8xl">PIPELINE</span>
                </h2>
                <p className="text-xl text-elite-primary-300">
                  We don't just train you; we build your career path from learning to full-time employment within our ecosystem.
                </p>
                <div className="space-y-4">
                  {[
                    { name: "ELITE", role: "Learn & Certify" },
                    { name: "ELACCESS", role: "Job Connectivity" },
                    { name: "EL SPACE", role: "Co-working & Community" },
                    { name: "ELCODERS", role: "Agency & Build" },
                  ].map((p, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                      <div className="w-10 h-10 rounded-lg bg-elite-accent-500 flex items-center justify-center font-bold text-lg">{p.name[0]}</div>
                      <div>
                        <div className="font-bold">{p.name}</div>
                        <div className="text-xs text-elite-primary-400">{p.role}</div>
                      </div>
                      <ChevronRight className="ml-auto text-elite-primary-600" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-elite-primary-600 to-elite-accent-500 rounded-full blur-3xl opacity-20 absolute inset-0 animate-pulse" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl space-y-6">
                   <div className="text-center space-y-2">
                     <div className="text-5xl font-bold text-elite-accent-500">98%</div>
                     <div className="text-sm uppercase tracking-widest font-bold">Placement Rate</div>
                   </div>
                   <hr className="border-white/10" />
                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-white/5 rounded-xl text-center">
                        <div className="text-2xl font-bold">500+</div>
                        <div className="text-[10px] text-elite-primary-400 uppercase">Partner Companies</div>
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl text-center">
                        <div className="text-2xl font-bold">30+</div>
                        <div className="text-[10px] text-elite-primary-400 uppercase">African Countries</div>
                      </div>
                   </div>
                   <Button variant="accent" size="lg" className="w-full">Join the Ecosystem</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="bg-elite-accent-500 rounded-3xl p-12 text-center text-white space-y-8 relative overflow-hidden">
               <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
               <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/10 rounded-full blur-3xl" />

               <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk relative z-10">Ready to start your tech journey?</h2>
               <p className="text-lg text-white/90 max-w-2xl mx-auto relative z-10">
                 Join thousands of African learners building the future today. Get access to free courses, 1-on-1 mentorship, and job opportunities.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                 <Button size="lg" className="bg-white text-elite-accent-600 hover:bg-elite-primary-50">Create Free Account</Button>
                 <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">Talk to an Advisor</Button>
               </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
