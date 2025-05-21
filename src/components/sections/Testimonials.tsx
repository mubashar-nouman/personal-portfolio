import React from 'react';
import Section from '../ui/Section';
import { testimonials } from '../../data';
import { Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials: React.FC = () => {
  return (
    <Section 
      id="testimonials" 
      title="Client Testimonials" 
      subtitle="What people say about my work"
      className="bg-zinc-50 dark:bg-zinc-900"
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
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-orange-300 dark:ring-orange-500/30">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
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
