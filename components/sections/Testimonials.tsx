'use client';

import React from 'react';
import Section from '@/components/ui/Section';
import { testimonials } from '@/data';
import { Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials: React.FC = () => {
  // Renders nothing until real, publishable client quotes exist in the data file.
  if (testimonials.length === 0) return null;

  return (
    <Section
      id="testimonials"
      title="Client Testimonials"
      subtitle="What people say about my work"
      className="bg-zinc-100 dark:bg-zinc-950"
    >
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white dark:bg-zinc-800 rounded-xl p-8 h-full border border-zinc-200 dark:border-zinc-700 transition-all duration-300 hover:shadow-xl">
                <div className="text-orange-500 dark:text-orange-400 mb-6">
                  <Quote size={32} />
                </div>
                
                <p className="text-zinc-600 dark:text-zinc-300 italic mb-6 min-h-[100px]">
                  "{testimonial.testimonial}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-orange-100 ring-2 ring-orange-300 dark:bg-orange-500/20 dark:ring-orange-500/30">
                    {testimonial.avatar ? (
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="text-sm font-bold text-orange-700 dark:text-orange-300">
                        {testimonial.name
                          .split(' ')
                          .map((part) => part[0])
                          .slice(0, 2)
                          .join('')}
                      </span>
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
};

export default Testimonials;
