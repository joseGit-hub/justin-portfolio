"use client"

import { useState } from "react"
import { Linkedin, Mail, Phone, Github, ChevronDown, Gamepad2, Layers, Code2, Terminal, Award, BookOpen } from "lucide-react"

export default function Portfolio() {
  const [showContent, setShowContent] = useState(false)

  const scrollToSection = (id: string) => {
    setShowContent(true)
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    scrollToSection(id)
  }

  return (
    <div className="graph-paper min-h-screen selection:bg-foreground selection:text-background">
      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
        <div className="text-center">
          <h1 className="text-7xl md:text-9xl lg:text-[13rem] font-black tracking-tighter mb-8 font-serif uppercase leading-none">
            JUSTIN REI
          </h1>
          
          <nav className="flex flex-wrap justify-center gap-4 md:gap-10 text-xs md:text-lg mb-12 tracking-[0.3em] font-bold">
            {["ABOUT", "EDUCATION", "EXPERIENCE", "GAMES", "SKILLS", "WRITING", "CONTACT"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="hover:underline underline-offset-8 decoration-4 transition-all"
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
              >
                {item}
              </a>
            ))}
          </nav>
          
          <button 
            onClick={() => scrollToSection("about")}
            className="bg-foreground text-background hover:scale-110 active:scale-95 px-16 py-6 text-sm font-black tracking-[0.4em] transition-all shadow-[12px_12px_0px_0px_rgba(0,0,0,0.1)] rounded-none"
          >
            START GAME
          </button>
        </div>
        
        <div className="absolute bottom-12 animate-bounce">
          <ChevronDown className="w-12 h-12 text-muted-foreground" />
        </div>
      </section>

      {showContent && (
        <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <section id="about" className="py-22 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="order-2 lg:order-1">
                  <h2 className="section-title text-6xl md:text-8xl font-bold mb-10 italic">About Me</h2>
                  <p className="text-2xl md:text-3xl leading-relaxed mb-8 text-justify">
                    {"I'm"} <strong className="underline decoration-4">Justin Rei E. Jose</strong>, a gameplay programmer and software developer focused on crafting interactive mechanics, tools, and systems. This website serves as my devlog and portfolio.
                  </p>
                  
                  <div className="space-y-2 mb-12 text-xl md:text-2xl font-bold">
                    <p className="text-5xl font-black mb-4">Lvl 22</p>
                    <p className="text-muted-foreground uppercase tracking-widest text-lg">Filipino - Ilocano</p>
                    <p className="text-muted-foreground uppercase tracking-widest text-lg">Umingan, Pangasinan, PHL.</p>
                  </div>
                  
                  <div className="flex items-center gap-8">
                    <div className="w-40 h-40 transform -rotate-6">
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
                    <div className="bg-white border-4 border-foreground p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] rotate-3">
                        <p className="font-black text-lg tracking-tighter">HIRE PLAYER 1</p>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                  <div className="w-72 h-72 md:w-[32rem] md:h-[32rem] rounded-full overflow-hidden border-[12px] border-foreground shadow-2xl">
                    <img src="/profile-square.jpg" alt="Justin Rei" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="education" className="py-22 bg-foreground/5 border-y-4 border-foreground px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-24">
                <div>
                  <h2 className="section-title text-5xl md:text-7xl font-bold mb-16 italic underline decoration-1">Education</h2>
                  <div className="space-y-16">
                    <div className="relative pl-10 border-l-4 border-foreground">
                      <div className="absolute w-6 h-6 bg-foreground -left-[14px] top-0 rounded-full" />
                      <h3 className="text-2xl font-black mb-2 uppercase">BS In Computer Science</h3>
                      <p className="text-xl font-bold text-muted-foreground mb-1">STI COLLEGE SAN JOSE</p>
                      <p className="font-mono text-sm mb-4 tracking-tighter">San Jose City, N.E., PHL.</p>
                      <p className="font-mono text-sm mb-4 tracking-tighter">2026 (Graduating) | GPA: 1.67/1.00 (90%)</p>
                      <p className="text-lg italic bg-white inline-block px-2 border border-black">Thesis / Major Project: GARDENPALS (IoT Hardware Simulation & Analytics)</p>
                    </div>
                    <div className="relative pl-10 border-l-4 border-foreground/20">
                      <h3 className="text-2xl font-black mb-2 uppercase">C2 Proficient English Certificate</h3>
                      <p className="text-xl font-bold text-muted-foreground">EF SET</p>
                      <p className="font-mono text-sm mb-4 tracking-tighter">2026 | Online</p>
                    </div>
                  </div>
                </div>

                <div id="experience">
                  <h2 className="section-title text-5xl md:text-7xl font-bold mb-16 italic underline decoration-1">Experience</h2>
                  <div className="bg-background border-8 border-foreground p-10 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                      <h3 className="text-3xl font-black uppercase tracking-tighter">Tools & Web Intern</h3>
                      <span className="bg-foreground text-background font-mono text-xs px-2 py-1 font-bold">COMPLETED</span>
                    </div>
                    <p className="text-xl font-bold mb-6">SAJELCO | JAN 2026 - APR 2026</p>
                    
                    <ul className="space-y-6 text-xl list-none mb-8">
                      <li className="flex gap-4"><span className="font-black">→</span>Engineered real-time geospatial module utilizing React.js and Node.js node stacks, processing location telemetry arrays for 40,000 network end-points.</li>
                      <li className="flex gap-4"><span className="font-black">→</span>Optimized data asset pipeline transitions and validated hardware infrastructure integrity layers.</li>
                    </ul>

                    <div className="border-t-2 border-foreground/20 pt-6">
                      <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-4">Featured Infrastructure Sub-systems:</p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="border border-foreground p-3 bg-foreground/5">
                          <p className="font-bold text-sm uppercase">Geospatial Telemetry</p>
                          <p className="text-xs text-muted-foreground">Node/React mapping engine Integration</p>
                        </div>
                        <div className="border border-foreground p-3 bg-foreground/5">
                          <p className="font-bold text-sm uppercase">Data Synchronization</p>
                          <p className="text-xs text-muted-foreground">High-throughput payload dispatch pipelines</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="games" className="py-12 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="section-title text-6xl md:text-8xl font-bold mb-6 italic">Games & Software</h2>
              <p className="text-xl text-muted-foreground font-mono mb-16">A showcase of interactive projects, mechanics prototypes, and utility tools.</p>
              
              <div className="grid md:grid-cols-2 gap-10">
                <ProjectCard 
                  title="R1 Amianan Presyo"
                  engine="Python / Streamlit"
                  status="Released"
                  tags={["Simulation", "Data Engine", "Logistics"]}
                  desc="Developed an agricultural data engine engine tracking commodity workflows. Features complex numerical pipeline management and historic trend analytics visualization."
                  img="/r1-amianan.png"
                />
                <ProjectCard 
                  title="Corge"
                  engine="JavaScript / Electron"
                  status="Prototype"
                  tags={["Desktop Companion", "Tools", "2D Art Layout"]}
                  desc="Lazy Corgi Weather (Corge) acts as an atmospheric UI awareness application, executing background logic loops and custom drawing pipelines without rendering bottlenecks."
                  img="/corge.gif"
                />
              </div>
            </div>
          </section>

          <section id="skills" className="py-22 bg-foreground text-background px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="section-title text-6xl md:text-8xl font-bold mb-24 text-white">Skills & Attributes</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-16">
                <SkillSet title="CORE ENGINES & STACK" items="Java, Python, SQL (MySQL, SQLite, MS SQL), Node.js, React.js" />
                <SkillSet title="LOGIC & AUTOMATION" items="AI Engine Prompt Arrays (LLMs, Gemini, Claude), Automation Workflow Pipelines" />
                <SkillSet title="DEV TOOLS" items="GitHub Version Layers, Trello, Notion Frameworks, Tableau Analytics" />
                <SkillSet title="DOCUMENTATION" items="Technical Architecture Writing, GDD Structural Outlines, Data Modeling Records" />
                <SkillSet title="LOCALIZATION" items="English (C2 Proficient Language Level), Filipino, Ilocano (Native)" />
                <SkillSet title="CROSS FUNCTIONAL" items="System Architecture Logic, Mechanics Architecture, Creative Component Design" />
              </div>
            </div>
          </section>

          <section id="writing" className="py-12 px-4 md:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-bold mb-16 italic underline decoration-accent">
                Worldbuilding & Writing
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <WritingCard 
                  title="Astoria"
                  category="Narrative / Poetry"
                  preview="These tales of joy and tales of sorrow, What other tales could we have for tomorrow?"
                  img="/astoria.jpg" 
                />

                <WritingCard 
                  title="The Free Suburban Sky"
                  category="Atmospheric Literary"
                  preview="Whistling winds and the suburban skies. The sun is setting upon our very eyes."
                  img="/suburban.png" 
                />

                <div className="border-2 border-dashed border-foreground/30 flex items-center justify-center p-8 aspect-[3/4]">
                  <p className="font-mono text-muted-foreground italic">New levels in development...</p>
                </div>
              </div>
            </div>
          </section>

          <div className="w-full border-t-[2px] border-b-[2px] border-foreground bg-foreground h-[2px] my-2" />

          <section id="contact" className="py-22 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-8">
                  <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">Connect</h2>
                  <div className="text-2xl md:text-4xl font-bold space-y-4">
                    <p>Justin Rei E. Jose</p>
                    <p className="text-muted-foreground flex items-center gap-4">+639272203945</p>
                    <p className="text-muted-foreground flex items-center gap-4 underline underline-offset-8">justinreijose27@gmail.com</p>
                  </div>
                  <div className="flex gap-8 pt-8">
                    <a href="https://www.linkedin.com/in/justinreijose" target="_blank" rel="noopener noreferrer">
                      <Linkedin size={48} className="hover:scale-125 transition-transform cursor-pointer" />
                    </a>
                    <a href="https://github.com/joseGit-hub" target="_blank" rel="noopener noreferrer">
                      <Github size={48} className="hover:scale-125 transition-transform cursor-pointer" />
                    </a>
                  </div>
                </div>

                <div className="text-center lg:text-right flex flex-col items-center lg:items-end">
                  <h3 className="text-5xl md:text-7xl font-black mb-4">GG WP</h3>
                  <p className="text-2xl text-muted-foreground mb-12 italic">Thanks for playing! Reach out to team up. &gt;.&lt;</p>

                  <div className="w-40 h-40 transform -rotate-6">
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

          <footer className="mt-20 py-12 border-t-1 border-foreground text-center font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <div className="max-w-7xl mx-auto px-4">
              © 2026 Justin Rei E. Jose 
            </div>
          </footer>
        </div>
      )}
    </div>
  )
}

