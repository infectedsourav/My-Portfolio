import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Learning from './components/Learning'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#070b14] text-slate-200 selection:bg-blue-600/30 selection:text-sky-200 font-sans antialiased overflow-x-hidden flex flex-col justify-between">
      {/* Top sticky navigation */}
      <Navbar />

      {/* Main page content sections */}
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Learning />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
