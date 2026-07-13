"use client"

import { useState } from "react"
import { Linkedin, Github, Activity, Menu, X, ChevronRight } from "lucide-react"
import { FaGithub, FaLinkedin, FaItchIo } from "react-icons/fa";

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
                  Filipino-Ilocano | Umingan, Pangasinan, PHL.
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
                    <img src="/graphh1.png" alt="Corge UI" className="w-full h-full object-cover filter contrast-110" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <span className="block font-black text-[14px] text-foreground group-hover:text-accent transition-colors truncate">GRAHPPY</span>
                    <span className="block text-[11px] text-zinc-400 font-bold">JAVASCRIPT / HTML5</span>
                  </div>
                  <span className="text-[8px] bg-zinc-100 border border-zinc-400 px-1.5 py-0.5 font-black text-muted-foreground group-hover:bg-foreground group-hover:text-white transition-colors shrink-0">RUN &gt;</span>
                </div>

                <div 
                  onClick={() => scrollToSection("games")}
                  className="bg-white border-2 border-foreground p-2 flex items-center gap-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-50 cursor-pointer transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] group"
                >
                  <div className="w-10 h-10 border border-foreground bg-zinc-100 overflow-hidden shrink-0">
                    <img src="/flyHammyCover.png" alt="Corge UI" className="w-full h-full object-cover filter contrast-110" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <span className="block font-black text-[14px] text-foreground group-hover:text-accent transition-colors truncate">FLY HAMMY!</span>
                    <span className="block text-[11px] text-zinc-400 font-bold">JAVASCRIPT / HTML5</span>
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
                    <span className="block font-black text-[14px] text-foreground group-hover:text-accent transition-colors truncate">R1 AMIANAN PRESYO</span>
                    <span className="block text-[11px] text-zinc-400 font-bold">PYTHON / STREAMLIT</span>
                  </div>
                  <span className="text-[8px] bg-zinc-100 border border-zinc-400 px-1.5 py-0.5 font-black text-muted-foreground group-hover:bg-foreground group-hover:text-white transition-colors shrink-0">RUN &gt;</span>
                </div>

                <div 
                  onClick={() => scrollToSection("games")}
                  className="bg-white border-2 border-foreground p-2 flex items-center gap-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-50 cursor-pointer transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] group"
                >
                  <div className="w-10 h-10 border border-foreground bg-zinc-100 overflow-hidden shrink-0">
                    <img src="/sajelco.png" alt="SAJELCO" className="w-full h-full object-cover filter contrast-110" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <span className="block font-black text-[14px] text-foreground group-hover:text-accent transition-colors truncate">SAJELCO WEBSITE</span>
                    <span className="block text-[11px] text-zinc-400 font-bold">REACT.JS / NODE.JS</span>
                  </div>
                  <span className="text-[8px] bg-zinc-100 border border-zinc-400 px-1.5 py-0.5 font-black text-muted-foreground group-hover:bg-foreground group-hover:text-white transition-colors shrink-0">RUN &gt;</span>
                </div>

              </div>
              

              <div className="border-t-2 border-dashed border-zinc-300 pt-4 mt-4">
                <div className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  
                  <div className="mb-4">
                    <h5 className="text-[14px] font-black uppercase tracking-widest">
                      {/* Header in Salmon, Email in Black */}
                      <span className="text-[#e26d6a] text-[14px]">CONTACT_ME: </span> 
                      <span className="text-black text-[12px]">justinreijose27@gmail.com</span>
                    </h5>
                  </div>

                  <a
                    href="/your-resume.pdf"
                    download
                    className="flex items-center justify-between w-full border-2 border-black bg-[#e26d6a] text-white px-5 py-3 text-[14px] font-black uppercase tracking-tight hover:bg-black transition-colors"
                  >
                    <span>Download Resume</span>
                    <span className="bg-white text-[#e26d6a] px-2 py-0.5 font-black">↓</span>
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

              <div className="flex justify-center gap-4 pt-2 mb-10 mt-5">
                {/* GitHub */}
                <a
                  href="https://github.com/joseGit-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="group flex h-11 w-11 items-center justify-center border-2 border-black bg-[#181717] text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
                >
                  <FaGithub className="h-6 w-6 transition-transform group-hover:scale-110" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/justinreijose"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group flex h-11 w-11 items-center justify-center border-2 border-black bg-[#0A66C2] text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
                >
                  <FaLinkedin className="h-6 w-6 transition-transform group-hover:scale-110" />
                </a>

                {/* itch.io */}
                <a
                  href="https://siyak.itch.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="itch.io"
                  className="group flex h-11 w-11 items-center justify-center border-2 border-black bg-[#FA5C5C] text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
                >
                  <FaItchIo className="h-6 w-6 transition-transform group-hover:scale-110" />
                </a>
              </div>

              <p className="text-center text-zinc-500 text-[12px] font-medium max-w-xs mx-auto">
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
                  <p className="text-zinc-400 text-[12px] font-medium">2026 • GPA: 1.76 (90%)</p>
                  <p className="text-zinc-400 text-[11px] font-medium">San Jose City, N.E., PHL.</p>
                </div>

                <div className="bg-white border-2 border-foreground p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="text-[16px] font-black uppercase text-accent">Training</h4>
                  <p className="text-zinc-400 text-[12px] font-medium">Google IT Support Professional Certificate | Coursera</p>
                  <p className="text-zinc-400 text-[12px] font-medium">C2 Proficient English Certificate | EF SET  </p>
                </div>

              </div>

              {/* EXPERIENCE LOG */}
              <div className="space-y-3">
                <p className="font-black text-muted-foreground uppercase tracking-wider">// EXPERIENCE_LOG</p>

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

                <div className="bg-[#f2efe9] border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex justify-between items-center border-b border-black/10 pb-1 mb-1">
                    <span className="font-black text-black text-[14px]">Freelance QA / Writer</span>
                    <span className="text-[12px] bg-black text-white px-1 py-0.5 font-bold">2020-PRES</span>
                  </div>

                  <p className="text-neutral-700 text-[12px] font-medium leading-tight">
                    - Quality Assurance Tester (2026-Present)
                  </p>

                  <p className="text-neutral-700 text-[12px] font-medium leading-tight">
                    - Copywriter (2020-21)
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
                  <p className="text-foreground font-black text-[12px] leading-tight">Unity, Godot, UI/UX, GDD Outlines, Sound Design</p>
                </div>

                <div className="bg-white border-2 border-foreground p-2.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <p className="font-black border-b border-foreground pb-0.5 mb-1 text-accent text-[14px]">▲ WRITING</p>
                  <p className="text-foreground font-black text-[12px] leading-tight">Technical, Creative, Copywriting</p>
                </div>

                <div className="bg-white border-2 border-foreground p-2.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <p className="font-black border-b border-foreground pb-0.5 mb-1 text-accent text-[14px]">▲ LANGUAGES</p>
                  <p className="text-foreground font-black text-[12px] leading-tight">English (C2 Proficient), Filipino & Ilocano (Native)</p>
                </div>

              </div>
            </div>
          </div>

        </div>

        <div className="w-full bg-white border-t-4 border-foreground px-3 py-2 flex justify-between items-center text-[9px] font-mono font-bold text-muted-foreground relative z-50">
          <p className="hidden md:inline">MOUSE POS: VIEWPORT_CENTER</p>
          <p className="hidden md:inline">FRAME_RATE: 60FPS</p>
        </div>
      </section>

    {/* MY PROJECTS SECTION */}
    <section id="games" className="py-20 px-4 md:px-8 lg:px-16 border-b-4 border-foreground scroll-mt-[49px] relative overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 moving-engine-grid pointer-events-none opacity-60" />
      <div className="max-w-[90rem] mx-auto relative z-10">
        <div className="bg-white border-4 border-foreground p-6 sm:p-8 inline-block mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter">My Projects</h2>
        </div>
        
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 lg:gap-10">

          {/* GRAHPPY */}
          <div className="bg-white border-4 border-foreground p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col h-full min-h-[600px]">
            <div className="relative aspect-video w-full bg-white border-4 border-foreground overflow-hidden mb-6 shrink-0 flex items-center justify-center text-zinc-500 font-mono font-bold text-lg">
              <img 
                src="/graphh1.png" 
                alt="GRAHPPY Screenshot" 
                className="w-full h-full object-contain filter contrast-110" 
              />
            </div>

            <div className="font-mono text-base space-y-4 flex-grow flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 border-b-4 border-foreground pb-2">
                  <span className="font-black text-2xl md:text-3xl uppercase tracking-tight">Grahppy</span>
                  <span className="bg-foreground text-white px-2 py-0.5 text-xs md:text-sm font-bold uppercase tracking-wider">JavaScript / HTML5</span>
                </div>
                <div className="space-y-2">
                  <p className="text-foreground font-bold text-base md:text-lg">ROLE: <span className="underline decoration-2">Solo Game Developer</span></p>
                  <p className="text-zinc-800 text-base md:text-lg leading-relaxed font-medium">
                    Developed a coordinate-based arcade survival loop where players intercept time-decaying alert nodes 
                    by manipulating independent X and Y axis sliders with grid path obstruction, and power-up systems.
                  </p>
                </div>
              </div>
              
              <div className="pt-4 border-t-4 border-foreground flex flex-col gap-4">
                <div className="text-sm md:text-base text-foreground font-black uppercase tracking-wide">
                  PROJECT TYPE: <span className="bg-[#e05345] text-white px-2 py-0.5 border-2 border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Indie Game</span>
                </div>
                {/* ACTION BUTTONS */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 min-w-[120px] text-center bg-[#e05345] text-white hover:bg-[#c94437] font-black uppercase text-base py-3 border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all"
                  >
                    TO BE DEPLOYED
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* SAJELCO WEBSITE */}
          <div className="bg-white border-4 border-foreground p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col h-full min-h-[600px]">
            <div className="relative aspect-video w-full bg-zinc-100 border-4 border-foreground overflow-hidden mb-6 shrink-0">
              <img src="/sajelco.png" alt="SAJELCO" className="w-full h-full object-cover filter contrast-110" />
            </div>
            <div className="font-mono text-base space-y-4 flex-grow flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 border-b-4 border-foreground pb-2">
                  <span className="font-black text-2xl md:text-3xl uppercase tracking-tight">SAJELCO</span>
                  <span className="bg-foreground text-white px-2 py-0.5 text-xs md:text-sm font-bold uppercase tracking-wider">React.js / Node.js</span>
                </div>
                <div className="space-y-2">
                  <p className="text-foreground font-bold text-base md:text-lg">ROLE: <span className="underline decoration-2">Web Developer Intern</span></p>
                  <p className="text-zinc-800 text-base md:text-lg leading-relaxed font-medium">
                    Migrated SAJELCO’s website to a React.js/Node.js stack and created a geospatial complaints module, 
                    accelerating response times within their approx. 40,000 consumer-reach by enabling location-tagged reports/complaints.
                  </p>

                </div>
              </div>
              
              <div className="pt-4 border-t-4 border-foreground flex flex-col gap-4">
                <div className="text-sm md:text-base text-foreground font-black uppercase tracking-wide">
                  PROJECT TYPE: <span className="bg-zinc-100 text-foreground px-2 py-0.5 border-2 border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Intern Project</span>
                </div>
                {/* ACTION BUTTONS */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <a href="https://sajelco.net/" target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[120px] text-center bg-foreground text-white hover:bg-zinc-800 font-black uppercase text-base py-3 border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all">
                    Live Project
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* R1-Amianan Presyo */}
          <div className="bg-white border-4 border-foreground p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col h-full min-h-[600px]">
            <div className="relative aspect-video w-full bg-zinc-100 border-4 border-foreground overflow-hidden mb-6 shrink-0">
              <img src="/r1-amianan.png" alt="R1 Amianan Presyo" className="w-full h-full object-cover filter contrast-110" />
            </div>
            <div className="font-mono text-base space-y-4 flex-grow flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 border-b-4 border-foreground pb-2">
                  <span className="font-black text-2xl md:text-3xl uppercase tracking-tight">R1 Amianan Presyo</span>
                  <span className="bg-foreground text-white px-2 py-0.5 text-xs md:text-sm font-bold uppercase tracking-wider">Python / Streamlit</span>
                </div>
                <div className="space-y-2">
                  <p className="text-foreground font-bold text-base md:text-lg">ROLE: <span className="underline decoration-2">Web Developer</span></p>
                  <p className="text-zinc-800 text-base md:text-lg leading-relaxed font-medium">
                    An interactive real-time monitoring and logistics tool designed to track agricultural commodity prices and regional weather conditions across Region I (Ilocos Region), Philippines.
                    Amianan Presyo (Northern Prices) serves as a centralized hub for farmers, traders, and logistics planners to monitor the fluctuating market landscape of Northern Luzon.
                  </p>

                  <p className="text-zinc-800 text-base md:text-lg leading-relaxed font-medium">
                    <span className="font-black uppercase tracking-wide text-foreground">Key Features</span><br />
                    A. Real-Time Price Monitor<br />
                    B. Historical Trend Analysis<br />
                    C. Regional Weather Integration<br />
                    D. Logistics & Cost Calculator
                  </p>

                </div>
              </div>
              
              <div className="pt-4 border-t-4 border-foreground flex flex-col gap-4">
                <div className="text-sm md:text-base text-foreground font-black uppercase tracking-wide">
                  PROJECT TYPE: <span className="bg-zinc-100 text-foreground px-2 py-0.5 border-2 border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Personal Project</span>
                </div>
                {/* ACTION BUTTONS */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <a href="https://r1-amianan.streamlit.app/" target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[120px] text-center bg-foreground text-white hover:bg-zinc-800 font-black uppercase text-base py-3 border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all">
                    Live Project
                  </a>
                  <a href="https://github.com/joseGit-hub/R1-Amianan" target="_blank" rel="noopener noreferrer"  className="flex-1 min-w-[120px] text-center bg-zinc-100 hover:bg-zinc-200 text-foreground font-black uppercase text-base py-3 border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FLY HAMMY! */}

          <div className="bg-white border-4 border-foreground p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col h-full min-h-[600px]">
            <div className="grid grid-cols-2 gap-4 mb-6 shrink-0">

              <div className="relative aspect-[9/16] bg-zinc-700 border-2 border-foreground overflow-hidden flex items-center justify-center text-zinc-500 font-mono font-bold text-sm text-center p-2">
                <img src="/flyHammy1.png" className="w-full h-full object-cover filter contrast-110" />
              </div>

              <div className="relative aspect-[9/16] bg-zinc-700 border-2 border-foreground overflow-hidden flex items-center justify-center text-zinc-500 font-mono font-bold text-sm text-center p-2">
                <img src="/flyHammy2.png" className="w-full h-full object-cover filter contrast-110" />
              </div>
            </div>

            <div className="font-mono text-base space-y-4 flex-grow flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 border-b-4 border-foreground pb-2">
                  <span className="font-black text-2xl md:text-3xl uppercase tracking-tight">Fly Hammy!</span>
                  <span className="bg-foreground text-white px-2 py-0.5 text-xs md:text-sm font-bold uppercase tracking-wider">JavaScript / HTML5</span>
                </div>
                <div className="space-y-2">
                  <p className="text-foreground font-bold text-base md:text-lg">ROLE: <span className="underline decoration-2">Solo Game Developer</span></p>
                  <p className="text-zinc-800 text-base md:text-lg leading-relaxed font-medium">
                    Developed an arcade-style Flappy Bird remake using native JavaScript and HTML5 Canvas, implementing mechanics like a jump-triggered 
                    rotational rolling animation and a dynamic collision-detection pipeline.
                  </p>
                </div>
              </div>
      
                <div className="pt-4 border-t-4 border-foreground flex flex-col gap-4">
                  <div className="text-sm md:text-base text-foreground font-black uppercase tracking-wide">
                    PROJECT TYPE: <span className="bg-[#e05345] text-white px-2 py-0.5 border-2 border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Indie Game</span>
                  </div>
                  {/* ACTION BUTTONS */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a 
                      href="https://siyak.itch.io/fly-hammy" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 min-w-[120px] text-center bg-[#e05345] text-white hover:bg-[#c94437] font-black uppercase text-base py-3 border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all"
                    >
                      Play Game
                    </a>
                  </div>
                </div>
              </div>
          </div>
 
        </div>
      </div>
    </section>

      {/* CONNECT / FOOTER SECTION */}
      <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 border-b-4 border-foreground scroll-mt-[49px] relative overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 moving-engine-grid pointer-events-none opacity-60" />
        <div className="max-w-[90rem] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border-4 border-foreground p-6 sm:p-8 inline-block shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] w-full">
                <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter">Connect</h2>
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