"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import InfiniteCarousel from "./InfiniteCarousel";

const Hero = () => {
  const router = useRouter();

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-16 sm:pb-12 overflow-hidden bg-background max-w-5xl mx-auto">
      
      {/* Light Grid Background for texture */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-grid-small-black/[0.04] [mask-image:linear-gradient(to_bottom,white,transparent)]" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 sm:mb-8"
        >
          <div className="px-4 sm:px-5 py-1.5 border border-primary bg-primary/10 rounded-full text-xs font-semibold tracking-wider uppercase text-muted-foreground shadow-sm">
            Taking 2 clients in May 2026
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl font-spaceGrotesk font-medium leading-[1.15] tracking-tight text-foreground px-4"
        >
          We build{" "}
          <span className="text-primary">
            high-performance
          </span>{" "}
          websites that convert.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 sm:mt-8 max-w-2xl text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed px-4"
        >
          Fast, custom-built, revenue-focused.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-12 sm:mb-16 w-full sm:w-auto px-4"
        >
          {/* Primary */}
          <button
            onClick={() => router.push("/contact")}
            className="w-full sm:w-auto group px-6 sm:px-7 py-3 rounded-full bg-primary text-white text-sm font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Start a Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </button>

          {/* Secondary */}
          <button
            onClick={() => router.push("/#showcase")}
            className="w-full sm:w-auto px-6 sm:px-7 py-3 rounded-full border border-border bg-background text-foreground text-sm font-medium hover:bg-muted transition-all duration-300 shadow-sm"
          >
            Explore our work
          </button>
        </motion.div>

        {/* Infinite Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-full px-0"
        >
          <InfiniteCarousel />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;