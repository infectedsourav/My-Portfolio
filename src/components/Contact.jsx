import { useState, useEffect } from 'react'
import { Mail, Send, Copy, Check, Terminal, ExternalLink, MapPin, Phone, Loader2, AlertCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './SocialIcons'
import { personalInfo } from '../data/portfolioData'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'fallback'
  const [successInfo, setSuccessInfo] = useState(null)
  const [backendOnline, setBackendOnline] = useState(false)

  // Check backend health status on mount
  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(data => {
        if (data && data.status === 'online') {
          setBackendOnline(true)
        }
      })
      .catch(() => {
        setBackendOnline(false)
      })
  }, [])

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.socials.phone)
    setCopiedPhone(true)
    setTimeout(() => setCopiedPhone(false), 2500)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSendViaMailto = () => {
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    window.location.href = `mailto:${personalInfo.socials.email}?subject=${subject}&body=${body}`
  }

  const handleSendViaWhatsApp = () => {
    const text = encodeURIComponent(`Hi Soumesh, my name is ${formData.name || 'a visitor'}. ${formData.message}`)
    window.open(`https://wa.me/8801631204621?text=${text}`, '_blank')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitStatus('sending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setSubmitStatus('success')
        setSuccessInfo(data)
        setBackendOnline(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error(data.error || 'Failed to submit')
      }
    } catch (err) {
      // Backend not running (e.g., static hosting / GitHub Pages) - seamless fallback
      console.warn('API request failed, falling back to client dispatch:', err)
      setSubmitStatus('fallback')
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28 relative border-t border-slate-900/80">
      {/* Background ambient accent */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/40 border border-blue-500/20 text-sky-400 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>05 // INQUIRIES &amp; CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let's Connect
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            I'm always open to discussing technology, cybersecurity, software projects, or interesting opportunities. Reach me directly or send a message below.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/8801631204621?text=${encodeURIComponent("Hi Soumesh, I'm reaching out from your portfolio website!")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 to-slate-900/60 border border-emerald-500/30 hover:border-emerald-400/60 transition-all flex items-center justify-between group shadow-sm hover:shadow-emerald-950/30"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 group-hover:scale-105 transition-transform">
                  <WhatsappIcon className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">WhatsApp</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  </div>
                  <span className="text-sm font-semibold text-slate-100 group-hover:text-emerald-300 transition-colors">
                    +880 1631-204621
                  </span>
                  <p className="text-xs text-slate-400 mt-0.5">Quick responses &bull; Instant chat</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Email Box with Copy */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700/80 transition-all flex items-center justify-between gap-3">
              <div className="flex items-center gap-3.5 overflow-hidden">
                <div className="p-2.5 rounded-lg bg-blue-950/60 text-sky-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-300 block">Gmail</span>
                  <a
                    href={`mailto:${personalInfo.socials.email}`}
                    className="text-xs sm:text-sm font-mono text-slate-100 hover:text-sky-300 transition-colors truncate block font-medium"
                  >
                    {personalInfo.socials.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-all text-xs font-mono shrink-0 flex items-center gap-1.5 cursor-pointer border border-slate-700"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Phone Call Box */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700/80 transition-all flex items-center justify-between gap-3">
              <div className="flex items-center gap-3.5 overflow-hidden">
                <div className="p-2.5 rounded-lg bg-indigo-950/60 text-indigo-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-300 block">Phone</span>
                  <a
                    href={`tel:${personalInfo.socials.phone}`}
                    className="text-xs sm:text-sm font-mono text-slate-100 hover:text-indigo-300 transition-colors truncate block font-medium"
                  >
                    {personalInfo.socials.phoneFormatted}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyPhone}
                className="px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-all text-xs font-mono shrink-0 flex items-center gap-1.5 cursor-pointer border border-slate-700"
                title="Copy phone number"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Cards: GitHub & LinkedIn */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 flex items-center justify-between text-slate-200 hover:text-sky-300 transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4 text-slate-300 group-hover:text-sky-400 transition-colors" />
                  <span className="text-xs font-medium">GitHub</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-300 transition-colors" />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 flex items-center justify-between text-slate-200 hover:text-sky-300 transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4 text-sky-400 group-hover:text-sky-300 transition-colors" />
                  <span className="text-xs font-medium">LinkedIn</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-300 transition-colors" />
              </a>
            </div>

            {/* API Health & Location status */}
            <div className="p-3 rounded-lg bg-[#0a0f1d] border border-slate-800/80 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${backendOnline ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></span>
                <span className="text-slate-400">
                  Backend API: <span className={backendOnline ? 'text-emerald-400' : 'text-slate-300'}>{backendOnline ? 'Online (/api)' : 'Ready / Hybrid'}</span>
                </span>
              </div>
              <div className="flex items-center gap-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>BD</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Full-Stack Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-slate-900/60 border border-slate-800/90 shadow-xl relative overflow-hidden">
              
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Powered by full-stack Express API with automatic delivery to Soumesh.
                  </p>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-950/60 text-sky-400 border border-blue-500/30 shrink-0">
                  POST /api/contact
                </span>
              </div>

              {/* Success Message Banner */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-200 text-sm animate-in fade-in duration-300 space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-emerald-300">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Message Delivered Successfully!</span>
                  </div>
                  <p className="text-xs text-emerald-300/90">
                    Your message has been stored in the database and registered with ID: <code className="bg-emerald-900/50 px-1 py-0.5 rounded font-mono text-emerald-200">{successInfo?.id || 'msg_received'}</code>. Soumesh will respond to your email shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitStatus('idle')}
                    className="text-xs text-emerald-400 underline font-mono mt-2 cursor-pointer hover:text-emerald-300"
                  >
                    Send another message
                  </button>
                </div>
              )}

              {/* Fallback Banner for Static Mode */}
              {submitStatus === 'fallback' && (
                <div className="mb-6 p-4 rounded-xl bg-sky-950/50 border border-sky-500/40 text-sky-200 text-sm animate-in fade-in duration-300 space-y-3">
                  <div className="flex items-center gap-2 font-semibold text-sky-300">
                    <AlertCircle className="w-4 h-4 text-sky-400" />
                    <span>Instant Direct Dispatch</span>
                  </div>
                  <p className="text-xs text-sky-300/90 leading-relaxed">
                    Direct backend API is offline or you are on static GitHub Pages. You can send your message directly via Email or WhatsApp with 1 click:
                  </p>
                  <div className="flex flex-wrap gap-2.5 pt-1">
                    <button
                      type="button"
                      onClick={handleSendViaMailto}
                      className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send via Email Client</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <WhatsappIcon className="w-3.5 h-3.5" />
                      <span>Send via WhatsApp</span>
                    </button>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Name <span className="text-sky-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0a0f1d] border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm transition-all"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Email <span className="text-sky-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0a0f1d] border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Cybersecurity project, collaboration, or general inquiry"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0a0f1d] border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm transition-all"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Message <span className="text-sky-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0a0f1d] border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm transition-all resize-y"
                  ></textarea>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={submitStatus === 'sending'}
                    className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:bg-blue-700/60 text-white font-medium text-sm transition-all shadow-md shadow-blue-600/20 hover:shadow-blue-600/35 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {submitStatus === 'sending' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`https://wa.me/8801631204621?text=${encodeURIComponent("Hi Soumesh, I'm reaching out from your portfolio!")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 font-medium text-xs flex items-center gap-2 transition-all"
                  >
                    <WhatsappIcon className="w-4 h-4 text-emerald-400" />
                    <span>Quick WhatsApp</span>
                  </a>
                </div>

                <div className="pt-2 text-[11px] font-mono text-slate-400">
                  <span>* Messages are validated and safely stored in the backend database. Zero third-party ad tracking.</span>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
