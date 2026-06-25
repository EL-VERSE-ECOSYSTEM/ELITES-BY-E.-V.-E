"use client";

import { useState } from "react";
import {
  Search,
  Send,
  Paperclip,
  MoreVertical,
  Phone,
  Video,
  User,
  Check,
  CheckCheck
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const MOCK_CHATS = [
  { id: 1, name: "Dr. Smith", lastMessage: "How is the Next.js project going?", time: "10:30 AM", unread: 2, online: true },
  { id: 2, name: "Sarah Kamau", lastMessage: "I've uploaded the new notes.", time: "Yesterday", unread: 0, online: false },
  { id: 3, name: "David Mensah", lastMessage: "Can we reschedule our session?", time: "Oct 22", unread: 0, online: true },
];

export default function MessagesPage() {
  const [activeChat, setActiveChat] = useState(MOCK_CHATS[0]);
  const [message, setMessage] = useState("");

  return (
    <div className="h-[calc(100vh-80px)] bg-white dark:bg-elite-primary-950 flex overflow-hidden">
      {/* Sidebar: Chat List */}
      <div className="w-full md:w-80 border-r dark:border-elite-primary-800 flex flex-col">
        <div className="p-4 border-b dark:border-elite-primary-800 space-y-4">
           <h1 className="text-xl font-bold font-space-grotesk">Messages</h1>
           <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-elite-primary-400" size={16} />
              <Input placeholder="Search messages..." className="pl-10 h-10 rounded-xl" />
           </div>
        </div>
        <div className="flex-1 overflow-y-auto">
           {MOCK_CHATS.map((chat) => (
             <button
               key={chat.id}
               onClick={() => setActiveChat(chat)}
               className={cn(
                 "w-full p-4 flex items-center gap-3 transition-colors hover:bg-elite-primary-50 dark:hover:bg-elite-primary-900",
                 activeChat.id === chat.id && "bg-elite-primary-50 dark:bg-elite-primary-900 border-r-4 border-elite-accent-500"
               )}
             >
               <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-elite-primary-100 flex items-center justify-center font-bold">
                    {chat.name[0]}
                  </div>
                  {chat.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-elite-success border-2 border-white dark:border-elite-primary-950 rounded-full" />}
               </div>
               <div className="flex-1 text-left min-w-0">
                  <div className="flex justify-between items-center mb-1">
                     <span className="font-bold text-sm truncate">{chat.name}</span>
                     <span className="text-[10px] text-elite-primary-400">{chat.time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <p className="text-xs text-elite-primary-500 truncate">{chat.lastMessage}</p>
                     {chat.unread > 0 && (
                       <div className="w-4 h-4 rounded-full bg-elite-accent-500 text-white text-[8px] flex items-center justify-center font-bold">
                         {chat.unread}
                       </div>
                     )}
                  </div>
               </div>
             </button>
           ))}
        </div>
      </div>

      {/* Main: Chat View */}
      <div className="hidden md:flex flex-1 flex-col bg-elite-primary-50/30 dark:bg-elite-primary-900/10">
        <header className="p-4 bg-white dark:bg-elite-primary-950 border-b dark:border-elite-primary-800 flex justify-between items-center">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-elite-primary-100 flex items-center justify-center font-bold">
                {activeChat.name[0]}
              </div>
              <div>
                 <div className="font-bold text-sm">{activeChat.name}</div>
                 <div className="text-[10px] text-elite-success font-bold uppercase">{activeChat.online ? "Online" : "Offline"}</div>
              </div>
           </div>
           <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-elite-primary-400 hover:text-elite-accent-500"><Phone size={18} /></Button>
              <Button variant="ghost" size="icon" className="text-elite-primary-400 hover:text-elite-accent-500"><Video size={18} /></Button>
              <Button variant="ghost" size="icon" className="text-elite-primary-400"><MoreVertical size={18} /></Button>
           </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
           <div className="flex justify-center">
              <span className="px-3 py-1 bg-elite-primary-100 dark:bg-elite-primary-800 rounded-full text-[10px] font-bold text-elite-primary-500 uppercase">Today</span>
           </div>

           <div className="flex flex-col gap-4">
              <div className="flex justify-start">
                 <div className="max-w-[70%] p-4 rounded-2xl bg-white dark:bg-elite-primary-900 shadow-sm text-sm">
                    Hello! I've reviewed your latest submission. Great work on the authentication logic.
                 </div>
              </div>
              <div className="flex justify-end">
                 <div className="max-w-[70%] p-4 rounded-2xl bg-elite-accent-500 text-white shadow-md text-sm relative">
                    Thank you, Doctor! I'm now working on the dashboard integration.
                    <div className="absolute -bottom-5 right-0 flex items-center gap-1 text-[10px] text-elite-primary-400 font-bold uppercase">
                       10:42 AM <CheckCheck size={12} className="text-elite-accent-500" />
                    </div>
                 </div>
              </div>
              <div className="flex justify-start pt-4">
                 <div className="max-w-[70%] p-4 rounded-2xl bg-white dark:bg-elite-primary-900 shadow-sm text-sm">
                    Excellent. How is the Next.js project going?
                 </div>
              </div>
           </div>
        </div>

        <div className="p-4 bg-white dark:bg-elite-primary-950 border-t dark:border-elite-primary-800">
           <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="text-elite-primary-400"><Paperclip size={20} /></Button>
              <div className="flex-1 relative">
                 <Input
                   placeholder="Type a message..."
                   className="h-12 pr-12 rounded-xl bg-elite-primary-50 dark:bg-elite-primary-900 border-none"
                   value={message}
                   onChange={(e) => setMessage(e.target.value)}
                 />
                 <Button
                   variant="accent"
                   size="icon"
                   className="absolute right-1.5 top-1.5 h-9 w-9 rounded-lg"
                   disabled={!message}
                 >
                    <Send size={18} />
                 </Button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
