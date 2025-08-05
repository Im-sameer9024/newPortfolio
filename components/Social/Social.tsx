"use client";

import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaWhatsapp,
  FaDownload,
} from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Link from "next/link";

const socialLinks = [
  {
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/mohammad-sameer-a594b3285",
    label: "LinkedIn Profile",
    color: "hover:text-blue-500",
  },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/i.msameer_03",
    label: "Instagram Profile",
    color: "hover:text-pink-500",
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/Im-sameer9024",
    label: "GitHub Profile",
    color: "hover:text-[#00001a]",
  },
  {
    icon: <MdOutlineAlternateEmail />,
    href: "mailto:imsameer9024@gmail.com",
    label: "Send Email",
    color: "hover:text-[#ff3300]",
  },
  {
    icon: <FaDownload />,
    href: "#", // Replace with actual resume link
    label: "Download Resume",
    color: "hover:text-[#00001a]",
  },
  {
    icon: <FaWhatsapp />,
    href: "https://wa.me/919024739834", // Correct WhatsApp URL format
    label: "Chat on WhatsApp",
    color: "hover:text-[#5cd65c]",
  },
];

const Social = () => {
  return (
    <section className="w-11/12 md:w-11/12 mx-auto py-8 md:py-16">
      <div className="w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 justify-items-center">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${link.color}`}
          >
            {React.cloneElement(link.icon, {
              className: "text-4xl md:text-5xl",
              "aria-hidden": true,
            })}
          </Link>
        ))}
      </div>

      <div className=" mt-10 flex flex-col items-center">
        <p className="flex items-baseline">
          Made by🖤<span className=" font-righteous animate-pulse">@Sam</span>
        </p>
        <p>
            ©️Copyright Reserved 2024-2025
        </p>
      </div>
    </section>
  );
};

export default Social;
