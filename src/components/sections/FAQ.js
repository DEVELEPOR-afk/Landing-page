'use client';

import { MotionDiv, MotionSection, fadeIn } from '../ui/motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { useEffect, useState } from 'react';

const faqs = [
  {
    question: "How much experience do I need to join?",
    answer: "Our program is designed for traders at all levels. Whether you're just starting out or have been trading for years but struggling to see consistent results, our mentors will adapt the curriculum to your specific needs and experience level."
  },
  {
    question: "How long is the mentorship program?",
    answer: "The core program runs for 12 weeks with weekly 1-on-1 sessions. After completion, you'll have lifetime access to our community and the option to continue with monthly mentorship sessions at a reduced rate."
  },
  {
    question: "What markets does the program cover?",
    answer: "We offer specialized mentorship for forex, stocks, and cryptocurrency trading. You'll be matched with a mentor who specializes in your market of interest and has a proven track record of success."
  },
  {
    question: "Do I need a lot of capital to start?",
    answer: "No, we teach proper risk management that works with any account size. Many of our students start with relatively small accounts ($1,000-$5,000) and focus on percentage growth rather than dollar amounts."
  },
  {
    question: "Is there a guarantee that I'll make money?",
    answer: "While we can't legally guarantee trading profits, we can guarantee that you'll receive the knowledge, strategies, and personalized guidance that has helped hundreds of our students become profitable. Success ultimately depends on your dedication to implementing what you learn."
  },
  {
    question: "How much time do I need to commit each week?",
    answer: "At minimum, you'll need 5-7 hours per week including your 1-on-1 session (1 hour), reviewing educational materials (2-3 hours), and practicing/implementing strategies (2-3 hours). The more time you can dedicate, the faster you'll typically see results."
  }
];

export default function FAQ() {
  // Add client-side only rendering
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  
  return (
    <MotionSection 
      id="faq"
      className="py-20 md:py-32 bg-gray-50"
      variants={fadeIn('up', 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4">
        <MotionDiv
          variants={fadeIn('up', 0.2)}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Get answers to common questions about our trading mentorship program.
          </p>
        </MotionDiv>

        <MotionDiv
          variants={fadeIn('up', 0.3)}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={`faq-${index}`} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </MotionDiv>
      </div>
    </MotionSection>
  );
} 