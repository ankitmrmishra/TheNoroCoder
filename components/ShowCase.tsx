import React from "react";

import ProjectCard from "./ui/ProjectCard";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],

  weight: ["600"],
});

function Showcase() {
  return (
    <div
      id="projects"
      className="  flex justify-center align-middle items-center "
    >
      <div
        id="Showcase"
        className=" flex flex-col justify-center items-center  text-center lg:min-w-[50rem] lg:max-w-[90rem] w-screen p-5 min-h-screen  rounded-3xl bg-white  "
      >
        <div
          className={` md:text-6xl text-4xl  font-semibold ${poppins.className}   flex gap-2 justify-center align-middle items-center`}
        >
          My <span className="text-mainColour">Creations</span>
        </div>
        <div className="this_is_showcase_section mt-3 ">
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}

export default Showcase;
