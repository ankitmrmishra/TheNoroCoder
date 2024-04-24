"use client"
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/highlight";
import Navbar from "../components/Navbar"
import SocialMedia from "@/components/ui/SocialMedia";
import About from "@/components/About";
import Showcase from "@/components/About";
export default function Home() {
  const socialMediaLinks = {
    twitter: "https://twitter.com/AnkitMishraexe",
    linkedin: "https://www.linkedin.com/in/ankitmishra1106",
    github: "https://github.com/ankitmrmishra",
  };
  return (
    <div className=''>
      <Navbar />
      <div className=' h-screen w-full dark:bg-black bg-black  dark:bg-grid-white/[0.2] bg-grid-white/5 relative flex items-center  lg:pt-72 pt-40 lg:items-center flex-col justify-start'>
        {/* Radial gradient for the container to give a faded look */}

        <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
        <p className='lg:text-7xl text-3xl p-5 font-extrabold relative z-20 bg-clip-text text-transparent bg-gradient-to-r from-white/95 via-white/55 to-white  text-center'>
          A Noob Coder Who Thinks he is Pro <br />
          <Highlight className='bg-gradient-to-r from-white/95 via-white/55 to-white inline-block text-transparent text-3xl bg-clip-text lg:text-7xl  '>
            THE NORO-CODER
          </Highlight>
          <br />
        </p>
        <p className='text-xs text-[#DA0037] font-bold lg:text-lg p-4  '>
          Confidently coding my way into a world of bugs and broken layouts, but
          hey, at least it looks good(ish).
        </p>
        <div className=''>
          <SocialMedia links={socialMediaLinks} />
        </div>
      </div>
      <Showcase />
    </div>
  );
}
