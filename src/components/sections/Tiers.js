'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const tiers = [
  {
    name: 'Starter',
    price: '99',
    description: 'Perfect for beginners looking to learn the basics of trading.',
    features: [
      'Basic trading education',
      'Weekly group sessions',
      'Community access',
      'Basic market analysis',
      'Email support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    price: '299',
    description: 'Ideal for traders who want to take their skills to the next level.',
    features: [
      'Advanced trading strategies',
      'Bi-weekly 1-on-1 sessions',
      'Priority community access',
      'Real-time trade alerts',
      '24/7 chat support',
      'Risk management training',
    ],
    cta: 'Choose Professional',
    popular: true,
  },
  {
    name: 'Elite',
    price: '599',
    description: 'For serious traders who want comprehensive mentorship.',
    features: [
      'All Professional features',
      'Daily 1-on-1 sessions',
      'Custom trading plan',
      'Portfolio review',
      'Priority support',
      'Exclusive workshops',
      'Advanced risk management',
    ],
    cta: 'Choose Elite',
    popular: false,
  },
];

const Tiers = () => {
  return (
    <section id="tiers" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Choose Your{' '}
            <span className="gradient-text">Mentorship Tier</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Select the mentorship package that best fits your trading goals and
            experience level. All tiers include access to our trading community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`card relative ${
                tier.popular
                  ? 'border-purple-500/50 shadow-lg shadow-purple-500/20'
                  : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-4xl font-bold gradient-text">
                    ${tier.price}
                  </span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-400 mt-4">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <svg
                      className="w-5 h-5 text-purple-400 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="text-center"
              >
                <Link
                  href="#register"
                  className={`inline-block w-full py-3 rounded-full font-medium transition-colors duration-200 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  {tier.cta}
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'Can I switch between tiers?',
                answer:
                  'Yes, you can upgrade or downgrade your tier at any time. The price difference will be prorated.',
              },
              {
                question: 'What payment methods do you accept?',
                answer:
                  'We accept all major credit cards, PayPal, and cryptocurrency payments.',
              },
              {
                question: 'Is there a minimum commitment period?',
                answer:
                  'No, you can cancel your subscription at any time. However, we recommend at least 3 months to see significant results.',
              },
              {
                question: 'Do you offer refunds?',
                answer:
                  'Yes, we offer a 14-day money-back guarantee if you\'re not satisfied with our service.',
              },
            ].map((faq, index) => (
              <div key={index} className="card">
                <h4 className="text-lg font-semibold text-white mb-2">
                  {faq.question}
                </h4>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tiers; 