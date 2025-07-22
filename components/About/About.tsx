"use client"

import Image from "next/image";
import React from "react";
import {motion} from 'framer-motion'
const About = () => {
  return (
    <div className=" w-10/12 flex justify-between mx-auto mt-16 h-screen">
      {/*-------------- Left side text section-----------------  */}
      <div className=" w-1/2 h-full">
        {/*--------- heading section ---------- */}
        <div className=" w-1/2">
          <p className=" font-la-belleAurore text-lg">{"<h1>"}</p>
          <div className=" w-fit space-y-1">
            <h3 className=" font-righteous text-5xl ">About Me</h3>
            <hr className=" w-full border-[#EEA66B] border-4 " />
          </div>

          <p className=" font-la-belleAurore mt-3 text-lg">{"</h1>"}</p>
        </div>

        {/*--------- paragraph section ---------- */}
        <div className=" mt-6 space-y-2">
          <p className=" font-la-belleAurore text-lg">{"<article>"}</p>
          <p className=" leading-7">
            I&#39;m{" "}
            <span className=" font-righteous text-4xl">
              MERN Stack <br /> Developer
            </span>
            living in Jaipur, Rajasthan, India. Currently I&#39;m a Full Stack
            Developer (MEAN/MERN), I design and code beautiful and simple
            things, and I love what I do. I create bespoke websites to help
            people go further online. Experienced with all stages of the
            development cycle for dynamic web projects. Having an in-depth
            knowledge including <b className=" font-righteous">HTML5, CSS3, Tailwind, MUI, SCSS, JavaScript, Next.js , TypeScript,
            ReactJS, NodeJS, MongoDB, Prisma ORM , Postgresql</b>.
          </p>
          <p className=" font-la-belleAurore mt-3 text-lg">{"</article>"}</p>
        </div>
      </div>


      {/* Right side Image section  */}
       <div className="w-[40%]">
      <hr className="w-full border-black border-4" />
      <motion.div
        initial={{ filter: "grayscale(100%)" }}
        whileHover={{ filter: "grayscale(0%)" }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className="relative"
      >
        <Image
          src={"/me.jpg"}
          alt="img"
          width={1000}
          height={1000}
          className="w-full h-[70vh] object-contain grayscale hover:grayscale-0 transition-all duration-500"
        />
      </motion.div>
      <hr className="w-full border-black border-4" />
    </div>
    </div>
  );
};

export default About;
