import React from 'react';
import { useState } from 'react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <aside className="w-64 bg-[#2D1B69] text-white p-6">
        <h1 className="text-2xl font-black mb-12">ELITE Desktop</h1>
        <nav className="space-y-4">
          <div className="font-bold opacity-60">Dashboard</div>
          <div className="font-bold opacity-60">Courses</div>
          <div className="font-bold opacity-60">Settings</div>
        </nav>
      </aside>
      <main className="flex-1 p-12">
        <header className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Welcome back, John!</h2>
          <div className="w-12 h-12 rounded-full bg-slate-300"></div>
        </header>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-slate-400 font-bold uppercase text-xs mb-2">XP Progress</h3>
            <div className="text-3xl font-bold">12,450 XP</div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-slate-400 font-bold uppercase text-xs mb-2">Coins</h3>
            <div className="text-3xl font-bold">2,450</div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-slate-400 font-bold uppercase text-xs mb-2">Streak</h3>
            <div className="text-3xl font-bold">7 Days</div>
          </div>
        </div>
        <div className="mt-12 bg-white p-12 rounded-3xl shadow-lg border border-slate-100 text-center">
            <h3 className="text-2xl font-bold mb-4">Desktop Optimization Active</h3>
            <p className="text-slate-500">The ELITE Desktop app is running with hardware acceleration.</p>
        </div>
      </main>
    </div>
  );
}

export default App;
