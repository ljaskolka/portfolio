import React from "react";
import "./Portfolio.css";

import placeholder from "../../assets/images/placeholder.png";
import github from "../../assets/images/github.png";
import demo from "../../assets/images/demo.png";
import hellabright from "../../assets/images/hellabright.png";

function Portfolio() {
  return (
    <div className="portfolio-container" id="projects">
      <p className="portfolio-intro">PORTFOLIO</p>
      <p className="portfolio-description">
        Each project is a unique piece of development
      </p>

      <div className="portfolio-project-container">
        <a href="https://hellabright.netlify.app">
          <img
            className="portfolio-img"
            src={hellabright}
            alt="placeholder"
          ></img>
        </a>
        <div className="portfolio-specs">
          <div className="specs-contrainer">
            <p className="specs-intro">HellaBright</p>
            <p className="specs-description">
              With a focus on outstanding and clean design, excels in
              differentiating itself from the competition and attracting new
              customers.
            </p>
          </div>
          <div className="project-tech-stack">
            <p className="tech-stack-item">React</p>
            <p className="tech-stack-item">SCSS</p>
          </div>
          <div className="project-link-container">
            <div className="code-link-container">
              <a href="https://github.com/ljaskolka/flashlight-store">
                <p className="code-link">Code</p>
              </a>
              <a href="https://github.com/ljaskolka/flashlight-store">
                <img className="code-img" src={github} alt="github"></img>
              </a>
            </div>
            <div className="demo-link-container">
              <a href="https://hellabright.netlify.app">
                <p className="demo-link">Live Demo</p>
              </a>
              <a href="https://hellabright.netlify.app">
                <img className="demo-img" src={demo} alt="demo"></img>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-project-container portfolio-project-container2">
        <img
          className="portfolio-img"
          src={placeholder}
          alt="placeholder"
        ></img>
        <div className="portfolio-specs">
          <div className="specs-contrainer">
            <p className="specs-intro">Soon</p>
            <p className="specs-description">
              Here, you'll soon find a fresh project made in Angular. Stay tuned
              for updates and exciting content coming your way.
            </p>
          </div>
          <div className="project-tech-stack">
            <p className="tech-stack-item">Angular</p>
            <p className="tech-stack-item">SCSS</p>
          </div>
          <div className="project-link-container">
            <div className="code-link-container">
              <p className="code-link">Code</p>
              <img className="code-img" src={github} alt="github"></img>
            </div>
            <div className="demo-link-container">
              <p className="demo-link">Live Demo</p>
              <img className="demo-img" src={demo} alt="demo"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
