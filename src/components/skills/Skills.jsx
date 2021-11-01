import React, { Component } from "react";
// import { gsap } from "gsap/all";
import "./skills.css";

const skills = () => {
  //   document.addEventListener("click", function() {
  //     start();
  //   });
  //   function start() {
  //     gsap.to(".container-skills", {
  //        rotation: "+=90"
  //     })
  // }

  return (
    <>
      <div className="skills min-h-screen min-w-min flex">
        <div class="container-skills">
          <div class="card-skills">
            <div class="front html"></div>
            <div class="back html-back"></div>
          </div>
        </div>
        <div class="container-skills">
          <div class="card-skills">
            <div class="front css"></div>
            <div class="back css-back"></div>
          </div>
        </div>
        <div class="container-skills">
          <div class="card-skills">
            <div class="front php"></div>
            <div class="back php-back"></div>
          </div>
        </div>
        <div class="container-skills">
          <div class="card-skills">
            <div class="front js"></div>
            <div class="back js-back"></div>
          </div>
        </div>
        <div class="container-skills">
          <div class="card-skills">
            <div class="front react"></div>
            <div class="back react-back"></div>
          </div>
        </div>
        <div class="container-skills">
          <div class="card-skills">
            <div class="front sql"></div>
            <div class="back sql-back"></div>
          </div>
        </div>
        <div class="container-skills">
          <div class="card-skills">
            <div class="front sass"></div>
            <div class="back sass-back"></div>
          </div>
        </div>
        <div class="container-skills">
          <div class="card-skills">
            <div class="front tailwind"></div>
            <div class="back tailwind-back"></div>
          </div>
        </div>
        <div class="container-skills">
          <div class="card-skills">
            <div class="front gsap"></div>
            <div class="back gsap-back"></div>
          </div>
        </div>
        <div class="container-skills">
          <div class="card-skills">
            <div class="front bootstrap"></div>
            <div class="back bootstrap-back"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default skills;
