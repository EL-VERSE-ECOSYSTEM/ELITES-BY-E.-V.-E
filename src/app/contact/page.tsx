
"use client";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-8 mt-16">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-4">{"If you have any questions, don't hesitate to reach out."}</p>
      </main>
      <Footer />
    </div>
  );
}
