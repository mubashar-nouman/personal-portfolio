import { ArrowDown, Github, Linkedin, Instagram, Mail, Download, Code, Zap, Star } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white dark:bg-zinc-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]"></div>
      </div>

      <div className="container mx-auto px-4 z-10 py-8 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-4 md:space-y-6 text-center lg:text-left order-1 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 border border-orange-200 dark:border-orange-800">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-orange-800 dark:text-orange-200">
                Open to new opportunities
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2 md:space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-zinc-900 dark:text-zinc-100">Hi, I'm </span>
                <span className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent">
                  Mubashar
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-800 dark:text-zinc-200">
                Full Stack Developer
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
              I transform ideas into powerful digital solutions. Building scalable applications with clean code and exceptional user experiences.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-orange-600 to-red-600 text-white font-medium hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Mail size={18} className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Start a Project
              </button>
              <a
                href="https://drive.google.com/uc?export=download&id=1CSryFZ4PYKRPNb7xOhs-GnIWgtY2IKwf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-orange-400 dark:hover:border-orange-500 transition-all duration-300"
              >
                <Download size={18} className="mr-2 transition-transform duration-300" />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Connect with me:</span>
              <div className="flex gap-2">
                <a
                  href="https://github.com/mubashar-nouman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 hover:border-orange-300 dark:hover:border-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300 hover:scale-110"
                >
                  <Github size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                </a>
                <a
                  href="https://linkedin.com/in/mubashar-nouman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 hover:border-orange-300 dark:hover:border-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                </a>
                <a
                  href="https://instagram.com/mubashar_dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 hover:border-orange-300 dark:hover:border-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300 hover:scale-110"
                >
                  <Instagram size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Clean Professional Image */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-2">
            <div className="relative">
              {/* Subtle Background Glow */}
              <div className="absolute inset-0 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-orange-500/8 to-red-500/8 rounded-full blur-2xl"></div>
              
              {/* Main Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                {/* Clean Border Frame */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 p-0.5">
                  <div className="w-full h-full rounded-2xl bg-white dark:bg-zinc-900 flex items-center justify-center">
                    <div className="w-full h-full rounded-2xl overflow-hidden">
                      <img
                        src="/mine.png"
                        alt="Mubashar Nouman"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Clean Shadow */}
                <div className="absolute inset-0 rounded-2xl shadow-xl"></div>
              </div>
              
              {/* Simple Skill Indicators - Hidden on mobile */}
              <div className="hidden md:block absolute -top-4 -right-4 bg-white dark:bg-zinc-800 rounded-xl p-3 shadow-lg border border-zinc-200 dark:border-zinc-700">
                <div className="flex items-center gap-2">
                  <Code size={16} className="text-orange-600 dark:text-orange-400" />
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">React</span>
                </div>
              </div>
              
              <div className="hidden md:block absolute -bottom-4 -left-4 bg-white dark:bg-zinc-800 rounded-xl p-3 shadow-lg border border-zinc-200 dark:border-zinc-700">
                <div className="flex items-center gap-2">
                  <Zap size={16} className="text-orange-600 dark:text-orange-400" />
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Fast</span>
                </div>
              </div>
              
              <div className="hidden md:block absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white dark:bg-zinc-800 rounded-xl p-3 shadow-lg border border-zinc-200 dark:border-zinc-700">
                <div className="flex items-center gap-2">
                  <Star size={16} className="text-orange-600 dark:text-orange-400" />
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToAbout}
          className="group p-4 rounded-full bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-zinc-200 dark:border-zinc-700 animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
