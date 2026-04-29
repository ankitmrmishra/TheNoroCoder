"use client";

import React from "react";
import { motion } from "framer-motion";

const SocialProofStrip = () => {
  const brands = ["KheloYaha", "DCEX", "JobKonnect", "Kalanamak", "LawGical Insights"];

  return (
    <div className="w-full bg-[#050505] border-y border-white/5 py-6 overflow-hidden relative z-10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
        <span className="text-white/40 text-sm tracking-wider uppercase whitespace-nowrap">
          Trusted by founders building &rarr;
        </span>
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
          {brands.map((brand, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="text-white/60 font-semibold text-lg sm:text-xl tracking-wide"
            >
              {brand}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialProofStrip;
