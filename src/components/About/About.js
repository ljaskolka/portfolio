import React, { useEffect } from "react";
import "./About.css";
import { gsap } from "gsap";

import desk from "../../assets/images/desk.png";
import pc from "../../assets/images/pc.png";
import circle from "../../assets/images/circle.png";

function About() {
  useEffect(() => {
    const circleElement = document.getElementById("circle");

    gsap.to(circleElement, {
      rotation: 360,
      duration: 5,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <div className="about-container" id="about">
      <div className="about-img-container">
        <img className="about-img desk-img" src={desk} alt="desk"></img>
        <img
          className="about-img circle-img"
          id="circle"
          src={circle}
          alt="circle"
        ></img>
        <img className="about-img pc-img" src={pc} alt="pc"></img>
      </div>
      <div className="about-text-container">
        <p className="about-intro">ABOUT ME</p>
        <p className="about-text">
          A dedicated Front-end Developer based in Poznań, Poland
        </p>
        <p className="about-description">
          As a Front-End Developer, I possess an impressive arsenal of skills in
          many technologies. I excel in designing and maintaining responsive
          websites that offer a smooth user experience. My expertise lies in
          crafting dynamic, engaging interfaces through writing clean and
          optimized code and utilizing cutting-edge development tools and
          techniques. I am also a team player who thrives in collaborating with
          cross-functional teams to produce outstanding web applications.
        </p>
      </div>
    </div>
  );
}

export default About;
