"use client"

import { useState } from "react"
import { Linkedin, Github, Activity, Menu, X, ChevronRight } from "lucide-react"

interface Project {
  id: string
  title: string
  role: string
  teamSize: string
  duration: string
  engineTech: string
  shortDesc: string
  longDesc: string
  extendedLog: string
  img: string
}

export default function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen selection:bg-foreground selection:text-background text-foreground relative overflow-x-hidden graph-paper bg-zinc-50 pt-[49px]">
      
      {/* GLOBAL CSS STYLES */}
      <style jsx global>{`
        .graph-paper {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
        }

        .moving-engine-grid {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(0, 0, 0, 0.15) 1.5px, transparent 1.5px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.15) 1.5px, transparent 1.5px);
          animation: engineGridLoop 4s linear infinite !important;
        }

        @keyframes engineGridLoop {
          0% { background-position: 0px 0px; }
          100% { background-position: 40px 40px; }
        }
      `}</style>

      {/* TOP VIEWPORT BAR */}
      <div className="w-full bg-white border-b-4 border-foreground px-4 py-3 flex justify-between items-center gap-4 font-mono text-xs font-black fixed top-0 left-0 right-0 z-50 h-[49px]">
        <div className="flex items-center gap-3 sm:gap-6">
          <span className="bg-black text-white px-2 py-0.5 tracking-tighter text-[10px] sm:text-xs">PROJECT_CORE</span>
          <span className="text-muted-foreground hidden sm:inline">v2.6_STABLE</span>
        </div>

        <div className="flex items-center gap-2 text-[9px] sm:text-[10px] bg-zinc-100 border border-zinc-400 px-2 py-1">
          <Activity size={12} className="text-green-600 animate-pulse shrink-0" />
          <span className="truncate">RUNTIME: ACTIVE</span>
        </div>

        <nav className="hidden lg:flex gap-6">
          {["PROJECTS", "CONTACT"].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="hover:text-accent relative group"
            >
              <span className="hidden group-hover:inline absolute -left-3 text-accent">&lt;</span>
              {item}
              <span className="hidden group-hover:inline absolute -right-3 text-accent">&gt;</span>
            </button>
          ))}
        </nav>

        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="lg:hidden p-1 border-2 border-foreground bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* MOBILE NAVIGATION OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed top-[49px] left-0 w-full bg-white border-b-4 border-foreground z-40 p-6 font-mono text-sm font-bold flex flex-col gap-4 shadow-xl lg:hidden">
          {["GAMES", "CONTACT"].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-left py-2 border-b border-zinc-200 hover:text-accent"
            >
              &gt; {item}
            </button>
          ))}
        </div>
      )}

      {/* HERO CONTAINER */}
      <section className="min-h-[calc(100vh-49px)] flex flex-col justify-between border-b-4 border-foreground relative bg-white overflow-hidden">
        <div className="absolute inset-0 z-0 moving-engine-grid pointer-events-none" />

        <div className="w-full max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 flex-grow items-stretch relative z-10">
          
          {/* LEFT SIDEBAR (INCLUDES ACTIVE PROCESSES NOW) */}
          <div className="lg:col-span-3 border-b-4 lg:border-b-0 lg:border-r-4 border-foreground p-5 md:p-6 flex flex-col justify-between space-y-6 graph-paper bg-white/80 order-2 lg:order-1 relative z-20">
            <div className="space-y-6 w-full">
              <div className="flex justify-between items-center border-b-2 border-foreground pb-2 font-mono bg-white backdrop-blur-xs px-1">
                <span className="font-black text-xs text-muted-foreground uppercase">// INSPECTOR COMPONENT</span>
                <span className="text-[10px] bg-zinc-200 px-1 font-bold">ID: P1</span>
              </div>

              {/* PROFILE IMAGE */}
              <div className="flex justify-center w-full pt-2">
                <div className="relative group max-w-[140px] sm:max-w-[160px] w-full shrink-0">
                  <div className="absolute inset-0 bg-[#E07A7A] translate-x-1.5 translate-y-1.5 border-2 border-foreground -z-10" />
                  <div className="aspect-square overflow-hidden border-2 border-foreground bg-white">
                    <img src="/profile-square.jpg" alt="Justin Rei" className="w-full h-full object-cover filter contrast-125" />
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t-2 border-dashed border-zinc-200 font-mono text-xs text-center">
                <p className="text-zinc-500 text-[12px] font-medium max-w-xs mx-auto">
                  Filipino | Ilocano 
                </p>

                <p className="text-zinc-500 text-[12px] font-medium max-w-xs mx-auto">
                  Umingan, Pangasinan, PHL.
                </p>
              </div>

              {/* PROJECT STREAM LIST */}
              <div className="pt-2 font-mono text-xs space-y-3 w-full">
                <p className="font-black text-muted-foreground uppercase text-[10px] tracking-wider mb-1">// PROJECT_LINK_STREAM</p>
                
                <div 
                  onClick={() => scrollToSection("games")}
                  className="bg-white border-2 border-foreground p-2 flex items-center gap-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-50 cursor-pointer transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] group"
                >
                  <div className="w-10 h-10 border border-foreground bg-zinc-100 overflow-hidden shrink-0">
                    <img src="/corge.gif" alt="Corge UI" className="w-full h-full object-cover filter contrast-110" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <span className="block font-black text-[11px] text-foreground group-hover:text-accent transition-colors truncate">CORGE_WEATHER_UI</span>
                    <span className="block text-[8px] text-zinc-400 font-bold">JAVASCRIPT / ELECTRON</span>
                  </div>
                  <span className="text-[8px] bg-zinc-100 border border-zinc-400 px-1.5 py-0.5 font-black text-muted-foreground group-hover:bg-foreground group-hover:text-white transition-colors shrink-0">RUN &gt;</span>
                </div>

                <div 
                  onClick={() => scrollToSection("games")}
                  className="bg-white border-2 border-foreground p-2 flex items-center gap-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-50 cursor-pointer transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] group"
                >
                  <div className="w-10 h-10 border border-foreground bg-zinc-100 overflow-hidden shrink-0">
                    <img src="/r1-amianan.png" alt="R1 Amianan" className="w-full h-full object-cover filter contrast-110" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <span className="block font-black text-[11px] text-foreground group-hover:text-accent transition-colors truncate">R1 AMIANAN PRESYO</span>
                    <span className="block text-[8px] text-zinc-400 font-bold">PYTHON / STREAMLIT</span>
                  </div>
                  <span className="text-[8px] bg-zinc-100 border border-zinc-400 px-1.5 py-0.5 font-black text-muted-foreground group-hover:bg-foreground group-hover:text-white transition-colors shrink-0">RUN &gt;</span>
                </div>

                <div 
                  onClick={() => scrollToSection("games")}
                  className="bg-white border-2 border-foreground p-2 flex items-center gap-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-50 cursor-pointer transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] group"
                >
                  <div className="w-10 h-10 border border-foreground bg-zinc-100 overflow-hidden shrink-0">
                    <img src="/corge.gif" alt="Corge UI" className="w-full h-full object-cover filter contrast-110" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <span className="block font-black text-[11px] text-foreground group-hover:text-accent transition-colors truncate">CORGE_WEATHER_UI</span>
                    <span className="block text-[8px] text-zinc-400 font-bold">JAVASCRIPT / ELECTRON</span>
                  </div>
                  <span className="text-[8px] bg-zinc-100 border border-zinc-400 px-1.5 py-0.5 font-black text-muted-foreground group-hover:bg-foreground group-hover:text-white transition-colors shrink-0">RUN &gt;</span>
                </div>

                <div 
                  onClick={() => scrollToSection("games")}
                  className="bg-white border-2 border-foreground p-2 flex items-center gap-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-50 cursor-pointer transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] group"
                >
                  <div className="w-10 h-10 border border-foreground bg-zinc-100 overflow-hidden shrink-0">
                    <img src="/r1-amianan.png" alt="R1 Amianan" className="w-full h-full object-cover filter contrast-110" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <span className="block font-black text-[11px] text-foreground group-hover:text-accent transition-colors truncate">R1 AMIANAN PRESYO</span>
                    <span className="block text-[8px] text-zinc-400 font-bold">PYTHON / STREAMLIT</span>
                  </div>
                  <span className="text-[8px] bg-zinc-100 border border-zinc-400 px-1.5 py-0.5 font-black text-muted-foreground group-hover:bg-foreground group-hover:text-white transition-colors shrink-0">RUN &gt;</span>
                </div>

              </div>

              {/* GAMEDEV */}
              <div className="pt-4 border-t-2 border-dashed border-zinc-200">
                <div className="bg-white border-2 border-foreground p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] relative flex items-center justify-between gap-3 min-h-[64px]">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h5 className="text-[16px] font-black text-xs text-foreground uppercase tracking-tight">Indie Game Dev</h5>
                      <span className="text-[12px] bg-black text-white px-1 font-bold font-mono tracking-wider shrink-0">// Siyak</span>
                    </div>
                    <p className="text-zinc-500 text-[14px] font-medium leading-tight mt-0.5 truncate">
                      Hobbyist GameDev ; itch.io
                    </p>
                  </div>

                  <a 
                    href="https://yourusername.itch.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-zinc-100 hover:bg-black hover:text-white text-[9px] font-mono font-black tracking-wider border border-foreground py-1 px-2 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none shrink-0"
                  >
                    HUB &gt;
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* EXPANDED CENTER STAGE */}
          <div className="lg:col-span-6 p-5 md:p-10 flex flex-col justify-center space-y-6 border-b-4 lg:border-b-0 order-1 lg:order-2 bg-transparent relative z-20">
            <span className="absolute top-4 left-4 font-mono text-zinc-300 text-lg hidden sm:inline">┐ ┌</span>
            <span className="absolute bottom-4 left-4 font-mono text-zinc-300 text-lg hidden sm:inline">┐ ┌</span>
            <span className="absolute top-4 right-4 font-mono text-zinc-300 text-lg hidden sm:inline">┐ ┌</span>
            <span className="absolute bottom-4 right-4 font-mono text-zinc-300 text-lg hidden sm:inline">┐ ┌</span>

            <div className="flex flex-wrap gap-3 justify-center">
              <span className="bg-foreground text-background font-mono text-[9px] sm:text-[10px] px-2.5 py-0.5 font-black uppercase tracking-tight">
                STATUS: GRADUATING 2026
              </span>
              <span className="bg-green-600 text-white font-mono text-[9px] sm:text-[10px] px-2.5 py-0.5 font-black uppercase tracking-tight border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                LOBBY: OPEN TO ROLES
              </span>
            </div>

            <br />

            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none font-serif break-words">
                JUSTIN REI <span className="block text-accent decoration-[6px] md:decoration-[8px] decoration-black">JOSE</span>
              </h1>
            </div>

            <br />

            <div className="flex justify-center items-center pt-2">
              <div className="w-32 h-32 transform hover:scale-105 transition-transform shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="45" cy="50" r="35" fill="#F5A623" stroke="black" strokeWidth="2.5" />
                  <path d="M 32 42 Q 35 38 38 42" stroke="black" strokeWidth="2" fill="none" />
                  <path d="M 52 42 Q 55 38 58 42" stroke="black" strokeWidth="2" fill="none" />
                  <path d="M 33 48 C 33 48 29 65 35 65" stroke="#87CEEB" strokeWidth="4" fill="none" />
                  <path d="M 57 48 C 57 48 61 65 55 65" stroke="#87CEEB" strokeWidth="4" fill="none" />
                  <path d="M 35 72 Q 45 65 55 72" stroke="black" strokeWidth="2.5" fill="none" />
                  <rect x="65" y="45" width="28" height="38" fill="white" stroke="black" strokeWidth="2" rx="1" transform="rotate(15, 79, 64)" />
                  <text x="68" y="58" fontSize="8" fontWeight="black" transform="rotate(15, 79, 64)">RESUME</text>
                </svg>
              </div>
            </div>

            <br />

            <div className="pt-4 border-t-2 border-dashed border-zinc-200 font-mono text-xs space-y-2">
              <p className="text-center font-black text-muted-foreground uppercase text-[10px] tracking-wider">// SYSTEM_DIRECTORY</p>
              <p className="text-center text-zinc-500 text-[11px] font-medium max-w-xs mx-auto">
                Scroll down for more.
              </p>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-3 border-l-0 lg:border-l-4 border-foreground p-4 font-mono text-xs space-y-6 graph-paper bg-white/80 order-3 relative z-20 overflow-y-auto max-h-[calc(100vh-100px)] lg:max-h-none flex flex-col justify-between">
            <div className="space-y-6 flex-grow">
              
              {/* ACADEMIC RECORD */}
              <div className="space-y-3">
                <p className="font-black text-muted-foreground uppercase tracking-wider">// ACADEMIC_RECORD</p>
                <div className="bg-white border-2 border-foreground p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="text-[16px] font-black uppercase text-accent">BS In Computer Science</h4>
                  <p className="text-foreground font-bold text-[15px] mt-0.5">STI College San Jose</p>
                  <p className="text-zinc-400 text-[13px] font-medium">2026 (Graduating) • GPA: 1.76 (90%)</p>
                  <p className="text-zinc-400 text-[11px] font-medium">San Jose City, N.E., PHL.</p>
                  <p className="text-[12px] text-zinc-500 italic border-t border-dashed border-zinc-200 mt-2 pt-1 font-medium leading-tight">
                    Thesis: GARDENPALS: An IoT-Based Intelligent Vegetable Garden System
                  </p>
                </div>
              </div>

              {/* EXPERIENCE LOG */}
              <div className="space-y-3">
                <p className="font-black text-muted-foreground uppercase tracking-wider">// EXPERIENCE_LOG</p>
                
                <div className="bg-[#f2efe9] border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex justify-between items-center border-b border-black/10 pb-1 mb-1">
                    <span className="font-black text-black text-[14px]">Freelance QA / Copy</span>
                    <span className="text-[12px] bg-black text-white px-1 py-0.5 font-bold">2020-PRES</span>
                  </div>

                  <p className="text-neutral-700 text-[12px] font-medium leading-tight">
                    Freelance
                  </p>

                  <p className="text-neutral-700 text-[12px] font-medium leading-tight">
                    - Quality Assurance Tester
                  </p>

                  <p className="text-neutral-700 text-[12px] font-medium leading-tight">
                    - Copywriter
                  </p>
                </div>

                <div className="bg-[#f2efe9] border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex justify-between items-center border-b border-black/10 pb-1 mb-1">
                    <span className="font-black text-black text-[14px]">Web Dev Intern</span>
                    <span className="text-[12px] bg-black text-white px-1 py-0.5 font-bold">Jan 2026 - Apr 2026</span>
                  </div>

                  <p className="text-neutral-700 text-[12px] font-medium leading-tight">
                    San Jose City Electric Cooperative (SAJELCO)
                  </p>

                  <p className="text-neutral-700 text-[12px] font-medium leading-tight">
                    - React.js/Node.js | MySQL
                  </p>
                </div>
              </div>

            </div>

            {/* TECH STACK MODULES */}
            <div className="pt-4 border-t-2 border-foreground mt-auto">
              <div className="space-y-3 text-[12px]">
                <div className="bg-white border-2 border-foreground p-2.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <p className="font-black border-b border-foreground pb-0.5 mb-1 text-accent text-[14px]">▲ TECH STACK</p>
                  <p className="text-foreground font-black text-[12px] leading-tight">Java, C#, C, Python, SQL, Node.js, React.js, Next.js</p>
                </div>

                <div className="bg-white border-2 border-foreground p-2.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <p className="font-black border-b border-foreground pb-0.5 mb-1 text-accent text-[14px]">▲ GAME DEV</p>
                  <p className="text-foreground font-black text-[12px] leading-tight">Unity, Godot, UI/UX, GDD Outlines</p>
                </div>

                <div className="bg-white border-2 border-foreground p-2.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <p className="font-black border-b border-foreground pb-0.5 mb-1 text-accent text-[14px]">▲ WRITING</p>
                  <p className="text-foreground font-black text-[12px] leading-tight">Technical, Creative, Copywriting</p>
                </div>

                <div className="bg-white border-2 border-foreground p-2.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <p className="font-black border-b border-foreground pb-0.5 mb-1 text-accent text-[14px]">▲ LANGUAGES</p>
                  <p className="text-foreground font-black text-[12px] leading-tight">English, Filipino, Ilocano</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="w-full bg-white border-t-4 border-foreground px-4 py-2 flex justify-between items-center text-[9px] font-mono font-bold text-muted-foreground relative z-50">
          <p className="hidden md:inline">MOUSE POS: VIEWPORT_CENTER</p>
          <p className="hidden md:inline">FRAME_RATE: 60FPS</p>
        </div>
      </section>

      {/* GAMES SECTION */}
      <section id="games" className="py-20 px-4 md:px-8 lg:px-16 border-b-4 border-foreground scroll-mt-[49px] relative overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 moving-engine-grid pointer-events-none opacity-60" />
        <div className="max-w-[90rem] mx-auto relative z-10">
          <div className="bg-white border-4 border-foreground p-6 sm:p-8 inline-block mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter">My Projects</h2>
            <p className="text-base sm:text-xl text-muted-foreground font-mono mt-2">// Personal projects, work and many more.</p>
          </div>
          
          {/* GRID REMAINS OPEN AND EXPANDABLE */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 lg:gap-10">
            
            {/* BUILD SLOT 01: R1 AMIANAN */}
            <div onClick={() => setActiveProject({
              id: "r1-amianan",
              title: "R1 Amianan Presyo",
              role: "Gameplay Programmer",
              teamSize: "1",
              duration: "6 Weeks",
              engineTech: "Python / Streamlit",
              shortDesc: "Developed an agricultural simulation app tracking commodity pricing workflows. Features procedural arithmetic calculations.",
              longDesc: "This simulation layout initially started as an internal systems mapping structure. It handles deep state pipelines, managing how inventory updates interact with shifting regional metrics.",
              extendedLog: "Designed and implemented a modular custom state runner engine to process data streams reactively.",
              img: "/r1-amianan.png"
            })} className="cursor-pointer">
              <div className="bg-white border-4 border-foreground p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform flex flex-col h-full min-h-[500px]">
                <div className="relative aspect-video w-full bg-zinc-100 border-2 border-foreground overflow-hidden mb-4 shrink-0">
                  <img src="/r1-amianan.png" alt="R1 Amianan Presyo" className="w-full h-full object-cover filter contrast-110" />
                </div>
                <div className="font-mono text-xs space-y-2 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start border-b border-zinc-200 pb-1">
                      <span className="font-black text-sm uppercase tracking-tight">R1 Amianan Presyo</span>
                      <span className="bg-zinc-200 px-1 text-[10px] font-bold">Python / Streamlit</span>
                    </div>
                    <p className="text-muted-foreground text-[11px] font-medium leading-relaxed">
                      Developed an agricultural simulation app tracking commodity pricing workflows. Features procedural arithmetic calculations and real-time visualization graphs.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-dashed border-zinc-200 grid grid-cols-2 gap-1.5 text-[10px] text-zinc-500 font-bold shrink-0">
                    <p>ROLE: <span className="text-foreground font-black">Gameplay Programmer</span></p>
                    <p>TEAM: <span className="text-foreground font-black">1 Person</span></p>
                    <p className="col-span-2">DURATION: <span className="text-foreground font-black">6 Weeks</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* BUILD SLOT 02: CORGE */}
            <div onClick={() => setActiveProject({
              id: "corge",
              title: "Corge",
              role: "Gameplay Programmer",
              teamSize: "2",
              duration: "4 Months",
              engineTech: "JavaScript / Electron",
              shortDesc: "Lazy Corgi Weather (Corge) acts as an atmospheric UI overlay, executing background loop processing onto desktop space.",
              longDesc: "Corge bridges web technology with raw native windowing components to display interactive desktop companions.",
              extendedLog: "Leveraged custom Electron main-process wrappers to manipulate screen space alpha values dynamically.",
              img: "/corge.gif"
            })} className="cursor-pointer">
              <div className="bg-white border-4 border-foreground p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform flex flex-col h-full min-h-[500px]">
                <div className="relative aspect-video w-full bg-zinc-100 border-2 border-foreground overflow-hidden mb-4 shrink-0">
                  <img src="/corge.gif" alt="Corge" className="w-full h-full object-cover filter contrast-110" />
                </div>
                <div className="font-mono text-xs space-y-2 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start border-b border-zinc-200 pb-1">
                      <span className="font-black text-sm uppercase tracking-tight">Corge</span>
                      <span className="bg-zinc-200 px-1 text-[10px] font-bold">JavaScript / Electron</span>
                    </div>
                    <p className="text-muted-foreground text-[11px] font-medium leading-relaxed">
                      Lazy Corgi Weather (Corge) acts as an atmospheric UI overlay, executing background loop processing and drawing asset pipelines directly onto desktop space.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-dashed border-zinc-200 grid grid-cols-2 gap-1.5 text-[10px] text-zinc-500 font-bold shrink-0">
                    <p>ROLE: <span className="text-foreground font-black">Gameplay Programmer</span></p>
                    <p>TEAM: <span className="text-foreground font-black">2 Person</span></p>
                    <p className="col-span-2">DURATION: <span className="text-foreground font-black">4 Months</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* SLOT 03 UNASSIGNED */}
            <div className="border-4 border-dashed border-zinc-300 bg-zinc-50/50 p-6 flex flex-col items-center justify-center text-center min-h-[500px] font-mono shadow-[4px_4px_0px_0px_rgba(230,230,230,1)]">
              <span className="text-zinc-400 font-bold text-sm mb-1">&gt;_ [ SLOT_03: UNASSIGNED ]</span>
              <span className="text-zinc-400 text-[11px]">Ready for custom engine initialization...</span>
            </div>

            {/* SLOT 04 UNASSIGNED */}
            <div className="border-4 border-dashed border-zinc-300 bg-zinc-50/50 p-6 flex flex-col items-center justify-center text-center min-h-[500px] font-mono shadow-[4px_4px_0px_0px_rgba(230,230,230,1)]">
              <span className="text-zinc-400 font-bold text-sm mb-1">&gt;_ [ SLOT_04: UNASSIGNED ]</span>
              <span className="text-zinc-400 text-[11px]">Ready for custom engine initialization...</span>
            </div>

          </div>

          {/* LOWER CONTAINER HAS BEEN COMPLETELY CLEARED OF COMPONENT LOGS FOR FUTURE EXPANSION ROOM */}

        </div>
      </section>

      {/* DETAIL MODAL OVERLAY */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#121212] border-4 border-foreground w-full max-w-4xl text-white shadow-[8px_8px_0px_0px_rgba(245,166,35,1)] flex flex-col max-h-[90vh] relative">
            <div className="bg-black p-3 border-b-2 border-zinc-800 flex justify-between items-center font-mono text-xs text-zinc-400 shrink-0">
              <span className="text-accent tracking-widest font-bold">// SYSTEM_INSPECTOR: {activeProject.id.toUpperCase()}</span>
              <button onClick={() => setActiveProject(null)} className="bg-zinc-800 text-white p-1 hover:bg-accent hover:text-black transition-colors border border-zinc-600 font-bold flex items-center gap-1 text-[11px] px-2">
                CLOSE [ESC] <X size={14} />
              </button>
            </div>
            <div className="overflow-y-auto p-5 md:p-8 space-y-8 custom-scrollbar">
              <div className="relative aspect-video max-h-[350px] w-full bg-zinc-900 border-2 border-zinc-800 overflow-hidden">
                <img src={activeProject.img} alt={activeProject.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 pt-16">
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight font-serif text-white">{activeProject.title}</h3>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 border-b border-zinc-800 pb-8">
                <div className="md:col-span-7 space-y-3">
                  <h4 className="text-sm font-mono uppercase text-accent tracking-widest font-black">// About</h4>
                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-medium">{activeProject.longDesc}</p>
                </div>
                <div className="md:col-span-5 bg-black/40 border border-zinc-800 p-4 font-mono text-xs space-y-3">
                  <h4 className="text-[11px] font-black uppercase text-zinc-400 tracking-wider border-b border-zinc-800 pb-1">Project Info</h4>
                  <div className="space-y-2 text-zinc-300">
                    <p className="flex justify-between"><span>• Role:</span> <span className="font-bold text-white">{activeProject.role}</span></p>
                    <p className="flex justify-between"><span>• Team Size:</span> <span className="font-bold text-white">{activeProject.teamSize} Person</span></p>
                    <p className="flex justify-between"><span>• Timeframe:</span> <span className="font-bold text-white">{activeProject.duration}</span></p>
                    <p className="flex justify-between"><span>• Engine/Tech:</span> <span className="font-bold text-accent">{activeProject.engineTech}</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CONNECT / FOOTER SECTION */}
      <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 border-b-4 border-foreground scroll-mt-[49px] relative overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 moving-engine-grid pointer-events-none opacity-60" />
        <div className="max-w-[90rem] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border-4 border-foreground p-6 sm:p-8 inline-block shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] w-full">
                <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter">Connect Module</h2>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-white border-4 border-foreground p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-50 transition-colors group flex flex-col justify-between min-h-[160px]">
                <div className="flex justify-between items-start">
                  <div className="p-2 bg-black text-white border-2 border-black"><Github size={24} /></div>
                  <ChevronRight size={20} className="text-zinc-400 group-hover:text-foreground transition-transform group-hover:translate-x-1" />
                </div>
                <div className="font-mono mt-6">
                  <p className="text-[10px] text-muted-foreground font-bold uppercase">// SOURCE_CONTROL</p>
                  <h4 className="text-lg font-black tracking-tight">GITHUB // REPOS</h4>
                </div>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white border-4 border-foreground p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-50 transition-colors group flex flex-col justify-between min-h-[160px]">
                <div className="flex justify-between items-start">
                  <div className="p-2 bg-black text-white border-2 border-black"><Linkedin size={24} /></div>
                  <ChevronRight size={20} className="text-zinc-400 group-hover:text-foreground transition-transform group-hover:translate-x-1" />
                </div>
                <div className="font-mono mt-6">
                  <p className="text-[10px] text-muted-foreground font-bold uppercase">// PROFESSIONAL_LOBBY</p>
                  <h4 className="text-lg font-black tracking-tight">LINKEDIN // NETWORK</h4>
                </div>
              </a>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t-2 border-dashed border-zinc-400 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-[10px] text-muted-foreground relative z-20">
            <p className="bg-white/80 px-2 py-0.5 rounded-xs">© 2026 JUSTIN REI E. JOSE. ALL RIGHTS RESERVED.</p>
            <p className="bg-zinc-100 border border-zinc-300 px-2 py-0.5 font-bold">[ SYSTEM_TERMINATED_SUCCESSFULLY ]</p>
          </div>
        </div>
      </section>

    </div>
  )
}