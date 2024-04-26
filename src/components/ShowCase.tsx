import React from "react";
import { Highlight } from "./ui/highlight";
import ProjectCard from "./ui/ProjectCard";

function Showcase() {
  return (
    <div id="Showcase" className='bg-black text-white flex flex-col justify-center items-center p-8 text-center w-full'>
      <span className=' text-white inline-block text-transparent text-2xl bg-clip-text lg:text-4xl font-semibold '>
        Questionable Creations: <br />A{" "}
        <span className='font-bold bg-gradient-to-r text-transparent bg-clip-text from-[#DA0037] via-[#da0037] to-[#DA0037]'>
          Showcase
        </span>
      </span>
      <p className='lg:w-[40rem] text-sm mt-5 text-white/40'>
        
        This is a glimpse into the digital abominations...err...masterpieces
        unleashed so far. Don&apos;t judge too harshly - amateur hour is a
        process!
      </p>
      <div className='showcaselist'>
        <ProjectCard/>
      </div>
    </div>
  );
}

export default Showcase;
