"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Clock, Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/Button";

export default function BlogPostDetail() {
  const { slug } = useParams();

  return (
    <div className="min-h-screen flex flex-col bg-elite-primary-50 dark:bg-elite-primary-950">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 container mx-auto px-4 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-elite-primary-500 hover:text-elite-primary-900 transition-colors mb-8 font-bold text-sm uppercase tracking-widest">
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <article className="space-y-12">
          <header className="space-y-6">
            <Badge variant="accent">Industry Insights</Badge>
            <h1 className="text-4xl md:text-6xl font-black font-space-grotesk tracking-tighter leading-[1.1] text-elite-primary-950 dark:text-white">
              The Future of African Tech ({slug})
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-elite-primary-400 font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <User size={16} className="text-elite-accent-500" />
                <span>By ELITE Editorial Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>Mar 12, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>8 min read</span>
              </div>
            </div>
          </header>

          <div className="aspect-[21/9] rounded-3xl bg-elite-primary-200 overflow-hidden shadow-2xl">
             <div className="w-full h-full bg-gradient-to-br from-elite-primary-900 to-elite-primary-800 flex items-center justify-center text-white/10 font-black text-9xl">
                ELITES
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-8 text-lg text-elite-primary-700 dark:text-elite-primary-300 leading-relaxed font-medium">
               <p className="first-letter:text-7xl first-letter:font-black first-letter:text-elite-accent-500 first-letter:mr-3 first-letter:float-left">
                  Technology is no longer just a luxury in Africa; it is the infrastructure for the continent{"'"}s next industrial revolution.
               </p>
               <p>
                  At ELITES, we believe that the key to unlocking this potential lies in mentorship and high-quality, accessible education.
               </p>
            </div>

            <div className="lg:col-span-4 space-y-8">
               <Card className="border-none shadow-xl bg-elite-primary-950 text-white p-8 space-y-6">
                  <h3 className="font-bold text-xl font-space-grotesk">Ready to start building?</h3>
                  <p className="text-sm text-elite-primary-400">Join 12,000+ other developers and learn from the best in the industry.</p>
                  <Button variant="accent" className="w-full" asChild>
                     <Link href="/register">Join ELITES Free</Link>
                  </Button>
               </Card>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
