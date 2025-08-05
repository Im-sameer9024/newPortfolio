"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MouseEvent, useState, useEffect } from "react";

interface NavbarItemProps {
  icon: React.ReactNode;
  text: string;
  href: string;
  onClick?: (e: MouseEvent, href: string) => void;
  isMobile?: boolean;
}

const NavbarItem = ({
  icon,
  text,
  href,
  onClick,
  isMobile = false
}: NavbarItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    
    if (onClick) {
      onClick(e, href);
      return;
    }

    // Fallback smooth scroll implementation
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Modern smooth scroll API
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Update URL without page reload
        window.history.pushState({}, '', href);
      }
    } else {
      // Regular link behavior for non-hash links
      window.location.href = href;
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      style={{
        width: isHovered ? "auto" : "40px",
        minWidth: isHovered ? "max-content" : "40px",
      }}
      className={`relative flex items-center justify-center w-full ${
        isMobile ? 'h-12' : 'h-10'
      } transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`Navigate to ${text} section`}
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
              className={`flex items-center justify-center ${
                isMobile ? 'w-8 h-8' : 'w-10 h-10'
              }`}
            >
              {icon}
            </motion.span>
          ) : (
            <motion.span
              key="text"
              whileHover={isMounted ? vibrateAnimation : undefined}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className={`text-sm whitespace-nowrap font-righteous font-semibold ${
                isMobile ? 'text-lg' : ''
              }`}
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