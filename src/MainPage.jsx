import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./MainPage.css";
import logo from "./assets/Loops/loopWOB.mp4";
import flamingo from "./assets/Loops/Flamingo.mp4";
import TextPart from "./components/MainText";
import MenuIcon from "./assets/icons/Menu.png";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import FooterLoop from "./assets/Loops/FooterLoop.mp4";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Behance from "./assets/icons/Behance.svg";
import WorkMenu from "./components/navSubParts";
import Up from "./assets/icons/Up.png";
import Close from "./assets/icons/Close.png";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const topRef = useRef(null);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className="drawer-content"
    >
      <Link to="/" className="drawer-link">
        <span className="nav-link">Home</span>
      </Link>

      <WorkMenu />

      <Link to="/about" className="drawer-link">
        <span className="nav-link">About Me</span>
      </Link>
    </div>
  );

  // for scrolling to the top in mobile view
  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app" ref={topRef}>
      <div className="upper">
        <div className="row">
          <div className="column">
            <div className="logo">
              <video autoPlay loop muted>
                <source src={logo} type="video/mp4" alt="GIF video" />
              </video>
            </div>
          </div>

          {/* col2 TEXT*/}
          <div className="column column-wide">
            <TextPart />
          </div>

          {/* col3 : FLAMINGO*/}
          <div className="column column-wide">
            <div className="flamingo">
              <video autoPlay loop muted>
                <source src={flamingo} type="video/mp4" alt="GIF video" />
              </video>
            </div>
          </div>

          {/* col4: navbar  */}
          <div className="column">
            <div className="desktop-navbar">
              <Link to="/work" className="anchor">
                <span className="nav-link">Work</span>
                <SouthEastIcon className="icon" />
              </Link>
              <Link to="/about" className="anchor">
                <span className="nav-link">About Me</span>
                <SouthEastIcon className="icon" />
              </Link>
            </div>
            <div className="ham">
              <IconButton
                className="hamburger-menu"
                onClick={toggleDrawer(true)}
              >
                {isOpen ? (
                  <img
                    src={Close}
                    alt="dropdown"
                    className="close-icon"
                    style={{ display: "block", color: "black" }}
                  />
                ) : (
                  <img
                    src={MenuIcon}
                    alt="Menu Icon"
                    style={{ color: "white", width: "90px", height: "70px" }}
                  />
                )}
              </IconButton>

              {/* for up arrow */}
              <IconButton
                className="go-to-the-top"
                onClick={scrollToTop}
                disableRipple
                style={{
                  position: "fixed",
                  bottom: "110px",
                  right: "20px",
                }}
              >
                <img src={Up} style={{ color: "white" }} />
              </IconButton>
            </div>
            <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
              {list()}
            </Drawer>
          </div>
        </div>
      </div>

      {/* FOOTER PART */}
      <div className="footer">
      <video autoPlay loop muted playsInline className="footer-bg">
          <source src={FooterLoop} type="video/mp4" />
        </video>
        {/* Left part of footer */}
        <div className="left">
          <h3>Education</h3>
          <p style={{ fontWeight: "bold" }}>Bachelor of Engineering</p>
          <p style={{ fontStyle: "italic", color: "rgba(255, 255, 255, 0.7)" }}>
            2019-2023
          </p>
          <p style={{ color: "rgba(255, 255, 255, 0.7)" }}>MBM University</p>
          <p style={{ color: "rgba(255, 255, 255, 0.7)" }}>
            Jodhpur, Rajasthan, India
          </p>
          <br />
          <p style={{ fontWeight: "bold" }}>HSC (Science with Mathematics)</p>
          <p style={{ fontStyle: "italic", color: "rgba(255, 255, 255, 0.7)" }}>
            2018
          </p>
          <p style={{ color: "rgba(255, 255, 255, 0.7)" }}>
            {" "}
            Delhi Public School
          </p>
          <p style={{ color: "rgba(255, 255, 255, 0.7)" }}>
            Jodhpur, Rajasthan, India
          </p>
        </div>

        {/* right part of footer */}
        <div className="right">
          <h3>Contact</h3>
          <p>raghavgkk@gmail.com</p>
          <p>work.raghav99@gmail.com</p>
          <br />
          <p style={{ fontWeight: "600" }}>+91 79762 14528</p>
          <br />
          <br />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              
            }}
          >
            <div className="footer-icon-bar">
            <a href="https://www.behance.net/raghavsharma3" target="_blank">
              <img
                src={Behance}
                className="footer-icon"
                style={{ color: "white", width: "35px", height: "35px", paddingBottom:"14px" }}
              />
            </a>
            <a href="https://instagram.com/raghav._.xd?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noreferrer">
              <InstagramIcon
                className="footer-icon"
                style={{ color: "white" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/-raghavsharma/" target="_blank" rel="noreferrer">
              <LinkedInIcon
                className="footer-icon"
                style={{ color: "white" }}
              />
            </a>
            </div>
          </div>
        </div>
      </div>
      <div className="last">
        Made with ❤️ by{" "}
        <span style={{ fontWeight: "600", color: "rgba(255, 255, 255, 1)" }}>
          {" "}
          Raghav Sharma
        </span>
      </div>
    </div>

    //  Routes defined in app.js
  );
};

export default App;
