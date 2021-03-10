import React from "react";
import "./stars.scss";
import Typed from "react-typed";
import "../CSS/intro.css"
class Intro extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container intro-container">
              <h1 className="intro-title mb-4"><span style={{color:"#64FFDA"}}>Hello</span>, I am Socheat Chhun</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                <span style={{color:"#64FFDA"}}>
                  <Typed
                    strings={[
                      "Front End Developer",
                      "Back End Developer"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                  </span>
                </strong>
              </p>
              <p className="intro-subtitle mb-4">I build stuffs for the web.</p>
              <p>I'm a self-learner web developer before enrolling into university. I build minimal, well functional 
                websites and applications.
              </p>
              <p className="pt-3 mt-3">
                <a
                  className="btn-self js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  View My Work
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
