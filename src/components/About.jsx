import { GraduationCap, ShieldCheck, MapPin, Compass, Terminal, Cpu } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function About() {
  const infoCards = [
    {
      icon: GraduationCap,
      label: "Education",
      value: personalInfo.education.degree,
      subtext: personalInfo.education.status,
      badge: "In Progress"
    },
    {
      icon: ShieldCheck,
      label: "Core Focus",
      value: personalInfo.education.focus,
      subtext: "Secure Software & Networking",
      badge: "Specialization"
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.education.location,
      subtext: "Open to Remote & Local Roles",
      badge: "Active"
    }
  ]

  return (
    <section id="about" className="py-20 sm:py-28 relative border-t border-slate-900/80">
      {/* Background ambient accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/40 border border-blue-500/20 text-sky-400 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>01 // BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Paragraph description */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
            <p className="text-slate-200">
              I am an undergraduate Computer Science and Engineering student based in Bangladesh with a dedicated focus on <span className="text-sky-300 font-medium">cybersecurity</span>, <span className="text-sky-300 font-medium">secure software development</span>, and web technologies.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              My engineering approach is driven by practical problem solving: understanding how systems communicate, identifying potential architectural flaws, and writing clean, reliable code. Rather than treating security as an afterthought, I strive to integrate safe coding practices and defensive measures throughout the development cycle.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              When I'm not studying or building projects, I explore Linux system internals, network protocols, defensive security concepts, and modern full-stack web stacks.
            </p>

            {/* Quick highlights tag row */}
            <div className="pt-4 flex flex-wrap gap-2.5">
              <span className="px-3 py-1 text-xs font-mono bg-slate-900 border border-slate-800 rounded-md text-slate-300">
                #DefenseInDepth
              </span>
              <span className="px-3 py-1 text-xs font-mono bg-slate-900 border border-slate-800 rounded-md text-slate-300">
                #SecureByDesign
              </span>
              <span className="px-3 py-1 text-xs font-mono bg-slate-900 border border-slate-800 rounded-md text-slate-300">
                #WebDevelopment
              </span>
              <span className="px-3 py-1 text-xs font-mono bg-slate-900 border border-slate-800 rounded-md text-slate-300">
                #PracticalEngineering
              </span>
            </div>
          </div>

          {/* Quick Info / Stat Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {infoCards.map((card, idx) => {
              const Icon = card.icon
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/90 transition-all duration-200 group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-lg bg-blue-950/60 border border-blue-500/20 text-sky-400 group-hover:border-blue-400/40 group-hover:text-sky-300 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
                          {card.label}
                        </span>
                        <h4 className="text-base font-semibold text-slate-100 mt-0.5">
                          {card.value}
                        </h4>
                        <p className="text-xs text-slate-400 mt-1">
                          {card.subtext}
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-sky-300 border border-slate-700/60 shrink-0">
                      {card.badge}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
