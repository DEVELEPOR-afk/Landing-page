'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Particle animation component
const Particles = ({ count = 40 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full"
          style={{
            background: i % 3 === 0 ? '#6E3AD3' : i % 3 === 1 ? '#2CCCFF' : '#FF2CED',
            boxShadow: i % 3 === 0 ? '0 0 12px #6E3AD3' : i % 3 === 1 ? '0 0 12px #2CCCFF' : '0 0 12px #FF2CED',
          }}
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

// Stat card component
const StatCard = ({ number, title, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      transition={{ duration: 0.5, delay }}
      className="backdrop-blur-glass bg-gradient-to-b from-navy-800/60 to-navy-800/30 border border-violet-500/20 rounded-card px-4 py-3 shadow-card flex-1 min-w-[200px] text-center"
    >
      <div className="flex flex-col items-center gap-2">
        <div className="p-2 rounded-full bg-gradient-to-br from-violet-500/20 to-blue-500/20 border border-violet-500/30 shadow-glow flex-shrink-0">
          {icon}
        </div>
        <div>
          <p className="font-mono text-xl font-bold bg-gradient-primary text-transparent bg-clip-text mb-0.5">{number}</p>
          <h3 className="text-xs text-lavender-400/90 leading-tight">{title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

const Hero = () => {
  // Client-side only rendering for window object
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-dark py-20">
      {/* Background elements */}
      {/* Particles component removed for cleaner background */}
      {/* {isClient && <Particles />} */}
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-block px-4 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-lavender-400 text-sm font-mono mb-6"
            >
              MONEYFOX TRADING COMMUNITY
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6"
            >
              <span className="bg-gradient-primary text-transparent bg-clip-text">Level Up Your Trading</span>
              <br />
              <span className="text-white">With MoneyFox</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-lavender-400/90 mb-4 max-w-xl"
            >
              Elite Discord-based mentorship from real traders who consistently profit in any market condition.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 10
                }
              }}
              whileHover={{ scale: 1.03 }}
              className="flex items-center justify-center py-3 px-4 mt-2 mb-6 rounded-lg bg-gradient-to-r from-violet-500/20 to-blue-500/20 border border-violet-500/30 backdrop-blur-sm shadow-glow max-w-md mx-auto sm:mx-0"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 10, 0, -10, 0],
                  transition: { repeat: 3, duration: 0.5, delay: 1 }
                }}
                className="mr-3 text-violet-400"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="22" 
                  height="22" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-lavender-400/90 font-semibold">Don&apos;t Miss Out!</span>
                <span className="text-md font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                  Next Live Webinar: May 25, 2025 @ 7:00 PM IST
                </span>
              </div>
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  transition: { repeat: Infinity, duration: 2, repeatDelay: 1 }
                }}
                className="ml-3 text-blue-400"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                href="https://discord.gg/fXY3WVtccM"
                className="px-8 py-3 bg-gradient-primary rounded-button text-white font-semibold shadow-button hover:shadow-glow transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="flex-shrink-0"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Join Our Discord
              </Link>
              <Link
                href="#register"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 rounded-button text-white font-semibold shadow-button hover:shadow-glow transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <line x1="19" y1="8" x2="19" y2="14"></line>
                  <line x1="16" y1="11" x2="22" y2="11"></line>
                </svg>
                Register Now
              </Link>
            </motion.div>
            
            {/* Free Session Feature Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, boxShadow: '0 10px 40px rgba(255, 215, 0, 0.3)' }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-6 mt-3 backdrop-blur-glass bg-gradient-to-b from-navy-800/60 to-navy-800/30 border-2 border-gold-500/50 rounded-card px-5 py-4 shadow-glow max-w-md mx-auto text-center relative overflow-hidden"
            >
              {/* "Free" badge */}
              <div className="absolute -right-8 top-4.5 bg-gold-500 text-navy-900 text-xs font-bold px-10 py-1 transform rotate-45 shadow-md">
                FREE
              </div>
              
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="p-2 rounded-full bg-gradient-to-br from-gold-500/30 to-gold-300/20 border border-gold-500/50 shadow-glow flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Free Session on Trading</h3>
              </div>
              <p className="text-xs text-lavender-400/90 leading-relaxed">
                Join our complimentary introduction to trading strategies and market analysis
              </p>
              
              {/* Subtle animated glow effect */}
              <motion.div 
                className="absolute inset-0 bg-gold-500/5 pointer-events-none"
                animate={{ 
                  opacity: [0.1, 0.2, 0.1],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut" 
                }}
              />
            </motion.div>
            
            {/* Stats row */}
            <div className="flex flex-col md:flex-row gap-4 mt-3">
              <StatCard 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                }
                number="10+"
                title="Daily Market Alerts & Proven Strategies"
                delay={0.6}
              />
              <StatCard 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-mint-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                number="86.94%"
                title="Signal Accuracy Rate Backed by Results"
                delay={0.7}
              />
              <StatCard 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                }
                number="Weekly: 2 Sessions"
                title="Live Webinars + Expert Q&A Sessions"
                delay={0.8}
              />
            </div>
          </div>
          
          {/* Right content - Trading Dashboard Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative lg:block hidden"
          >
            <div className="relative w-full aspect-square">
              {/* Trading dashboard video */}
              <div className="absolute inset-0 rounded-feature overflow-hidden backdrop-blur-glass bg-navy-800/30 border border-white/10 shadow-glow">
                {/* Gradient overlay for better video contrast */}
                <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/50 via-transparent to-violet-500/10 z-10"></div>
                <div className="w-full h-full relative">
                  {/* TradingView chart widget */}
                  <iframe 
                    src="https://www.tradingview.com/widgetembed/?frameElementId=tradingview_chart&symbol=BINANCE%3ABTCUSDT&interval=15&theme=dark&style=1&locale=en"
                    className="w-full h-full object-cover rounded-feature"
                    frameBorder="0" 
                    allowTransparency="true" 
                    scrolling="no"
                    title="BINANCE:BTCUSDT TradingView Chart"
                  ></iframe>
                  
                  {/* Overlay with enhanced label */}
                  <div className="absolute bottom-4 left-4 bg-navy-800/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-violet-500/20 z-20">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                      <p className="text-blue-400 font-mono text-sm">TRADING DASHBOARD</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating notification cards */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-navy-800/80 backdrop-blur-glass p-4 rounded-card border border-violet-500/20 shadow-card max-w-[200px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-mint-500/20 flex items-center justify-center text-mint-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-mint-500 font-semibold">Trade Successful</p>
                    <p className="text-xs text-lavender-400/70">BTC long +12.4%</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-4 -left-4 bg-navy-800/80 backdrop-blur-glass p-4 rounded-card border border-violet-500/20 shadow-card max-w-[200px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-blue-400 font-semibold">Bitcoin Trend Shift Signal</p>
                    <p className="text-xs text-lavender-400/70">BTC long +12.4%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 