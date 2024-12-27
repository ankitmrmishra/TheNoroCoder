"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Showcase from "../components/ShowCase";
import Provide from "../components/Provide";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import About from "../components/About";
import Testimonial from "../components/Testimonial";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Showcase />
      <Provide />
      <Testimonial />
      <Pricing />

      <About />
      <Footer />
    </div>
  );
}
