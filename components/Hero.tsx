"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ArrowRight, X, Sparkles } from "lucide-react";
import Cal, { getCalApi } from "@calcom/embed-react";
interface MousePosition {
  x: number;
  y: number;
}

interface FloatingElementProps {
  delay?: number;
  duration?: number;
  children: React.ReactNode;
  className?: string;
}

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
}

interface ButtonPosition {
  x: number;
  y: number;
}

const Hero: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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

  const FloatingElement: React.FC<FloatingElementProps> = ({
    delay = 0,
    duration = 4,
    children,
    className = "",
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: [0.3, 0.6, 0.3],
        y: [0, -20, 0],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );

  const MagneticButton: React.FC<MagneticButtonProps> = ({
    children,
    onClick,
    className = "",
    variant = "primary",
  }) => {
    const [position, setPosition] = useState<ButtonPosition>({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>): void => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setPosition({ x: x * 0.3, y: y * 0.3 });
    };

    const handleMouseLeave = (): void => {
      setPosition({ x: 0, y: 0 });
      setIsHovered(false);
    };

    const baseStyles =
      variant === "primary"
        ? "bg-black text-white border-black hover:bg-white hover:text-black text-center"
        : "bg-transparent text-black border-black hover:bg-black hover:text-white";

    return (
      <motion.button
        className={`relative overflow-hidden border-2 px-8 sm:px-12 py-4 sm:py-5 font-light tracking-wider transition-colors duration-300 group flex justify-center items-center align-middle ${baseStyles} ${className}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          animate={isHovered ? { x: "100%" } : { x: "-100%" }}
          transition={{ duration: 0.6 }}
        />
        <span className="relative z-10 flex items-center gap-3 text-base sm:text-lg">
          {children}
          <motion.span
            animate={isHovered ? { x: 5 } : { x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.span>
        </span>
      </motion.button>
    );
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden ">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] sm:bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_80%_50%_at_100%_10%,#000_100%,transparent_110%)]" />

      {/* Cursor Follower */}
      <motion.div
        className="fixed w-6 h-6 rounded-full border-2 border-black/30 pointer-events-none z-50 hidden lg:block"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Main Content */}
      <motion.div className="relative z-10 flex flex-col xl:items-start lg:items-center md:items-center justify-center min-h-screen px-6 sm:px-12 lg:px-24 xl:px-32 py-20 sm:py-24 ">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 sm:mb-12 "
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 border border-black/20 bg-white/50 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm font-light tracking-widest uppercase">
              Currently Booking Q1 2026
            </span>
          </div>
        </motion.div>

        {/* Main Heading with Stagger Animation */}
        <div className=" min-w-full mb-8 sm:mb-16">
          <motion.h1 className="text-5xl    sm:text-7xl md:text-8xl lg:text-8xl font-light leading-[0.9] tracking-tight mb-4 sm:mb-6  md:text-center xl:text-start">
            {["Your Brand Deserves"].map((word: string, i: number) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + i * 0.1,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className="block font-bold"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="block italic text-transparent bg-clip-text bg-gradient-to-r from-black via-zinc-600 to-black"
            >
              More Than
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="block font-bold"
            >
              a Template.
            </motion.span>
          </motion.h1>
        </div>

        {/* Subheading with Parallax */}
        <motion.div
          className=" mb-12 sm:mb-20 ml-0 sm:ml-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light leading-relaxed lg:text-center xl:text-right text-start text-zinc-700 md:text-center ">
            We design and build digital experiences that feel{" "}
            <span className="italic">impossible</span>, until they&apos;re live.
            <br />
            <span className="text-base sm:text-lg md:text-xl mt-2 sm:mt-4 block">
              For companies ready to lead, not follow.
            </span>
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto text-center"
        >
          <MagneticButton className="" onClick={() => setIsBookingOpen(true)}>
            See Our Work
          </MagneticButton>
          <MagneticButton
            onClick={() => setIsBookingOpen(true)}
            variant="secondary"
          >
            Start A Project
          </MagneticButton>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 sm:bottom-12 left-3 sm:left-12 lg:left-24 xl:left-10 hidden sm:flex flex-col items-center gap-3"
        >
          <span className="text-xs tracking-widest uppercase rotate-180 [writing-mode:vertical-lr]">
            Scroll Down
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-[1px] h-16 bg-black"
          />
        </motion.div>
      </motion.div>

      {/* Booking Modal */}
      {isBookingOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={(e) => {
            // Close modal when clicking backdrop
            if (e.target === e.currentTarget) {
              setIsBookingOpen(false);
            }
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative bg-white rounded-lg shadow-2xl w-full max-w-4xl h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsBookingOpen(false)}
              className="absolute top-4 right-4 z-[10000] bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Close booking modal"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            {/* Cal.com Embed */}
            <div className="w-full h-full relative z-[9999]">
              <Cal
                namespace="quick-chat"
                calLink="worknoro/quick-chat"
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "auto",
                  position: "relative",
                  zIndex: "9999",
                }}
                config={{
                  layout: "month_view",
                  theme: "light",
                }}
              />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Hero;
