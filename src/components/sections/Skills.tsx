import { Bot, Braces, Database, Server, ShieldCheck, Workflow } from 'lucide-react';
import Section from '@/components/ui/Section';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    title: 'AI & SaaS',
    description: 'Intelligent, subscription-ready products',
    icon: Bot,
    skills: ['OpenAI API', 'LLM Integration', 'AI Chatbots', 'Prompt Engineering', 'Authentication', 'Subscriptions'],
  },
  {
    title: 'Frontend',
    description: 'Fast and responsive user interfaces',
    icon: Braces,
    skills: ['React', 'Next.js', 'TypeScript', 'Redux', 'Tailwind CSS', 'ShadCN'],
  },
  {
    title: 'Backend & APIs',
    description: 'Secure and maintainable services',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'Python', 'FastAPI', 'Flask', 'REST APIs'],
  },
  {
    title: 'Data Layer',
    description: 'Reliable storage and data modeling',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQL', 'ORMs', 'Schema Design'],
  },
  {
    title: 'Architecture',
    description: 'Systems designed to grow cleanly',
    icon: Workflow,
    skills: ['System Design', 'API Integration', 'Reusable Components', 'Scalable Architecture', 'Performance'],
  },
  {
    title: 'Engineering Quality',
    description: 'Production standards throughout delivery',
    icon: ShieldCheck,
    skills: ['Clean Code', 'Code Reviews', 'Security', 'Accessibility', 'Testing', 'SEO'],
  },
];

const Skills = () => {
  return (
    <Section
      id="skills"
      title="Skills & Expertise"
      subtitle="The technologies and engineering practices I use to build production-ready AI SaaS products"
      className="bg-zinc-50 dark:bg-zinc-900"
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map(({ title, description, icon: Icon, skills }, index) => (
          <article
            key={title}
            className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-orange-500/50"
          >
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="font-bold text-zinc-900 dark:text-white">{title}</h3>
                  <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">{description}</p>
                </div>
              </div>
              <span className="text-xs font-bold text-zinc-300 dark:text-zinc-600">0{index + 1}</span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 border-t border-zinc-100 pt-5 dark:border-zinc-700">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
