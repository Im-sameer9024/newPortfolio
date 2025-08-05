"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "HerbyGo - Herb & Supplement Recommendation Platform",
    description:
      "HerbyGo is an intelligent web application designed to provide personalized herbal and supplement recommendations based on user health needs.",
    technologies: [
      "Next.js",
      "React",
      "ShadCN UI",
      "MongoDB",
      "Tailwind CSS",
      "Framer Motion",
      "RESTful",
      "NextAuth",
      "JWT",
      "NPM",
    ],
    link: "https://herbygo.com/",
    image: "/Herbygo.png",
  },
  {
    id: 2,
    title: "SilverBulls - AI-Powered Trading Insights Platform",
    description:
      "SilverBulls is a cutting-edge financial analytics platform that leverages AI to provide real-time market predictions, trading signals, and portfolio optimization for stocks, crypto, and commodities.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "RESTful",
      "NextAuth",
      "JWT",
      "PostgreSQL",
      "RESTful APIs",
      "Vercel Hosting",
    ],
    link: "https://www.silverbulls.io/",
    image: "/Silverbulls.png",
  },
];

const Project = () => {
  return (
    <section id="projects" className="w-11/12 md:w-11/12 mx-auto pt-8 md:mt-16">
      {/* Heading section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 mb-12"
      >
        <p className="font-la-belleAurore text-sm md:text-lg">{"<h1>"}</p>
        <div className="w-fit space-y-1">
          <h2 className="font-righteous text-3xl md:text-4xl lg:text-5xl">
            Projects
          </h2>
          <hr className="w-full border-[#EEA66B] border-2 md:border-4" />
        </div>
        <p className="font-la-belleAurore mt-2 md:mt-3 text-sm md:text-lg">
          {"</h1>"}
        </p>
      </motion.div>

      {/* Projects grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        transition={{ staggerChildren: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-10 flex justify-center items-center"
      >
        <p>
          <span className="font-righteous text-xl">Note: </span>
          Visit my{" "}
          <Link
            className="font-righteous hover:underline"
            href={"https://github.com/Im-sameer9024"}
          >
            Github
          </Link>{" "}
          profile for more projects.
        </p>
      </motion.div>
    </section>
  );
};

export default Project;