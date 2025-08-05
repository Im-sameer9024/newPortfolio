"use client";

import React from "react";
import AchievementCard from "./AchievementCard";
import { motion } from "framer-motion";

const certificates = [
  {
    id: 1,
    title: "JavaScript Fundamentals Certification",
    description: "Awarded by HackerRank for demonstrating core proficiency in JavaScript programming including variables, functions, loops, and basic data structures.",
    image: "/jsbasic.jpg",
    link: "https://www.hackerrank.com/certificates/a75602b9aaaf"
  },
  {
    id: 2,
    title: "Intermediate JavaScript Certification",
    description: "Recognized by HackerRank for advanced JavaScript skills including ES6 features, object-oriented programming, and functional programming concepts.",
    image: "/jsinter.jpg",
    link: "https://www.hackerrank.com/certificates/b855fec2a64c"
  },
  {
    id: 3,
    title: "React.js Proficiency Certification",
    description: "Certified by HackerRank for comprehensive understanding of React fundamentals including components, state management, and JSX syntax.",
    image: "/react.jpg",
    link: "https://www.hackerrank.com/certificates/d7493f5d28f3"
  },
];

const Achievements = () => {
  return (
    <div className="w-11/12 md:w-11/12 flex flex-col mt-8 md:mt-16 mx-auto h-auto">
      {/*--------- heading section ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="font-la-belleAurore text-sm md:text-lg">{"<h1>"}</p>
        <div className="w-fit space-y-1">
          <h3 className="font-righteous text-3xl md:text-5xl whitespace-nowrap">
            Achievements & Certifications
          </h3>
          <hr className="w-full border-[#EEA66B] border-2 md:border-4" />
        </div>
        <p className="font-la-belleAurore mt-2 md:mt-3 text-sm md:text-lg">
          {"</h1>"}
        </p>
      </motion.div>

      {/*------------ certificates grid ------------- */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        transition={{ staggerChildren: 0.2 }}
        className="w-full mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 justify-items-center"
      >
        {certificates.map((certificate) => (
          <AchievementCard key={certificate.id} certificateData={certificate} />
        ))}
      </motion.div>
    </div>
  );
};

export default Achievements;