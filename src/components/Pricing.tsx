"use client";

import { useState } from "react";
import { Poppins } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in modern web technologies including React, Next.js, TypeScript, and Node.js. I have extensive experience with full-stack development and creating responsive, performant web applications.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "I maintain clear and consistent communication throughout the project via your preferred channels (email, Slack, etc.). I provide regular updates on progress and am always available for questions or discussions.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on scope and complexity. I provide detailed estimates during our initial consultation and keep you updated on progress. I'm committed to delivering high-quality work within agreed timeframes.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, I offer post-launch support and maintenance services to ensure your project continues to run smoothly. This includes bug fixes, updates, and feature enhancements as needed.",
  },
  {
    question: "How do you approach responsive design?",
    answer:
      "I follow a mobile-first approach to ensure your website works flawlessly across all devices. I use modern CSS techniques and thorough testing to guarantee a consistent user experience.",
  },
  {
    question: "What is your development process?",
    answer:
      "My development process includes thorough planning, regular client communication, iterative development with feedback loops, comprehensive testing, and careful deployment with post-launch monitoring.",
  },
];

const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.div
      initial={false}
      className="border-b border-gray-200 last:border-none"
    >
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-4 text-left"
      >
        <span className={`text-lg ${poppins.className}`}>{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-mainColour" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p
              className={`pb-4 text-gray-600 ${poppins.className} font-normal`}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="py-20 px-4 md:px-6 w-full max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2
          className={`md:text-6xl text-4xl font-semibold ${poppins.className}`}
        >
          FA<span className="text-mainColour">Qs</span>
        </h2>
      </div>

      <motion.div
        className="bg-white rounded-2xl shadow-sm p-6 md:p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default FAQs;
