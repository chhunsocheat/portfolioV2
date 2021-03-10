import React from "react";
import imageOverlay from "../img/earth.jpg";
import "../CSS/contact.css";

class Contact extends React.Component {
  render() {
    return (
      
      <div style={{marginBottom:"100px"}} id="work" className="work-big-container about-container container">
        <h1 className="each-section-title">
        <span style={{ color: "#52D2B8" }}>04.</span> Get In Touch
      </h1>
        <p
          className="about-des"
          style={{ textAlign: "center", marginBottom: "50px" }}
        >
          If you are interested in my works, please feel free to check out my
          resume.
        </p>
        <div className="about-container">
          <p
            style={{ marginLeft: "auto", marginRight: "auto" }}
            className="pt-3 mt-3 "
          >
            <a
              className="btn-self js-scroll px-4"
              href="https://drive.google.com/file/d/1G17vHE8thyPN3NAre3ctzJzLVV1fe6F0/view"
              role="button"
            >
              RESUME
            </a>
          </p>
        </div>
        <div style={{ display: "flex",
         justifyContent: "center",
         marginTop:"30px" }}>
          <a href="https://github.com/chhunsocheat"><i style={{marginRight:"10px"}} class="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/chhun-socheat-494b67156/"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>
    );
  }
}

export default Contact;
