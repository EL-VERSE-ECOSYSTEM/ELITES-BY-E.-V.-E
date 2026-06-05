import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Search, Star, MessageSquare, BookOpen, Users, MapPin, ChevronRight, Globe, Shield } from "lucide-react";
import Link from "next/link";
"use client";


export default function TutorDirectory() {
  const tutors = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    name: ["David Mensah", "Amara Okafor", "Kofi Anan", "Zainab Yusuf"][i % 4],
    title: ["Senior Software Engineer", "UX Design Lead", "Data Scientist", "Cybersecurity Expert"][i % 4],
    rating: 4.9,
    reviews: 124,
    students: 1500,
    price: 25,
    location: "Lagos, Nigeria",
    specialties: ["Next.js", "Cloud Architecture", "Python", "Security"],
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32 pb-20 bg-white dark:bg-elite-primary-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
            <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk">Meet Our Expert Tutors</h1>
            <p className="text-xl text-elite-primary-500">Learn from industry leaders across Africa and beyond. Get 1-on-1 mentorship and guidance.</p>
            <div className="relative max-w-2xl mx-auto mt-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-elite-primary-400" size={20} />
              <Input placeholder="Search by name, skill, or expertise..." className="pl-12 h-14 text-lg rounded-2xl" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tutors.map((tutor) => (
              <Card key={tutor.id} className="group hover:border-elite-accent-500 transition-all">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="relative w-24 h-24 mx-auto">
                    <div className="w-full h-full rounded-2xl bg-elite-primary-100 animate-pulse" />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-elite-success rounded-full border-4 border-white dark:border-elite-primary-900 flex items-center justify-center text-white">
                       <Shield size={14} fill="currentColor" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-space-grotesk">{tutor.name}</h3>
                    <p className="text-sm text-elite-primary-500">{tutor.title}</p>
                  </div>
                  <div className="flex items-center justify-center gap-1 text-elite-accent-500 font-bold">
                    <Star size={16} fill="currentColor" />
                    <span>{tutor.rating}</span>
                    <span className="text-xs text-elite-primary-400 font-medium">({tutor.reviews})</span>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {tutor.specialties.map((s) => (
                      <Badge key={s} variant="primary" className="text-[10px]">{s}</Badge>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-elite-primary-50 dark:border-elite-primary-800 grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-sm font-bold">{tutor.students}</div>
                      <div className="text-[10px] uppercase text-elite-primary-400 font-bold">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold">${tutor.price}/hr</div>
                      <div className="text-[10px] uppercase text-elite-primary-400 font-bold">Rate</div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/tutors/${tutor.id}`}>View Profile</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
