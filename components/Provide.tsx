"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  ShoppingCart,
  Layers,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import BookingModal from "./ui/BookingModel";

// --- Data ---
const services = [
  {
    id: "01",
    title: "Brand Websites",
    icon: <Code2 className="w-6 h-6" />,
    tagline: "Your best salesperson or your biggest liability.",
    description:
      "Custom-built. Fast. Converts. No WordPress.",
    metrics: [
      { label: "Conversion", value: "25-40%", icon: <TrendingUp className="w-4 h-4" /> },
      { label: "Speed", value: "2x", icon: <Zap className="w-4 h-4" /> },
    ],
    highlight: "Premium positioning. Higher LTV.",
    gradient: "from-primary/10 via-primary/5 to-transparent",
  },
  {
    id: "02",
    title: "E-Commerce",
    icon: <ShoppingCart className="w-6 h-6" />,
    tagline: "For brands doing $5M+ annually.",
    description:
      "Custom Shopify and headless builds.",
    metrics: [
      { label: "Cart Recovery", value: "+18%", icon: <TrendingUp className="w-4 h-4" /> },
      { label: "Mobile Conv.", value: "85%", icon: <Sparkles className="w-4 h-4" /> },
    ],
    highlight: "85% mobile conversion increase in 90 days.",
    gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
  },
  {
    id: "03",
    title: "Web Apps",
    icon: <Layers className="w-6 h-6" />,
    tagline: "Full-stack products users love.",
    description:
      "SaaS dashboards, internal tools, platforms. Next.js, NestJS, whatever works.",
    metrics: [
      { label: "Performance", value: "90+", icon: <Zap className="w-4 h-4" /> },
      { label: "User Retention", value: "+45%", icon: <TrendingUp className="w-4 h-4" /> },
    ],
    highlight: "GSAP, WebGL, Framer Motion when needed.",
    gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
  },
];

