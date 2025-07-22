"use client"

import Link from "next/link";
import React from "react";
import SkillsSphere from "./SkillsSphere";

const Skills = () => {
  return (
    <div className=" w-10/12 flex justify-between items-center   mx-auto  h-screen">
      {/*-------------- Left side text section-----------------  */}
      <div className=" w-1/2 ">
        {/*--------- heading section ---------- */}
        <div className=" w-1/2">
          <p className=" font-la-belleAurore text-lg">{"<h1>"}</p>
          <div className=" w-fit space-y-1">
            <h3 className=" font-righteous text-5xl whitespace-nowrap  ">
              Skills & Experience
            </h3>
            <hr className=" w-full border-[#EEA66B] border-4 " />
          </div>

          <p className=" font-la-belleAurore mt-3 text-lg">{"</h1>"}</p>
        </div>

        {/*--------- paragraph section ---------- */}
        <div className=" mt-6 space-y-2">
          <p className=" font-la-belleAurore text-lg">{"<aside>"}</p>
          <p>
            Expert in Front-End development including technologies like{" "}
            <b className=" font-righteous">
              HTML5, CSS3, Tailwind CSS, MUI Javascript, React, Shadcn Ui
              Bootstrap, Sass, Git, GitHub, Nodejs,etc.
            </b>
          </p>
          <p className=" font-la-belleAurore mt-3 text-lg">{"</aside>"}</p>
          <p>
            Experienced with all stages of the development cycle for dynamic web
            projects.
          </p>
          <p>
            Visit my <Link className=" font-semibold hover:underline font-righteous" href={"https://www.linkedin.com/in/mohammad-sameer-a594b3285/"}>LinkedIn</Link> profile for more details at this link.
          </p>
        </div>
      </div>

      {/* Right side Image section  */}
      <div className="w-[40%] ">
        <SkillsSphere/>
      </div>
    </div>
  );
};

export default Skills;
