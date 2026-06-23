
"use client";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";

export default function CourseDetail() {
  const [activeTab, setActiveTab] = useState("overview");
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-8 mt-16">
        <h1 className="text-3xl font-bold">Course Details</h1>
        <p className="mt-4">{"It's time to dive deep into technical concepts."}</p>
      </main>
      <Footer />
    </div>
  );
}
