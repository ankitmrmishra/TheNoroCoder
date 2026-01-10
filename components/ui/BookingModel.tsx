"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Cal from "@calcom/embed-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className=" fixed inset-0 z-[9999] flex items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative bg-black border border-white/10 rounded-2xl  w-full max-w-4xl h-[80vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-0 right-0 z-[10000] bg-black/80  hover:bg-black text-white rounded-full p-2 transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Cal.com Embed */}
        <div className="  h-full relative z-[9999] bg-black ">
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
  );
};

export default BookingModal;
