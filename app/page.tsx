"use client"

import { useState } from "react"
import { Linkedin, Github, ChevronDown, Sparkles, Terminal as TerminalIcon, Activity, Menu, X } from "lucide-react"

export default function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen selection:bg-foreground selection:text-background text-foreground relative overflow-x-hidden graph-paper bg-zinc-50">
      
      {/* GLOBAL CSS STYLES FOR THE ANIMATED HERO BACKGROUND AND GRAPH PAPER */}
      <style jsx global>{`
        /* The static graph-paper lines applied to all sections and sidebars */
        .graph-paper {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
        }

        /* High-visibility diagonal scrolling matrix grid reserved exclusively for the Hero viewport */
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

      {/* IMMERSIVE GAME DEV ENGINE HERO CONTAINER */}
      <section className="min-h-screen flex flex-col justify-between border-b-4 border-foreground relative bg-white overflow-hidden">
        
        {/* THE ANIMATED BACKGROUND LAYER (Restricted solely to Hero viewport layer) */}
        <div className="absolute inset-0 z-0 moving-engine-grid pointer-events-none" />
        
        {/* TOP VIEWPORT BAR (RESPONSIVE HEADER) */}
        <div className="w-full bg-white border-b-4 border-foreground px-4 py-3 flex justify-between items-center gap-4 font-mono text-xs font-black relative z-50">
          <div className="flex items-center gap-3 sm:gap-6">
            <span className="bg-black text-white px-2 py-0.5 tracking-tighter text-[10px] sm:text-xs">PROJECT_CORE</span>
            <span className="text-muted-foreground hidden sm:inline">v2.6_STABLE</span>
          </div>

          <div className="flex items-center gap-2 text-[9px] sm:text-[10px] bg-zinc-100 border border-zinc-400 px-2 py-1">
            <Activity size={12} className="text-green-600 animate-pulse shrink-0" />
            <span className="truncate">RUNTIME: ACTIVE</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-6">
            {["ABOUT", "EDUCATION", "GAMES", "SKILLS", "CONTACT"].map((item) => (
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

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="lg:hidden p-1 border-2 border-foreground bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* MOBILE NAVIGATION OVERLAY */}
        {isMobileMenuOpen && (
          <div className="absolute top-[49px] left-0 w-full bg-white border-b-4 border-foreground z-40 p-6 font-mono text-sm font-bold flex flex-col gap-4 shadow-xl lg:hidden">
            {["ABOUT", "EDUCATION", "GAMES", "SKILLS", "CONTACT"].map((item) => (
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

        {/* MAIN ENGINE VIEWPORT WRAPPER */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 flex-grow items-stretch relative z-10">
          
          {/* LAYOUT LEFT SIDEBAR: OUTLINER */}
          <div className="lg:col-span-2 border-b-4 lg:border-b-0 lg:border-r-4 border-foreground p-4 font-mono text-xs space-y-6 graph-paper bg-white/80 order-2 lg:order-1 relative z-20">
            <div>
              <p className="font-black text-muted-foreground uppercase tracking-wider mb-2">// OUTLINER</p>
              <ul className="space-y-1.5 font-bold">
                <li className="text-accent flex items-center gap-1">■ [01] Hero_Viewport</li>
                <li className="hover:text-accent cursor-pointer transition-colors" onClick={() => scrollToSection("about")}>□ [02] Entity_About</li>
                <li className="hover:text-accent cursor-pointer transition-colors" onClick={() => scrollToSection("education")}>□ [03] Node_Education</li>
                <li className="hover:text-accent cursor-pointer transition-colors" onClick={() => scrollToSection("games")}>□ [04] Build_Games</li>
                <li className="hover:text-accent cursor-pointer transition-colors" onClick={() => scrollToSection("skills")}>□ [05] Attributes_Tree</li>
              </ul>
            </div>

            <div className="hidden sm:block">
              <p className="font-black text-muted-foreground uppercase tracking-wider mb-2">// ACTIVE MODULES</p>
              <div className="space-y-2">
                <div className="border border-foreground p-1.5 bg-white text-[10px] leading-tight shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <p className="font-black">Input_State_Manager</p>
                  <p className="text-muted-foreground text-[9px]">Status: Touch/Click Enabled</p>
                </div>
                <div className="border border-foreground p-1.5 bg-white text-[10px] leading-tight shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <p className="font-black">UI_Feedback_Loop</p>
                  <p className="text-muted-foreground text-[9px]">Buffer: 100% Mobile OK</p>
                </div>
              </div>
            </div>
          </div>

          {/* LAYOUT CENTER STAGE: PRIMARY CORE ENGINE VIEWPORT */}
          <div className="lg:col-span-6 p-5 md:p-12 flex flex-col justify-center space-y-8 border-b-4 lg:border-b-0 order-1 lg:order-2 bg-transparent relative z-20">
            {/* Viewport Boundary Markers */}
            <span className="absolute top-4 left-4 font-mono text-zinc-300 text-lg hidden sm:inline">┌ ┐</span>
            <span className="absolute bottom-4 left-4 font-mono text-zinc-300 text-lg hidden sm:inline">└ ┘</span>
            <span className="absolute top-4 right-4 font-mono text-zinc-300 text-lg hidden sm:inline">┐ ┌</span>
            <span className="absolute bottom-4 right-4 font-mono text-zinc-300 text-lg hidden sm:inline">┘ └</span>

            <div className="flex flex-wrap gap-2">
              <span className="bg-foreground text-background font-mono text-[9px] sm:text-[10px] px-2.5 py-0.5 font-black uppercase tracking-tight">
                STATUS: GRADUATING 2026
              </span>
              <span className="bg-green-600 text-white font-mono text-[9px] sm:text-[10px] px-2.5 py-0.5 font-black uppercase tracking-tight border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                LOBBY: OPEN TO ROLES
              </span>
            </div>

            <div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase leading-none font-serif break-words">
                JUSTIN REI <span className="block text-accent underline decoration-[6px] md:decoration-[8px] decoration-black">E. JOSE</span>
              </h1>
              <p className="font-mono text-xs sm:text-sm md:text-base text-muted-foreground flex items-start gap-2 mt-4 bg-white/90 border border-dashed border-zinc-300 p-3.5 shadow-xs">
                <Sparkles size={16} className="text-accent shrink-0 mt-0.5" />
                <span>Gameplay programmer & tools builder focused on system architectures and reactive mechanics logic.</span>
              </p>
            </div>

            {/* MECHANICS TRACKER PROGRESS SLIDERS */}
            <div className="space-y-4 max-w-md font-mono text-xs bg-white/40 p-2 backdrop-blur-xs rounded-xs">
              <div>
                <div className="flex justify-between font-bold mb-1 text-[11px] sm:text-xs">
                  <span>[SYS] Gameplay Logic & State Machines</span>
                  <span>95%</span>
                </div>
                <div className="w-full bg-zinc-200 h-3 border border-foreground">
                  <div className="bg-black h-full w-[95%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between font-bold mb-1 text-[11px] sm:text-xs">
                  <span>[UI] Interactive Loops & UI Feedback</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-zinc-200 h-3 border border-foreground">
                  <div className="bg-black h-full w-[90%]" />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2 font-mono w-full max-w-md relative z-30">
              <button 
                onClick={() => scrollToSection("games")}
                className="bg-foreground text-background hover:bg-accent hover:text-white px-5 py-3.5 text-xs font-black tracking-widest uppercase transition-colors border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none text-center w-full"
              >
                [SPACE] View Builds
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="bg-white text-foreground hover:bg-zinc-50 px-5 py-3.5 text-xs font-black tracking-widest uppercase transition-colors border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none text-center w-full"
              >
                [ENTER] Specs Log
              </button>
            </div>
          </div>

          {/* LAYOUT RIGHT SIDEBAR: CONTROLLER INSPECTOR */}
          <div className="lg:col-span-4 border-l-0 lg:border-l-4 border-foreground p-5 md:p-6 flex flex-col justify-between space-y-8 graph-paper bg-white/80 order-3 relative z-20">
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b-2 border-foreground pb-2 font-mono bg-white backdrop-blur-xs px-1">
                <span className="font-black text-xs text-muted-foreground uppercase">// INSPECTOR COMPONENT</span>
                <span className="text-[10px] bg-zinc-200 px-1 font-bold">ID: P1</span>
              </div>

              <div className="flex flex-row items-center lg:flex-col lg:items-end gap-4 lg:gap-6 justify-center lg:justify-start">
                <div className="relative group max-w-[120px] sm:max-w-[160px] w-full shrink-0">
                  <div className="absolute inset-0 bg-accent translate-x-2 translate-y-2 border-2 border-foreground -z-10" />
                  <div className="aspect-square overflow-hidden border-2 border-foreground bg-white">
                    <img src="/profile-square.jpg" alt="Justin Rei" className="w-full h-full object-cover filter contrast-125" />
                  </div>
                </div>

                {/* TRANSFORM OVERVIEW GRID */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 font-mono text-[10px] sm:text-xs flex-grow w-full">
                  <div className="bg-white border-2 border-foreground p-2 sm:p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <p className="text-zinc-400 text-[9px] font-bold">GPA.TRANSFORM</p>
                    <p className="text-base sm:text-xl font-black">1.67</p>
                  </div>
                  <div className="bg-white border-2 border-foreground p-2 sm:p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <p className="text-zinc-400 text-[9px] font-bold">CORE.ENVIRONMENT</p>
                    <p className="text-base sm:text-xl font-black">5+</p>
                  </div>
                  <div className="bg-white border-2 border-foreground p-2 sm:p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <p className="text-zinc-400 text-[9px] font-bold">LANG.LOCALIZE</p>
                    <p className="text-base sm:text-xl font-black">C2</p>
                  </div>
                  <div className="bg-white border-2 border-foreground p-2 sm:p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <p className="text-zinc-400 text-[9px] font-bold">INPUT.SCHEME</p>
                    <p className="text-base sm:text-xl font-black">KBM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* LIVE DATA RUNTIME CONSOLE */}
            <div className="bg-black text-zinc-400 font-mono text-[10px] p-3 space-y-1 border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)] relative z-30">
              <div className="flex items-center gap-1.5 text-zinc-200 border-b border-zinc-800 pb-1 mb-1">
                <TerminalIcon size={12} className="text-accent" />
                <span className="font-bold">LIVE BUILD DIALOGUE</span>
              </div>
              <p><span className="text-green-500">[OK]</span> Init assembly context runtime...</p>
              <p><span className="text-green-500">[OK]</span> Mapping assets stream (Java, Python, C#)</p>
              <p><span className="text-accent">[READY]</span> Core system awaits controller input.</p>
            </div>

          </div>
        </div>

        {/* LOWER FOOTER LOG METRICS STATUS BAR */}
        <div className="w-full bg-white border-t-4 border-foreground px-4 py-2 flex justify-between items-center text-[9px] font-mono font-bold text-muted-foreground relative z-50">
          <p className="hidden md:inline">MOUSE POS: VIEWPORT_CENTER</p>
          <button onClick={() => scrollToSection("about")} className="flex items-center gap-1 hover:text-foreground mx-auto md:mx-0">
            SCROLL DOWN TO INITIALIZE SPECS <ChevronDown size={12} className="animate-bounce" />
          </button>
          <p className="hidden md:inline">FRAME_RATE: 60FPS</p>
        </div>
      </section>

      {/* ABOUT SECTION - WRAPPED IN THE GRAPH PAPER GRID STYLE */}
      <section id="about" className="py-20 px-4 md:px-8 lg:px-16 border-b-4 border-foreground graph-paper bg-white/90">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="bg-white/90 border-4 border-foreground p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-5xl md:text-7xl font-black mb-8 italic uppercase tracking-tighter">About Me</h2>
              <p className="text-xl md:text-2xl leading-relaxed mb-8 text-justify font-medium">
                {"I'm"} <strong className="underline decoration-4 text-accent">Justin Rei E. Jose</strong>, a developer focused on crafting interactive mechanics, game tools, and custom runtime dashboard architectures. This website serves as my devlog and portfolio.
              </p>
              
              <div className="space-y-1 mb-10 text-lg md:text-xl font-bold font-mono">
                <p className="text-4xl sm:text-5xl font-black mb-2">Lvl 22</p>
                <p className="text-muted-foreground uppercase text-xs tracking-widest">// FILIPINO - ILOCANO</p>
                <p className="text-muted-foreground uppercase text-xs tracking-widest">// UMINGAN, PANGASINAN, PHL.</p>
              </div>
              
              <div className="flex items-center gap-6 sm:gap-8">
                <div className="w-28 h-28 sm:w-36 sm:h-36 transform -rotate-6 shrink-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="45" cy="50" r="35" fill="#F5A623" stroke="black" strokeWidth="2.5" />
                    <path d="M 32 42 Q 35 38 38 42" stroke="black" strokeWidth="2" fill="none" />
                    <path d="M 52 42 Q 55 38 58 42" stroke="black" strokeWidth="2" fill="none" />
                    <path d="M 33 48 C 33 48 29 65 35 65" stroke="#87CEEB" strokeWidth="4" fill="none" />
                    <path d="M 57 48 C 57 48 61 65 55 65" stroke="#87CEEB" strokeWidth="4" fill="none" />
                    <path d="M 35 72 Q 45 65 55 72" stroke="black" strokeWidth="2.5" fill="none" />
                    <rect x="65" y="45" width="28" height="38" fill="white" stroke="black" strokeWidth="2" rx="1" transform="rotate(15, 79, 64)" />
                    <text x="68" y="58" fontSize="8" fontWeight="black" transform="rotate(15, 79, 64)">GDD</text>
                  </svg>
                </div>
                <div className="bg-white border-4 border-foreground p-4 sm:p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-3">
                  <p className="font-black text-sm sm:text-base tracking-tighter uppercase">HIRE PLAYER 1</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-4 border-foreground p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-6">
              <h3 className="text-xl sm:text-2xl font-black uppercase font-mono tracking-tight border-b-2 border-foreground pb-2">// Core Philosophies</h3>
              <div className="space-y-5 font-mono text-xs sm:text-sm">
                <div>
                  <p className="font-bold uppercase text-accent">01 / Mechanics Inspired Interfaces</p>
                  <p className="text-muted-foreground mt-1">UI should react with feedback loops that match structural gameplay systems.</p>
                </div>
                <div>
                  <p className="font-bold uppercase text-accent">02 / Robust Logic Runtimes</p>
                  <p className="text-muted-foreground mt-1">Handling variable system states safely without performance or execution sequence overhead.</p>
                </div>
                <div>
                  <p className="font-bold uppercase text-accent">03 / Explicit Specification Records</p>
                  <p className="text-muted-foreground mt-1">Every architectural choice requires crisp documentation tracking, technical verification loops, and clear architectural standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION & EXPERIENCE - GRAPH PAPER STYLE */}
      <section id="education" className="py-20 border-b-4 border-foreground px-4 md:px-8 lg:px-16 graph-paper bg-zinc-100/90">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="bg-white/90 border-4 border-foreground p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-4xl md:text-6xl font-bold mb-12 italic uppercase tracking-tighter underline decoration-2">Education</h2>
              <div className="space-y-12">
                <div className="relative pl-8 border-l-4 border-foreground">
                  <div className="absolute w-5 h-5 bg-foreground -left-[12px] top-0 rounded-full" />
                  <h3 className="text-xl sm:text-2xl font-black mb-1 uppercase">BS In Computer Science</h3>
                  <p className="text-base sm:text-xl font-bold text-muted-foreground mb-1">STI COLLEGE SAN JOSE</p>
                  <p className="font-mono text-xs mb-3 tracking-tighter">San Jose City, N.E., PHL.</p>
                  <p className="font-mono text-xs mb-3 tracking-tighter">2026 (Graduating) | GPA: 1.67/1.00 (90%)</p>
                  <p className="text-sm sm:text-base italic bg-white inline-block px-2 py-1 border border-black font-medium">Thesis / Major Project: GARDENPALS (IoT Hardware Simulation & Engine Systems)</p>
                </div>
                <div className="relative pl-8 border-l-4 border-foreground/20">
                  <h3 className="text-xl sm:text-2xl font-black mb-1 uppercase">C2 Proficient English Certificate</h3>
                  <p className="text-base sm:text-xl font-bold text-muted-foreground">EF SET</p>
                  <p className="font-mono text-xs tracking-tighter">2026 | Online Certificate</p>
                </div>
              </div>
            </div>

            <div id="experience">
              <div className="bg-background border-4 sm:border-8 border-foreground p-6 sm:p-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter">Tools & Web Intern</h3>
                  <span className="bg-foreground text-background font-mono text-[10px] px-2 py-0.5 font-bold">COMPLETED</span>
                </div>
                <p className="text-base sm:text-xl font-bold mb-6">SAJELCO | JAN 2026 - APR 2026</p>
                
                <ul className="space-y-4 text-base sm:text-lg list-none mb-8 font-medium">
                  <li className="flex gap-3"><span className="font-black text-accent">→</span>Engineered real-time geospatial canvas module utilizing React.js and Node.js code layers, rendering interactive live elements efficiently.</li>
                  <li className="flex gap-3"><span className="font-black text-accent">→</span>Optimized asset transitions and validated communication architecture system integrity.</li>
                </ul>

                <div className="border-t-2 border-foreground/20 pt-6">
                  <p className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase mb-4">// Core Integrations Configured:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="border border-foreground p-3 bg-foreground/5 font-mono">
                      <p className="font-bold text-xs uppercase">Interactive Telemetry</p>
                      <p className="text-[10px] text-muted-foreground">Dynamic node mapping arrays</p>
                    </div>
                    <div className="border border-foreground p-3 bg-foreground/5 font-mono">
                      <p className="font-bold text-xs uppercase">Asset Processing</p>
                      <p className="text-[10px] text-muted-foreground">High-performance engine sequence pipelines</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GAMES SHOWCASE - GRAPH PAPER STYLE */}
      <section id="games" className="py-20 px-4 md:px-8 lg:px-16 graph-paper bg-white/90">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white border-4 border-foreground p-6 sm:p-8 inline-block mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter">Games & Software</h2>
            <p className="text-base sm:text-xl text-muted-foreground font-mono mt-2">// Builds and engineering test logs compiled successfully.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <ProjectCard 
              title="R1 Amianan Presyo"
              engine="Python / Streamlit"
              status="Released"
              tags={["Simulation", "State Management", "Logistics Engine"]}
              desc="Developed an agricultural simulation app tracking commodity pricing workflows. Features procedural arithmetic calculations and real-time history visualization graphs."
              img="/r1-amianan.png"
            />
            <ProjectCard 
              title="Corge"
              engine="JavaScript / Electron"
              status="Prototype"
              tags={["Desktop Tool", "2D Screen Space", "Asset Drawing"]}
              desc="Lazy Corgi Weather (Corge) acts as an atmospheric UI overlay, executing background loop processing and drawing asset pipelines directly onto desktop space."
              img="/corge.gif"
            />
          </div>
        </div>
      </section>

      {/* SKILLS ATTRIBUTES ARRAYS - SOLID SOLID BLACK WALL LAYOVER */}
      <section id="skills" className="py-20 bg-foreground text-background px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black mb-16 italic uppercase tracking-tighter text-white">Skills & Attributes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">
            <SkillSet title="LANGUAGES & CORE" items="Java, Python, C-Style Syntax, JavaScript, React.js" />
            <SkillSet title="SYSTEMS & AUTOMATION" items="AI Engine Tool Integrations (LLMs, Gemini, Claude), Custom System Automation Workflows" />
            <SkillSet title="VERSION CONTROL & COLLAB" items="GitHub Version Layers, Git Flow Branching, Trello, Notion Frameworks" />
            <SkillSet title="DESIGN & LOGIC RECORDS" items="Technical System Architecture Writing, GDD Structural Outlines, State Modeling Records" />
            <SkillSet title="LOCALIZATION" items="English (C2 Proficient Language Level), Filipino, Ilocano (Native)" />
            <SkillSet title="CROSS FUNCTIONAL" items="System Architecture Logic, Mechanics Architecture, Creative Layout Component Design" />
          </div>
        </div>
      </section>

      {/* CONNECT / FOOTER SECTION - GRAPH PAPER STYLE */}
      <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 graph-paper bg-white/90">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="bg-white border-4 border-foreground p-6 sm:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-6">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Connect</h2>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold space-y-3 font-mono break-all">
                <p className="text-black font-serif not-italic">Justin Rei E. Jose</p>
                <p className="text-muted-foreground">+639272203945</p>
                <p className="text-muted-foreground underline underline-offset-4 text-lg sm:text-2xl">justinreijose27@gmail.com</p>
              </div>
              <div className="flex gap-6 pt-4">
                <a href="https://www.linkedin.com/in/justinreijose" target="_blank" rel="noopener noreferrer" className="border-2 border-foreground p-3 bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all">
                  <Linkedin size={28} />
                </a>
                <a href="https://github.com/joseGit-hub" target="_blank" rel="noopener noreferrer" className="border-2 border-foreground p-3 bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all">
                  <Github size={28} />
                </a>
              </div>
            </div>

            <div className="text-left lg:text-right flex flex-col items-start lg:items-end space-y-6">
              <h3 className="text-5xl md:text-7xl font-black uppercase text-accent tracking-tighter">GG WP</h3>
              <p className="text-xl text-muted-foreground italic max-w-md font-medium">Thanks for checking out the logs! Reach out to team up and build custom engine projects. &gt;.&lt;</p>

              <div className="w-28 h-28 transform -rotate-6">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="45" cy="50" r="35" fill="#F5A623" stroke="black" strokeWidth="2.5" />
                  <path d="M 32 42 Q 35 38 38 42" stroke="black" strokeWidth="2" fill="none" />
                  <path d="M 52 42 Q 55 38 58 42" stroke="black" strokeWidth="2" fill="none" />
                  <path d="M 33 48 C 33 48 29 65 35 65" stroke="#87CEEB" strokeWidth="4" fill="none" />
                  <path d="M 57 48 C 57 48 61 65 55 65" stroke="#87CEEB" strokeWidth="4" fill="none" />
                  <path d="M 35 72 Q 45 65 55 72" stroke="black" strokeWidth="2.5" fill="none" />
                  <rect x="65" y="45" width="28" height="38" fill="white" stroke="black" strokeWidth="2" rx="1" transform="rotate(15, 79, 64)" />
                  <text x="68" y="58" fontSize="8" fontWeight="black" transform="rotate(15, 79, 64)">GDD</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t-4 border-foreground text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground bg-zinc-100">
        <div className="max-w-7xl mx-auto px-4">
          © 2026 Justin Rei E. Jose 
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({ title, engine, status, tags, desc, img }: { title: string, engine: string, status: string, tags: string[], desc: string, img: string }) {
  return (
    <div className="group border-4 border-foreground bg-white overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1 flex flex-col">
      <div className="aspect-video bg-zinc-900 overflow-hidden relative border-b-4 border-foreground">
        <img src={img} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-3 left-3">
          <span className="bg-black text-white font-mono text-[10px] px-2 py-0.5 font-bold tracking-tight uppercase border border-white">
            {engine}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="bg-red-500 text-white font-mono text-[10px] px-2 py-0.5 font-bold uppercase border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            {status}
          </span>
        </div>
      </div>
      <div className="p-5 sm:p-8 flex flex-col flex-grow">
        <h3 className="text-2xl sm:text-3xl font-black mb-2 tracking-tight uppercase">{title}</h3>
        
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="bg-zinc-100 text-zinc-800 font-mono text-[9px] uppercase font-bold px-2 py-0.5 border border-zinc-400 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-base text-muted-foreground mb-6 flex-grow font-medium">{desc}</p>
        <div className="flex gap-4 items-center">
          <a href="https://github.com/joseGit-hub" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            <Github size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}

function SkillSet({ title, items }: { title: string, items: string }) {
  return (
    <div className="space-y-2 font-mono">
      <h3 className="text-lg font-black border-b-2 border-white/20 pb-1.5 tracking-wider uppercase text-accent">// {title}</h3>
      <p className="text-sm sm:text-base text-white/80 leading-relaxed font-medium font-sans">{items}</p>
    </div>
  )
}