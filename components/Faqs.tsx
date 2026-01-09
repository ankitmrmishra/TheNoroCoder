"use client";

import React, { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// SVG Icons
const PlusIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4v16m8-8H4"
    />
  </svg>
);

const MinusIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 12H4"
    />
  </svg>
);

const SparklesIcon = () => (
  <svg
    className="w-3 h-3"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    />
  </svg>
);

const CheckCircleIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

// --- Types ---
interface FAQ {
  id: string;
  question: string;
  answer: string;
  highlights?: string[];
}

// --- Data ---
const faqs: FAQ[] = [
  {
    id: "pricing",
    question: "How much does a website cost?",
    answer:
      "Every project is different, but we believe in transparent pricing. Our projects typically start around $1,000. We don't have the overhead of a big agency, so your budget goes directly into the code and design.",
    highlights: [
      "Landing Pages: ~$1,000 - $1,500",
      "Multi-page Business Sites: $2,500+",
      "Custom Web Applications: Custom Quote",
    ],
  },
  {
    id: "team",
    question: "Who will I be working with?",
    answer:
      "Just the three of us. You won't be passed around to account managers or junior interns. You'll have a direct line to the actual developers and designers building your product.",
    highlights: [
      "Direct communication via WhatsApp/Slack",
      "No 'lost in translation' feedback loops",
      "Faster turnaround times",
    ],
  },
  {
    id: "timeline",
    question: "How long does a project take?",
    answer:
      "Since we are a small, agile team, we move fast. We don't spend weeks in meetings. Most standard websites are live within 2–4 weeks.",
    highlights: [
      "Landing Pages: 1 week",
      "Standard Websites: 2–3 weeks",
      "Complex Projects: 4–6 weeks",
    ],
  },
  {
    id: "payment",
    question: "What are your payment terms?",
    answer:
      "We keep it simple. We typically require a 50% deposit to secure your slot in our calendar and start work, with the remaining 50% due just before we hand over the keys and go live.",
  },
  {
    id: "templates",
    question: "Do you use templates or build from scratch?",
    answer:
      "We build custom solutions using modern tech (Next.js/React) to ensure your site is fast and unique. However, for smaller budgets ($1k range), we can use our own pre-built high-performance component library to speed things up while keeping the quality high.",
  },
  {
    id: "maintenance",
    question: "What happens after the site launches?",
    answer:
      "We don't disappear. We offer a 30-day support window to fix any bugs. After that, you can either manage the site yourself (we'll show you how) or pay a small monthly fee for us to handle updates and hosting.",
    highlights: [
      "Self-Managed: We provide training",
      "Monthly Support: Starting at $100/mo",
      "Pay-as-you-go: Hourly rate for tweaks",
    ],
  },
  {
    id: "refund",
    question: "What if I don't like the design?",
    answer:
      "Because we are a small team, we work closely with you during the design phase. You'll see progress early and often. We include 2 rounds of revisions to ensure the final result matches your vision perfectly.",
  },
  {
    id: "startups",
    question: "Do you work with early-stage startups?",
    answer:
      "Absolutely. That's our sweet spot. We love helping founders get their MVP or first marketing site off the ground quickly without burning their entire runway.",
  },
];

