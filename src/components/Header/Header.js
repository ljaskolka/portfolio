import React from "react";
import "./Header.css";
import { Link } from "react-scroll";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/all";

import logo from "../../assets/images/logo.png";

gsap.registerPlugin(ScrollToPlugin);

function Header() {
  const handleScrollToHeader = () => {
    gsap.to(window, { duration: 0.8, scrollTo: "#home" });
  };

  const handleScrollToContact = () => {
    gsap.to(window, { duration: 0.8, scrollTo: "#contact" });
  };

  const handleScrollToProjects = () => {
    gsap.to(window, { duration: 0.8, scrollTo: "#projects" });
  };

  const handleScrollToAbout = () => {
    gsap.to(window, { duration: 0.8, scrollTo: "#about" });
  };
  return (
    <div className="header-fix">
      <div className="header-container">
        <div className="header-logo" onClick={handleScrollToHeader}>
          <img className="header-logo-img" src={logo} alt="logo"></img>
        </div>
        <nav className="header-nav">
          <Link
            className="header-nav-item"
            smooth={true}
            duration={500}
            onClick={handleScrollToHeader}
          >
            Home
          </Link>
          <Link
            className="header-nav-item"
            smooth={true}
            duration={500}
            onClick={handleScrollToAbout}
          >
            About
          </Link>
          <Link
            className="header-nav-item"
            smooth={true}
            duration={500}
            onClick={handleScrollToProjects}
          >
            Projects
          </Link>
          <Link
            className="header-nav-item"
            smooth={true}
            duration={500}
            onClick={handleScrollToContact}
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
