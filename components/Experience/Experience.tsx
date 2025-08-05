"use client";

import React from "react";
import WorkExperienceTimeline from "./WorkExperienceTimeline";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="w-11/12 md:w-11/12 flex flex-col  mx-auto min-h-[80vh] mt-16 lg:mt-0">
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
            Work Experience
          </h3>
          <hr className="w-full border-[#EEA66B] border-2 md:border-4" />
        </div>
        <p className="font-la-belleAurore mt-2 md:mt-3 text-sm md:text-lg">{"</h1>"}</p>
      </motion.div>

      {/*------------ work experience timeline ------------- */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full mt-6 md:mt-8"
      >
        <WorkExperienceTimeline/>
      </motion.div>
    </div>
  );
};

export default Experience;