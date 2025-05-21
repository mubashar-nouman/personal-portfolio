import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

// Simple SocialLinks component included directly
const SocialLinks = ({ className = "", iconSize = 20 }) => {
  const socialLinks = [
    { name: "GitHub", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z", url: "https://github.com/mubashar-nouman" },
    { name: "LinkedIn", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", url: "https://linkedin.com/in/mubashar-nouman" },
    // { name: "Twitter", icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z", url: "#" },
    { name: "Instagram", icon: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z", url: "https://instagram.com/mubashar_dev" }
  ];

  return (
    <div className={`flex gap-4 ${className}`}>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors duration-200"
          aria-label={link.name}
          target='_blank'
          rel='noopener noreferrer'
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor">
            <path d={link.icon} />
          </svg>
        </a>
      ))}
    </div>
  );
};

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<{ x: number; y: number; radius: number; color: string; speedX: number; speedY: number; }[]>([]);

  // Particle background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const particles: { x: number; y: number; radius: number; color: string; speedX: number; speedY: number; }[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles.length = 0;
      const particleCount = Math.min(Math.floor(window.innerWidth * 0.15), 100);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 1,
          color: `rgba(100, 100, 100, ${Math.random() * 0.4 + 0.1})`,
          speedX: Math.random() * 0.2 - 0.1,
          speedY: Math.random() * 0.2 - 0.1,

        });
      }

      particlesRef.current = particles;
    };

    const drawParticles = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach(particle => {
        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      // Draw connections between nearby particles
      particlesRef.current.forEach((particle, i) => {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p2 = particlesRef.current[j];
          const dx = particle.x - p2.x;
          const dy = particle.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(150, 150, 150, ${0.15 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(drawParticles);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    drawParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950"
    >
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Subtle accent element */}
      {/* <div className="absolute inset-y-0 right-0 w-1/3 bg-zinc-200/30 dark:bg-zinc-800/20 skew-x-12 transform -translate-x-20"></div> */}
      {/* <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-zinc-200/40 dark:bg-zinc-800/30 rounded-full"></div> */}
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <div className="relative inline-block mb-4">
            {/* Glowing Beam Background */}
            <div className="absolute inset-0 -z-10 rounded-md bg-gradient-to-r from-orange-400/30 via-orange-200/20 to-orange-400/30 blur-sm animate-pulse-slow border border-orange-300 dark:border-orange-600 shadow-inner shadow-orange-100 dark:shadow-orange-900/20" />

            {/* Badge Text */}
            <span className="relative z-10 px-5 py-1 text-sm font-semibold uppercase tracking-wider text-orange-900 dark:text-orange-100 bg-orange-50 dark:bg-orange-900/40 border border-orange-200 dark:border-orange-700 rounded-md backdrop-blur-sm">
              Hello, I'm
            </span>
          </div>


          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-zinc-800 dark:text-zinc-100 mb-3 animate-scaleIn relative">
            Mubashar Nouman
            {/* <span className="absolute -inset-1 bg-gradient-to-r from-zinc-300 to-zinc-200 dark:from-zinc-800/40 dark:to-zinc-700/20 blur rounded-lg -z-10"></span> */}
          </h1>

          <div className="mb-8 h-12 mt-2 overflow-hidden relative">
            <ul className="animate-slideUp">
              <li className="text-xl md:text-2xl font-medium text-zinc-700 dark:text-zinc-300 my-3">Full Stack Software Engineer</li>
              <li className="text-xl md:text-2xl font-medium text-zinc-700 dark:text-zinc-300 my-3">React.js Developer</li>
              <li className="text-xl md:text-2xl font-medium text-zinc-700 dark:text-zinc-300 my-3">MERN Stack Developer</li>
            </ul>
            {/* <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-zinc-50 to-transparent dark:from-zinc-900 dark:to-transparent"></div> */}
            {/* <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-zinc-50 to-transparent dark:from-zinc-900 dark:to-transparent"></div> */}
          </div>

          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mb-10 animate-fadeIn animation-delay-300 text-lg relative z-10">
            Passionate about building scalable & secure web applications and solving the real-world problems through code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fadeIn animation-delay-500">
            <button
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Get in Touch
            </button>
          </div>

          <SocialLinks className="animate-fadeIn animation-delay-700" iconSize={24} />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float z-10">
        <button
          onClick={scrollToAbout}
          className="p-3 rounded-full bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} className="group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        @keyframes slideUp {
          0%, 25% { transform: translateY(0); }
          25%, 50% { transform: translateY(-3rem); }
          50%, 75% { transform: translateY(-6rem); }
          75%, 100% { transform: translateY(-9rem); }
        }
        
        @keyframes float {
          0% { transform: translateY(0) translateX(-50%); }
          50% { transform: translateY(-10px) translateX(-50%); }
          100% { transform: translateY(0) translateX(-50%); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 1s ease forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 10s infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        
        .animation-delay-700 {
          animation-delay: 700ms;
        }

        
      `}</style>
    </section>
  );
};

export default Hero;
