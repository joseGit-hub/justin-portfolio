"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { FaGithub, FaLinkedin, FaItchIo } from "react-icons/fa"

const projects = [
  {
    title: "SAJELCO's Website",
    category: "Web Development",
    img: "/sajelco.png",
    link: "https://sajelco.net/",
    linkLabel: "Live Project",
  },
  {
    title: "R1 Amianan Presyo",
    category: "Data Analysis",
    img: "/r1-amianan.png",
    link: "https://r1-amianan.streamlit.app/",
    linkLabel: "Live Project",
  },
  {
    title: "Grahppy",
    category: "Game Design",
    img: "/graphh1.png",
    link: null,
    linkLabel: "Coming soon",
  },
  {
    title: "Fly Hammy!",
    category: "Game Design",
    img: "/flyHammyCover.png",
    link: "https://siyak.itch.io/fly-hammy",
    linkLabel: "Play Game",
  },
]

export default function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#f7f4ee] text-zinc-900 graph-paper">
      <style jsx global>{`
        .graph-paper {
          background-size: 48px 48px;
          background-image:
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
        }
      `}</style>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f7f4ee]/90 backdrop-blur-sm border-b border-zinc-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-8 py-5">
          <div className="w-12 h-12 rounded-full border border-zinc-900 flex items-center justify-center font-serif text-base">
            JJ
          </div>

          <nav className="hidden sm:flex gap-10 text-base font-medium text-zinc-700">
            <button onClick={() => scrollToSection("projects")} className="hover:text-orange-600 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-orange-600 transition-colors">
              Contact
            </button>
          </nav>

          <button className="sm:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="sm:hidden flex flex-col gap-5 px-8 pb-6 text-base font-medium text-zinc-700">
            <button onClick={() => scrollToSection("projects")} className="text-left">Projects</button>
            <button onClick={() => scrollToSection("contact")} className="text-left">Contact</button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="pt-40 sm:pt-52 pb-28 px-6 text-center max-w-3xl mx-auto">
        <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-full overflow-hidden border-2 border-zinc-300 mb-10">
          <img src="/profile-square.png" alt="Justin Rei Jose" className="w-full h-full object-cover" />
        </div>

        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl leading-tight">
          Hello, I'm <span className="italic text-orange-600">Justin</span>
        </h1>

        <p className="mt-8 text-zinc-600 text-xl sm:text-2xl leading-relaxed max-w-2xl mx-auto">
          A designer and developer from Pangasinan, Philippines — building clean, functional
          software and thoughtful interfaces.
        </p>

        <button
          onClick={() => scrollToSection("contact")}
          className="mt-10 inline-block text-orange-600 text-lg font-medium underline underline-offset-4 decoration-orange-300"
        >
          Contact me
        </button>

        <div className="flex justify-center gap-8 mt-12 text-zinc-700">
          <a href="https://github.com/joseGit-hub" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-orange-600 transition-colors">
            <FaGithub size={28} />
          </a>
          <a href="https://www.linkedin.com/in/justinreijose" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-orange-600 transition-colors">
            <FaLinkedin size={28} />
          </a>
          <a href="https://siyak.itch.io" target="_blank" rel="noopener noreferrer" aria-label="itch.io" className="hover:text-orange-600 transition-colors">
            <FaItchIo size={28} />
          </a>
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="max-w-6xl mx-auto px-8 pb-28 grid sm:grid-cols-3 gap-14 text-base border-t border-zinc-200 pt-20">
        <div>
          <p className="uppercase text-sm tracking-wide text-zinc-400 mb-4">Education</p>
          <p className="font-medium text-lg">BS in Computer Science</p>
          <p className="text-zinc-500 text-base mt-1">STI College San Jose, 2026</p>
        </div>

        <div>
          <p className="uppercase text-sm tracking-wide text-zinc-400 mb-4">Experience</p>
          <p className="font-medium text-lg">QA Tester — Nueva Technology</p>
          <p className="text-zinc-500 text-base mt-1">Mar 2026 – Present</p>
          <p className="font-medium text-lg mt-4">Web Dev Intern — SAJELCO</p>
          <p className="text-zinc-500 text-base mt-1">Jan – Apr 2026</p>
        </div>

        <div>
          <p className="uppercase text-sm tracking-wide text-zinc-400 mb-4">Skills</p>
          <p className="text-zinc-600 text-lg leading-relaxed">
            SQL, Python, Java, React.js, Next.js, UI/UX Design, QA Testing, Wireframing
          </p>
        </div>
      </section>

      {/* PROJECT GALLERY */}
      <section id="projects" className="max-w-6xl mx-auto px-8 pb-28 border-t border-zinc-200 pt-20">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl sm:text-6xl italic">Project Gallery</h2>
          <p className="text-zinc-500 text-lg mt-3">A few things I've worked on</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-16">
          {projects.map((p) => (
            <div key={p.title}>
              <div className="aspect-video bg-zinc-100 overflow-hidden mb-4">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <p className="text-lg">
                <span className="font-serif italic">{p.title}</span>
                <span className="text-zinc-500"> — {p.category}</span>
              </p>
              {p.link ? (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-base text-orange-600 underline underline-offset-2">
                  {p.linkLabel}
                </a>
              ) : (
                <span className="text-base text-zinc-400">{p.linkLabel}</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONNECT */}
      <section id="contact" className="max-w-3xl mx-auto px-8 pb-32 text-center border-t border-zinc-200 pt-20">
        <h2 className="font-serif text-5xl sm:text-6xl italic mb-6">Let's Connect</h2>
        <p className="text-zinc-600 text-xl mb-10">Feel free to reach out through any of these.</p>

        <div className="flex justify-center gap-14 text-lg font-medium">
          <a href="https://github.com/joseGit-hub" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/justinreijose" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors">
            LinkedIn
          </a>
        </div>
      </section>

      <footer className="text-center text-sm text-zinc-400 py-10 border-t border-zinc-200">
        © 2026 Justin Rei Jose
      </footer>
    </div>
  )
}