"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
const Header = () => {
  const arrowVariants = {
    hidden: { opacity: 0, y: -1 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3, // Stagger the delay based on index
        repeat: Infinity, // Loop infinitely
        repeatType: "reverse", // Go back and forth
        duration: 0.8, // Duration of each animation cycle
      },
    }),
  };

  return (
    <div className=" mt-6 max-h-screen h-[80vh] flex flex-col justify-between">
      {/*-------- Name and position --------- */}
      <div className=" flex flex-col justify-center items-center text-center gap-6 ">
        <h2 className=" text-[3.5rem] font-semibold font-greatVibes">
          Mohammad Sameer
        </h2>
        <p className="  font-bigShoulders font-medium text-[1.3rem] text-[#696969]">
          FULL STACK DEVELOPER | MERN STACK | FRONTEND DEVELOPER
        </p>
        <div>
          <div className=" border border-black h-10 w-6 rounded-full flex justify-center ">
            <div className="w-1 h-2 bg-black rounded-full mt-2 animate-bounce"></div>
          </div>
          <div className="flex flex-col items-center">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                custom={i} // Pass the index to determine the delay
                initial="hidden"
                animate="visible"
                variants={arrowVariants}
              >
                <BsChevronDown />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Image
        src={"/headerimg.png"}
        alt="img"
        width={1000}
        height={1000}
        className=" object-cover w-full"
      />
    </div>
  );
};

export default Header;
