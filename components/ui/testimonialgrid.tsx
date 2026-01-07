import React from "react";
import { Star } from "lucide-react";

export default function TestimonialGrid() {
  const testimonials = [
    {
      name: "Vishant Thakur",
      company: "Winnies Resort",
      text: "Working with this team has been an absolute game changer for our resort. Their attention to detail and commitment to excellence is unmatched.",
      highlight: "game changer",
    },
    {
      name: "Avinash Rai",
      company: "Petage",
      text: "The service quality exceeded all our expectations. Our pet care business has grown tremendously thanks to their innovative solutions.",
      highlight: "exceeded all our expectations",
    },
    {
      name: "Raunak Singh",
      company: "Kheloyaha",
      text: "From concept to execution, everything was handled professionally. Our sports platform has never been more engaging for users.",
      highlight: "handled professionally",
    },
    {
      name: "Arif Khan",
      company: "Arif Tour and Travels",
      text: "Outstanding results that transformed our travel business. The dedication and expertise shown throughout the project was remarkable.",
      highlight: "transformed our travel business",
    },
  ];

  const highlightText = (text: string, highlight: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className="text-blue-600 font-semibold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className=" flex items-center justify-center">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-2 gap-0">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className=" flex flex-col justify-between border border-gray-200"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-blue-600 text-blue-600"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  "{highlightText(testimonial.text, testimonial.highlight)}"
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-lg">
                  {testimonial.name}
                </p>
                <p className="text-blue-600 font-medium">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