const FAQ = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const faqItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // FAQ items stagger animation
      gsap.from(faqItemsRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        y: 40,
        opacity: 0,
        duration: 0.2,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const toggleFAQ = (index: number) => {
    // 1. Close any currently open item (if it's not the one we just clicked)
    if (openIndex !== null && openIndex !== index) {
      const prevItem = faqItemsRef.current[openIndex];
      if (prevItem) {
        const prevAnswer = prevItem.querySelector(".faq-answer");
        const prevIcon = prevItem.querySelector(".faq-icon");
        const prevQuestion = prevItem.querySelector(".faq-question-text");

        // Close animation
        gsap.to(prevAnswer, {
          height: 0,
          opacity: 0,
          duration: 0.25, // Fast close
          ease: "power2.out",
        });
        gsap.to(prevIcon, {
          rotate: 0,
          duration: 0.25,
        });
        gsap.to(prevQuestion, {
          color: "rgba(255, 255, 255, 0.9)",
          duration: 0.25,
        });
      }
    }

    // 2. Toggle the clicked item
    const currentItem = faqItemsRef.current[index];
    if (!currentItem) return;

    const answer = currentItem.querySelector(".faq-answer");
    const icon = currentItem.querySelector(".faq-icon");
    const question = currentItem.querySelector(".faq-question-text");

    if (openIndex === index) {
      // Case: Clicking the already open item -> Close it
      gsap.to(answer, {
        height: 0,
        opacity: 0,
        duration: 0.25,
        ease: "power2.out",
      });
      gsap.to(icon, {
        rotate: 0,
        duration: 0.25,
      });
      gsap.to(question, {
        color: "rgba(255, 255, 255, 0.9)",
        duration: 0.25,
      });
      setOpenIndex(null);
    } else {
      // Case: Clicking a closed item -> Open it
      setOpenIndex(index);
      gsap.to(answer, {
        height: "auto", // GSAP handles auto height calculation
        opacity: 1,
        duration: 0.35, // Snappy open
        ease: "power2.out",
      });
      gsap.to(icon, {
        rotate: 180,
        duration: 0.35,
        ease: "back.out(1.7)",
      });
      gsap.to(question, {
        color: "#D4654C",
        duration: 0.35,
      });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative bg-[#0a0a0a] text-white py-24 sm:py-32 overflow-hidden"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4654C]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 px-6 sm:px-12 lg:px-24 xl:px-32 max-w-5xl mx-auto">
        {/* Heading Section */}
        <div ref={headingRef} className="mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 sm:w-12 bg-[#D4654C]"></span>
            <span className="text-[#D4654C] uppercase tracking-[0.2em] text-sm font-medium">
              Questions
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.95] mb-6">
            Questions We Get Asked
            <br />
            <span className="text-[#D4654C]">(And Honest Answers)</span>
          </h2>

          <p className="text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed">
            No marketing fluff. Just straightforward answers to help you decide
            if we&apos;re the right fit.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              ref={(el) => {
                faqItemsRef.current[index] = el;
              }}
              className="faq-item group relative bg-[#050505] border border-white/10 rounded-2xl overflow-hidden hover:border-[#D4654C]/30 transition-colors duration-300"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-4 p-6 sm:p-8 text-left cursor-pointer"
              >
                <h3 className="faq-question-text text-xl sm:text-2xl font-bold text-white/90 transition-colors duration-300 pr-4">
                  {faq.question}
                </h3>

                <div className="faq-icon shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#D4654C] group-hover:bg-[#D4654C]/10 group-hover:border-[#D4654C]/30 transition-all duration-300">
                  {/* Icon rotation is handled via GSAP now, simplified structure */}
                  <PlusIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </button>

              {/* Answer Content */}
              <div
                className="faq-answer overflow-hidden"
                style={{ height: 0, opacity: 0 }}
              >
                <div className="px-6 sm:px-8 pb-8 pt-0">
                  <div className="border-t border-white/10 pt-6">
                    <p className="text-base sm:text-lg text-white leading-relaxed mb-4">
                      {faq.answer}
                    </p>

                    {faq.highlights && faq.highlights.length > 0 && (
                      <ul className="space-y-3 mt-6">
                        {faq.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-white/80"
                          >
                            <span className="shrink-0 mt-1">
                              <CheckCircleIcon />
                            </span>
                            <span className="text-base leading-relaxed">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4654C]/0 via-[#D4654C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 sm:mt-20 text-center border-t border-white/10 pt-16">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            Still have questions?
          </h3>
          <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
            Book a free 30-minute call. No sales pitch, just honest conversation
            about your project and whether we&apos;re a good fit.
          </p>

          <a
            href="https://wa.me/918437153991"
            className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-[#D4654C] text-white rounded-full overflow-hidden transition-all hover:bg-[#bf5a43] hover:scale-105 hover:shadow-[0_0_40px_rgba(212,101,76,0.4)]"
          >
            <span className="relative z-10 font-bold tracking-wide uppercase text-sm">
              Schedule Free Call
            </span>
            <svg
              className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>

            {/* Shimmer Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </a>
        </div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(200%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default FAQ;
