
"use client";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-8 mt-16">
        <Badge variant="accent">OUR MISSION</Badge>
        <h1 className="text-4xl font-bold mt-4">Empowering Africa{"'"}s Next Generation of Tech Leaders.</h1>
        <p className="mt-4 text-xl text-gray-600">ELITE is on a mission to train, certify, and connect 1 million African tech talents to global opportunities by 2030.</p>
      </main>
      <Footer />
    </div>
  );
}
