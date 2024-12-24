"use client";

import React, { useState } from "react";
import { Ghost } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = ["About Me", "Projects", "Testimonials", "FAQs"];

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
            {item}
          </div>
        ))}
      </div>

      <div className="hidden lg:block">
        <Button
          variant={"outline"}
          className="border-mainColour rounded-full px-6 py-2 text-lg text-mainColour bg-transparent hover:bg-mainColour hover:text-white transition-colors"
        >
          Get In Touch
        </Button>
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
                {item}
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
