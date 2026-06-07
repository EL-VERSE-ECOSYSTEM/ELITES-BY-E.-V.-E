"use client";

import { Footer from "@/components/layout/Footer";, Card, CardContent from "@/components/ui/Card";, Badge from "@/components/ui/Badge";, Button from "@/components/ui/Button";, Link from "next/link";, Clock, User, Share2, Bookmark, MessageSquare, ChevronLeft, ArrowRight, TrendingUp } from "lucide-react";

export default function BlogPostDetail() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 bg-white dark:bg-elite-primary-950">
        <article className="container mx-auto px-4 max-w-4xl">
           <div className="space-y-8 mb-12">
              <Link href="/blog" className="flex items-center gap-2 text-elite-primary-400 hover:text-elite-primary-900 transition-colors text-xs font-bold uppercase tracking-widest">
                 <ChevronLeft size={16} /> Back to Blog
              </Link>
              <div className="space-y-4">
                 <Badge variant="accent">TECH TRENDS</Badge>
                 <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk tracking-tighter leading-tight text-elite-primary-900 dark:text-white">
                    The African Tech Revolution: Why Now is the Best Time to Learn.
                 </h1>
                 <div className="flex flex-wrap items-center gap-6 text-sm text-elite-primary-500 font-medium">
                    <div className="flex items-center gap-2">
                       <div className="w-10 h-10 rounded-full bg-elite-primary-100 flex items-center justify-center font-bold">DM<MobileBottomNav />
      </div>
                       <span>By David Mensah</span>
                    <MobileBottomNav />
      </div>
                    <div className="flex items-center gap-2"><Clock size={18} /> 10 min read<MobileBottomNav />
      </div>
                    <span>Published Feb 15, 2024</span>
                 <MobileBottomNav />
      </div>
              <MobileBottomNav />
      </div>
           <MobileBottomNav />
      </div>

           <div className="aspect-[21/9] bg-elite-primary-50 rounded-[40px] mb-12" />

           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8 prose prose-elite dark:prose-invert max-w-none">
                 <p className="text-xl text-elite-primary-600 dark:text-elite-primary-300 leading-relaxed font-medium">
                    The landscape of technology in Africa is shifting at an unprecedented pace. From Lagos to Nairobi, Cairo to Cape Town, a new generation of digital architects is rising.
                 </p>

                 <h2 className="text-3xl font-bold font-space-grotesk mt-12">The Rise of the Digital Native</h2>
                 <p>
                    Africa has the world's youngest population. This demographic dividend is now being leveraged through technology. As mobile connectivity reaches the farthest corners of the continent, the barriers to entry for global tech careers are crumbling.
                 </p>

                 <div className="my-8 p-8 bg-elite-primary-50 dark:bg-elite-primary-900/50 rounded-3xl border-l-4 border-l-elite-accent-500 italic text-lg text-elite-primary-900 dark:text-white font-medium">
                    "The next Google or Stripe won't just be built for Africa; it will be built in Africa, by talent trained on platforms like ELITE."
                 <MobileBottomNav />
      </div>

                 <h2 className="text-3xl font-bold font-space-grotesk mt-12">Why Remote Work is a Game Changer</h2>
                 <p>
                    For the first time in history, a developer in Accra can work for a multi-billion dollar company in San Francisco without leaving their home. This borderless economy is creating wealth and driving innovation across the continent.
                 </p>

                 <div className="mt-12 pt-12 border-t border-elite-primary-100 dark:border-elite-primary-900 flex justify-between items-center">
                    <div className="flex gap-4">
                       <Button variant="outline" size="sm"><Share2 size={16} className="mr-2" /> Share</Button>
                       <Button variant="outline" size="sm"><Bookmark size={16} className="mr-2" /> Save</Button>
                    <MobileBottomNav />
      </div>
                    <div className="flex gap-2">
                       {["Next.js", "Africa", "Careers"].map(t => (
                         <Badge key={t} variant="primary" className="text-[10px]">{t}</Badge>
                       ))}
                    <MobileBottomNav />
      </div>
                 <MobileBottomNav />
      </div>
              <MobileBottomNav />
      </div>

              {/* Sticky Author Sidebar */}
              <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-8">
                 <Card className="border-none shadow-xl">
                    <CardContent className="p-8 space-y-6">
                       <h3 className="font-bold uppercase tracking-widest text-[10px] text-elite-primary-400">About the Author</h3>
                       <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-2xl bg-elite-primary-100 flex items-center justify-center font-bold text-xl">DM<MobileBottomNav />
      </div>
                          <div>
                             <div className="font-bold text-lg leading-tight">David Mensah<MobileBottomNav />
      </div>
                             <div className="text-xs text-elite-primary-500">Senior Engineer @ ELCODERS<MobileBottomNav />
      </div>
                          <MobileBottomNav />
      </div>
                       <MobileBottomNav />
      </div>
                       <p className="text-xs text-elite-primary-500 leading-relaxed">David is passionate about scaling tech ecosystems in Africa and has trained over 5,000 developers.</p>
                       <Button variant="primary" className="w-full text-xs font-bold uppercase tracking-widest">Follow David</Button>
                    </CardContent>
                 </Card>

                 <Card className="bg-elite-primary-950 text-white p-8 border-none shadow-xl">
                    <CardContent className="p-0 space-y-4">
                       <h3 className="font-bold text-xl font-space-grotesk">Ready to join the revolution?</h3>
                       <p className="text-xs text-elite-primary-300">Start learning the skills of the future today for free.</p>
                       <Button variant="accent" className="w-full" asChild>
                          <Link href="/register">Get Started <ArrowRight size={16} className="ml-2" /></Link>
                       </Button>
                    </CardContent>
                 </Card>
              </aside>
           <MobileBottomNav />
      </div>
        </article>
      </main>

      <Footer />
    <MobileBottomNav />
      </div>
  );
}
