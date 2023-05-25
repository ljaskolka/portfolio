import React from "react";
import Header from "../../components/Header/Header";
import Intro from "../../components/Intro/Intro";
import About from "../../components/About/About";
import Portfolio from "../../components/Portfolio/Portfolio";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
