"use client"

import { useState } from "react"
import { Menu, X, Globe } from "lucide-react"
import { FaGithub, FaLinkedin, FaPinterest, FaCoffee } from "react-icons/fa"

const projects = [
  {
    title: "SAJELCO's Website",
    category: "Web Development",
    img: "/sajelco.png",
    link: "https://sajelco.net/",
    linkLabel: "Live Project",
    pinned: true,
  },
  {
    title: "R1 Amianan Presyo",
    category: "Data Analysis",
    img: "/r1-amianan.png",
    link: "https://r1-amianan.streamlit.app/",
    linkLabel: "Live Project",
    pinned: false,
  },
  {
    title: "Grahppy",
    category: "Game Design",
    img: "/graphh1.png",
    link: null,
    linkLabel: "Coming soon",
    pinned: false,
  },
  {
    title: "Fly Hammy!",
    category: "Game Design",
    img: "/flyHammyCover.png",
    link: "https://siyak.itch.io/fly-hammy",
    linkLabel: "Play Game",
    pinned: false,
  },
]

const educationItems = [
  {
    period: "2022-26",
    role: "BS CompSci",
    company: "STI College San Jose",
    desc: "Completed degree in Computer Science.",
  },
  {
    period: "2021-22",
    role: "BS CompSci",
    company: "Saint Louis University, Baguio City",
    desc: "Did my 1st year of by degree here.",
  },
]

const experienceItems = [
  {
    period: "Mar 2026 – Present",
    role: "QA Tester (Freelance)",
    company: "Nueva Technology",
    desc: "Ensuring software reliability and quality assurance.",
  },
  {
    period: "Jan – Apr 2026",
    role: "Web Developer (Intern)",
    company: "SAJELCO",
    desc: "Interned as a web dev and created a working site for them.",
  },
  {
    period: "2021-2026",
    role: "Writer (Freelance)",
    company: "SAJELCO",
    desc: "Worked on ghostwriting research papers, thesis and tech documentations.",
  },
]

const translations = {
  en: {
    aboutNav: "About",
    contactNav: "Contact",
    greeting: "Hello, I'm",
    introLine1: "A web developer who also dabbles in designing digital products.",
    introLine2: "Developer, Designer | Umingan, Pangasinan | Filipino - Ilocano",
    introLine3: " ",
    background: "Background",
    explore: "Explore Project Gallery Below",
    projectSubtitle: "Here are some of the digital projects I've built. Let's create something great together.",
    letsConnect: "Let's Connect",
    reachOut: "Feel free to reach out through any of these.",
    education: "Education",
    experience: "Experience",
    pinnedLabel: "PINNED PROJECT",
  },
  ilo: {
    aboutNav: "Mainbagana",
    contactNav: "Kontak",
    greeting: "Uyy, siak ni",
    introLine1: "Maysa a web developer nga agdaldakes met kadagiti digital products.",
    introLine2: "Developer, Designer | Umingan, Pangasinan | Filipino - Ilocano",
    introLine3: " ",
    background: "Pakasaritaan",
    explore: "Kitaen dagiti Proyekto Dita Baba",
    projectSubtitle: "Dagtoy dagiti nagapuanak ken proyekto nga mabalin ko met nga aramiden para kenca.",
    letsConnect: "Kontaken nak",
    reachOut: "Mabalin dak nga kontaken ditoy.",
    education: "Edukasion",
    experience: "Kapadasan",
    pinnedLabel: "PINNED PROJECT",
  },
}

