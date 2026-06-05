"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent } from "@/components/ui/Card";
import { Mail, MessageCircle, MapPin, Phone, Send, Globe, Github, Linkedin, Twitter } from "lucide-react";



export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 bg-elite-primary-50 dark:bg-elite-primary-950/50">
        <div className="container mx-auto px-4">
           <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
              <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk">Get in Touch</h1>
              <p className="text-xl text-elite-primary-500">Have questions? We're here to help you build your future.</p>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div className="space-y-8">
                 <div className="space-y-6">
                    <h2 className="text-2xl font-bold font-space-grotesk">Contact Information</h2>
                    <p className="text-elite-primary-500">Reach out via any of these channels. Our team typically responds within 24 hours.</p>
                 </div>

                 <div className="space-y-4">
                    {[
                      { icon: Mail, label: "Email", value: "support@elites.africa", href: "mailto:support@elites.africa" },
                      { icon: Phone, label: "Phone", value: "+234 800 ELITE AF", href: "tel:+234800123456" },
                      { icon: MapPin, label: "Office", value: "Lagos, Nigeria | Nairobi, Kenya", href: "#" },
                      { icon: MessageCircle, label: "Live Chat", value: "Available 9 AM - 6 PM GMT", href: "#" },
                    ].map((item, i) => (
                      <a key={i} href={item.href} className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-elite-primary-900 border border-elite-primary-100 dark:border-elite-primary-800 hover:border-elite-primary-400 transition-all group">
                         <div className="w-12 h-12 bg-elite-primary-50 dark:bg-elite-primary-950 rounded-xl flex items-center justify-center text-elite-primary-600 group-hover:bg-elite-primary-600 group-hover:text-white transition-all">
                            <item.icon size={20} />
                         </div>
                         <div>
                            <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">{item.label}</div>
                            <div className="font-bold text-elite-primary-900 dark:text-white">{item.value}</div>
                         </div>
                      </a>
                    ))}
                 </div>

                 <div className="pt-8 space-y-4">
                    <h3 className="font-bold">Follow Our Journey</h3>
                    <div className="flex gap-3">
                       {[Twitter, Github, Linkedin, Globe].map((Icon, i) => (
                         <button key={i} className="w-10 h-10 rounded-full bg-elite-primary-950 text-white flex items-center justify-center hover:bg-elite-accent-500 transition-colors">
                            <Icon size={18} />
                         </button>
                       ))}
                    </div>
                 </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                 <Card className="border-none shadow-2xl overflow-hidden">
                    <CardContent className="p-8 md:p-12 space-y-8">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Input label="Full Name" placeholder="John Doe" />
                          <Input label="Email Address" type="email" placeholder="john@example.com" />
                       </div>
                       <div className="space-y-1.5">
                          <label className="text-sm font-medium">Subject</label>
                          <select className="w-full h-10 px-3 rounded-lg border border-elite-primary-200 dark:border-elite-primary-800 bg-white dark:bg-elite-primary-950 text-sm">
                             <option>General Inquiry</option>
                             <option>Technical Support</option>
                             <option>Tutor Application</option>
                             <option>Business Partnerships</option>
                          </select>
                       </div>
                       <div className="space-y-1.5">
                          <label className="text-sm font-medium">Message</label>
                          <textarea
                           className="w-full p-4 rounded-lg border border-elite-primary-200 dark:border-elite-primary-800 bg-white dark:bg-elite-primary-950 text-sm min-h-[200px] outline-none focus:ring-2 focus:ring-elite-primary-500"
                           placeholder="How can we help you?"
                          />
                       </div>
                       <Button variant="accent" size="lg" className="w-full">
                          Send Message <Send size={18} className="ml-2" />
                       </Button>
                    </CardContent>
                 </Card>
              </div>
           </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
