import React from "react";
import Navbar from "./navbar.jsx";
import Intro from "./intro.jsx";
import About from "./about.jsx";
import Portfolio from "./portfolio.jsx";
import Contact from "./contact.jsx";
import BackToTop from "./back-top.jsx";
import Preloader from "./preloader";
import PortfolioV2 from "./Portfolio";
const BigApp = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <PortfolioV2 />
      <Contact />
      <BackToTop />
      <Preloader />
    </div>
  );
};

export default BigApp;
