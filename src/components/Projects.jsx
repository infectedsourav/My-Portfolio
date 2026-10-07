import { ExternalLink, ShieldCheck, Terminal, Layers, Lock, Cpu, Globe } from 'lucide-react'
import { GithubIcon } from './SocialIcons'
import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 relative border-t border-slate-900/80">
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/40 border border-blue-500/20 text-sky-400 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>02 // PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Selected software development and cybersecurity projects focusing on clean architecture and security concepts.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full mt-3"></div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => {
            const isPrimary = project.featured

            return (
              <article
                key={project.id}
                className={`relative rounded-xl bg-slate-900/60 border transition-all duration-300 flex flex-col justify-between group overflow-hidden ${
                  isPrimary
                    ? 'border-blue-500/35 bg-gradient-to-b from-[#0f172a]/90 to-[#0b1020]/90 shadow-xl shadow-blue-950/20 md:col-span-2 lg:col-span-1 hover:border-blue-400/60'
                    : 'border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/80'
                }`}
              >
                {/* Top decorative accent bar */}
                <div
                  className={`h-1 w-full ${
                    isPrimary
                      ? 'bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500'
                      : 'bg-slate-800 group-hover:bg-slate-700 transition-colors'
                  }`}
                />

                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  
                  {/* Category and Featured Chip */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-medium text-sky-400 tracking-wider uppercase">
                      {project.category}
                    </span>
                    {isPrimary && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-sky-300">
                        <ShieldCheck className="w-3 h-3 text-sky-400" />
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-white transition-colors mb-3 flex items-center gap-2">
                    <span>{project.title}</span>
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Project Highlights if present */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="mb-6 space-y-1.5">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300 block mb-1">
                        Key Architecture:
                      </span>
                      {project.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <span className="text-sky-400 mt-0.5">&bull;</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech stack badges */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-950/80 border border-slate-800 text-slate-300 group-hover:border-slate-700/80 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Footer Buttons */}
                <div className="p-6 sm:p-7 pt-0 mt-auto border-t border-slate-800/60 bg-slate-950/30 flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-sm"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700/80 transition-all ${
                        project.liveUrl ? 'flex-1' : 'w-full'
                      }`}
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>View Code</span>
                    </a>
                  )}
                </div>

              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}
