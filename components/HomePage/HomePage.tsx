import React from "react";
import Header from "../Header/Header";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";

const HomePage = () => {
  return (
    <main className=" w-full h-auto">
      <Header />
      <About />
      <Skills/>
      <Experience/>
    </main>
  );
};

export default HomePage;
