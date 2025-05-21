import React from 'react';
import Section from '../ui/Section';
import { hobbies } from '../../data';
import { Camera, BookOpen, Mountain, ChevronRight as ChessKnight } from 'lucide-react';

const Hobbies: React.FC = () => {
  const getIcon = (iconName: string, size = 24) => {
    switch (iconName) {
      case 'camera':
        return <Camera size={size} />;
      case 'book-open':
        return <BookOpen size={size} />;
      case 'mountain':
        return <Mountain size={size} />;
      case 'chess-knight':
        return <ChessKnight size={size} />;
      default:
        return null;
    }
  };

  return (
    <Section 
      id="hobbies" 
      title="Hobbies & Interests" 
      subtitle="What I enjoy outside of coding"
      className="bg-zinc-100 dark:bg-zinc-950"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {hobbies.map((hobby) => (
          <div
            key={hobby.id}
            className="group relative rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-6 transition-all duration-300 hover:cursor-pointer hover:border-orange-400 dark:hover:border-orange-500 hover:bg-orange-50/30 dark:hover:bg-orange-900/10"
          >
            {/* Icon with hover scale */}
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 dark:bg-orange-900/20 text-orange-500 mb-4 transition-transform duration-300 group-hover:scale-105">
              {getIcon(hobby.icon, 28)}
            </div>

            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
              {hobby.title}
            </h3>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {hobby.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Hobbies;
