import React from "react";
//import components
import Navbar from "./components/navbar.jsx";
import Intro from "./components/intro.jsx";
import About from "./components/about.jsx";
import Portfolio from "./components/portfolio.jsx";
import Contact from "./components/contact.jsx";
import BackToTop from "./components/back-top.jsx";
import Preloader from "./components/preloader";
import PortfolioV2 from "./components/Portfolio"
import "./components/stars.scss"
import "./style.css"
const App = () => {
  return (
    <div className="app-container">
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

export default App;
