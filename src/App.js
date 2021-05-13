import React,{lazy,Suspense} from "react";
//import components
import Navbar from "./components/navbar.jsx";
import Intro from "./components/intro.jsx";
import About from "./components/about.jsx";
import Contact from "./components/contact.jsx";
import BackToTop from "./components/back-top.jsx";
import Preloader from "./components/preloader";
// import PortfolioV2 from "./components/Portfolio"
import "./components/stars.scss"
import "./style.css"
const PortfolioV2 = lazy(() => import("./components/Portfolio"));
const App = () => {
  return (
    <div className="app-container">
      <h1 style={{display:"none"}}>Socheat Chhun, Macquarie Univeristy Graduate with skills in Web Development.</h1>
      <Navbar />
      <Intro />
      <About />
       <Suspense fallback={<div>Loading...</div>}>
        <PortfolioV2 />
      </Suspense>
      <Contact />
      <BackToTop />
      <Preloader />
    </div>
  );
};

export default App;
