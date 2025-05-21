import React from 'react';
import Section from '../ui/Section';
import { education } from '../../data';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <Section 
      id="education" 
      title="Education" 
      subtitle="My academic background"
      className="bg-zinc-50 dark:bg-zinc-900"
    >
      <div className="max-w-3xl mx-auto">
        <div className="relative">

          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-zinc-300 dark:bg-zinc-700"></div>

          {/* Timeline items */}
          {education.map((item) => (
            <div key={item.id} className="mb-12 last:mb-0 relative pl-12">
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5">
                <div className="w-8 h-8 rounded-full bg-orange-500 shadow-md flex items-center justify-center">
                  <GraduationCap size={16} className="text-white" />
                </div>
              </div>

              {/* Content box */}
              <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm p-6 border border-zinc-200 dark:border-zinc-700 transition-all duration-300 hover:shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-medium text-orange-500 dark:text-orange-400">
                      {item.institution}
                    </p>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 md:mt-0">
                    {item.duration}
                  </p>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;
