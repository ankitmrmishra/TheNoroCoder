"use client";

import React, { useState } from "react";
import { Ghost } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "About Me", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQs", href: "#faqs" },
  ];

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 },
    },
  };

  return (
    <nav className="relative h-20 w-full flex justify-between items-center md:px-4 px-6 lg:px-16 md:py-4 py-6 lg:py-8">
      <div className="Logo flex justify-center items-center">
        <Ghost className="text-mainColour size-8 sm:size-10" />
        <span className="text-xl sm:text-2xl font-firacode ml-2">
          Ankit Mishra
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex justify-between items-center gap-6 rounded-full border-mainColour border px-8 py-3">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer hover:text-mainColour transition-colors"
          >
            <Link
              href={item.href}
              className="text-gray-600 hover:text-mainColour transition-colors duration-200"
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>

      <div className="hidden lg:block">
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#1A2B3B]/20 focus:ring-offset-2 focus:ring-offset-[#E8E6E3]">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1A2B3B_0%,#FF4D4D_50%,#1A2B3B_100%)]" />
          <span className="flex h-full w-full items-center justify-center rounded-full bg-[#E8E6E3] px-6 py-1 text-lg font-medium text-[#1A2B3B] backdrop-blur-3xl gap-3">
            <Link href="https://wa.me/918437153991?text=hey%20ANKIT%20I%20want%20to%20work%20on%20a%20project%20with%20you">
              Get in Touch
            </Link>
          </span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <motion.div
        className="lg:hidden z-50 cursor-pointer"
        onClick={toggleMenu}
        animate={isOpen ? "open" : "closed"}
      >
        <motion.div
          className="w-6 h-0.5 bg-mainColour mb-1.5"
          variants={{
            open: { rotate: 45, y: 6 },
            closed: { rotate: 0, y: 0 },
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="w-6 h-0.5 bg-mainColour mb-1.5"
          variants={{
            open: { opacity: 0 },
            closed: { opacity: 1 },
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="w-6 h-0.5 bg-mainColour"
          variants={{
            open: { rotate: -45, y: -6 },
            closed: { rotate: 0, y: 0 },
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="text-2xl mb-6 cursor-pointer hover:text-mainColour transition-colors"
                custom={index}
              >
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-mainColour transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              custom={menuItems.length}
            >
              <Button
                variant={"outline"}
                className="border-mainColour rounded-full px-6 py-2 text-lg text-mainColour bg-transparent hover:bg-mainColour hover:text-white transition-colors mt-4"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
