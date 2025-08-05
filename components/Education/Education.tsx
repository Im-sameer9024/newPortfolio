"use client";

import React from "react";
import { FaUniversity, FaSchool } from "react-icons/fa";
import EducationCard from "./EducationCard";
const Education = () => {
  const educationData = [
    {
      id: 1,
      icon: <FaUniversity />,
      Course: "MCA in Computer Science",
      College: "Vivekananda Global University of Engineering and Technology",
      Location: "Jaipur, Rajasthan",
      Duration: "2024 - 2026",
      description:
        "Presently I am pursuing my Master of Computer Application (MCA).I am excited to continue my journey in the field of computer science and technology, focusing on software engineering, web development and Cloud Computing.",
    },
    {
      id: 2,
      icon: <FaUniversity />,
      Course: "BCA in Computer Science",
      College: "S.S Jain Subodh P.G College",
      Location: "Jaipur, Rajasthan",
      Duration: "2020 - 2023",
      description:
        "Completed my Bachelor of Computer Application (BCA) from S.S Jain Subodh P.G College, Jaipur. I gained a strong foundation in computer science and technology during my undergraduate studies, and I am eager to continue my education and further develop my skills in this field.",
    },
    {
      id: 3,
      icon: <FaSchool />,
      Course: `Higher Secondary (12th)`,
      College: "Nitin Public School",
      Location: "Jaipur, Rajasthan",
      Duration: "2019 - 2020",
      description:
        `Completed my Higher Secondary (12th) from Nitin Public School, Jaipur. I gained a strong foundation in various subjects during my high school years, Physics, Chemistry, Maths (PCM), and Computer Science. Developed strong analytical and programming skills`,
    },
  ];

  return (
    <div className="w-11/12 md:w-11/12  mx-auto mt-8 md:mt-16  min-h-[80vh] gap-8 lg:gap-0">
      {/* Heading section */}
      <div className="w-full lg:w-1/2">
        <p className="font-la-belleAurore text-sm md:text-lg">{"<h1>"}</p>
        <div className="w-fit space-y-1">
          <h3 className="font-righteous text-3xl md:text-4xl lg:text-5xl">
            Education
          </h3>
          <hr className="w-full border-[#EEA66B] border-2 md:border-4" />
        </div>
        <p className="font-la-belleAurore mt-2 md:mt-3 text-sm md:text-lg">
          {"</h1>"}
        </p>
      </div>

      {/*----------------- all educations section -------------- */}

      <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
        {educationData.map((education) => (
          <EducationCard key={education.id} education={education} />
        ))}
      </div>
    </div>
  );
};

export default Education;
