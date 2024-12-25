import React from "react";
import { Highlight } from "./ui/highlight";
import ProjectCard from "./ui/ProjectCard";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],

  weight: ["600"],
});

function Showcase() {
  return (
    <div className="md:px-5 px-1 py-5">
      <div
        id="Showcase"
        className=" flex flex-col justify-center items-center md:p-8 p-2 text-center w-full min-h-screen bg-mainColour rounded-3xl "
      >
        <div
          className={` md:text-6xl text-4xl  font-semibold ${poppins.className}  flex gap-2 justify-center align-middle items-center`}
        >
          My <span className="text-white">Creations</span>
        </div>
        <div className="this_is_showcase_section">
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}

export default Showcase;
