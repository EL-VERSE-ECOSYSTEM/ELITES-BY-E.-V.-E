import React, { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [downloads, setDownloads] = useState([
    { id: 1, title: 'Introduction to React Server Components', progress: 100, status: 'completed' },
    { id: 2, title: 'Advanced Tailwind CSS v4', progress: 65, status: 'downloading' },
    { id: 3, title: 'System Design for African Startups', progress: 0, status: 'queued' },
  ]);

  return (
    <div className="min-h-screen bg-slate-50 flex overflow-hidden">
      {/* Sidebar */}
      <aside className="w-72 bg-[#2D1B69] text-white flex flex-col">
        <div className="p-8 pb-12">
           <h1 className="text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-[#F59E0B]">ELITE</h1>
           <p className="text-[10px] font-bold text-[#F59E0B] tracking-[4px] uppercase mt-1">Desktop</p>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {['Dashboard', 'My Learning', 'Downloads', 'Code Lab', 'Settings'].map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item.toLowerCase().replace(' ', '-'))}
              className={`w-full text-left px-6 py-4 rounded-2xl font-bold text-sm transition-all ${
                activeTab === item.toLowerCase().replace(' ', '-') ? 'bg-white/10 text-[#F59E0B]' : 'text-white/60 hover:bg-white/5'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="p-6">
           <div className="bg-white/5 rounded-3xl p-6 border border-white/10">
              <div className="text-xs font-bold text-white/40 uppercase mb-4">Hardware Acceleration</div>
              <div className="flex items-center gap-3">
                 <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                 <span className="text-xs font-bold">Optimized Mode Active</span>
              </div>
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        {/* Title Bar Placeholder (Tauri controls) */}
        <header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between px-12">
           <div className="text-sm font-bold text-slate-400">Professional Mode</div>
           <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                 <span className="w-8 h-8 rounded-full bg-[#F59E0B] flex items-center justify-center font-bold text-white text-xs">D</span>
                 <span className="font-bold text-sm text-slate-900">David Mensah</span>
              </div>
           </div>
        </header>

        <div className="p-12 space-y-12 max-w-6xl">
           <div className="flex justify-between items-end">
              <div>
                 <h2 className="text-4xl font-black text-slate-900 font-space-grotesk tracking-tight">Offline Hub</h2>
                 <p className="text-slate-500 mt-2">Manage your downloaded courses and watch them offline anytime.</p>
              </div>
              <button className="bg-[#F59E0B] text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-[#F59E0B]/20 hover:-translate-y-1 transition-all">
                 Browse Catalog
              </button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Downloads Section */}
              <div className="space-y-6">
                 <h3 className="text-xl font-bold flex items-center gap-3">
                    Active Downloads
                    <span className="text-[10px] bg-slate-200 px-2 py-1 rounded-full">{downloads.filter(d => d.status !== 'completed').length}</span>
                 </h3>
                 <div className="space-y-4">
                    {downloads.map((d) => (
                      <div key={d.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
                         <div className="flex justify-between items-start">
                            <div className="max-w-[70%]">
                               <div className="text-sm font-bold text-slate-900 leading-tight">{d.title}</div>
                               <div className="text-[10px] text-slate-400 font-bold uppercase mt-1 tracking-widest">{d.status}</div>
                            </div>
                            {d.status === 'completed' ? (
                               <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xs">✓</div>
                            ) : (
                               <div className="text-xs font-bold text-slate-400">{d.progress}%</div>
                            )}
                         </div>
                         <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div
                              className={`h-full transition-all duration-500 ${d.status === 'completed' ? 'bg-emerald-500' : 'bg-[#2D1B69]'}`}
                              style={{ width: `${d.progress}%` }}
                            />
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-6">
                 <h3 className="text-xl font-bold">Quick Insights</h3>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#2D1B69] p-8 rounded-3xl text-white">
                       <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-4">Total Watch Time</div>
                       <div className="text-3xl font-black">42.5<span className="text-sm font-medium ml-1">Hrs</span></div>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                       <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Library Size</div>
                       <div className="text-3xl font-black text-slate-900">12.4<span className="text-sm font-medium ml-1 text-slate-400">GB</span></div>
                    </div>
                 </div>

                 <div className="bg-gradient-to-br from-[#F59E0B] to-[#D97706] p-8 rounded-3xl text-white relative overflow-hidden group">
                    <div className="relative z-10">
                       <h4 className="text-2xl font-black mb-2">Sync with Mobile</h4>
                       <p className="text-sm text-white/80 max-w-[200px]">QR code sync is now available for premium members.</p>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-all duration-700"></div>
                 </div>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
}

export default App;
