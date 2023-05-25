import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./Intro.css";

import wave from "../../assets/images/wave.png";
import pin from "../../assets/images/pin.png";
import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/github.png";
import portrait from "../../assets/images/portrait.png";
import breakline from "../../assets/images/break.png";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import sass from "../../assets/images/sass.png";
import js from "../../assets/images/javascript.png";
import ts from "../../assets/images/typescript.png";
import react from "../../assets/images/react.png";
import angular from "../../assets/images/angular.png";
import redux from "../../assets/images/redux.png";
import gatsby from "../../assets/images/gatsby.png";
import php from "../../assets/images/php.png";
import jest from "../../assets/images/jest.png";

function Intro() {
  useEffect(() => {
    const stackIcons = document.querySelectorAll(".tech-stack-icon");
    const tl = gsap.timeline();

    Array.from(stackIcons).forEach((icon, index) => {
      tl.fromTo(
        icon,
        { opacity: 0, y: -50 }, // Początkowe właściwości ikony (niewidoczna i przesunięta w dół)
        { opacity: 1, y: 0, duration: 0.3 } // Końcowe właściwości ikony (widoczna i na swojej pozycji)
      );
    });
  }, []);

  const onWaveClick = () => {
    const waveIcon = document.querySelector(".wave-img");
    const tl = gsap.timeline();

    tl.to(waveIcon, {
      rotation: 70,
      duration: 0.15,
    })
      .to(waveIcon, {
        rotation: -20,
        duration: 0.15,
      })
      .to(waveIcon, {
        rotation: 50,
        duration: 0.15,
      })
      .to(waveIcon, {
        rotation: 0,
        duration: 0.15,
      });
  };

  return (
    <>
      <div className="intro-container">
        <div className="intro-text-container">
          <p className="front-end-text">Front-End</p>
          <div className="intro-developer-container">
            <p className="developer-text">Developer</p>
            <img
              className="wave-img"
              src={wave}
              alt="wave"
              onClick={onWaveClick}
            ></img>
          </div>
          <div className="intro-description-container">
            <p className="description-text">
              Hi, I'm Łukasz Jaskółka. A passionate Front-end Developer based in
              Poznań, Poland.
              <img className="pin-img" src={pin} alt="pin"></img>
            </p>
          </div>
          <div className="intro-icons-container">
            <a href="https://linkedin.com/in/ljaskolka">
              <img
                className="linkedin-icon"
                src={linkedin}
                alt="linkedin"
              ></img>
            </a>
            <a href="https://github.com/ljaskolka">
              <img className="github-icon" src={github} alt="github"></img>
            </a>
          </div>
        </div>
        <div className="intro-img-container">
          <img className="intro-img" src={portrait} alt="portrait"></img>
        </div>
      </div>
      <div className="tech-stack-container">
        <p className="tech-stack-text">Tech Stack</p>
        <img className="tech-stack-break" src={breakline} alt="break"></img>
        <div className="tech-stack-icon-container">
          <img
            className="tech-stack-icon tech-stack-icon1"
            src={html}
            alt="html icon"
          ></img>
          <img
            className="tech-stack-icon tech-stack-icon2"
            src={css}
            alt="css icon"
          ></img>
          <img
            className="tech-stack-icon tech-stack-icon3"
            src={sass}
            alt="sass icon"
          ></img>
          <img
            className="tech-stack-icon tech-stack-icon4"
            src={js}
            alt="javascript icon"
          ></img>
          <img
            className="tech-stack-icon tech-stack-icon5"
            src={ts}
            alt="typescript icon"
          ></img>
          <img
            className="tech-stack-icon tech-stack-icon6"
            src={react}
            alt="react icon"
          ></img>
          <img
            className="tech-stack-icon tech-stack-icon7"
            src={angular}
            alt="angular icon"
          ></img>
          <img
            className="tech-stack-icon tech-stack-icon8"
            src={redux}
            alt="redux icon"
          ></img>
          <img
            className="tech-stack-icon tech-stack-icon9"
            src={gatsby}
            alt="gatsby icon"
          ></img>
          <img
            className="tech-stack-icon tech-stack-icon10"
            src={php}
            alt="php icon"
          ></img>
          <img
            className="tech-stack-icon tech-stack-icon11"
            src={jest}
            alt="jest icon"
          ></img>
        </div>
      </div>
    </>
  );
}

export default Intro;
