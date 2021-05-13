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
                learn as much as I can during my free time. I'm focusing on bringing as much security aspect into web development as much as I can.
              </p>
              <p>
                I'm taking units that can provide me with the security knowledge that I can bring to development. I will be graduating from{" "}
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
                <li>Flask</li>
              </ul>
              <div style={{ position: "relative" }}>
                <a href="https://www.credly.com/badges/0290677b-3e53-4da6-8ba5-889b758acf79/public_url">
                  <i style={{}} class="fab fa-aws">
                    <span
                      style={{
                        fontSize: "0.6em",
                        position: "absolute",
                        top: "10%",
                        marginLeft: "10px",
                        fontWeight:"700"
                      }}
                    >
                      AWS Certified Cloud Practitioner
                    </span>
                  </i>
                </a>
              </div>
            </div>
            <div className="about-profile-container">
              <img loading="lazy" className="about-profile" src={profile} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
