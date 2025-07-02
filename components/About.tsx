import React, { useState } from "react";
import MyImage from "../app/assets/MyImage.jpg";
import Image from "next/image";

import { Poppins } from "next/font/google";
import { Button } from "./ui/button";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const About = () => {
  const [readmore, setreadmore] = useState(false);

  const handleReadmore = () => setreadmore((prev) => !prev);
  return (
    <div
      id="about"
      className="flex flex-col justify-center align-middle items-center w-full"
    >
      <div className="text-center">
        <h2
          className={`md:text-6xl text-4xl font-semibold ${poppins.className}`}
        >
          Who is<span className="text-mainColour"> this?</span>
        </h2>
      </div>
      <div className="flex justify-center align-middle items-center max-w-6xl  p-10 gap-7 ">
        <div className="image md:flex hidden">
          <Image
            src={MyImage}
            width={500}
            height={500}
            alt="Ankit Mishra"
            className="w-full h-full rounded-2xl shadow-2xl grayscale hover:grayscale-0 duration-1000"
          />
        </div>
        <div className="aboutme max-w-2xl md:text-2xl text-lg flex flex-col justify-center align-middle items-start gap-4 font-semibold text-justify">
          <p className="">
            Hi, I&apos;m Ankit Mishra, a passionate Software Developer with
            expertise in crafting responsive, scalable, and user-friendly web
            applications. With a solid foundation in front-end and back-end
            technologies, I excel in solving complex coding challenges and
            delivering innovative solutions.
          </p>
          {readmore ? (
            <div>
              <p className="">
                My journey in tech is driven by a love for continuous learning,
                staying ahead with emerging technologies, and exploring creative
                problem-solving approaches. Whether it&apos;s building dynamic
                e-commerce platforms, blockchain-based solutions, or interactive
                job portals, I bring precision and creativity to every project.
              </p>
              <p className="">
                When I&apos;m not coding, you&apos;ll find me writing blogs,
                diving into books, or enjoying a game of cricket. Explore my
                work and connect with me as I continue to innovate and grow in
                the ever-evolving tech landscape.
              </p>
            </div>
          ) : null}

          <Button onClick={() => handleReadmore()}>
            {readmore ? "Not Interested" : "Stalk More"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
