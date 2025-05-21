import React from 'react';
import Section from '../ui/Section';
import { certifications } from '../../data';
import { Award, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <Section 
      id="certifications" 
      title="Certifications" 
      subtitle="Professional credentials and achievements"
      className="bg-zinc-100 dark:bg-zinc-950"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <div 
            key={cert.id}
            className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700 p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-orange-100 dark:bg-orange-900/20 text-orange-500 p-3 rounded-full">
                <Award size={20} />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                {cert.title}
              </h3>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              {cert.issuer} • {cert.date}
            </p>

            {cert.link && (
              <a 
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-orange-500 hover:text-orange-600 text-sm font-medium transition-colors"
              >
                View Certificate <ExternalLink size={14} className="ml-1" />
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;
