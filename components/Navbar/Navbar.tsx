"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Button } from "../ui/button";
import NavbarItem from "./NavbarItem";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Code2, Contact, GraduationCap, Home, Laptop2, Menu, Trophy, User, X } from "lucide-react";

const navItems = [
  { icon: <Home size={24} className="lg:w-6 lg:h-6" />, href: "/", text: "Home" },
  { icon: <User size={24} className="lg:w-6 lg:h-6" />, href: "/about", text: "About Me" },
  { icon: <Laptop2 size={24} className="lg:w-6 lg:h-6" />, href: "/", text: "Skills" },
  { icon: <Briefcase size={24} className="lg:w-6 lg:h-6" />, href: "/", text: "Work Experience" },
  { icon: <GraduationCap size={24} className="lg:w-6 lg:h-6" />, href: "/", text: "Education" },
  { icon: <Code2 size={24} className="lg:w-6 lg:h-6" />, href: "/", text: "Projects" },
  { icon: <Trophy size={24} className="lg:w-6 lg:h-6" />, href: "/", text: "Achievements & Certifications" },
  { icon: <Contact size={24} className="lg:w-6 lg:h-6" />, href: "/", text: "Contact Me" }
];

const mobileNavItems = [
  { icon: <Home size={20} />, href: "/", text: "Home" },
  { icon: <User size={20} />, href: "/about", text: "About Me" },
  { icon: <Laptop2 size={20} />, href: "/skills", text: "Skills" },
  { icon: <Briefcase size={20} />, href: "/experience", text: "Work Experience" },
  { icon: <GraduationCap size={20} />, href: "/education", text: "Education" },
  { icon: <Code2 size={20} />, href: "/projects", text: "Projects" },
  { icon: <Trophy size={20} />, href: "/achievements", text: "Achievements & Certifications" },
  { icon: <Contact size={20} />, href: "/contact", text: "Contact Me" }
];

const Navbar = () => {
  const [hasHoveredItem, setHasHoveredItem] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = useCallback(() => setShowSidebar(prev => !prev), []);
  const handleMenuItemClick = useCallback(() => setShowSidebar(false), []);

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    document.body.style.overflow = showSidebar ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [showSidebar]);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.querySelector(".sidebar");
      const burgerButton = document.querySelector(".burger-button");
      
      if (showSidebar && sidebar && burgerButton && 
          !sidebar.contains(event.target as Node) && 
          !burgerButton.contains(event.target as Node)) {
        setShowSidebar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showSidebar]);

  return (
    <div className="w-11/12 mx-auto flex justify-between items-center py-3 px-2 md:px-0">
      {/* Logo */}
      <div className="font-righteous text-xl md:text-2xl">
        <h1>MS</h1>
      </div>

      {/* Desktop Navigation */}
      <motion.ul
        className="hidden md:flex justify-center items-center gap-4 lg:gap-8 transition-all duration-500 ease-in-out"
        style={{
          minWidth: "41.666667%",
          width: hasHoveredItem ? "auto" : "66.666667%",
        }}
        onMouseEnter={() => setHasHoveredItem(true)}
        onMouseLeave={() => setHasHoveredItem(false)}
      >
        {navItems.map((item, index) => (
          <li key={index}>
            <NavbarItem {...item} />
          </li>
        ))}
      </motion.ul>

      {/* Dark Mode Toggle (Placeholder) */}
      <div className="hidden md:block">
        {/* <Button>Dark</Button> */}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Button onClick={toggleSidebar} className="p-2 burger-button">
          <Menu size={20} />
        </Button>

        <AnimatePresence>
          {showSidebar && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="fixed inset-0 bg-black/30 z-20"
              />

              <motion.div
                className="sidebar fixed top-0 right-0 h-full w-[85%] sm:w-[70%] bg-white z-50 shadow-lg"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
              >
                <Button onClick={toggleSidebar} className="mt-4 ml-4 p-2">
                  <X size={20} />
                </Button>
                <motion.ul
                  className="flex flex-col p-4 space-y-3 mt-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {mobileNavItems.map((item, index) => (
                    <li key={index}>
                      <NavbarItem {...item} onClick={handleMenuItemClick} />
                    </li>
                  ))}
                </motion.ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;