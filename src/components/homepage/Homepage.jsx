import React from 'react';
import "./homepage.css";
import Projet from "../../components/projet/Projet";
import Skills from "../../components/skills/Skills";
import About from "../../components/aboutme/Aboutme";
import Contact from "../../components/contact/Contact";

const Homepage = () => {

  return (
    <>
    <div className="homepage min-h-screen">
      <div className="text text-8xl flex justify-center pt-8">Hugo JACQUES</div>
      <div className="text subtitle mb-20 text-6xl flex justify-center pt-8">Dev Web</div>
      <Projet />
      <Skills />
      <About />
      <Contact />
      </div>
    </>
  );
};

export default Homepage;
