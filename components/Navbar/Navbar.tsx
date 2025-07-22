"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import NavbarItem from "./NavbarItem";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Code2,
  Contact,
  GraduationCap,
  Home,
  Laptop2,
  Menu,
  Trophy,
  User,
  X,
} from "lucide-react";

const Navbar = () => {
  const [hasHoveredItem, setHasHoveredItem] = useState(false);

  const [showSidebar, setShowSidebar] = useState(true);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.querySelector(".sidebar");
      const burgerButton = document.querySelector(".burger-button");

      if (
        showSidebar &&
        sidebar &&
        !sidebar.contains(event.target as Node) &&
        burgerButton &&
        !burgerButton.contains(event.target as Node)
      ) {
        setShowSidebar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSidebar]);

  // Close sidebar when a menu item is selected
  const handleMenuItemClick = () => {
    setShowSidebar(false);
  };

  // Toggle sidebar
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className=" w-11/12 mx-auto flex justify-between items-center py-3">
      {/*----------- Logo of Name --------- */}
      <div className=" font-righteous text-2xl">
        <h1>MS</h1>
      </div>

      {/*--------------- Links -------------- */}
      <motion.ul
        className=" hidden md:flex justify-center items-center gap-8 transition-all duration-500 ease-in-out"
        style={{
          minWidth: "41.666667%", // 5/12 equivalent
          width: hasHoveredItem ? "auto" : "66.666667%", // 8/12 when not hovered
        }}
        onMouseEnter={() => setHasHoveredItem(true)}
        onMouseLeave={() => setHasHoveredItem(false)}
      >
        <li>
          <NavbarItem icon={<Home size={26} />} href="/" text="Home" />
        </li>
        <li>
          <NavbarItem icon={<User size={26} />} href="/about" text="About Me" />
        </li>
        <li>
          <NavbarItem icon={<Laptop2 size={26} />} href="/" text="Skills" />
        </li>
        <li>
          <NavbarItem
            icon={<Briefcase size={26} />}
            href="/"
            text="Work Experience"
          />
        </li>
        <li>
          <NavbarItem
            icon={<GraduationCap size={26} />}
            href="/"
            text="Education"
          />
        </li>
        <li>
          <NavbarItem icon={<Code2 size={26} />} href="/" text="Projects" />
        </li>
        <li>
          <NavbarItem
            icon={<Trophy size={26} />}
            href="/"
            text="Achievements & Certifications"
          />
        </li>
        <li>
          <NavbarItem icon={<Contact size={26} />} href="/" text="Contact Me" />
        </li>
      </motion.ul>

      {/*------------ Dark & Light Mode --------------- */}
      <div className=" hidden md:block">
        <Button>Dark</Button>
      </div>

      {/*--------------- burger icon for mobile view ------------ */}
      <div className="md:hidden">
        <Button onClick={() => setShowSidebar(true)}>
          <Menu />
        </Button>

        {/*------------- side bar menu -----------  */}
        <div className="md:hidden">
          {/*------------- side bar menu ----------- */}
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
                  className="sidebar burger-button fixed top-0 right-0 h-full w-8/12 bg-white z-50 shadow-lg"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{
                    type: "tween",
                    ease: "easeInOut",
                    duration: 0.4,
                  }}
                >
                  <Button
                    onClick={() => setShowSidebar(false)}
                    className=" mt-4 ml-4"
                  >
                    <X size={26} />
                  </Button>
                  <motion.ul
                    className="flex flex-col p-4 space-y-4 mt-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <li>
                      <NavbarItem
                        onClick={handleMenuItemClick}
                        icon={<Home size={26} />}
                        href="/"
                        text="Home"
                      />
                    </li>
                    <li>
                      <NavbarItem
                        onClick={handleMenuItemClick}
                        icon={<User size={26} />}
                        href="/about"
                        text="About Me"
                      />
                    </li>
                    <li>
                      <NavbarItem
                        onClick={handleMenuItemClick}
                        icon={<Laptop2 size={26} />}
                        href="/skills"
                        text="Skills"
                      />
                    </li>
                    <li>
                      <NavbarItem
                        onClick={handleMenuItemClick}
                        icon={<Briefcase size={26} />}
                        href="/experience"
                        text="Work Experience"
                      />
                    </li>
                    <li>
                      <NavbarItem
                        onClick={handleMenuItemClick}
                        icon={<GraduationCap size={26} />}
                        href="/education"
                        text="Education"
                      />
                    </li>
                    <li>
                      <NavbarItem
                        onClick={handleMenuItemClick}
                        icon={<Code2 size={26} />}
                        href="/projects"
                        text="Projects"
                      />
                    </li>
                    <li>
                      <NavbarItem
                        onClick={handleMenuItemClick}
                        icon={<Trophy size={26} />}
                        href="/achievements"
                        text="Achievements & Certifications"
                      />
                    </li>
                    <li>
                      <NavbarItem
                        onClick={handleMenuItemClick}
                        icon={<Contact size={26} />}
                        href="/contact"
                        text="Contact Me"
                      />
                    </li>
                  </motion.ul>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
