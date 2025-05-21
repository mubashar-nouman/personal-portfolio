import React from 'react';
import Section from '../ui/Section';
import { experiences } from '../../data';
import { Briefcase, Building, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <Section 
      id="experience" 
      title="Professional Experience" 
      subtitle="My journey in the tech industry"
      className="bg-zinc-100 dark:bg-zinc-950"
    >
      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-0 sm:left-4 top-6 h-full w-0.5 bg-gradient-to-b from-zinc-400 via-zinc-300 to-zinc-200 dark:from-zinc-600 dark:via-zinc-700 dark:to-zinc-800 rounded-full"></div>
        
        {/* Career start marker at the top */}
        <div className="relative z-10 flex justify-center items-center mb-8">
          <div className="px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 text-xs font-medium border border-zinc-200 dark:border-zinc-700">
            Career Start
          </div>
        </div>

        {/* Experience items in reverse order */}
        {[...experiences].reverse().map((job) => (
          <div key={job.id} className="mb-10 last:mb-0">
            <div className="flex flex-col sm:flex-row sm:items-start">
              
              {/* Timeline dot and year */}
              <div className="flex flex-row sm:flex-col items-center sm:items-start mb-4 sm:mb-0">
                <div className="relative z-10">
                  <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                    <Briefcase size={16} />
                  </div>
                </div>
                
                <div className="ml-3 sm:ml-0 sm:mt-3 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {job.duration.split('-')[0]}
                </div>
              </div>
              
              {/* Content */}
              <div className="sm:ml-10 flex-1">
                <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm p-5 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors duration-300">
                  <div className="flex flex-col mb-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                        {job.position}
                      </h3>
                      <span className="hidden sm:flex text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 rounded-full">
                        {job.duration}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-orange-600 dark:text-orange-400 mt-1 text-sm space-x-4 font-medium">
                      <div className="flex items-center">
                        <Building size={14} className="mr-1" />
                        <span>{job.company}</span>
                      </div>
                      {job.location && (
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          <span>{job.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-4 text-sm text-zinc-700 dark:text-zinc-300">
                    {job.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-500 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 px-2.5 py-0.5 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </Section>
  );
};

export default Experience;
