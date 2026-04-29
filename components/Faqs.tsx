"use client";

import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BookingModal from "./ui/BookingModel";

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
    className="w-5 h-5 text-primary"
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
      "Starting at $800. No overhead. Budget goes to code and design.",
    highlights: [
      "Landing Pages: $800 – $1,200",
      "Business Sites: $2,000 – $3,500",
      "Web Apps: $5,000+",
    ],
  },
  {
    id: "team",
    question: "Who will I be working with?",
    answer:
      "Direct line to developers and designers. No account managers.",
    highlights: [
      "WhatsApp/Slack access",
      "No middlemen",
      "Fast turnaround",
    ],
  },
  {
    id: "timeline",
    question: "How long does a project take?",
    answer:
      "Fast. No endless meetings. 2–4 weeks for most sites.",
    highlights: [
      "Landing Pages: 1 week",
      "Business Sites: 2–3 weeks",
      "Web Apps: 4–6 weeks",
    ],
  },
  {
    id: "payment",
    question: "What are your payment terms?",
    answer:
      "50% to start. 50% before launch. Simple.",
  },
  {
    id: "templates",
    question: "Do you use templates?",
    answer:
      "Custom builds with Next.js/React. For smaller budgets, we use our component library. Always fast and unique.",
  },
  {
    id: "maintenance",
    question: "What happens after launch?",
    answer:
      "30-day support. Then self-manage or $100/mo support.",
    highlights: [
      "Self-Managed: We train you",
      "Monthly Support: $100/mo",
      "Pay-as-you-go: Hourly rate",
    ],
  },
  {
    id: "refund",
    question: "What if I don't like the design?",
    answer:
      "2 revision rounds. You see progress early and often.",
  },
  {
    id: "startups",
    question: "Do you work with startups?",
    answer:
      "Yes. That's our sweet spot. Fast MVP launches without burning runway.",
  },
  {
    id: "international",
    question: "Do you work internationally?",
    answer:
      "Yes. Async-first. IST-based. US and UK timezone friendly.",
  },
  {
    id: "scope",
    question: "What if scope changes?",
    answer:
      "2-week discovery prevents this. New requests discussed before work begins. No surprise invoices.",
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
      gsap.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        {
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );

      // FAQ items stagger animation
      const items = faqItemsRef.current.filter(Boolean);
      gsap.fromTo(
        items,
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isBookingOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isBookingOpen]);

  return (
    <section
      id="faqs"
      ref={containerRef}
      className="relative bg-background text-foreground py-24 sm:py-32 overflow-hidden"
    >
      {/* Gradient Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 px-6 sm:px-12 max-w-5xl mx-auto">
        {/* Heading Section */}
        <div ref={headingRef} className="mb-16 sm:mb-20 text-center flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 sm:w-12 bg-primary"></span>
            <span className="text-primary uppercase tracking-[0.2em] text-sm font-bold">
              Questions
            </span>
            <span className="h-px w-8 sm:w-12 bg-primary"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-spaceGrotesk font-medium leading-[1.15] tracking-tight mb-6 max-w-4xl">
            Questions We Get Asked
            <br />
            <span className="text-primary">(And Honest Answers)</span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed font-medium">
            Straightforward answers. No fluff.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-start">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                ref={(el) => {
                  faqItemsRef.current[index] = el;
                }}
                className={`faq-item group relative bg-card border ${isOpen ? 'border-primary/50 shadow-md' : 'border-border shadow-sm'} rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300`}
              >
                {/* Question Button */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
                >
                  <h3 className={`faq-question-text font-spaceGrotesk text-lg sm:text-xl font-bold transition-colors duration-300 pr-4 ${isOpen ? 'text-primary' : 'text-foreground/90'}`}>
                    {faq.question}
                  </h3>

                  <div className={`faq-icon shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all duration-300 shadow-sm ${isOpen ? 'bg-primary/10 border-primary/30 text-primary' : 'bg-muted border-border text-primary group-hover:bg-primary/10 group-hover:border-primary/30'}`}>
                    <svg
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
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
                  </div>
                </button>

                {/* Answer Content */}
                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-6 pt-0">
                      <div className="border-t border-border pt-4 mt-2">
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                          {faq.answer}
                        </p>

                        {faq.highlights && faq.highlights.length > 0 && (
                          <ul className="space-y-2 mt-4">
                            {faq.highlights.map((highlight, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-foreground/80 font-medium"
                              >
                                <span className="shrink-0 mt-[2px]">
                                  <CheckCircleIcon />
                                </span>
                                <span className="text-sm sm:text-base leading-relaxed">
                                  {highlight}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 sm:mt-20 text-center border-t border-border pt-16">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            Still have questions?
          </h3>
          <p className="text-lg text-muted-foreground font-medium mb-8 max-w-2xl mx-auto">
            30-minute call. No sales pitch.
          </p>

          <div
            onClick={() => setIsBookingOpen(true)}
            className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-primary text-primary-foreground rounded-full overflow-hidden transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-[0_0_40px_rgba(227,23,10,0.4)] cursor-pointer shadow-md"
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
          </div>
        </div>
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
        />
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
