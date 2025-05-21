import React from 'react';
import { Download } from 'lucide-react';

// Simple Section component included directly to avoid external dependencies
interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, className, children }) => {
  return (
    <section id={id} className={`py-16 px-4 ${className}`}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">{title}</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">{subtitle}</p>
        </div>
        {children}
      </div>
    </section>
  );
};

const About = () => {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Get to know me better"
      className="bg-zinc-50 dark:bg-zinc-900"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">
            Hi, I'm Mubashar Nouman
          </h3>

          <p className="text-zinc-700 dark:text-zinc-300 mb-4">
            I'm a passionate Full Stack Software Engineer with expertise in building scalable web applications using modern technologies. With a strong foundation in both frontend and backend development, I strive to create elegant solutions that solve real-world problems.
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 mb-4">
            My journey in software development began with a fascination for how technology can improve people's lives. This curiosity has driven me to continuously learn and adapt to the ever-evolving tech landscape. I specialize in React.js, Tailwind CSS, Flask, Python, MERN Stack, and Node.js.
          </p>

          {/* <p className="text-zinc-700 dark:text-zinc-300 mb-6">
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge through technical writing and speaking engagements. I believe in writing clean, maintainable code and building applications with a focus on user experience and performance.
          </p> */}

          <div className="flex flex-wrap gap-6 md:gap-2 mb-10">
            {[
              { value: "4+", label: "Years Experience" },
              { value: "50+", label: "Projects Completed" },
              { value: "10+", label: "Clients Worked With" }
            ].map((item, index) => (
              <div
                key={index}
                className="w-40 md:w-48 p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl relative transition-all duration-300 hover:cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/70 hover:border-orange-400 dark:hover:border-orange-500 before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-orange-400 before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300 overflow-hidden"
              >
                <p className="text-4xl font-extrabold text-zinc-800 dark:text-zinc-100 text-center mb-1">
                  {item.value}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">
                  {item.label}
                </p>
              </div>
            ))}
          </div>




          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 h-10 px-4 py-2">
            <Download className="mr-2" size={18} />
            Download Resume
          </button>

        </div>

        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative">
            {/* Background frame */}
            <div className="absolute -top-4 -left-4 w-64 h-64 md:w-[22rem] md:h-[22rem] rounded-2xl bg-zinc-200 dark:bg-zinc-700 transform rotate-6"></div>

            {/* Main image frame */}
            <div className="relative w-64 h-64 md:w-[22rem] md:h-[22rem] rounded-2xl overflow-hidden border-2 border-zinc-100 dark:border-zinc-800 shadow-xl bg-white dark:bg-zinc-800 z-10">
              <img
                src="../assets/mine.png"
                alt="Mubashar Nouman"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-white text-orange-700 text-sm font-medium py-1 px-3 rounded-md shadow-lg">
                Full Stack Developer
              </div>
            </div>

            {/* Decorative circle */}
            <div className="absolute -bottom-3 -right-3 w-28 h-28 md:w-36 md:h-36 rounded-full bg-zinc-200 dark:bg-zinc-700 z-0"></div>
          </div>
        </div>


      </div>
    </Section>
  );
};

export default About;
