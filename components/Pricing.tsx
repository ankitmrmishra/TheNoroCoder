"use client";

import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BookingModal from "./ui/BookingModel";
import { Button } from "./ui/button";

// Register GSAP plugin safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ---------------- ICONS ----------------
const TagIcon = () => (
  <svg
    className="w-3 h-3"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 2H2v10l9.29 9.29a2.4 2.4 0 0 0 3.42 0l6.58-6.58a2.4 2.4 0 0 0 0-3.42L12 2Z" />
    <path d="M7 7h.01" />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const RocketIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeWidth="2" d="M4.5 16.5s-1.5 1.5-2 5c3.5-.5 5-2 5-2" />
    <path
      strokeWidth="2"
      d="M12 15l-3-3c1-4 2-6 2-6s3 2 7 2c0 2 2 5 2 7 0 4-4 6-9 6-1-3-2-6-2-6l3-3Z"
    />
  </svg>
);

const LayersIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <polygon strokeWidth="2" points="12 2 2 7 12 12 22 7 12 2" />
    <polyline strokeWidth="2" points="2 12 12 17 22 12" />
    <polyline strokeWidth="2" points="2 17 12 22 22 17" />
  </svg>
);

const CodeIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <polyline strokeWidth="2" points="16 18 22 12 16 6" />
    <polyline strokeWidth="2" points="8 6 2 12 8 18" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14 5l7 7-7 7M21 12H3"
    />
  </svg>
);

// ---------------- DATA ----------------
const pricingTiers = [
  {
    title: "Landing Pages",
    price: "$1,000 – $1,500",
    description: "Perfect for startups needing fast validation.",
    features: [
      "Custom Design (Figma)",
      "Next.js Development",
      "Mobile Responsive",
      "Basic SEO",
      "1–2 Week Delivery",
    ],
    cta: "Start Landing Page",
    icon: <RocketIcon />,
  },
  {
    title: "Business Sites",
    price: "$2,500+",
    description: "Multi-page websites to build authority.",
    features: [
      "5–10 Pages",
      "CMS Integration",
      "GSAP Animations",
      "Analytics",
      "Speed Optimized",
    ],
    cta: "Build Business Site",
    icon: <LayersIcon />,
    popular: true,
  },
  {
    title: "Web Applications",
    price: "Custom Quote",
    description: "Complex platforms with custom logic.",
    features: [
      "Full-Stack",
      "Auth & Database",
      "API Integrations",
      "Scalable Infra",
      "Maintenance",
    ],
    cta: "Discuss Requirements",
    icon: <CodeIcon />,
  },
];

// ---------------- COMPONENT ----------------
const Pricing = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // SAFETY: ensure visibility
      gsap.set(cardsRef.current.filter(Boolean), { opacity: 1 });

      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Cards animation
      gsap.fromTo(
        cardsRef.current.filter(Boolean),
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
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
      id="pricing"
      ref={containerRef}
      className="relative bg-[#0a0a0a] text-white py-24 overflow-hidden"
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 ">
        {/* Heading */}
        <div ref={headingRef} className="mb-20 text-left max-w-3xl ">
          <div className="flex justify-start items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#D4654C]" />
            <span className="text-[#D4654C] uppercase tracking-[0.25em] text-xs flex items-center gap-2">
              Investment
            </span>
          </div>

          <h2 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Transparent Pricing.
            <br />
            <span className="text-[#D4654C]">Direct to Code.</span>
          </h2>

          <p className="text-white/60 text-lg  pr-6">
            No agency overhead. Your budget goes straight into design and code.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, i) => (
            <div
              key={i}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className={`relative bg-[#050505] border rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2
                ${
                  tier.popular
                    ? "border-[#D4654C]/40 shadow-xl"
                    : "border-white/10"
                }`}
            >
              {tier.popular && (
                <span className="absolute top-4 right-4 bg-[#D4654C] text-xs px-3 py-1 rounded-full">
                  Popular
                </span>
              )}

              <div className="mb-6 text-[#D4654C]">{tier.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{tier.title}</h3>
              <p className="text-white/60 mb-6">{tier.description}</p>

              <div className="mb-6">
                <p className="text-4xl font-bold">{tier.price}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((f, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm text-white/80"
                  >
                    <CheckIcon /> {f}
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => setIsBookingOpen(true)}
                className={`flex w-full h-[3rem] items-center justify-center gap-2 py-4 rounded-xl text-sm font-semibold transition
                  ${
                    tier.popular
                      ? "bg-[#D4654C] hover:bg-[#bf5a43]"
                      : "bg-white/5 hover:bg-[#D4654C]"
                  }`}
              >
                {tier.cta} <ArrowRightIcon />
              </Button>
            </div>
          ))}
        </div>
      </div>
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </section>
  );
};

export default Pricing;
