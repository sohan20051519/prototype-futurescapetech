import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Sun, Moon } from 'lucide-react';

// --- Types ---
export interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
  company?: string;
}

// --- Data ---
export const defaultTestimonials: Testimonial[] = [
  {
    text: "Futurescape Advertising is my go-to agency for all my marketing needs. From digital marketing to digital designs and more, they are simply outstanding with their fresh approach towards modern day marketing and branding.",
    image: "https://image-transform-service.cubeonebiz.com/o:webp?image=https://cms.futurescapeadvt.com/uploads/greenscape_logo_1_d658925aac.png",
    name: "Greenscape Group",
    role: "CEO",
    company: "Greenscape Group"
  },
  {
    text: "Being an umbrella company, with various software products under one umbrella, marketing was never easy for us. However, Futurescape Advertising made it all easy. They understand our requirements to the T and every time come up with effective marketing solutions.",
    image: "https://image-transform-service.cubeonebiz.com/o:webp?image=https://cms.futurescapeadvt.com/uploads/oneapp_logo_v_9898f1f6c2.png",
    name: "CUBEONEBIZ",
    role: "Sales Manager",
    company: "CUBEONEBIZ"
  },
  {
    text: "All social media marketing is handled by Futurescape Advertising, and we have been working together for a long time now. So it’s kinda needless to say that we are very satisfied with the agency and their digital marketing approach.",
    image: "https://image-transform-service.cubeonebiz.com/o:webp?image=https://cms.futurescapetech.com/uploads/Kalpana_c27be5bf0a.png",
    name: "Kalpana Struct Con",
    role: "Developer",
    company: "Kalpana Struct Con"
  },
  {
    text: "Being a technology company, marketing was never easy for us. How to tap into the B2B zone was very mind-boggling. However, thankfully we have our Futurescape Advertising. From understanding the business to planning promotion to finally yield conversion, they made it all easy and effective.",
    image: "https://image-transform-service.cubeonebiz.com/o:webp?image=https://cms.futurescapetech.com/uploads/FS_TECH_01_7206d4419e.jpg",
    name: "Futurescape Technologies",
    role: "Manager",
    company: "Futurescape Technologies"
  },
  {
    text: "We have relied on Futurescape Advertising totally for all our marketing and designing needs. They have also developed our mobile apps, website and customer modules and we are hundred percent satisfied with their services and support.",
    image: "https://image-transform-service.cubeonebiz.com/o:webp?image=https://cms.futurescapeadvt.com/uploads/logo_3_63f352f78d.png",
    name: "Fooddialer",
    role: "Team Head",
    company: "Fooddialer"
  }
];

const firstColumn = [defaultTestimonials[0], defaultTestimonials[1]];
const secondColumn = [defaultTestimonials[2], defaultTestimonials[3]];
const thirdColumn = [defaultTestimonials[4], defaultTestimonials[0]];

// --- Sub-Components ---
export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 15,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <motion.li 
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? "true" : "false"}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{ 
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  whileFocus={{ 
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  className="p-5 xs:p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-neutral-200/90 shadow-md hover:shadow-xl max-w-[calc(100vw-2.5rem)] xs:max-w-[340px] sm:max-w-sm w-full bg-white transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-[#036c99]/30" 
                >
                  <blockquote className="m-0 p-0">
                    <p className="text-neutral-800 leading-relaxed font-normal text-xs xs:text-sm sm:text-base m-0">
                      "{text}"
                    </p>
                    <footer className="flex items-center gap-2.5 xs:gap-3 mt-4 xs:mt-5 sm:mt-6">
                      <div className="h-10 w-10 xs:h-12 xs:w-12 rounded-xl bg-neutral-50 border border-neutral-200 p-1.5 flex items-center justify-center flex-shrink-0 shadow-sm">
                        <img
                          width={40}
                          height={40}
                          src={image}
                          alt={`${name} Logo`}
                          className="h-full w-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <cite className="font-bold not-italic tracking-tight leading-tight text-neutral-900 text-xs xs:text-sm truncate">
                          {name}
                        </cite>
                        <span className="text-[11px] xs:text-xs leading-normal tracking-tight text-neutral-600 mt-0.5 truncate">
                          {role}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

export const TestimonialsSection = () => {
  return (
    <section 
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-[#f4f3f3] py-14 sm:py-20 md:py-28 relative overflow-hidden"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.6 }
        }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative"
      >
        <div className="flex flex-col items-center justify-center max-w-[640px] mx-auto mb-8 sm:mb-12 md:mb-14 text-center">
          <div className="flex justify-center mb-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#036c99]/10 border border-[#036c99]/20 text-xs font-bold text-[#036c99] uppercase tracking-wider">
              TESTIMONIALS
            </div>
          </div>

          <h2 id="testimonials-heading" className="font-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
            What our clients say about us
          </h2>
          <p className="mt-3 sm:mt-4 text-neutral-700 text-sm xs:text-base sm:text-lg leading-relaxed max-w-lg">
            Discover how leading organizations and business domains accelerate growth and digital transformation with Futurescape.
          </p>
        </div>

        <div 
          className="flex justify-center gap-4 sm:gap-6 mt-4 sm:mt-8 [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)] max-h-[520px] xs:max-h-[580px] sm:max-h-[640px] md:max-h-[680px] overflow-hidden"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={22} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={20} />
        </div>
      </motion.div>
    </section>
  );
};

// --- Main Default Component ---
export default function TestimonialV2() {
  return <TestimonialsSection />;
}
