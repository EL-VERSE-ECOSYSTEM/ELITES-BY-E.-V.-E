"use client";

import { useState } from "react";
import {
  Wallet,
  ArrowUpRight,
  ArrowDownLeft,
  History,
  Plus,
  CreditCard,
  TrendingUp,
  Briefcase,
  AlertCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function WalletPage() {
  const [userRole] = useState<"STUDENT" | "TUTOR">("STUDENT"); // Mocked role

  return (
    <div className="min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950 pb-20">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <header className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold font-space-grotesk">My Wallet</h1>
            <p className="text-elite-primary-500">Manage your earnings and payments</p>
          </div>
          <Badge variant="accent" className="h-6">ELITES ID: #8824</Badge>
        </header>

        {/* Balance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {userRole === "STUDENT" ? (
            <>
              <Card className="bg-elite-primary-900 text-white border-none shadow-xl overflow-hidden relative group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                  <Wallet size={80} />
                </div>
                <CardContent className="p-6 space-y-4 relative">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-elite-primary-400">Current Balance</div>
                  <div className="text-3xl font-bold font-space-grotesk">,250.00</div>
                  <div className="flex gap-2">
                    <Button variant="accent" size="sm" className="h-8 text-[10px] uppercase font-bold" asChild>
                      <Link href="/wallet/withdraw">Withdraw</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-elite-primary-400">Total Paid for Courses</div>
                      <div className="text-2xl font-bold font-space-grotesk">50.00</div>
                    </div>
                    <div className="p-2 bg-elite-primary-50 dark:bg-elite-primary-900 rounded-lg text-elite-primary-600">
                      <CreditCard size={20} />
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-elite-success">
                    <TrendingUp size={12} /> 12 Courses Enrolled
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-elite-primary-400">Pay from Projects</div>
                      <div className="text-2xl font-bold font-space-grotesk">00.00</div>
                    </div>
                    <div className="p-2 bg-elite-primary-50 dark:bg-elite-primary-900 rounded-lg text-elite-primary-600">
                      <Briefcase size={20} />
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-elite-accent-500">
                    <AlertCircle size={12} /> EL ACCESS Earnings
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            <>
              <Card className="md:col-span-2 bg-elite-primary-900 text-white border-none shadow-xl overflow-hidden relative group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                  <Wallet size={120} />
                </div>
                <CardContent className="p-8 flex justify-between items-center relative">
                  <div className="space-y-4">
                    <div className="text-xs font-bold uppercase tracking-widest text-elite-primary-400">Available Earnings</div>
                    <div className="text-5xl font-bold font-space-grotesk">,850.50</div>
                    <div className="flex gap-3">
                      <Button variant="accent" size="lg" asChild>
                        <Link href="/wallet/withdraw">Request Withdrawal</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm bg-elite-accent-500/5 border-l-4 border-l-elite-accent-500">
                <CardContent className="p-6 space-y-4">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-elite-primary-400">Lifetime Withdrawn</div>
                  <div className="text-3xl font-bold font-space-grotesk text-elite-accent-500">2,400.00</div>
                  <div className="text-[10px] text-elite-primary-500">Last withdrawal: 4 days ago</div>
                </CardContent>
              </Card>
            </>
          )}
        </div>

        {/* Quick Actions & Korapay */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-space-grotesk flex items-center gap-2">
                <Plus size={20} /> Add Funds
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-elite-primary-500">Top up your wallet to enroll in more advanced courses.</p>
              <Button className="w-full" asChild>
                <a href="https://checkout.korapay.com/pay/jz9dTrCxCRGCyRv" target="_blank" rel="noopener noreferrer">
                  Pay via Korapay
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-space-grotesk flex items-center gap-2">
                <History size={20} /> Recent Transactions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { type: "deposit", title: "Wallet Top-up", amount: "+00.00", date: "Today", status: "Completed" },
                { type: "purchase", title: "Fullstack Course", amount: "-50.00", date: "Yesterday", status: "Completed" },
                { type: "earning", title: "EL CODERS Project", amount: "+00.00", date: "Oct 12", status: "Pending" },
              ].map((tx, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-elite-primary-50 dark:hover:bg-elite-primary-900 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "p-2 rounded-lg",
                      tx.type === "deposit" || tx.type === "earning" ? "bg-elite-success/10 text-elite-success" : "bg-elite-error/10 text-elite-error"
                    )}>
                      {tx.type === "deposit" || tx.type === "earning" ? <ArrowDownLeft size={16} /> : <ArrowUpRight size={16} />}
                    </div>
                    <div>
                      <div className="text-sm font-bold">{tx.title}</div>
                      <div className="text-[10px] text-elite-primary-500">{tx.date}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={cn(
                      "text-sm font-bold",
                      tx.type === "deposit" || tx.type === "earning" ? "text-elite-success" : "text-elite-error"
                    )}>{tx.amount}</div>
                    <Badge variant={tx.status === "Completed" ? "success" : "warning"} className="text-[8px] px-1 h-4">{tx.status}</Badge>
                  </div>
                </div>
              ))}
              <Button variant="ghost" className="w-full text-xs">View All History</Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <MobileBottomNav />
    </div>
  );
}
