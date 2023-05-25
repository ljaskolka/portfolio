import React from "react";
import "./Footer.css";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin);

function Footer() {
  const handleScrollToHeader = () => {
    gsap.to(window, { duration: 0.8, scrollTo: "#home" });
  };

  return (
    <footer className="footer-container">
      <p className="back-to-top" onClick={handleScrollToHeader}>
        BACK TO TOP ⬆️
      </p>
      <p className="footer-info">Copyright © 2023. All rights are reserved</p>
    </footer>
  );
}

export default Footer;
