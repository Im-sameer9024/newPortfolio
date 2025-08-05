import React from "react";
import Header from "../Header/Header";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Project from "../Projects/Project";
import Achievements from "../Achievements/Achievements";
import Contact from "../Contact/Contact";
import Social from "../Social/Social";

const HomePage = () => {
  return (
    <main className=" w-full h-auto">
      <Header />
      <About />
      <Skills/>
      <Experience/>
      <Education/>
      <Project/>
      <Achievements/>
      <Contact/>
      <Social/>
    </main>
  );
};

export default HomePage;
