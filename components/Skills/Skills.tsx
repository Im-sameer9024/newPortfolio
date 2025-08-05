"use client";

import Link from "next/link";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MySkills = [
  { name: "HTML", level: 95, best: true },
  { name: "CSS", level: 90, best: true },
  { name: "JavaScript", level: 85, best: true },
  { name: "React", level: 85, best: true },
  { name: "Next.js", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Express", level: 70 },
  { name: "MongoDB", level: 70 },
  { name: "TypeScript", level: 75 },
  { name: "Python", level: 65 },
  { name: "Shadcn", level: 80 },
  { name: "Tailwind", level: 90, best: true },
  { name: "MUI", level: 85 },
  { name: "ES6", level: 80 },
  { name: "PostgreSQL", level: 70 },
  { name: "Bootstrap", level: 85 },
  { name: "Git", level: 80 },
  { name: "GitHub", level: 85 }
];

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yLeft = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const yRight = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      ref={containerRef}
      className="w-11/12 md:w-11/12 flex flex-col lg:flex-row lg:justify-between items-center mx-auto  gap-8 lg:gap-0 mt-16 lg:mt-0  min-h-[90vh]"
    >
      {/* Left side text section */}
      <motion.div 
        style={{ y: yLeft }}
        className="w-full lg:w-1/2"
      >
        {/* heading section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <p className="font-la-belleAurore text-sm md:text-lg">{"<h1>"}</p>
          <div className="w-fit space-y-1">
            <h3 className="font-righteous text-3xl md:text-4xl lg:text-5xl">
              Skills & Experience
            </h3>
            <hr className="w-full border-[#EEA66B] border-2 md:border-4" />
          </div>
          <p className="font-la-belleAurore mt-2 md:mt-3 text-sm md:text-lg">{"</h1>"}</p>
        </motion.div>

        {/* paragraph section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 md:mt-6 space-y-2"
        >
          <p className="font-la-belleAurore text-sm md:text-lg">{"<aside>"}</p>
          <p className="text-sm md:text-base leading-6 md:leading-7">
            Expert in Front-End development including technologies like{" "}
            <b className="font-righteous">
              HTML5, CSS3, Tailwind CSS, MUI Javascript, React, Shadcn Ui
              Bootstrap, Sass, Git, GitHub, Nodejs,etc.
            </b>
          </p>
          <p className="font-la-belleAurore mt-2 md:mt-3 text-sm md:text-lg">{"</aside>"}</p>
          <p className="text-sm md:text-base leading-6 md:leading-7">
            Experienced with all stages of the development cycle for dynamic web
            projects.
          </p>
          <p className="text-sm md:text-base leading-6 md:leading-7">
            Visit my <Link className="font-semibold hover:underline font-righteous" href={"https://www.linkedin.com/in/mohammad-sameer-a594b3285/"}>LinkedIn</Link> profile for more details at this link.
          </p>
        </motion.div>
      </motion.div>

      {/* Right side skills section */}
      <motion.div 
        style={{ y: yRight }}
        className="w-full lg:w-[40%]"
      >
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="grid grid-cols-3 md:grid-cols-4 gap-4"
        >
          {MySkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                borderColor: "#EEA66B"
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative p-3 border border-gray-300 rounded-lg text-center cursor-pointer"
            >
              <div className="font-medium text-sm">{skill.name}</div>
              {/* Skill level indicator */}
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-[#EEA66B] rounded-b-lg"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.05 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;