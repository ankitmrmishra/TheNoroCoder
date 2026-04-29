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
const CheckIcon = () => (
  <svg
    className="w-4 h-4 text-primary"
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
      className="relative bg-background text-foreground py-24 overflow-hidden"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12">
        {/* Heading */}
        <div ref={headingRef} className="mb-16 text-start max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-primary"></span>
            <span className="text-primary uppercase tracking-[0.2em] text-sm font-bold">
              Pricing
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-spaceGrotesk font-medium leading-[1.15] tracking-tight mb-6">
            Straightforward, one-time pricing.
          </h2>
          <p className="text-lg text-muted-foreground">
            No subscriptions. No hidden fees. Just honest pricing.
          </p>
        </div>

        {/* Single Page Website - $895 */}
        <div 
          ref={(el) => { cardsRef.current[0] = el; }}
          className="bg-card border border-border mb-6" 
          style={{ borderRadius: '8px' }}
        >
          {/* Header */}
          <div className="p-8 border-b border-border">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">Single Page Website</h3>
                <p className="text-sm text-muted-foreground max-w-md">
                  Perfect for startups and small businesses that need a converting landing page.
                </p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">$895</span>
                <span className="text-sm text-muted-foreground ml-2">one-time</span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="p-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              <li className="flex items-start gap-3 text-sm">
                <CheckIcon />
                <span>Single Page Landing</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <CheckIcon />
                <span>Design & Development</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <CheckIcon />
                <span>Next.js / React / Tailwind</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <CheckIcon />
                <span>Limited Revisions</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <CheckIcon />
                <span>24-hour support response</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <CheckIcon />
                <span>Private communication</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <CheckIcon />
                <span>Negotiable delivery time</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <CheckIcon />
                <span>CMS integration</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <CheckIcon />
                <span>Hosting & Deployment</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <CheckIcon />
                <span>SEO Optimization</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="p-6 border-t border-border">
            <Button
              onClick={() => setIsBookingOpen(true)}
              className="w-full sm:w-auto px-8 h-12 bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-bold uppercase tracking-wider"
              style={{ borderRadius: '6px' }}
            >
              Get Single Page
            </Button>
          </div>
        </div>

        {/* Multi Page Website - $2,099 */}
        <div 
          ref={(el) => { cardsRef.current[1] = el; }}
          className="bg-card border-2 border-primary/30 mb-6 relative" 
          style={{ borderRadius: '8px' }}
        >
          {/* Popular Badge */}
          <div className="absolute -top-3 left-8">
            <span className="bg-primary text-primary-foreground px-4 py-1 text-xs font-bold uppercase tracking-wider">
              Popular
            </span>
          </div>

          {/* Header */}
          <div className="p-8 border-b border-border">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">Multi Page Website</h3>
                <p className="text-sm text-muted-foreground max-w-md">
                  For businesses that need authority, scale, and multiple pages.
                </p>
              </div>
              <div className="flex flex-col items-start sm:items-end">
                <span className="text-xs text-muted-foreground mb-1">Starting at</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">$2,099</span>
                  <span className="text-sm text-muted-foreground ml-2">one-time</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="p-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              <li className="flex items-start gap-3 text-sm">
                <CheckIcon />
                <span>Multi-Page Website</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <CheckIcon />
                <span>Design & Development</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <CheckIcon />
                <span>Next.js / React / Tailwind</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <CheckIcon />
                <span>Unlimited Revisions</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <CheckIcon />
                <span>24-hour support response</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <CheckIcon />
                <span>Private communication</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <CheckIcon />
                <span>Negotiable delivery time</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <CheckIcon />
                <span>CMS integration</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <CheckIcon />
                <span>Hosting & Deployment</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <CheckIcon />
                <span>SEO Optimization</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="p-6 border-t border-border">
            <Button
              onClick={() => setIsBookingOpen(true)}
              className="w-full sm:w-auto px-8 h-12 bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-bold uppercase tracking-wider"
              style={{ borderRadius: '6px' }}
            >
              Get Multi Page
            </Button>
          </div>
        </div>

        {/* Custom Web Apps Section */}
        <div 
          ref={(el) => { cardsRef.current[2] = el; }}
          className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border border-primary/20 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6" 
          style={{ borderRadius: '8px' }}
        >
          <div>
            <h3 className="text-xl font-bold mb-2">Custom Web Apps</h3>
            <p className="text-sm text-muted-foreground max-w-xl">
              SaaS platforms, internal tools, and bespoke applications. Tailored for your workflows.
            </p>
          </div>
          <Button
            onClick={() => setIsBookingOpen(true)}
            className="shrink-0 px-8 py-3 bg-foreground text-background hover:bg-foreground/90 text-sm font-bold uppercase tracking-wider"
            style={{ borderRadius: '6px' }}
          >
            Talk to us
          </Button>
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
