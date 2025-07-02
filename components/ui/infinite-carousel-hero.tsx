"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import Project1 from "../../public/projects/Desktop.jpg";
import Project2 from "../../public/projects/Cofounds hero iteration 1.png";
import Project3 from "../../public/projects/Header Image@2x.png";
import Project4 from "../../public/projects/Hero Section.png";
import Project5 from "../../public/projects/Hero itr 5.png";
import Project6 from "../../public/projects/Landing Page.png";
import Project7 from "../../public/projects/MacBook Air - 1 (4).png";
import Project8 from "../../public/projects/MacBook Air - 1 (7).png";
import Project9 from "../../public/projects/MacBook Pro 14_ - 1.png";
import Project10 from "../../public/projects/Wireframe - 1.png";
import Project11 from "../../public/projects/ai learning.png";

interface Project {
  id: string;

  image: StaticImageData;
}

interface InfiniteProjectsShowcaseProps {
  projects?: Project[];
  speed?: number;
  className?: string;
}

const defaultProjects: Project[] = [
  {
    id: "1",

    image: Project1,
  },
  {
    id: "2",

    image: Project2,
  },
  {
    id: "3",

    image: Project3,
  },
  {
    id: "4",

    image: Project4,
  },
  {
    id: "5",

    image: Project5,
  },
  {
    id: "6",

    image: Project6,
  },
  {
    id: "7",

    image: Project7,
  },
  {
    id: "8",

    image: Project8,
  },
  {
    id: "9",

    image: Project9,
  },
  {
    id: "10",

    image: Project10,
  },
  {
    id: "11",

    image: Project11,
  },
];

export default function InfiniteProjectsShowcase({
  projects = defaultProjects,
  speed = 50,
  className = "",
}: InfiniteProjectsShowcaseProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Duplicate projects for seamless infinite scroll
  const duplicatedProjects = [
    ...projects,
    ...projects,
    ...projects,
    ...projects,
  ];

  // Split projects into two rows
  const firstRowProjects = duplicatedProjects.filter(
    (_, index) => index % 2 === 0
  );
  const secondRowProjects = duplicatedProjects.filter(
    (_, index) => index % 2 === 1
  );

  const ProjectCard = ({
    project,
    index,
  }: {
    project: Project;
    index: number;
  }) => (
    <motion.div
      key={`${project.id}-${index}`}
      className="relative flex-shrink-0"
    >
      <div className="relative w-[25rem] h-[15rem] mx-4 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={""}
          fill
          className="object-center "
          sizes="(max-width: 768px) 280px, 320px"
          priority={index < 4}
        />

        {/* Static overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Static content */}
      </div>
    </motion.div>
  );

  if (!isClient) {
    return (
      <section
        className={`py-16 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${className}`}
      >
        <div className="space-y-8">
          <div className="flex animate-pulse">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="w-80 h-48 mx-4 bg-gray-200 dark:bg-gray-700 rounded-2xl flex-shrink-0"
              />
            ))}
          </div>
          <div className="flex animate-pulse">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="w-80 h-48 mx-4 bg-gray-200 dark:bg-gray-700 rounded-2xl flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`py-16 overflow-hidden  ${className} will-change-transform pointer-events-none`}
      aria-label="Project showcase"
    >
      <div className="space-y-8">
        {/* First Row - Left to Right */}
        <div className="relative">
          <motion.div
            className="flex will-change-transform"
            animate={{
              x: [0, (-100 * firstRowProjects.length) / 3],
              translateZ: 0,
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: (firstRowProjects.length * speed) / 50,
                ease: "linear",
              },
            }}
            style={{
              width: `${firstRowProjects.length * 352}px`,
            }}
          >
            {firstRowProjects.map((project, index) => (
              <ProjectCard
                key={`first-${project.id}-${index}`}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        </div>

        {/* Second Row - Right to Left */}
        <div className="relative">
          <motion.div
            className="flex will-change-transform"
            animate={{
              x: [(-100 * secondRowProjects.length) / 3, 0],
              translateZ: 0,
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: (secondRowProjects.length * speed) / 50,
                ease: "linear",
              },
            }}
            style={{
              width: `${secondRowProjects.length * 352}px`,
            }}
          >
            {secondRowProjects.map((project, index) => (
              <ProjectCard
                key={`second-${project.id}-${index}`}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Gradient overlays for seamless edges */}
      {/* <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-500 to-transparent dark:from-gray-100 pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-900 pointer-events-none z-10" /> */}
    </section>
  );
}