export default function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [lang, setLang] = useState<"en" | "ilo">("en")

  const t = translations[lang]

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#f7f4ee] text-zinc-900 graph-paper">
      <style jsx global>{`
        @keyframes moveGraph {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 48px 48px;
          }
        }

        .graph-paper {
          background-size: 48px 48px;
          background-image:
            linear-gradient(to right, rgba(0, 0, 0, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 1px, transparent 1px);
          animation: moveGraph 4s linear infinite;
        }
      `}</style>

      <header className="fixed top-0 left-0 right-0 z-50 bg-[#e8e2d5]/90 backdrop-blur-md border-b border-zinc-300/70">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-8 py-3">
          <div 
            onClick={() => setIsModalOpen(true)}
            className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-500 shadow-sm flex items-center justify-center cursor-pointer transform hover:scale-105 transition-transform"
          >
            <img src="/profile-square.png" alt="Justin Rei Jose" className="w-full h-full object-cover" />
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden sm:flex gap-8 text-xl font-bold text-zinc-900">
              <button onClick={() => scrollToSection("background")} className="hover:text-orange-600 transition-colors">
                {t.aboutNav}
              </button>
              <button onClick={() => scrollToSection("contact")} className="hover:text-orange-600 transition-colors">
                {t.contactNav}
              </button>
            </nav>

            <div className="flex items-center bg-[#f7f4ee] border border-zinc-300 rounded-lg p-1 shadow-xs">
              <Globe size={16} className="text-orange-600 mx-1.5" />
              <button 
                onClick={() => setLang("en")} 
                className={`px-2 py-0.5 text-xs font-bold rounded ${lang === "en" ? "bg-orange-600 text-white" : "text-zinc-700 hover:text-zinc-900"}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLang("ilo")} 
                className={`px-2 py-0.5 text-xs font-bold rounded ${lang === "ilo" ? "bg-orange-600 text-white" : "text-zinc-700 hover:text-zinc-900"}`}
              >
                ILO
              </button>
            </div>

            <button className="sm:hidden text-zinc-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="sm:hidden flex flex-col gap-4 px-8 pb-6 text-2xl font-bold text-zinc-900 bg-[#e8e2d5]/95 border-b border-zinc-300/70 backdrop-blur-md">
            <button onClick={() => scrollToSection("background")} className="text-left">{t.aboutNav}</button>
            <button onClick={() => scrollToSection("contact")} className="text-left">{t.contactNav}</button>
          </div>
        )}
      </header>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4" onClick={() => setIsModalOpen(false)}>
          <div className="relative max-w-md w-full bg-[#f7f4ee] p-4 rounded-2xl border-2 border-orange-500 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 z-20 bg-[#f7f4ee]/90 hover:bg-[#f7f4ee] w-9 h-9 flex items-center justify-center rounded-full text-zinc-900 font-bold hover:text-orange-600 shadow-md transition-all">
              <X size={20} />
            </button>
            <img src="/profile-square.png" alt="Justin Rei Jose Enclosed" className="w-full h-auto rounded-xl object-cover" />
          </div>
        </div>
      )}

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full bg-[#f7f4ee] p-4 rounded-2xl border-2 border-orange-500 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 z-20 bg-[#f7f4ee]/90 hover:bg-[#f7f4ee] w-9 h-9 flex items-center justify-center rounded-full text-zinc-900 font-bold hover:text-orange-600 shadow-md transition-all">
              <X size={20} />
            </button>
            <img src={selectedImage} alt="Enlarged Project Preview" className="w-full h-auto rounded-xl object-contain max-h-[80vh]" />
          </div>
        </div>
      )}

      <section className="pt-24 sm:pt-32 pb-16 px-6 text-center max-w-5xl mx-auto">
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-tight whitespace-nowrap">
          {t.greeting} <span className="italic text-orange-600">Justin</span>
        </h1>

        <div className="mt-6 text-zinc-700 text-lg sm:text-xl md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto flex flex-col gap-1">
          <p>{t.introLine1}</p>
          <p>{t.introLine2}</p>
        </div>

        <div className="flex justify-center gap-10 mt-10 text-zinc-800">
          <a href="https://github.com/joseGit-hub" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-orange-600 transition-colors transform hover:scale-110 duration-200">
            <FaGithub size={36} />
          </a>
          <a href="https://www.linkedin.com/in/justinreijose" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-orange-600 transition-colors transform hover:scale-110 duration-200">
            <FaLinkedin size={36} />
          </a>
          <a href="https://ph.pinterest.com/justoojose/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="hover:text-orange-600 transition-colors transform hover:scale-110 duration-200">
            <FaPinterest size={36} />
          </a>
          <a href="https://ko-fi.com/justojose/shop" target="_blank" rel="noopener noreferrer" aria-label="Ko-Fi" className="hover:text-orange-600 transition-colors transform hover:scale-110 duration-200">
            <FaCoffee size={36} />
          </a>
        </div>
      </section>

      <section id="projects" className="max-w-7xl mx-auto px-8 pb-20 pt-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-orange-600 text-xl sm:text-2xl md:text-3xl font-semibold mt-3 leading-relaxed">{t.projectSubtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-14 gap-y-24">
          {projects.map((p) => (
            <div key={p.title} className="flex flex-col">
              {p.pinned ? (
                <div className="mb-3 inline-block self-start bg-orange-600 text-white text-xs font-bold tracking-widest px-3 py-1 rounded-full shadow-xs">
                  ★ {t.pinnedLabel}
                </div>
              ) : (
                <div className="mb-3 h-[26px]"></div>
              )}
              <div 
                onClick={() => setSelectedImage(p.img)}
                className={`aspect-video bg-white overflow-hidden mb-5 rounded-xl border-2 shadow-md group-hover:shadow-xl transition-all duration-300 cursor-pointer relative ${p.pinned ? "border-orange-500 ring-2 ring-orange-500/20" : "border-zinc-200"}`}
              >
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 ease-out" 
                />
              </div>
              <p className="text-3xl sm:text-4xl font-semibold">
                <span className="font-serif italic text-zinc-900">{p.title}</span>
                <span className="text-zinc-700"> — {p.category}</span>
              </p>
              <div className="mt-2">
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-orange-600 hover:text-orange-700 underline underline-offset-4">
                    {p.linkLabel}
                  </a>
                ) : (
                  <span className="text-xl font-semibold text-zinc-400">{p.linkLabel}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="background" className="max-w-5xl mx-auto px-8 pb-24">
        <div className="bg-white/30 backdrop-blur-xs p-8 sm:p-12 rounded-2xl border border-zinc-300/60 shadow-sm text-left">
          <p className="uppercase text-sm tracking-widest text-orange-600 font-bold mb-8 text-center">{t.background}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <h3 className="text-base font-bold uppercase tracking-wider text-orange-600 mb-4">{t.education}</h3>
              <div className="space-y-5">
                {educationItems.map((item, index) => (
                  <div key={index} className="border-l-2 border-orange-500 pl-4 py-1">
                    <div className="flex justify-between items-baseline">
                      <p className="font-semibold text-base sm:text-lg text-zinc-900">{item.role} — {item.company}</p>
                      <span className="text-xs text-zinc-500">{item.period}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold uppercase tracking-wider text-orange-600 mb-4">{t.experience}</h3>
              <div className="space-y-5">
                {experienceItems.map((item, index) => (
                  <div key={index} className="border-l-2 border-orange-500 pl-4 py-1">
                    <div className="flex justify-between items-baseline">
                      <p className="font-semibold text-base sm:text-lg text-zinc-900">{item.role} — {item.company}</p>
                      <span className="text-xs text-zinc-500">{item.period}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-8">
        <div className="h-px bg-zinc-300 w-full my-4"></div>
      </div>

      <section id="contact" className="max-w-4xl mx-auto px-8 pb-32 text-center pt-16">
        <h2 className="font-serif text-5xl sm:text-6xl italic mb-6 text-orange-600">{t.letsConnect}</h2>
        <p className="text-zinc-700 text-xl font-medium mb-6">{t.reachOut}</p>
        <p className="text-zinc-900 font-bold text-lg mb-10">
          <a href="mailto:justinreijose27@gmail.com" className="hover:text-orange-600 transition-colors underline underline-offset-4">
            justinreijose27@gmail.com
          </a>
        </p>

        <div className="flex justify-center gap-14 text-xl font-bold">
          <a href="https://github.com/joseGit-hub" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/justinreijose" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors">
            LinkedIn
          </a>
        </div>
      </section>

      <footer className="text-center text-base font-medium text-zinc-500 py-10 border-t border-zinc-300">
        © 2026 Justin Rei Jose
      </footer>
    </div>
  )
}