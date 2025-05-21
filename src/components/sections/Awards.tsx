import React from 'react';
import Section from '../ui/Section';
import { awards } from '../../data';
import { Trophy } from 'lucide-react';

const Awards: React.FC = () => {
  return (
    <Section 
      id="awards" 
      title="Awards & Recognition" 
      subtitle="Achievements and accolades"
      className="bg-gray-50 dark:bg-zinc-900"
    >
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award) => (
            <div
              key={award.id}
              className="bg-white dark:bg-dark-700 rounded-lg shadow-md p-6 border border-gray-100 dark:border-dark-600 flex"
            >
              <div className="mr-4">
                <div className="bg-warning-100 dark:bg-warning-900/30 text-warning-500 p-3 rounded-full h-12 w-12 flex items-center justify-center">
                  <Trophy size={20} />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {award.title}
                </h3>
                
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {award.issuer} • {award.date}
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Awards;