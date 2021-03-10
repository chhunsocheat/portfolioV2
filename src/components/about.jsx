import React from "react";
import "../CSS/about.css";
import profile from "../img/profile.jpg";

const about = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div id="about" className="about-container container">
        <div>
          <h1 className="each-section-title">
            <div>
              <span style={{ color: "#52D2B8" }}>02.</span> About Me
            </div>
          </h1>
          <div className="inner-about-container">
            <div className="about-des">
              <p>
                A self-taught Web Developer, who is doing a Bachelor of
                Information Technology, majoring in Cyber Security, trying to
                learn as much as I can during my free time. I'm focusing the
                combination of React and Vue with Node.
              </p>
              <p>
                I am also taking units in the University that are Web related to
                gain knowledge about web dev hand-on. I will be graduating from{" "}
                <span style={{ color: "#52D2B8" }}>Macquarie University</span>{" "}
                mid 2021.
              </p>
              <ul
                className="list-skill"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(140px, 200px))",

                  overflow: "hidden",
                  gridGap: "5px",
                }}
              >
                <li>Javascrip (ES6+)</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>HTML & CSS</li>
                <li>Vue.js</li>
              </ul>
            </div>
            <div  className="about-profile-container">
              <img className="about-profile" src={profile} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
