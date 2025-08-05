"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { BsChevronDown } from "react-icons/bs";

const Header = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const arrowVariants = {
    hidden: { opacity: 0, y: -1 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        repeat: Infinity,
        repeatType: "reverse" as const,
        duration: 0.8,
      },
    }),
  };

  return (
    <motion.div 
      ref={containerRef}
      className="w-full mt-4 md:mt-6 max-h-screen h-[70vh] md:h-[80vh] flex flex-col justify-between px-4 md:px-0 overflow-hidden"
    >
      {/*-------- Name and position --------- */}
      <motion.div 
        style={{ y: yText }}
        className="flex flex-col justify-center items-center text-center gap-4 md:gap-6"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-semibold font-greatVibes leading-tight"
        >
          Mohammad Sameer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-bigShoulders font-medium text-[1rem] sm:text-[1.1rem] md:text-[1.3rem] text-[#696969] px-2 md:px-0 leading-relaxed"
        >
          FULL STACK DEVELOPER | MERN STACK | FRONTEND DEVELOPER
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="border border-black h-8 md:h-10 w-5 md:w-6 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-black rounded-full mt-1.5 md:mt-2 animate-bounce"></div>
          </div>
          <div className="flex flex-col items-center">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={arrowVariants}
              >
                <BsChevronDown />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        style={{ y: yImage }}
        className="w-full h-full relative"
      >
        <Image
          src={"/headerimg.png"}
          alt="Developer portrait"
          priority
          fill
          sizes="(max-width: 768px) 100vw, 80vw"
          className="object-cover w-full h-auto max-h-[40vh] md:max-h-none"
        />
      </motion.div>
    </motion.div>
  );
};

export default Header;