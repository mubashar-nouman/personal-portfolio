import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Process from '@/components/sections/Process';
import Experience from '@/components/sections/Experience';
import Background from '@/components/sections/Background';
import Contact from '@/components/sections/Contact';

/**
 * Work comes first: a visitor deciding whether to get in touch wants proof
 * before pitch, so Projects sits directly under the hero.
 */
function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Services />
        <About />
        <Process />
        <Experience />
        <Background />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
