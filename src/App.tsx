
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Testimonials from './components/sections/Testimonials';
import Blog from './components/sections/Blog';
// import Speaking from './components/sections/Speaking';
// import OpenSource from './components/sections/OpenSource';
// import Awards from './components/sections/Awards';
import Hobbies from './components/sections/Hobbies';
import Newsletter from './components/sections/Newsletter';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Testimonials />
        <Blog />
        {/* <Speaking /> */}
        {/* <OpenSource /> */}
        {/* <Awards /> */}
        <Hobbies />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;