export default function ServicesRedesign() {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

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
      id="Services"
      className="relative bg-background text-foreground py-20 sm:py-28 overflow-hidden"
    >
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 z-0 opacity-[0.015] pointer-events-none mix-blend-overlay">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
      </div>

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 px-6 sm:px-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mb-16 sm:mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-primary"></span>
            <span className="text-primary uppercase tracking-[0.2em] text-sm font-bold">
              Services
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-spaceGrotesk font-medium leading-[1.15] tracking-tight mb-6">
            What We Build
            <span className="text-primary">.</span>
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Digital infrastructure that drives revenue.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 mb-8">
          {/* Card 1 - Large Featured */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onHoverStart={() => setHoveredCard(services[0].id)}
            onHoverEnd={() => setHoveredCard(null)}
            className="lg:col-span-7 group relative bg-card border border-border p-8 sm:p-10 lg:p-12 overflow-hidden hover:shadow-xl transition-all duration-500 hover:border-primary/30"
            style={{ borderRadius: '8px' }}
          >
            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${services[0].gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />

            {/* Animated Border Glow */}
            <motion.div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(227, 23, 10, 0.1), transparent)",
                backgroundSize: "200% 100%",
              }}
              animate={
                hoveredCard === services[0].id
                  ? { backgroundPosition: ["0% 0%", "200% 0%"] }
                  : {}
              }
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    {services[0].icon}
                  </div>
                  <span className="text-sm font-mono text-muted-foreground">
                    /{services[0].id}
                  </span>
                </div>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-spaceGrotesk font-medium text-foreground mb-4 leading-tight">
                {services[0].title}
              </h3>

              <p className="text-base sm:text-lg text-primary font-medium mb-6 italic">
                &quot;{services[0].tagline}&quot;
              </p>

              <p className="text-foreground/80 leading-relaxed mb-8 text-sm sm:text-base">
                {services[0].description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {services[0].metrics.map((metric, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="p-4 rounded-xl bg-muted/50 border border-border backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-2 mb-2 text-primary">
                      {metric.icon}
                      <span className="text-2xl font-bold">{metric.value}</span>
                    </div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {metric.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Highlight */}
              <div className="pt-6 border-t border-border">
                <p className="text-sm text-foreground/70 font-medium">
                  {services[0].highlight}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Medium */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onHoverStart={() => setHoveredCard(services[1].id)}
            onHoverEnd={() => setHoveredCard(null)}
            className="lg:col-span-5 group relative bg-card border border-border p-8 sm:p-10 overflow-hidden hover:shadow-xl transition-all duration-500 hover:border-blue-500/30"
            style={{ borderRadius: '8px' }}
          >
            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${services[1].gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />

            <div className="relative z-10 h-full flex flex-col">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {services[1].icon}
                </div>
                <span className="text-sm font-mono text-muted-foreground">
                  /{services[1].id}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-spaceGrotesk font-medium text-foreground mb-3 leading-tight">
                {services[1].title}
              </h3>

              <p className="text-sm text-blue-600 font-medium mb-4 italic">
                &quot;{services[1].tagline}&quot;
              </p>

              <p className="text-foreground/80 leading-relaxed mb-6 text-sm flex-grow">
                {services[1].description}
              </p>

              {/* Metrics */}
              <div className="space-y-3 mb-6">
                {services[1].metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-xl bg-muted/50 border border-border"
                  >
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {metric.label}
                    </span>
                    <div className="flex items-center gap-2 text-blue-600">
                      {metric.icon}
                      <span className="text-xl font-bold">{metric.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Highlight */}
              <div className="pt-4 border-t border-border mt-auto">
                <p className="text-xs text-foreground/70 font-medium">
                  {services[1].highlight}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Wide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onHoverStart={() => setHoveredCard(services[2].id)}
            onHoverEnd={() => setHoveredCard(null)}
            className="lg:col-span-12 group relative bg-card border border-border p-8 sm:p-10 lg:p-12 overflow-hidden hover:shadow-xl transition-all duration-500 hover:border-purple-500/30"
            style={{ borderRadius: '8px' }}
          >
            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${services[2].gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />

            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Column */}
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        {services[2].icon}
                      </div>
                      <span className="text-sm font-mono text-muted-foreground">
                        /{services[2].id}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-spaceGrotesk font-medium text-foreground mb-4 leading-tight">
                    {services[2].title}
                  </h3>

                  <p className="text-base text-purple-600 font-medium mb-6 italic">
                    &quot;{services[2].tagline}&quot;
                  </p>

                  <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
                    {services[2].description}
                  </p>
                </div>

                {/* Right Column */}
                <div className="flex flex-col justify-between">
                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {services[2].metrics.map((metric, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="p-4 rounded-xl bg-muted/50 border border-border backdrop-blur-sm"
                      >
                        <div className="flex items-center gap-2 mb-2 text-purple-600">
                          {metric.icon}
                          <span className="text-2xl font-bold">{metric.value}</span>
                        </div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">
                          {metric.label}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Highlight */}
                  <div className="pt-6 border-t border-border">
                    <p className="text-sm text-foreground/70 font-medium">
                      {services[2].highlight}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Card - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-12 group relative bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border-2 border-primary/20 p-12 sm:p-16 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:border-primary/40"
            style={{ borderRadius: '8px' }}
          >
            {/* Animated Background Pattern */}
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(227, 23, 10, 0.3) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.8, delay: 0.5 }}
                className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300"
              >
                <ArrowRight className="w-10 h-10 text-primary-foreground group-hover:translate-x-1 transition-transform" />
              </motion.div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-spaceGrotesk font-medium text-foreground mb-4">
                Ready to Start?
              </h3>

              <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Move metrics, not just pixels.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsBookingOpen(true)}
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Book a Discovery Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <p className="mt-6 text-sm text-muted-foreground">
                Taking 2 clients in May 2026
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </section>
  );
}
