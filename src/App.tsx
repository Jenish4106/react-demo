import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  LayoutDashboard,
  Server,
  Activity,
  ShieldCheck,
  Cpu,
  HardDrive,
  Wifi,
  Settings,
  Bell,
  Search,
  CheckCircle2,
  AlertTriangle,
  ArrowUpRight,
  TrendingUp,
  RefreshCw,
  Zap,
  Radio
} from 'lucide-react';

function DashboardHome() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  const stats = [
    { label: 'Server Status', value: 'Operational', change: '99.98% Uptime', icon: Server, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
    { label: 'CPU Utilization', value: '28.4%', change: '+2.1% from peak', icon: Cpu, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
    { label: 'Memory Allocation', value: '4.2 / 16 GB', change: '26% used', icon: HardDrive, color: 'text-indigo-400', bg: 'bg-indigo-500/10 border-indigo-500/20' },
    { label: 'Network Throughput', value: '1.24 Gbps', change: 'Live Latency: 12ms', icon: Wifi, color: 'text-violet-400', bg: 'bg-violet-500/10 border-violet-500/20' },
  ];

  const recentEvents = [
    { id: 1, title: 'Vite Dev Server started', time: 'Just now', type: 'success', detail: 'Port 3000 listening successfully' },
    { id: 2, title: 'Database connection verified', time: '2 mins ago', type: 'success', detail: 'Latency 4ms to primary cluster' },
    { id: 3, title: 'SSL Certificate active', time: '14 mins ago', type: 'info', detail: 'Auto-renewed for 90 days' },
    { id: 4, title: 'Cache memory cleared', time: '1 hour ago', type: 'warning', detail: 'Reclaimed 412 MB unreferenced buffers' },
  ];

  return (
    <>
      <Helmet>
        <title>Dashboard | Demo Server Management</title>
      </Helmet>

      <div className="space-y-6">
        {/* Top Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-900/50 via-slate-900 to-purple-900/40 p-6 md:p-8 border border-slate-800 shadow-xl">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Vite + React 18 + Tailwind Live
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Demo Project Setup Completed 🚀
              </h1>
              <p className="text-slate-400 mt-1 max-w-xl text-sm md:text-base">
                Server configuration, TypeScript, Tailwind CSS, React Router & Helmet are ready to build modern web applications.
              </p>
            </div>
            <button
              onClick={handleRefresh}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-lg shadow-indigo-600/25 active:scale-95 self-start md:self-auto"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              Refresh Metrics
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 transition-all hover:shadow-lg hover:shadow-indigo-500/5 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-slate-400">{stat.label}</span>
                  <div className={`p-2 rounded-xl border ${stat.bg}`}>
                    <Icon className={`w-4 h-4 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                  {stat.value}
                </div>
                <div className="flex items-center gap-1.5 mt-2 text-xs text-slate-400">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{stat.change}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Two Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Chart / Activity Container */}
          <div className="lg:col-span-2 rounded-2xl bg-slate-900/80 border border-slate-800/80 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-white">System Diagnostics</h2>
                <p className="text-xs text-slate-400">Real-time load balancing & resource health</p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                Live Data
              </span>
            </div>

            {/* Performance Bars */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-300">HTTP Response Time</span>
                  <span className="text-emerald-400 font-medium">18 ms (Optimal)</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-emerald-500 h-2.5 rounded-full w-[22%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-300">Vite HMR Hot Reload</span>
                  <span className="text-blue-400 font-medium">&lt; 35 ms</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-blue-500 h-2.5 rounded-full w-[15%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-300">Disk I/O Write Speed</span>
                  <span className="text-indigo-400 font-medium">850 MB/s</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-indigo-500 h-2.5 rounded-full w-[65%]" />
                </div>
              </div>
            </div>

            {/* Quick action cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-slate-800">
              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-slate-700 transition">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-amber-400" />
                  <div>
                    <div className="text-sm font-semibold text-white">Fast Refresh Ready</div>
                    <div className="text-xs text-slate-400">Vite dev server with Instant HMR</div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-slate-700 transition">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <div>
                    <div className="text-sm font-semibold text-white">TypeScript Strict</div>
                    <div className="text-xs text-slate-400">Strict type safety configured</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Log */}
          <div className="rounded-2xl bg-slate-900/80 border border-slate-800/80 p-6">
            <h2 className="text-lg font-semibold text-white mb-1">Recent Activity</h2>
            <p className="text-xs text-slate-400 mb-5">System status and configuration events</p>

            <div className="space-y-4">
              {recentEvents.map((evt) => (
                <div key={evt.id} className="flex items-start gap-3 text-xs">
                  <div className="mt-0.5">
                    {evt.type === 'success' && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                    {evt.type === 'info' && <Radio className="w-4 h-4 text-blue-400" />}
                    {evt.type === 'warning' && <AlertTriangle className="w-4 h-4 text-amber-400" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-slate-200">{evt.title}</p>
                    <p className="text-slate-400 truncate">{evt.detail}</p>
                  </div>
                  <span className="text-slate-500 whitespace-nowrap">{evt.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ServerDetails() {
  const configs = [
    { key: 'Framework', val: 'React 18.3' },
    { key: 'Bundler', val: 'Vite 5.2' },
    { key: 'Styling', val: 'Tailwind CSS 3.4' },
    { key: 'Language', val: 'TypeScript 5.5' },
    { key: 'Router', val: 'React Router DOM 6.26' },
    { key: 'SEO / Head', val: 'React Helmet Async 3.0' },
    { key: 'Typography', val: 'Archivo & Inter Variable Fonts' },
    { key: 'Icons', val: 'Lucide React' },
  ];

  return (
    <>
      <Helmet>
        <title>Server & Config Details | Demo</title>
      </Helmet>

      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Package & Server Configuration</h1>
          <p className="text-slate-400 text-sm mt-1">Details of installed dependencies and configured toolchain.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {configs.map((cfg, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <span className="text-sm text-slate-400">{cfg.key}</span>
              <span className="text-sm font-semibold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-lg border border-indigo-500/20">
                {cfg.val}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20">
                D
              </div>
              <div className="leading-tight">
                <span className="font-bold text-base text-white tracking-tight">DemoApp</span>
                <span className="block text-[11px] text-slate-400 font-mono">v0.0.1</span>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-1">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`
                }
              >
                <LayoutDashboard className="w-4 h-4" />
                Overview
              </NavLink>
              <NavLink
                to="/config"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`
                }
              >
                <Server className="w-4 h-4" />
                Config & Stack
              </NavLink>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center relative">
              <Search className="w-4 h-4 absolute left-3 text-slate-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-9 pr-4 py-1.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
              />
            </div>
            <button className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200 transition">
              <Bell className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/config" element={<ServerDetails />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/60 py-6 text-center text-xs text-slate-500">
        <p>Demo Project Setup &bull; React + Vite + Tailwind CSS</p>
      </footer>
    </div>
  );
}
