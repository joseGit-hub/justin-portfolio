"use client"

import { useState } from "react"
import { Linkedin, Mail, Phone, ExternalLink, Github, ChevronDown, Monitor, Database, Code2, Terminal, Award, BookOpen } from "lucide-react"

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
      {/* Huge Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
        <div className="text-center">
          <h1 className="text-7xl md:text-9xl lg:text-[13rem] font-black tracking-tighter mb-8 font-serif uppercase leading-none">
            JUSTIN REI
          </h1>
          
          <nav className="flex flex-wrap justify-center gap-4 md:gap-10 text-xs md:text-lg mb-12 tracking-[0.3em] font-bold">
            {["ABOUT", "EDUCATION", "EXPERIENCE", "PROJECTS", "SKILLS"].map((item) => (
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
            CONTINUE
          </button>
        </div>
        
        <div className="absolute bottom-12 animate-bounce">
          <ChevronDown className="w-12 h-12 text-muted-foreground" />
        </div>
      </section>

      {showContent && (
        <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000">
          
          {/* About Section - With Image & Doodle */}
          <section id="about" className="py-32 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="order-2 lg:order-1">
                  <h2 className="section-title text-6xl md:text-8xl font-bold mb-10 italic">About Me</h2>
                  <p className="text-2xl md:text-3xl leading-relaxed mb-8 text-justify">
                    {"I'm"} <strong className="underline decoration-4">Justin Rei E. Jose</strong>, a passionate tech guy who loves to develop programs, systems, and apps. This website serves as my online portfolio.
                  </p>
                  
                  <div className="space-y-2 mb-12 text-xl md:text-2xl font-bold">
                    <p className="text-5xl font-black mb-4">22</p>
                    <p className="text-muted-foreground uppercase tracking-widest text-sm">Filipino | Ilocano</p>
                    <p className="text-muted-foreground uppercase tracking-widest text-sm">Umingan, Pangasinan, PHL.</p>
                  </div>
                  
                  <div className="flex items-center gap-8">
                    {/* Crying Emoji SVG */}
                    <div className="w-40 h-40 transform -rotate-6">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="45" cy="50" r="35" fill="#F5A623" stroke="black" strokeWidth="2.5" />
                        <path d="M 32 42 Q 35 38 38 42" stroke="black" strokeWidth="2" fill="none" />
                        <path d="M 52 42 Q 55 38 58 42" stroke="black" strokeWidth="2" fill="none" />
                        <path d="M 33 48 C 33 48 29 65 35 65" stroke="#87CEEB" strokeWidth="4" fill="none" />
                        <path d="M 57 48 C 57 48 61 65 55 65" stroke="#87CEEB" strokeWidth="4" fill="none" />
                        <path d="M 35 72 Q 45 65 55 72" stroke="black" strokeWidth="2.5" fill="none" />
                        <rect x="65" y="45" width="28" height="38" fill="white" stroke="black" strokeWidth="2" rx="1" transform="rotate(15, 79, 64)" />
                        <text x="68" y="58" fontSize="5" fontWeight="black" transform="rotate(15, 79, 64)">RESUME</text>
                      </svg>
                    </div>
                    <div className="bg-white border-4 border-foreground p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] rotate-3">
                        <p className="font-black text-lg tracking-tighter">PLEASE HIRE ME!!</p>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                  <div className="w-72 h-72 md:w-[32rem] md:h-[32rem] rounded-full overflow-hidden border-[12px] border-foreground/5 shadow-2xl">
                    <img src="/profile-square.jpg" alt="Justin Rei" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Education & Experience - Combined for "Big" layout */}
          <section id="education" className="py-32 bg-foreground/5 border-y-4 border-foreground px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-24">
                {/* Education */}
                <div>
                  <h2 className="section-title text-5xl md:text-7xl font-bold mb-16 italic underline decoration-1">Education</h2>
                  <div className="space-y-16">
                    <div className="relative pl-10 border-l-4 border-foreground">
                      <div className="absolute w-6 h-6 bg-foreground -left-[14px] top-0 rounded-full" />
                      <h3 className="text-2xl font-black mb-2 uppercase">BS In Computer Science</h3>
                      <p className="text-xl font-bold text-muted-foreground mb-1">STI COLLEGE SAN JOSE</p>
                      <p className="font-mono text-sm mb-4 tracking-tighter">San Jose City, N.E., PHL.</p>
                      <p className="font-mono text-sm mb-4 tracking-tighter">2026 (Graduating) | GPA: 1.67/1.00 (90%)</p>
                      <p className="text-lg italic bg-white inline-block px-2 border border-black">Thesis: GARDENPALS (IoT System)</p>
                    </div>
                    <div className="relative pl-10 border-l-4 border-foreground/20">
                      <h3 className="text-2xl font-black mb-2 uppercase">Applied Data Science with Python Certificate</h3>
                      <p className="text-xl font-bold text-muted-foreground">IBM & COGNITIVE CLASS</p>
                      <p className="font-mono text-sm mb-4 tracking-tighter">2026 | Online</p>
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div id="experience">
                  <h2 className="section-title text-5xl md:text-7xl font-bold mb-16 italic underline decoration-1">Experience</h2>
                  <div className="bg-background border-8 border-foreground p-10 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
                    <h3 className="text-3xl font-black mb-2 uppercase tracking-tighter">Web Development Intern</h3>
                    <p className="text-xl font-bold mb-6">SAJELCO | JAN 2026 - APR 2026</p>
                    <ul className="space-y-6 text-xl list-none">
                      <li className="flex gap-4"><span className="font-black">→</span> Redesigned systems using React, Node.js & MySQL.</li>
                      <li className="flex gap-4"><span className="font-black">→</span> Completed backend architecture within 300-hr timeline.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section - Large Grid */}
          <section id="projects" className="py-32 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="section-title text-6xl md:text-8xl font-bold mb-20 italic">Projects</h2>
              <div className="grid md:grid-cols-2 gap-16">
                <ProjectCard 
                  title="Agri-Production Tracker"
                  stack="Python, Pandas, Streamlit"
                  desc="A high-scale data intelligence dashboard for tracking regional agriculture."
                  img="/region1-tracker.png"
                />
                <ProjectCard 
                  title="Emlic - Email Cleaner"
                  stack="Python, SQLite, Streamlit"
                  desc="Utility app for large-scale data cleaning and CRM support."
                  img="/emlic.png"
                />
                <ProjectCard 
                  title="Emlic - Email Cleaner"
                  stack="Python, SQLite, Streamlit"
                  desc="Utility app for large-scale data cleaning and CRM support."
                  img="/emlic.png"
                />
                <ProjectCard 
                  title="Emlic - Email Cleaner"
                  stack="Python, SQLite, Streamlit"
                  desc="Utility app for large-scale data cleaning and CRM support."
                  img="/emlic.png"
                />
              </div>
            </div>
          </section>

          {/* Skills Section - Dark Background (From your image) */}
          <section id="skills" className="py-32 bg-foreground text-background px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="section-title text-6xl md:text-8xl font-bold mb-24 text-white">Skills & Proficiencies</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-16">
                <SkillSet title="TECH STACK" items="SQL, Python, Java, Node.js, React.js, MySQL, Tableau" />
                <SkillSet title="AI & AUTOMATION" items="Prompt Engineering, Claude, Gemini, ChatGPT" />
                <SkillSet title="ADMINISTRATION" items="CRM Support, Lead Gen, Data Entry, Email Management" />
                <SkillSet title="TOOLS" items="MS Office 365, Trello, Notion, Canva" />
                <SkillSet title="LANGUAGES" items="Filipino, Ilocano (Native), English (C2 Proficient)" />
              </div>
            </div>
          </section>

          {/* Contact Section - Doodle & Socials */}
          <section id="contact" className="py-40 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-8">
                  <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">Connect</h2>
                  <div className="text-2xl md:text-4xl font-bold space-y-4">
                    <p>Justin Rei E. Jose</p>
                    <p className="text-muted-foreground flex items-center gap-4"><Phone size={32}/> +639272203945</p>
                    <p className="text-muted-foreground flex items-center gap-4 underline underline-offset-8"><Mail size={32}/> justinreijose27@gmail.com</p>
                  </div>
                  <div className="flex gap-8 pt-8">
                    <Linkedin size={48} className="hover:scale-125 transition-transform cursor-pointer" />
                    <Github size={48} className="hover:scale-125 transition-transform cursor-pointer" />
                  </div>
                </div>

                <div className="text-center lg:text-right flex flex-col items-center lg:items-end">
                  <h3 className="text-5xl md:text-7xl font-black mb-4">Sad to see you go :(</h3>
                  <p className="text-2xl text-muted-foreground mb-12 italic">but, feel free to reach out! &gt;.&lt;</p>
                  {/* Sitting Person SVG 
                  <div className="w-56 h-56 opacity-80 scale-x-[-1]">
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="2.5">
                      <circle cx="70" cy="30" r="15" />
                      <path d="M 70 45 L 70 75" />
                      <path d="M 70 55 C 50 55 45 75 45 85 L 35 90" />
                      <path d="M 70 75 C 90 75 95 85 95 90" />
                    </svg>
                  </div>*/}

                  <div className="w-40 h-40 transform -rotate-6">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="45" cy="50" r="35" fill="#F5A623" stroke="black" strokeWidth="2.5" />
                        <path d="M 32 42 Q 35 38 38 42" stroke="black" strokeWidth="2" fill="none" />
                        <path d="M 52 42 Q 55 38 58 42" stroke="black" strokeWidth="2" fill="none" />
                        <path d="M 33 48 C 33 48 29 65 35 65" stroke="#87CEEB" strokeWidth="4" fill="none" />
                        <path d="M 57 48 C 57 48 61 65 55 65" stroke="#87CEEB" strokeWidth="4" fill="none" />
                        <path d="M 35 72 Q 45 65 55 72" stroke="black" strokeWidth="2.5" fill="none" />
                        <rect x="65" y="45" width="28" height="38" fill="white" stroke="black" strokeWidth="2" rx="1" transform="rotate(15, 79, 64)" />
                        <text x="68" y="58" fontSize="10" fontWeight="black" transform="rotate(15, 79, 64)">RESUME</text>
                      </svg>
                    </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="py-12 border-t border-foreground/10 text-center font-mono text-xs uppercase tracking-widest text-muted-foreground">
            © 2026 Justin Rei E. Jose 
          </footer>
        </div>
      )}
    </div>
  )
}

function ProjectCard({ title, stack, desc, img }: { title: string, stack: string, desc: string, img: string }) {
  return (
    <div className="group border-4 border-foreground bg-white overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all hover:translate-x-2 hover:translate-y-2">
      <div className="aspect-video bg-zinc-900 overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
      </div>
      <div className="p-8">
        <h3 className="text-3xl font-black mb-2">{title}</h3>
        <p className="font-mono text-sm text-accent font-bold mb-4 uppercase tracking-tighter">{stack}</p>
        <p className="text-lg text-muted-foreground mb-6">{desc}</p>
        <div className="flex gap-4">
          <ExternalLink className="cursor-pointer hover:text-accent" />
          <Github className="cursor-pointer hover:text-accent" />
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