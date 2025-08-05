"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";





const NavbarItem = ({
  icon,
  text,
  href,
  onClick
}: {
  icon: React.ReactNode;
  text: string;
  href: string;
  onClick?: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const vibrateAnimation = {
    x: [-2, 2, -2, 2, 0],
    y: [0, -2, 0, 2, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      ease: "easeInOut" as const,
      repeatType: "reverse" as const
    }
  };

  return (
    <Link
    onClick={onClick}
      href={href}
      style={{
        width: isHovered ? "auto" : "40px", // Fixed width for icon, auto for text
        minWidth: isHovered ? "max-content" : "40px",
      }}
      className="relative flex items-center justify-center w-full h-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex items-center justify-center">
        <AnimatePresence mode="wait">
          {!isHovered ? (
            <motion.span
              key="icon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="  flex items-center justify-center w-10 h-10"
            >
              {icon}
            </motion.span>
          ) : (
            <motion.span
              key="text"
              whileHover={vibrateAnimation}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="  text-sm  whitespace-nowrap font-righteous font-semibold "
            >
              {text}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </Link>
  );
};

export default NavbarItem;
