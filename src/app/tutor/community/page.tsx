"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Rocket, Shield, Globe } from "lucide-react";
import Link from "next/link";

export default function PublicPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-12 text-center shadow-2xl border-none bg-gradient-to-br from-white to-elite-primary-50">
           <CardContent className="space-y-8">
              <div className="w-20 h-20 bg-elite-primary-50 rounded-2xl flex items-center justify-center mx-auto text-elite-primary-600">
                 <Rocket size={40} />
              </div>
              <h1 className="text-4xl font-bold font-space-grotesk text-elite-primary-900">Premium Tech Learning</h1>
              <p className="text-lg text-elite-primary-600 leading-relaxed max-w-2xl mx-auto">
                 ELITE is building the future of African tech talent. Access world-class curriculum and join a community of thousands.
              </p>
              <Button variant="accent" size="lg" asChild><Link href="/register">Join ELITE Now</Link></Button>
           </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
