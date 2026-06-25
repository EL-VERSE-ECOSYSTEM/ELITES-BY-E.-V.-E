"use client";

import { useState } from "react";
import {
  AlertTriangle,
  Search,
  Filter,
  MessageSquare,
  CheckCircle,
  XCircle,
  ShieldAlert,
  ArrowRight,
  MoreVertical,
  History,
  Scale
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const MOCK_DISPUTES = [
  {
    id: "DIS-1002",
    raiser: "Alex Johnson",
    raiserRole: "STUDENT",
    target: "Dr. Smith",
    subject: "Resource Quality",
    status: "OPEN",
    severity: "MEDIUM",
    date: "10m ago"
  },
  {
    id: "DIS-1001",
    raiser: "Prof. X",
    raiserRole: "TUTOR",
    target: "Maria Garcia",
    subject: "Payment Issue",
    status: "IN_REVIEW",
    severity: "HIGH",
    date: "2h ago"
  },
  {
    id: "DIS-0998",
    raiser: "Sam Wilson",
    raiserRole: "STUDENT",
    target: "Tutor Jane",
    subject: "Unmet Promises",
    status: "RESOLVED",
    severity: "LOW",
    date: "1 day ago"
  },
];

export default function AdminDisputesPage() {
  const [selectedDispute, setSelectedDispute] = useState<any>(null);

  return (
    <div className="p-6 space-y-8 pb-24">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-space-grotesk flex items-center gap-3">
            <Scale className="text-elite-accent-500" /> Dispute Resolution Center
          </h1>
          <p className="text-elite-primary-500">Impartial mediation and resolution for ELITES users</p>
        </div>
        <div className="flex gap-2">
          <Badge variant="error" className="h-8 px-4 text-xs font-bold animate-pulse">
            <ShieldAlert size={14} className="mr-2" /> 5 Urgent Disputes
          </Badge>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Dispute List */}
        <div className="lg:col-span-1 space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-elite-primary-400" size={18} />
            <Input placeholder="Search disputes..." className="pl-10 h-11" />
          </div>

          <div className="space-y-3">
            {MOCK_DISPUTES.map((dispute) => (
              <button
                key={dispute.id}
                onClick={() => setSelectedDispute(dispute)}
                className={cn(
                  "w-full text-left p-4 rounded-2xl border transition-all hover:shadow-md",
                  selectedDispute?.id === dispute.id
                    ? "border-elite-accent-500 bg-elite-accent-500/5 ring-2 ring-elite-accent-500/10"
                    : "border-elite-primary-100 bg-white dark:bg-elite-primary-900"
                )}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">{dispute.id}</span>
                  <Badge
                    variant={dispute.status === "OPEN" ? "error" : dispute.status === "RESOLVED" ? "success" : "warning"}
                    className="text-[8px] h-4"
                  >
                    {dispute.status}
                  </Badge>
                </div>
                <h4 className="font-bold text-sm mb-1">{dispute.subject}</h4>
                <div className="flex items-center gap-2 text-[10px] text-elite-primary-500">
                  <span className="font-bold">{dispute.raiser}</span>
                  <span>vs</span>
                  <span className="font-bold">{dispute.target}</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                   <span className="text-[10px] text-elite-primary-400">{dispute.date}</span>
                   <div className={cn(
                     "w-2 h-2 rounded-full",
                     dispute.severity === "HIGH" ? "bg-elite-error" : dispute.severity === "MEDIUM" ? "bg-elite-warning" : "bg-elite-success"
                   )} />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Detailed View */}
        <div className="lg:col-span-2">
          {selectedDispute ? (
            <Card className="border-none shadow-xl sticky top-6 overflow-hidden">
              <CardHeader className="bg-elite-primary-900 text-white p-8">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <Badge variant="accent" className="bg-elite-accent-500 mb-2">Case #{selectedDispute.id}</Badge>
                    <CardTitle className="text-2xl">{selectedDispute.subject}</CardTitle>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="text-white/60 hover:text-white">
                      <MoreVertical size={20} />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                {/* Parties Involved */}
                <div className="grid grid-cols-2 gap-8 relative">
                   <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-elite-primary-50 dark:bg-elite-primary-800 flex items-center justify-center font-bold text-xs z-10">VS</div>
                   <div className="space-y-4">
                      <label className="text-xs font-bold uppercase tracking-widest text-elite-primary-400">Complainant</label>
                      <div className="flex items-center gap-3">
                         <div className="w-12 h-12 rounded-xl bg-elite-primary-100 flex items-center justify-center font-bold text-lg">{selectedDispute.raiser[0]}</div>
                         <div>
                            <div className="font-bold">{selectedDispute.raiser}</div>
                            <Badge variant="primary" className="text-[10px]">{selectedDispute.raiserRole}</Badge>
                         </div>
                      </div>
                   </div>
                   <div className="space-y-4 text-right">
                      <label className="text-xs font-bold uppercase tracking-widest text-elite-primary-400">Defendant</label>
                      <div className="flex items-center gap-3 justify-end">
                         <div>
                            <div className="font-bold">{selectedDispute.target}</div>
                            <Badge variant="accent" className="text-[10px]">TUTOR</Badge>
                         </div>
                         <div className="w-12 h-12 rounded-xl bg-elite-accent-500 text-white flex items-center justify-center font-bold text-lg">{selectedDispute.target[0]}</div>
                      </div>
                   </div>
                </div>

                {/* Evidence & Case Body */}
                <div className="space-y-4">
                   <h3 className="font-bold text-lg flex items-center gap-2">
                      <ShieldAlert size={20} className="text-elite-error" /> Case Evidence
                   </h3>
                   <div className="p-6 bg-elite-primary-50 dark:bg-elite-primary-900 rounded-2xl border border-elite-primary-100 dark:border-elite-primary-800 space-y-4">
                      <p className="text-sm leading-relaxed text-elite-primary-700 dark:text-elite-primary-300">
                         "The tutor promised a live 1-on-1 review session as part of the Premium package, but has ignored all messages for two weeks. The resource materials provided also contain broken links that prevent completion of the project."
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                         <div className="aspect-video bg-elite-primary-200 rounded-xl flex items-center justify-center text-[10px] font-bold text-elite-primary-500 uppercase">Screenshot_1.png</div>
                         <div className="aspect-video bg-elite-primary-200 rounded-xl flex items-center justify-center text-[10px] font-bold text-elite-primary-500 uppercase">Chat_Log.pdf</div>
                      </div>
                   </div>
                </div>

                {/* Resolution Actions */}
                <div className="space-y-4 pt-4 border-t dark:border-elite-primary-800">
                   <h3 className="font-bold">Admin Verdict</h3>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <Button variant="outline" className="flex-col h-auto p-4 gap-2 border-elite-success/20 hover:bg-elite-success/5 hover:border-elite-success">
                         <CheckCircle className="text-elite-success" />
                         <span className="text-xs font-bold">Release Funds</span>
                      </Button>
                      <Button variant="outline" className="flex-col h-auto p-4 gap-2 border-elite-warning/20 hover:bg-elite-warning/5 hover:border-elite-warning">
                         <AlertTriangle className="text-elite-warning" />
                         <span className="text-xs font-bold">Issue Refund</span>
                      </Button>
                      <Button variant="danger" className="flex-col h-auto p-4 gap-2">
                         <XCircle />
                         <span className="text-xs font-bold">Ban User</span>
                      </Button>
                   </div>
                   <div className="space-y-3">
                      <textarea
                        className="w-full min-h-[100px] rounded-xl border border-elite-primary-100 bg-white p-4 text-sm focus:ring-2 focus:ring-elite-accent-500 dark:bg-elite-primary-950 dark:border-elite-primary-800"
                        placeholder="Explain the final decision..."
                      />
                      <Button variant="accent" className="w-full h-12 text-lg font-bold">Confirm Verdict & Close Case</Button>
                   </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-4 border-2 border-dashed border-elite-primary-100 rounded-3xl">
               <div className="w-20 h-20 bg-elite-primary-50 dark:bg-elite-primary-900 rounded-full flex items-center justify-center text-elite-primary-300">
                  <MessageSquare size={40} />
               </div>
               <div className="max-w-xs">
                  <h3 className="font-bold text-xl">Select a Case</h3>
                  <p className="text-sm text-elite-primary-500">Review evidence from both parties before issuing a final decision.</p>
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
