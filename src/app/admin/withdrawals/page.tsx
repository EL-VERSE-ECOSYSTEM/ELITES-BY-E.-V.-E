"use client";

import { useState } from "react";
import { Search, CheckCircle, XCircle, Eye, Download, CreditCard, Bitcoin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const MOCK_WITHDRAWALS = [
  {
    id: "WID-8821",
    user: "Sarah Kamau",
    role: "TUTOR",
    amount: 1250.00,
    method: "BANK_NGN",
    details: "Sarah Kamau | KCB Bank | 1234567890",
    status: "PENDING",
    date: "2023-10-24 09:15"
  },
  {
    id: "WID-8822",
    user: "David Mensah",
    role: "STUDENT",
    amount: 450.00,
    method: "CRYPTO_USDT_TRC20",
    details: "TR7NHqdj61L5sYDE6n3u6Su796EN",
    status: "PENDING",
    date: "2023-10-24 10:30"
  },
  {
    id: "WID-8819",
    user: "Aisha Yusuf",
    role: "TUTOR",
    amount: 3200.00,
    method: "BANK_USD",
    details: "Aisha Yusuf | Chase | 987654321 | SWIFT: CHASEUS33",
    status: "APPROVED",
    date: "2023-10-23 14:20"
  },
  {
    id: "WID-8815",
    user: "John Doe",
    role: "STUDENT",
    amount: 150.00,
    method: "BANK_NGN",
    details: "John Doe | GTBank | 0011223344",
    status: "REJECTED",
    date: "2023-10-22 11:05"
  },
];

export default function AdminWithdrawalsPage() {
  const [filter, setFilter] = useState("ALL");
  const [search, setSearch] = useState("");

  const filteredData = MOCK_WITHDRAWALS.filter(w => {
    if (filter !== "ALL" && w.status !== filter) return false;
    if (search && !w.user.toLowerCase().includes(search.toLowerCase()) && !w.id.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="p-6 space-y-8 pb-24">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-space-grotesk">Withdrawal Queue</h1>
          <p className="text-elite-primary-500">Approve or reject financial payout requests</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Download size={16} /> Export CSV
          </Button>
          <Button variant="accent" size="sm" className="gap-2">
            <CheckCircle size={16} /> Batch Approve
          </Button>
        </div>
      </header>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Pending Requests", value: "24", color: "text-elite-warning", icon: Clock },
          { label: "Total Amount Pending", value: ",450.00", color: "text-elite-primary-900", icon: CreditCard },
          { label: "Approved Today", value: "15", color: "text-elite-success", icon: CheckCircle },
          { label: "Rejected Today", value: "2", color: "text-elite-error", icon: XCircle },
        ].map((stat, i) => (
          <Card key={i} className="border-none shadow-sm">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-widest text-elite-primary-400">{stat.label}</div>
                <div className={cn("text-xl font-bold font-space-grotesk", stat.color)}>{stat.value}</div>
              </div>
              <div className="p-2 bg-elite-primary-50 dark:bg-elite-primary-900 rounded-lg text-elite-primary-400">
                <stat.icon size={20} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-none shadow-sm overflow-hidden">
        <CardHeader className="bg-elite-primary-50 dark:bg-elite-primary-900 border-b border-elite-primary-100 dark:border-elite-primary-800">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex gap-2">
              {["ALL", "PENDING", "APPROVED", "REJECTED"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all",
                    filter === f
                      ? "bg-elite-primary-900 text-white shadow-md"
                      : "bg-white dark:bg-elite-primary-800 text-elite-primary-500 hover:bg-elite-primary-100"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-elite-primary-400" size={16} />
              <Input
                placeholder="Search user or ID..."
                className="pl-10 h-10 w-full md:w-64"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-elite-primary-50/50 dark:bg-elite-primary-900/50 text-[10px] font-bold uppercase tracking-widest text-elite-primary-400 border-b border-elite-primary-100 dark:border-elite-primary-800">
                  <th className="px-6 py-4">Request ID</th>
                  <th className="px-6 py-4">User</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Method</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-elite-primary-100 dark:divide-elite-primary-800">
                {filteredData.map((withdrawal) => (
                  <tr key={withdrawal.id} className="group hover:bg-elite-primary-50 dark:hover:bg-elite-primary-900 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-xs">{withdrawal.id}</div>
                      <div className="text-[10px] text-elite-primary-400">{withdrawal.date}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-elite-primary-100 flex items-center justify-center text-[10px] font-bold">
                          {withdrawal.user[0]}
                        </div>
                        <div>
                          <div className="text-sm font-bold">{withdrawal.user}</div>
                          <Badge variant="primary" className="text-[8px] h-4">{withdrawal.role}</Badge>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-bold text-sm">${withdrawal.amount.toFixed(2)}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {withdrawal.method.startsWith('CRYPTO') ? <Bitcoin size={14} className="text-orange-500" /> : <CreditCard size={14} className="text-blue-500" />}
                        <span className="text-xs font-medium">{withdrawal.method.replace('CRYPTO_', '').replace('BANK_', '')}</span>
                      </div>
                      <div className="text-[10px] text-elite-primary-400 truncate max-w-[150px]">{withdrawal.details}</div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge
                        variant={withdrawal.status === "APPROVED" ? "success" : withdrawal.status === "REJECTED" ? "error" : "warning"}
                        className="text-[10px]"
                      >
                        {withdrawal.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-right">
                      {withdrawal.status === "PENDING" ? (
                        <div className="flex justify-end gap-2">
                          <Button variant="secondary" size="sm" className="h-8 w-8 p-0 bg-elite-success/10 text-elite-success hover:bg-elite-success hover:text-white border-none">
                            <CheckCircle size={16} />
                          </Button>
                          <Button variant="secondary" size="sm" className="h-8 w-8 p-0 bg-elite-error/10 text-elite-error hover:bg-elite-error hover:text-white border-none">
                            <XCircle size={16} />
                          </Button>
                        </div>
                      ) : (
                        <Button variant="ghost" size="sm" className="h-8 gap-2">
                          <Eye size={14} /> View
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
