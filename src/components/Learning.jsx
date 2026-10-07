import { BookOpen, Terminal, Shield, Code, CheckCircle, Sparkles } from 'lucide-react'
import { learningMilestones } from '../data/portfolioData'

export default function Learning() {
  return (
    <section id="experience" className="py-20 sm:py-28 relative border-t border-slate-900/80">
      {/* Subtle background ambient light */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/40 border border-blue-500/20 text-sky-400 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>04 // TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Learning &amp; Development
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            My ongoing engineering progression, academic milestones, and focused study paths across cybersecurity and software development.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full mt-3"></div>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          {learningMilestones.map((milestone, idx) => {
            return (
              <div key={idx} className="relative group">
                
                {/* Timeline node dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#0a0f1d] border-2 border-blue-500 group-hover:border-sky-400 group-hover:scale-125 transition-all shadow-md shadow-blue-500/20" />

                {/* Timeline card */}
                <div className="p-6 sm:p-7 rounded-xl bg-slate-900/60 border border-slate-800/90 group-hover:border-slate-700/90 group-hover:bg-slate-900/80 transition-all duration-200">
                  
                  {/* Card Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-sky-400 bg-sky-950/40 px-2.5 py-1 rounded border border-sky-500/20">
                      {milestone.period}
                    </span>
                    <span className="text-xs font-mono text-slate-300 bg-slate-800/80 px-2.5 py-0.5 rounded border border-slate-700/60">
                      {milestone.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-white transition-colors mb-1">
                    {milestone.title}
                  </h3>

                  <p className="text-xs font-mono text-slate-300 mb-4">
                    Track: {milestone.category}
                  </p>

                  <p className="text-sm text-slate-300 mb-5 leading-relaxed">
                    {milestone.description}
                  </p>

                  {/* Topics list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 border-t border-slate-800/70">
                    {milestone.topics.map((topic, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-1.5"></span>
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
