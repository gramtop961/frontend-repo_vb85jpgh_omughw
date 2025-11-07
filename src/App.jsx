import Hero from './components/Hero';
import About from './components/About';
import Showreel from './components/Showreel';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-['Inter','system-ui','-apple-system','Segoe UI','Roboto','Helvetica','Arial'] antialiased">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-black/50 px-6 py-4 text-white backdrop-blur md:px-8">
        <a href="#home" className="text-sm font-semibold tracking-wide">AYUSH BHOI</a>
        <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
          <a className="hover:text-white" href="#about">About</a>
          <a className="hover:text-white" href="#reel">Showreel</a>
          <a className="hover:text-white" href="#work">Projects</a>
          <a className="hover:text-white" href="#clients">Clients</a>
          <a className="hover:text-white" href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black hover:bg-fuchsia-500 hover:text-white">Let’s talk</a>
      </header>

      <main className="mt-16">
        <Hero />
        <About />
        <Showreel />
        <Projects />
        <Clients />
        <Contact />
      </main>

      <footer className="bg-black py-10 text-center text-white/60">
        <p className="text-sm">© {new Date().getFullYear()} Ayush Bhoi — Minimal, expressive, and kinetic.</p>
      </footer>
    </div>
  );
}

export default App;
