import React from "react";
import "../CSS/portfolio.css";
import twitterClone from "../img/twitter-clone.PNG";
import img2 from "../img/color.PNG";
import movie from "../img/movie.PNG";
import bandQuest from "../img/bandquest.PNG";
import GifModal from "./GifModal";
import bandGif from "../gif/bandGif.gif";
import colorGif from "../gif/colorGif.gif";
import movieGif from "../gif/movieGif.gif";
import twitterCloneGif from "../gif/twitterCloneGif.gif";

const Portfolio = () => {
  const item0site = "https://band-quest.web.app/";
  const item0git = "https://github.com/chhunsocheat/Merus-Band";
  const item1Url = "https://twitter-frontend-c990f.web.app/";
  const item1GitUrl =
    "https://github.com/MQCOMP3120-2020/individual-web-development-task-SocheatChhun";
  const item2Url = "https://gifted-lalande-199a27.netlify.com";
  const item2GitUrl = "https://github.com/chhunsocheat/React-Color-App";
  const movieUrl ="https://blissful-bohr-4690c8.netlify.app/"
  const movieGit ="https://github.com/chhunsocheat/screel"
  return (
    <div id="work" className="work-big-container about-container container">
      <h1 className="each-section-title">
        <span style={{ color: "#52D2B8" }}>03.</span> My Projects
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p className="site-can" style={{ color: "#52D2B8" }}>
          Sites might take some time to load cause I"m hosting on free services.
        </p>
      </div>
      <div className="work-container">
        <div className="inner-work-container">
          {/* Project Number 0 */}

          <div className="project-image item2-image">
            <GifModal thumbnail={bandQuest} gifFile={bandGif} />
          </div>
          <div className="project-content  item2-content project-content-left">
            <p
              className="project-overline project-overline-left"
              style={{ textAlign: "start" }}
            >
              Featured Project
            </p>
            <h3
              className="project-title project-title-left"
              style={{ textAlign: "justify" }}
            >
              BandQuest
            </h3>
            <div className="project-description">
              <p>
                <p style={{ color: "#64ffda" }}>
                  Click on image to see preview
                </p>
                A platform inspired by a start up based in Sydney. BandQuest is
                similar to Fivver. However, this platform is focused on Band
                Freelancing. User and band can interact with each other. For
                example, making requests and responding to requests, giving
                reviews and posting videos.
              </p>
            </div>
            <div className="project-tech-list">
              <ul className="ul-left">
                <li>Redux</li>
                <li>Express</li>
                <li>React.js</li>
              </ul>
              <div></div>

              <div className="project-link">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="anchor-tag"
                  href={item0git}
                >
                  <i class="fab fa-github"></i>
                  Github
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="anchor-tag"
                  href={item0site}
                >
                  <i class="fas fa-external-link-alt"></i>
                  External
                </a>
              </div>
              <div></div>
            </div>
          </div>
          {/* Project Number 1 */}

          <div className="project-image">
            <GifModal thumbnail={movie} gifFile={movieGif} />
          </div>
          <div className="project-content project-content-right">
            <p
              className="project-overline project-overline-right"
              style={{ textAlign: "end" }}
            >
              Featured Project
            </p>
            <h3
              className="project-title project-title-right"
              style={{ textAlign: "end" }}
            >
              Screel
            </h3>
            <div className="project-description">
              <p>
                <p style={{ color: "#64ffda" }}>
                  Click on image to see preview
                </p>
                A movie platform where user can go and look for any movie that they like,
                the platform also show what movie is popular and user can also see the IMDB rating and
                the casts of each movie.
              </p>
            </div>
            <div className="project-tech-list">
              <div style={{ marginTop: "0.6em" }}></div>
              <ul className="ul-right">
                <li>React</li>
                <li>MovieDB</li>
              </ul>
              <div></div>
              <div className="project-link">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="anchor-tag"
                  href={movieGit}
                >
                  <i class="fab fa-github"></i>
                  Github
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="anchor-tag"
                  href={movieUrl}
                >
                  <i class="fas fa-external-link-alt"></i>
                  External
                </a>
              </div>
            </div>
          </div>

          {/* Project Number 2 */}

          <div className="project-image item2-image">
            <GifModal thumbnail={img2} gifFile={colorGif} />
          </div>
          <div className="project-content  item2-content project-content-left">
            <p
              className="project-overline project-overline-left"
              style={{ textAlign: "start" }}
            >
              Featured Project
            </p>
            <h3
              className="project-title project-title-left"
              style={{ textAlign: "justify" }}
            >
              Color Palette
            </h3>
            <div className="project-description">
              <p>
                <p style={{ color: "#64ffda" }}>
                  Click on image to see preview
                </p>
                Built with React and used various Raect Eco-System Libraries, it
                is a clone of color palette, but with some added features.
              </p>
            </div>
            <div className="project-tech-list">
              <ul className="ul-left">
                <li>Chroma.js</li>
                <li>RC Slider</li>
                <li>React.js</li>
              </ul>
              <div></div>

              <div className="project-link">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="anchor-tag"
                  href={item2GitUrl}
                >
                  <i class="fab fa-github"></i>
                  Github
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="anchor-tag"
                  href={item2Url}
                >
                  <i class="fas fa-external-link-alt"></i>
                  External
                </a>
              </div>
              <div></div>
            </div>
          </div>

          {/* Project Number 3 */}

          <div className="project-image">
            <GifModal thumbnail={twitterClone} gifFile={twitterCloneGif} />
          </div>
          <div className="project-content project-content-right">
            <p
              className="project-overline project-overline-right"
              style={{ textAlign: "end" }}
            >
              Featured Project
            </p>
            <h3
              className="project-title project-title-right"
              style={{ textAlign: "end" }}
            >
              Twitter Clone
            </h3>
            <div className="project-description">
              <p>
                <p style={{ color: "#64ffda" }}>
                  Click on image to see preview
                </p>
                A fully functional social media application for user to register
                and tweet. User can change their profile picture and tweet,
                mention or even tweet hashtags. This project was part of my
                assigment for
                <span style={{ color: "#52D2B8" }}>
                  {" "}
                  COMP3120 Advanced Web Development.
                </span>{" "}
                There are also some information about the Covid-19 situation.
              </p>
            </div>
            <div className="project-tech-list">
              <div style={{ marginTop: "0.6em" }}></div>
              <ul className="ul-right">
                <li>React</li>
                <li>Firebase</li>
                <li>Redux</li>
                <li>Node.js</li>
              </ul>
              <div></div>
              <div className="project-link">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="anchor-tag"
                  href={item1GitUrl}
                >
                  <i class="fab fa-github"></i>
                  Github
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="anchor-tag"
                  href={item1Url}
                >
                  <i class="fas fa-external-link-alt"></i>
                  External
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
