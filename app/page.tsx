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
          background-size: 40px 40px;
          background-image:
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
        }
      `}</style>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f7f4ee]/90 backdrop-blur-sm border-b border-zinc-200">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="w-9 h-9 rounded-full border border-zinc-900 flex items-center justify-center font-serif text-sm">
            JJ
          </div>

          <nav className="hidden sm:flex gap-8 text-sm font-medium text-zinc-700">
            <button onClick={() => scrollToSection("projects")} className="hover:text-orange-600 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-orange-600 transition-colors">
              Contact
            </button>
          </nav>

          <button className="sm:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="sm:hidden flex flex-col gap-4 px-6 pb-5 text-sm font-medium text-zinc-700">
            <button onClick={() => scrollToSection("projects")} className="text-left">Projects</button>
            <button onClick={() => scrollToSection("contact")} className="text-left">Contact</button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="pt-36 sm:pt-44 pb-20 px-6 text-center max-w-2xl mx-auto">
        <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border border-zinc-300 mb-8">
          <img src="/profile-square.png" alt="Justin Rei Jose" className="w-full h-full object-cover" />
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl leading-tight">
          Hello, I'm <span className="italic text-orange-600">Justin</span>
        </h1>

        <p className="mt-6 text-zinc-600 text-lg leading-relaxed">
          A designer and developer from Pangasinan, Philippines — building clean, functional
          software and thoughtful interfaces.
        </p>

        <button
          onClick={() => scrollToSection("contact")}
          className="mt-8 inline-block text-orange-600 font-medium underline underline-offset-4 decoration-orange-300"
        >
          Contact me
        </button>

        <div className="flex justify-center gap-6 mt-10 text-zinc-700">
          <a href="https://github.com/joseGit-hub" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-orange-600 transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/justinreijose" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-orange-600 transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="https://siyak.itch.io" target="_blank" rel="noopener noreferrer" aria-label="itch.io" className="hover:text-orange-600 transition-colors">
            <FaItchIo size={20} />
          </a>
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="max-w-5xl mx-auto px-6 pb-24 grid sm:grid-cols-3 gap-10 text-sm border-t border-zinc-200 pt-16">
        <div>
          <p className="uppercase text-xs tracking-wide text-zinc-400 mb-3">Education</p>
          <p className="font-medium">BS in Computer Science</p>
          <p className="text-zinc-500">STI College San Jose, 2026</p>
        </div>

        <div>
          <p className="uppercase text-xs tracking-wide text-zinc-400 mb-3">Experience</p>
          <p className="font-medium">QA Tester — Nueva Technology</p>
          <p className="text-zinc-500">Mar 2026 – Present</p>
          <p className="font-medium mt-3">Web Dev Intern — SAJELCO</p>
          <p className="text-zinc-500">Jan – Apr 2026</p>
        </div>

        <div>
          <p className="uppercase text-xs tracking-wide text-zinc-400 mb-3">Skills</p>
          <p className="text-zinc-600 leading-relaxed">
            SQL, Python, Java, React.js, Next.js, UI/UX Design, QA Testing, Wireframing
          </p>
        </div>
      </section>

      {/* PROJECT GALLERY */}
      <section id="projects" className="max-w-5xl mx-auto px-6 pb-24 border-t border-zinc-200 pt-16">
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl italic">Project Gallery</h2>
          <p className="text-zinc-500 mt-2">A few things I've worked on</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {projects.map((p) => (
            <div key={p.title}>
              <div className="aspect-video bg-zinc-100 overflow-hidden mb-3">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <p className="text-sm">
                <span className="font-serif italic">{p.title}</span>
                <span className="text-zinc-500"> — {p.category}</span>
              </p>
              {p.link ? (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-xs text-orange-600 underline underline-offset-2">
                  {p.linkLabel}
                </a>
              ) : (
                <span className="text-xs text-zinc-400">{p.linkLabel}</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONNECT */}
      <section id="contact" className="max-w-2xl mx-auto px-6 pb-28 text-center border-t border-zinc-200 pt-16">
        <h2 className="font-serif text-4xl italic mb-4">Let's Connect</h2>
        <p className="text-zinc-600 mb-8">Feel free to reach out through any of these.</p>

        <div className="flex justify-center gap-10 text-sm font-medium">
          <a href="https://github.com/joseGit-hub" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/justinreijose" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors">
            LinkedIn
          </a>
        </div>
      </section>

      <footer className="text-center text-xs text-zinc-400 py-8 border-t border-zinc-200">
        © 2026 Justin Rei Jose
      </footer>
    </div>
  )
}