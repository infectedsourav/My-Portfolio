import { useState } from 'react'
import { Mail, ArrowDown, Shield, Terminal, FileCode2, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './SocialIcons'
import NetworkBackground from './NetworkBackground'
import { personalInfo } from '../data/portfolioData'
import profilePhoto from '../assets/profile.jpg'

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  const handleScrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const topOffset = 80
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - topOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Interactive Network Node Background */}
      <NetworkBackground />

      {/* Subtle radial ambient glows (clean, not overused) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[250px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro & Call to Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/70 text-slate-300 text-xs font-mono mb-6 backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for internships &amp; collaborative projects</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-4">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>

            {/* Subtitle */}
            <div className="flex items-center gap-2 text-lg sm:text-xl font-medium text-slate-300 mb-5">
              <span className="text-sky-400 font-mono text-base font-semibold">&gt;</span>
              <span>{personalInfo.title}</span>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed mb-8">
              {personalInfo.shortIntro}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={() => handleScrollTo('projects')}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/35 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo('contact')}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-slate-700/80 hover:border-slate-600 transition-all flex items-center justify-center gap-2 cursor-pointer backdrop-blur-sm"
              >
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-slate-800/80 w-full flex items-center gap-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">Connect:</span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-slate-700 hover:bg-slate-800/80 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-slate-700 hover:bg-slate-800/80 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-950/30 transition-all"
                  aria-label="WhatsApp Chat"
                >
                  <WhatsappIcon className="w-4 h-4 text-emerald-400" />
                </a>
                <a
                  href={`mailto:${personalInfo.socials.email}`}
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-slate-700 hover:bg-slate-800/80 transition-all"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
              <div className="ml-auto hidden sm:flex items-center gap-1.5 text-xs text-slate-300 font-mono">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Profile Image / Developer Card Area */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-[340px] sm:max-w-[380px]">
              
              {/* Decorative background border frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600/20 via-sky-500/10 to-indigo-600/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300 opacity-80" />

              <div className="relative rounded-2xl bg-[#0d1322] border border-slate-800/90 overflow-hidden shadow-2xl p-4 sm:p-5">
                
                {/* Window header */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-800/80 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                  </div>
                  <span className="text-[11px] text-slate-400">identity.config</span>
                </div>

                {/* Profile Image with fallback */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-gradient-to-b from-[#11192e] to-[#0a0f1d] border border-slate-800/80 flex items-center justify-center">
                  {!imgError ? (
                    <img
                      src={profilePhoto}
                      alt={personalInfo.name}
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover object-[center_18%] group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : null}

                  {/* Clean developer placeholder if image fails */}
                  {imgError && (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center select-none bg-[#0c1222]">
                      <div className="relative mb-4">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-600/30 to-sky-400/20 border-2 border-blue-500/40 flex items-center justify-center shadow-inner">
                          <span className="text-3xl font-bold font-mono tracking-wider text-sky-300">SMS</span>
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-slate-900 border border-blue-400/40 flex items-center justify-center text-blue-400 shadow-sm">
                          <Shield className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      <h2 className="text-base font-semibold text-slate-200 mb-1">
                        {personalInfo.name}
                      </h2>
                      <p className="text-xs text-sky-400/90 font-mono mb-3">
                        CSE &bull; Cybersecurity
                      </p>
                    </div>
                  )}
                </div>

                {/* Card footer info */}
                <div className="mt-4 pt-3.5 border-t border-slate-800/70 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Terminal className="w-3.5 h-3.5 text-sky-400" />
                    <span>status: exploring_sec</span>
                  </div>
                  <span className="text-[11px] text-slate-300 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800 font-semibold">
                    BD
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
