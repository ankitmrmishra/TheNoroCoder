"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface TestimonialData {
  image: string;
  description: string;
  name: string;
  title: string;
}

const Testimonials: TestimonialData[] = [
  {
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "This platform has transformed the way I manage my business, providing exceptional insights and tools to grow.",
    name: "Mark Depp",
    title: "CEO, Tech Innovators",
  },
  {
    image:
      "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "The user experience is seamless, and the customer support is outstanding. Highly recommend it!",
    name: "Priya Williams",
    title: "Marketing Manager, Bright Future Co.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1669703777437-27602d656c27?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Thanks to this service, our team has been able to achieve our goals faster and more efficiently.",
    name: "Mitchell Vaugh",
    title: "Product Manager, Solutions Hub",
  },
];

const Testimonial: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const rotateTestimonial = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % Testimonials.length);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(rotateTestimonial, 5000); // Change every 5 seconds
    return () => clearInterval(intervalId);
  }, [rotateTestimonial]);

  return (
    <div id="testimonials" className="container mx-auto px-4 py-12">
      <h2
        className={`md:text-6xl text-4xl font-semibold ${poppins.className} text-center mb-12`}
      >
        What <span className="text-mainColour">People</span> are Saying
      </h2>

      {/* Thumbnails row */}
      <div className="flex justify-center space-x-4">
        {Testimonials.map((testimonial, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`relative w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
              index === activeIndex
                ? "ring-2 ring-mainColour"
                : "opacity-50 grayscale filter blur-[1px]"
            }`}
            aria-label={`View testimonial from ${testimonial.name}`}
          >
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              layout="fill"
              objectFit="cover"
            />
          </button>
        ))}
      </div>

      {/* Active testimonial */}
      <div className="max-w-2xl mx-auto text-center py-10">
        <p className="text-lg mb-4">{Testimonials[activeIndex].description}</p>
        <p className="font-semibold">
          {Testimonials[activeIndex].name},{" "}
          <span className="text-mainColour">
            {Testimonials[activeIndex].title}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
