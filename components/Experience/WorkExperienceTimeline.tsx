/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WorkExperienceTimeline = () => {
  const experiences = [
    {
      id: 1,
      position: "Freelancer MERN Stack Developer",
      companyName: "WFH",
      location: "Remote",
      skills: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Postgresql", "Prisma ORM", "MongoDB", "Framer Motion", "Material UI", "Next.js"],
      about: "Built and maintained websites, focusing on performance",
      duration: "2025 - Present",
    },
    {
      id: 2,
      position: "MERN Stack Developer",
      companyName: "Site Guide",
      location: "Remote",
      skills: ["React", "HTML", "CSS", "TypeScript", "Tailwind CSS", "Shadcn UI", "Framer Motion", "Material UI", "Next.js"],
      about: "Designing dynamic and responsive user interfaces using React.js and Tailwind CSS Integrating APIs and collaborating on full-stack projects developed using React.js and Next.js",
      duration: "April/2024 - March/2025",
    },
    {
      id: 3,
      position: "MERN Stack Developer Internship",
      companyName: "Global IT Provider",
      location: "Jaipur, Rajasthan",
      skills: ["HTML", "CSS", "JavaScript", "Tailwind css", "React", "Node.js", "MongoDB", "Express.js"],
      about: "Developed and maintained web applications using MERN stack, focusing on user experience and performance.",
      duration: "Sept/2023 - March/2024",
    },
  ];

  return (
    <div className="w-full mx-auto p-4 sm:p-6 bg-gray-50">
      <div className="relative">
        {/* Vertical line - hidden on mobile */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-0.5 w-1 bg-gray-300 h-full"></div>

        {experiences.map((exp, index) => {

          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.2,
          });

          return (
            <motion.div
              key={exp.id}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative mb-8 lg:mb-12"
            >
              {/* Timeline dot - hidden on mobile */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

              {/* Experience card */}
              <div className={`relative lg:w-6/12 ${index % 2 === 0 ? "lg:mr-auto lg:pr-8" : "lg:ml-auto lg:pl-8"}`}>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="mb-4">
                    <h2 className="font-righteous text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                      {exp.position}
                    </h2>
                    <p className="text-sm sm:text-base">{exp.companyName}</p>
                    <div className="flex items-center text-gray-600 mb-2 text-sm sm:text-base">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="font-medium">
                        Location: {exp.location}
                      </span>
                    </div>
                    <div className="text-sm sm:text-base text-blue-600 font-medium mb-3">
                      {exp.duration}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-700 mb-2">
                      Skills:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          initial={{ scale: 0.9 }}
                          animate={inView ? { scale: 1 } : {}}
                          transition={{ 
                            duration: 0.3,
                            delay: 0.3 + (skillIndex * 0.05)
                          }}
                          className="px-2 py-1 text-xs sm:text-sm bg-blue-100 text-blue-800 font-medium rounded-full"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    {exp.about}
                  </p>
                </motion.div>

                {/* Arrow pointing to timeline - hidden on mobile */}
                <div className={`hidden lg:block absolute top-6 ${
                  index % 2 === 0
                    ? "right-0 transform translate-x-full"
                    : "left-0 transform -translate-x-full"
                }`}>
                  <div
                    className={`w-0 h-0 border-t-8 border-b-8 border-t-transparent border-b-transparent ${
                      index % 2 === 0
                        ? "border-l-8 border-l-white"
                        : "border-r-8 border-r-white"
                    }`}
                  ></div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkExperienceTimeline;