"use client"
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/highlight";
import Navbar from "../components/Navbar"
export default function Home() {
  return (
    <div className=''>
      <Navbar />
      <div className=' h-screen w-full dark:bg-black bg-black  dark:bg-grid-white/[0.2] bg-grid-white/5 relative flex items-baseline pt-40 lg:pt-0 lg:items-center justify-center'>
        {/* Radial gradient for the container to give a faded look */}

        <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
        <p className='lg:text-7xl text-4xl p-5 font-extrabold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-orange-700  text-center'>
          A Noob Coder Who Thinks he is Pro <br />
          <Highlight className='bg-gradient-to-r from-orange-600 via-orange-500 to-white inline-block text-transparent bg-clip-text '>
            THE NORO-CODER
          </Highlight>
        </p>
      </div>
    </div>
  );
}
