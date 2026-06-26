"use client";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Bookmark, Clock, Share2 } from "lucide-react";

export default function BlogPost() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-elite-primary-950">
      <Navbar />
      <main className="flex-grow pt-32 pb-20">
        <article className="container mx-auto px-4 max-w-4xl space-y-12">
           <div className="space-y-6 text-center">
              <Badge variant="accent">INSIGHTS</Badge>
              <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk leading-tight">
                The Future of Tech in Africa: Beyond the Hype
              </h1>
              <div className="flex items-center justify-center gap-6 text-sm text-elite-primary-500 font-medium">
                 <span className="flex items-center gap-2"><Clock size={16} /> 8 min read</span>
                 <span>Oct 24, 2023</span>
              </div>
           </div>

           <div className="aspect-video bg-elite-primary-100 rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-elite-primary-950/60 to-transparent" />
           </div>

           <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>Africa is not just a consumer of tech; it is becoming a global powerhouse of innovation. From fintech to agritech, the continent&apos;s youth are solving local problems with global standards.</p>
              <blockquote>&quot;The next big thing won&apos;t come from Silicon Valley, but from the streets of Lagos, Nairobi, and Accra.&quot;</blockquote>
              <p>As we look towards 2030, the mission of ELITE is to ensure every African child has access to the tools needed to build this future.</p>
           </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
