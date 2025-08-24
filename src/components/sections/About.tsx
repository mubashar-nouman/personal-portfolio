import React from 'react';
import { Award, Users, Clock } from 'lucide-react';

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
      subtitle="Passionate developer with a love for creating impactful solutions"
      className="bg-white dark:bg-zinc-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Personal Info */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-8 border border-orange-200 dark:border-orange-800">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">MN</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-2">Mubashar Nouman</h3>
                <p className="text-orange-600 dark:text-orange-400 font-medium">Full Stack Developer</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-orange-600 dark:text-orange-400" />
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">2+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users size={18} className="text-orange-600 dark:text-orange-400" />
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">50+ Projects Delivered</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award size={18} className="text-orange-600 dark:text-orange-400" />
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">5+ Happy Clients</span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Story */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-700 shadow-lg">
              <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-6">My Story</h3>
              <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  I'm a passionate Full Stack Developer who believes that great software has the power to transform lives. 
                  My journey began with a simple curiosity about how websites work, which quickly evolved into a deep 
                  love for creating digital experiences that make a difference.
                </p>
                <p>
                  Over the past few years, I've had the privilege of working on diverse projects that have taught me 
                  the importance of clean code, user-centric design, and scalable architecture. From small business 
                  websites to complex enterprise applications, each project has shaped my approach to development.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                  or sharing knowledge with the developer community. I believe in continuous learning and staying 
                  ahead of industry trends to deliver cutting-edge solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
