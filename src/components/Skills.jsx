import { Code2, Globe, ShieldCheck, Terminal, CheckCircle2 } from 'lucide-react'
import { skillCategories } from '../data/portfolioData'

const iconMap = {
  Code2,
  Globe,
  ShieldCheck,
  Terminal,
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 relative border-t border-slate-900/80">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-indigo-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/40 border border-blue-500/20 text-sky-400 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>03 // CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Technical Skills
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            A categorized overview of programming languages, frameworks, security fundamentals, and developer tools I work with.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full mt-3"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category) => {
            const IconComponent = iconMap[category.icon] || Code2

            return (
              <div
                key={category.title}
                className="p-6 sm:p-7 rounded-xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700/90 hover:bg-slate-900/80 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="p-2.5 rounded-lg bg-blue-950/60 border border-blue-500/20 text-sky-400 group-hover:border-blue-400/40 group-hover:text-sky-300 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-100 group-hover:text-white transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Pills */}
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0b1120] border border-slate-800 text-slate-200 hover:border-blue-500/40 hover:text-sky-300 transition-all text-xs sm:text-sm font-medium"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400/80"></span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtle footnote */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>{category.skills.length} competencies</span>
                  <span className="text-slate-300 font-medium">practicing &amp; applying</span>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
