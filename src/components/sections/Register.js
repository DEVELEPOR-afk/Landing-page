'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: 'beginner',
    goal: '',
    discord: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      console.log('Submitting form data:', formData);
      // Use relative URL to automatically adapt to the current host and port
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Registration submitted successfully! We will contact you soon.',
        });
        
        // Reset form data
        setFormData({
          name: '',
          email: '',
          experience: 'beginner',
          goal: '',
          discord: '',
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="py-24 bg-navy-900 relative overflow-hidden">
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
            JOIN THE ELITE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            Register for <span className="bg-gradient-primary text-transparent bg-clip-text">MoneyFox</span>
          </h2>
          <p className="text-lavender-400/90 max-w-2xl mx-auto text-lg">
            Fill out the form below to join our exclusive trading community. Limited spots available to ensure quality mentorship for each member.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="backdrop-blur-glass bg-white/5 border border-white/10 rounded-feature p-8 shadow-card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="mb-2">
                <label
                  htmlFor="name"
                  className="block text-white font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-navy-800/50 border border-violet-500/20 rounded-md py-3 px-4 text-white focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block text-white font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-navy-800/50 border border-violet-500/20 rounded-md py-3 px-4 text-white focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="mb-2">
                <label
                  htmlFor="experience"
                  className="block text-white font-medium mb-2"
                >
                  Trading Experience
                </label>
                <CustomDropdown 
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  options={[
                    { value: 'beginner', label: 'Beginner (0-1 years)' },
                    { value: 'intermediate', label: 'Intermediate (1-3 years)' },
                    { value: 'advanced', label: 'Advanced (3+ years)' },
                    { value: 'professional', label: 'Professional Trader' },
                  ]}
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="discord"
                  className="block text-white font-medium mb-2"
                >
                  Discord Username (optional)
                </label>
                <input
                  type="text"
                  id="discord"
                  name="discord"
                  value={formData.discord}
                  onChange={handleChange}
                  className="w-full bg-navy-800/50 border border-violet-500/20 rounded-md py-3 px-4 text-white focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
                  placeholder="username#0000"
                />
              </div>
            </div>

            <div className="mt-4 mb-6">
              <label
                htmlFor="goal"
                className="block text-white font-medium mb-2"
              >
                What are your trading goals?
              </label>
              <textarea
                id="goal"
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                rows="4"
                className="w-full bg-navy-800/50 border border-violet-500/20 rounded-md py-3 px-4 text-white focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
                placeholder="Tell us about your trading goals and what you hope to achieve with MoneyFox..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-primary text-white font-semibold py-4 px-6 rounded-button shadow-button hover:shadow-glow transition-all duration-300 text-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
            
            {submitStatus && (
              <div className={`mt-4 p-3 rounded-md ${submitStatus.type === 'success' ? 'bg-mint-500/20 text-mint-500' : 'bg-red-500/20 text-red-400'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <p className="text-lavender-400/70 text-center text-sm mt-4">
              By submitting, you agree to our Terms of Service and Privacy Policy.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

// Custom Dropdown Component
const CustomDropdown = ({ id, name, value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // Find the currently selected option label
  const selectedOption = options.find(option => option.value === value);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Handle option selection
  const handleOptionClick = (optionValue) => {
    onChange({ target: { name, value: optionValue } });
    setIsOpen(false);
  };
  
  return (
    <div className="relative" ref={dropdownRef}>
      {/* Hidden actual select for form submission */}
      <select 
        id={id} 
        name={name} 
        value={value} 
        onChange={onChange} 
        className="sr-only"
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      
      {/* Custom dropdown trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full bg-navy-800/50 border border-violet-500/20 rounded-md py-3 px-4 text-white focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all shadow-md hover:bg-navy-800/80"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby={id}
      >
        <span className="block truncate">{selectedOption?.label}</span>
        <span className="pointer-events-none flex items-center">
          <svg
            className={`h-5 w-5 text-blue-400 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
      
      {/* Dropdown menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute z-50 mt-1 w-full rounded-md bg-navy-800 shadow-lg ring-1 ring-violet-500/20 backdrop-blur-glass overflow-hidden"
        >
          <ul
            className="max-h-60 overflow-auto py-1 text-base focus:outline-none"
            tabIndex="-1"
            role="listbox"
            aria-labelledby={id}
          >
            {options.map((option) => (
              <li
                key={option.value}
                className={`cursor-pointer select-none relative py-2.5 px-4 transition-all ${option.value === value 
                  ? 'bg-gradient-to-r from-violet-500/20 to-blue-500/20 text-white' 
                  : 'text-lavender-400/90 hover:bg-navy-700/50'}`}
                onClick={() => handleOptionClick(option.value)}
                role="option"
                aria-selected={option.value === value}
              >
                <div className="flex items-center">
                  {option.value === value && (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-1.5">
                      <div className="h-full w-1 bg-gradient-primary rounded-r-sm"></div>
                    </span>
                  )}
                  <span className={`block truncate ${option.value === value ? 'font-semibold pl-3' : 'font-normal'}`}>
                    {option.label}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Register; 