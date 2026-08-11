import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  hover = false
}) => {
  return (
    <div 
      className={`
        bg-white dark:bg-zinc-800 
        rounded-lg 
        shadow-md 
        overflow-hidden 
        ${hover ? 'transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;