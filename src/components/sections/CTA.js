'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const CTA = () => {
  return (
    <section id="cta" className="py-24 bg-navy-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-dark opacity-50"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="backdrop-blur-glass bg-white/5 border border-white/10 rounded-feature p-12 text-center shadow-glow"
        >
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-lavender-400 text-sm font-mono mb-6">
              LIMITED ENROLLMENT OPEN
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to <span className="bg-gradient-primary text-transparent bg-clip-text">Transform</span> Your Trading?
            </h2>
            
            <p className="text-lavender-400/90 text-xl max-w-2xl mx-auto mb-8">
              Join our elite trading community today and get access to professional mentors, real-time signals, and a supportive network of serious traders.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#register"
                className="px-8 py-4 bg-gradient-primary rounded-button text-white font-semibold shadow-button hover:shadow-glow transition-all duration-300 text-lg"
              >
                Join GrowMint Now
              </Link>
              
              <Link
                href="https://discord.gg/fXY3WVtccM"
                className="px-8 py-4 bg-transparent border border-violet-500/30 rounded-button text-white font-semibold hover:bg-violet-500/10 transition-all duration-300 text-lg"
              >
                Visit Our Discord
              </Link>
            </div>
            
            <p className="text-lavender-400/70 mt-6">
              Limited spots available. Membership closes when we reach capacity.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;