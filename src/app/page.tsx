import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-elite-primary-950">
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
            </div>
          </div>
        </section>

        {/* ... Rest of landing page content (shortened for brevity in this step) ... */}
        <section className="py-24 bg-white dark:bg-elite-primary-950 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to start?</h2>
            <Button size="lg" variant="accent" asChild><Link href="/register">Join 50,000+ Learners</Link></Button>
        </section>
      </main>

      <Footer />
    </div>
  );
}
