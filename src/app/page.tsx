
"use client";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="pt-32 pb-20 bg-elite-primary-950 text-white text-center">
          <h1 className="text-5xl font-bold">{"Learn Tech Skills. Build Africa's Future."}</h1>
          <Button variant="accent" className="mt-8">Start Learning Free</Button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
