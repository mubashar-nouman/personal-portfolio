import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Process from '@/components/sections/Process';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Certifications from '@/components/sections/Certifications';
import Testimonials from '@/components/sections/Testimonials';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';

/**
 * Section order follows the client journey: what I do -> proof I can do it ->
 * who I am -> how we'd work -> background -> get in touch.
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Skills />
        <Process />
        <Experience />
        <Testimonials />
        <Education />
        <Certifications />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
