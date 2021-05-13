import React, { lazy, Suspense } from "react";
import Navbar from "./navbar.jsx";
import Intro from "./intro.jsx";
import About from "./about.jsx";
import Contact from "./contact.jsx";
import BackToTop from "./back-top.jsx";
import Preloader from "./preloader";
// import PortfolioV2 from "./Portfolio";
const PortfolioV2 = lazy(() => import("./Portfolio"));
const BigApp = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      {/* <Suspense fallback={<div>Loading...</div>}>
        <PortfolioV2 />
      </Suspense> */}
      <Contact />
      <BackToTop />
      <Preloader />
    </div>
  );
};

export default BigApp;
