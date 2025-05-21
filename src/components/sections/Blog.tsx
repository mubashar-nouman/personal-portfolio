import React from 'react';
import Section from '../ui/Section';
import { blogPosts } from '../../data';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <Section 
      id="blog" 
      title="Latest Blog Posts" 
      subtitle="Technical articles and insights"
      className="bg-zinc-100 dark:bg-zinc-950"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div 
            key={post.id}
            className="bg-white dark:bg-zinc-800 rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg border border-zinc-200 dark:border-zinc-700"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400 mb-3">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1 text-zinc-500 dark:text-zinc-400" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock size={14} className="mr-1 text-zinc-500 dark:text-zinc-400" />
                  {post.readTime}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                {post.title}
              </h3>
              
              <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                {post.excerpt}
              </p>
              
              <a 
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
              >
                Read More <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Blog;
