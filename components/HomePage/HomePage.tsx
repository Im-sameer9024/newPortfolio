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
      <section id="home">
        <Header />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="projects">
        <Project />
      </section>

      <section id="achievements">
        <Achievements />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Social />
    </main>
  );
};

export default HomePage;
