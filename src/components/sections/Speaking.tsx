import React from 'react';
import Section from '../ui/Section';
import { speakingEvents } from '../../data';
import { Mic, Calendar, ArrowRight } from 'lucide-react';

const Speaking: React.FC = () => {
  return (
    <Section 
      id="speaking" 
      title="Speaking & Events" 
      subtitle="Technical talks and workshops"
      className="bg-zinc-50 dark:bg-zinc-900"
    >
      <div className="max-w-3xl mx-auto">
        <div className="space-y-8">
          {speakingEvents.map((event) => (
            <div 
              key={event.id}
              className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 border-l-4 border-orange-500"
            >
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-500 p-3 rounded-full">
                  <Mic size={20} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                    {event.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-3">
                    <span className="font-medium text-orange-500">{event.event}</span>
                    <span>•</span>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1 text-zinc-500 dark:text-zinc-400" />
                      {event.date}
                    </div>
                  </div>
                  
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    {event.description}
                  </p>
                  
                  {event.link && (
                    <a 
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
                    >
                      Event Details <ArrowRight size={16} className="ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Speaking;