function ProjectCard({ title, engine, status, tags, desc, img }: { title: string, engine: string, status: string, tags: string[], desc: string, img: string }) {
  return (
    <div className="group border-4 border-foreground bg-white overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all hover:translate-x-2 hover:translate-y-2 flex flex-col">
      <div className="aspect-video bg-zinc-900 overflow-hidden relative border-b-4 border-foreground">
        <img src={img} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-black text-white font-mono text-xs px-2 py-1 font-bold tracking-tight uppercase border border-white">
            {engine}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-accent text-white font-mono text-xs px-2 py-1 font-bold uppercase border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-red-500">
            {status}
          </span>
        </div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-3xl font-black mb-2 tracking-tight uppercase">{title}</h3>
        
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="bg-zinc-100 text-zinc-800 font-mono text-[10px] uppercase font-bold px-2 py-0.5 border border-zinc-400 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-lg text-muted-foreground mb-6 flex-grow">{desc}</p>
        <div className="flex gap-4">
            <a href="https://github.com/joseGit-hub" target="_blank" rel="noopener noreferrer">
              <Github className="cursor-pointer hover:text-accent" />
            </a>
        </div>
      </div>
    </div>
  )
}

function SkillSet({ title, items }: { title: string, items: string }) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-black border-b-2 border-white/20 pb-2 tracking-widest">{title}</h3>
      <p className="text-xl text-white/70 leading-relaxed font-medium">{items}</p>
    </div>
  )
}

function WritingCard({ title, category, preview, img }: { title: string, category: string, preview: string, img: string }) {
  return (
    <div className="group border-2 border-foreground bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1 flex flex-col h-full">
      <div className="aspect-[3/4] bg-zinc-100 overflow-hidden border-b-2 border-foreground">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-[10px] font-black uppercase tracking-widest text-accent mb-1">
          {category}
        </span>
        <h3 className="text-2xl font-black mb-3 leading-tight uppercase">{title}</h3>
        <p className="text-sm italic text-muted-foreground line-clamp-4 font-serif leading-relaxed">
          "{preview}"
        </p>
      </div>
    </div>
  )
}