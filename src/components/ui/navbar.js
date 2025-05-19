'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Return null during initial render to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <header suppressHydrationWarning className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div suppressHydrationWarning className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold">GROWMINT</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="#about" className="text-sm font-medium hover:text-purple-400 transition-colors">About</Link>
          <Link href="#program" className="text-sm font-medium hover:text-purple-400 transition-colors">Program</Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-purple-400 transition-colors">Success Stories</Link>
          <Link href="#faq" className="text-sm font-medium hover:text-purple-400 transition-colors">FAQ</Link>
        </nav>

        <div className="hidden md:block">
          <Link 
            href="#apply" 
            className="px-4 py-2 bg-purple-400 text-white rounded-full text-sm font-medium hover:bg-purple-500 transition-colors"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div suppressHydrationWarning className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col gap-4">
            <Link 
              href="#about" 
              className="text-sm font-medium py-2 hover:text-purple-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#program" 
              className="text-sm font-medium py-2 hover:text-purple-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Program
            </Link>
            <Link 
              href="#testimonials" 
              className="text-sm font-medium py-2 hover:text-purple-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Success Stories
            </Link>
            <Link 
              href="#faq" 
              className="text-sm font-medium py-2 hover:text-purple-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              href="#apply" 
              className="px-4 py-2 bg-purple-400 text-white rounded-full text-sm font-medium hover:bg-purple-500 transition-colors w-full text-center mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Apply Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
} 