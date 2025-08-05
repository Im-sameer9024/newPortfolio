"use client";

import Image from "next/image";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8]);

  const skills =
    "HTML5, CSS3, Tailwind, MUI, SCSS, JavaScript, Next.js, TypeScript, ReactJS, NodeJS, MongoDB, Prisma ORM, Postgresql";

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity }}
      className="w-11/12 md:w-11/12 flex flex-col lg:flex-row justify-between mx-auto min-h-[90vh] mt-10 gap-8 lg:gap-0"
    >
      {/* Left side text section */}
      <motion.div
        style={{ y: yText }}
        className="w-full lg:w-1/2 h-full flex flex-col justify-center"
      >
        {/* Heading section */}
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
              About Me
            </h3>
            <hr className="w-full border-[#EEA66B] border-2 md:border-4" />
          </div>
          <p className="font-la-belleAurore mt-2 md:mt-3 text-sm md:text-lg">
            {"</h1>"}
          </p>
        </motion.div>

        {/* Paragraph section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 md:mt-6 space-y-2"
        >
          <p className="font-la-belleAurore text-sm md:text-lg">
            {"<article>"}
          </p>
          <p className="leading-6 md:leading-7 text-sm md:text-base">
            I&#39;m{" "}
            <span className="font-righteous text-2xl md:text-3xl lg:text-4xl">
              MERN Stack <br /> Developer
            </span>{" "}
            living in Jaipur, Rajasthan, India. Currently I&#39;m a Full Stack
            Developer (MEAN/MERN), I design and code beautiful and simple
            things, and I love what I do. I create bespoke websites to help
            people go further online. Experienced with all stages of the
            development cycle for dynamic web projects. Having an in-depth
            knowledge including <b className="font-righteous">{skills}</b>.
          </p>
          <p className="font-la-belleAurore mt-2 md:mt-3 text-sm md:text-lg">
            {"</article>"}
          </p>
        </motion.div>
      </motion.div>

      {/* Right side Image section */}
      <motion.div
        style={{ y: yImage }}
        className="w-full lg:w-[40%] flex flex-col items-center h-auto lg:h-[80vh]"
      >
        <motion.div
          className="relative overflow-hidden rounded-lg shadow-2xl w-full max-w-md"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{
            scale: 1.02,
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ filter: "grayscale(100%)", opacity: 0.9 }}
            whileInView={{ filter: "grayscale(80%)", opacity: 1 }}
            whileHover={{
              filter: "grayscale(0%)",
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
            className="relative aspect-[4/5] w-full"
          >
            <Image
              src="/me.jpg"
              alt="MERN Stack Developer from Jaipur"
              className="object-cover"
              priority
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
