'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Alex Thompson',
    role: 'Crypto Trader, 2+ Years',
    content:
      "GrowMint changed everything for me. Their mentors helped me identify why I was losing trades and completely transformed my approach to risk management. I'm now consistently profitable for the first time.",
    image: '/testimonials/sarah.jpg', // Reusing existing image
  },
  {
    name: 'Sophia Chen',
    role: 'Forex Trader, 1 Year',
    content:
      "The live trading sessions are incredible. Being able to watch professional traders analyze the market in real-time and explain their thought process has accelerated my learning curve dramatically.",
    image: '/testimonials/michael.jpg', // Reusing existing image
  },
  {
    name: 'Marcus Williams',
    role: 'Options Trader, 3+ Years',
    content:
      "What sets GrowMint apart is the quality of their mentors. These aren't just educators - they're actual traders who share their real entries, exits, and thought processes. The ROI on this membership has been astronomical.",
    image: '/testimonials/emily.jpg', // Reusing existing image
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-navy-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-dark opacity-50"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-lavender-400 text-sm font-mono mb-6">
            TRADER SUCCESS STORIES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            What Our <span className="bg-gradient-primary text-transparent bg-clip-text">Members Say</span>
          </h2>
          <p className="text-lavender-400/90 max-w-2xl mx-auto text-lg">
            Don&apos;t just take our word for it. Here&apos;s what traders who have joined our community have to say about their experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="backdrop-blur-glass bg-white/5 border border-white/10 rounded-card p-8 hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-blue-400 shadow-glow">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-lavender-400/80">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-white/80 italic leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
              
              {/* Rating stars */}
              <div className="flex mt-4 text-mint-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a 
            href="#register" 
            className="inline-block px-8 py-3 bg-gradient-primary rounded-button text-white font-semibold shadow-button hover:shadow-glow transition-all duration-300"
          >
            Join Our Community
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;