import {
  AppBar,
  Avatar,
  Box,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import logoRaghav from "../assets/images/logoRaghav.gif";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import img1 from "../assets/Vetic/1.png";
import img2 from "../assets/Vetic/2.png";
import img3 from "../assets/Vetic/3.png";
import img4 from "../assets/Vetic/4.png";
import img5 from "../assets/Vetic/5.png";
import img6 from "../assets/Vetic/6.png";
import img7 from "../assets/Vetic/7.png";
import img8 from "../assets/Vetic/8.png";
import img9 from "../assets/Vetic/9.png";
import img10 from "../assets/Vetic/10.png";
import img11 from "../assets/Vetic/11.png";
import img12 from "../assets/Vetic/12.png";
import img13 from "../assets/Vetic/13.png";
import img14 from "../assets/Vetic/14.png";
import img15 from "../assets/Vetic/15.png";
import img16 from "../assets/Vetic/16.png";
import img17 from "../assets/Vetic/17.png";
import img18 from "../assets/Vetic/18.png";
import img19 from "../assets/Vetic/19.png";
import behance from "../assets/images/Behance.png";
import { Link } from "react-router-dom";
import "./projextDesc.css";
import InstagramIcon from "@mui/icons-material/Instagram";

const Project1 = () => {
  return (
    <div className="projectDescription">
      <div
        id="top"
        className="grid"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          gap: "20px",
        }}
      >
        {/* First column */}
        <div
          className="verticalBar"
          style={{
            "@media screen and (max-width: 768px)": { display: "none" },
          }}
        >
          <div
            style={{
              display: "flex",
              position: "sticky",
              top: 0,
              zIndex: 1000,
              flexDirection: "column",
              paddingTop: "35%",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <Avatar
              width="62.75px"
              height="49.6px"
              sx={{ bgcolor: "black" }}
              variant="square"
            >
              <a href="/">
                <img
                  style={{
                    width: "100px", // increase the width as per your requirement
                    height: "80px", // increase the height as per your requirement
                  }}
                  src={logoRaghav}
                />
              </a>
            </Avatar>
          </div>
        </div>

        {/* Second column */}
        <div style={{ width: "100%" }}>
          <Box
            sx={{
              flexGrow: 1,
              width: "100%",
              margin: "auto",
              display: "block",
              "@media screen and (max-width: 768px)": {
                width: "100%",
                margin: "auto",
              },
            }}
          >
            <Button LinkComponent={Link} to="/work">
              <ArrowBackIcon
                className="arrowIcon"
                sx={{ color: "#0101F6", paddingTop: "20px" }}
              />
            </Button>
          </Box>
          <Box className="ProjDesc" sx={{ flexGrow: 1, marginTop: "40px" }}>
            <Typography
              fontFamily={"Poppins"}
              fontWeight={700}
              fontSize={{ xs: "30px", sm: "34px" }}
              sx={{ color: "#0101F3" }}
            >
              Vetic - Pet Care Reimagined
            </Typography>
            <Typography
              fontFamily={"Poppins"}
              fontWeight={500}
              fontSize={{ xs: "17px", sm: "20px" }}
              lineHeight={3}
              sx={{ color: "#0101F3" }}
            >
              <i>UX UI | Branding | Website Design</i>
            </Typography>
            <Box sx={{ flexGrow: 1, width: { xs: "90%", sm: "80%" } }}>
              <Typography
                variant="body"
                fontFamily={"Poppins"}
                fontWeight={500}
                fontSize={{ xs: "14px", sm: "14px" }}
                lineHeight={1}
                sx={{ color: "#000000" }}
              >
                This project is focused on providing high-quality veterinary
                care for pets, with a commitment to affordability and
                convenience. It features a digital-first approach that combines
                modern clinics with innovative technology to create a
                comfortable and stress-free experience for both pets and their
                owners.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              marginTop: "20px",
              flexDirection: "column",
              width: "100%",
              height: "auto",
              "@media screen and (max-width: 450px)": { width: "100%" },
            }}
          >
            <img
              alt="image"
              style={{ width: "100%", maxWidth: "905px", height: "auto" }}
              src={img1}
            />

            <img
              alt="image1"
              style={{ width: "100%", maxWidth: "905px", height: "auto" }}
              src={img2}
            />

            <img
              alt="image1"
              style={{ width: "100%", maxWidth: "905px", height: "auto" }}
              src={img3}
            />

            <img
              alt="image1"
              style={{ width: "100%", maxWidth: "905px", height: "auto" }}
              src={img4}
            />

            <img
              id="branding"
              alt="image1"
              style={{ width: "100%", maxWidth: "905px", height: "auto" }}
              src={img5}
            />

            <img
              alt="image1"
              style={{ width: "100%", maxWidth: "905px", height: "auto" }}
              src={img6}
            />

            <img
              alt="image1"
              style={{ width: "100%", maxWidth: "905px", height: "auto" }}
              src={img7}
            />

            <img
              alt="image1"
              style={{ width: "100%", maxWidth: "905px", height: "auto" }}
              src={img8}
            />

            <img
              alt="image1"
              style={{ width: "100%", maxWidth: "905px", height: "auto" }}
              src={img9}
            />

            <img
              alt="image1"
              style={{ width: "100%", maxWidth: "905px", height: "auto" }}
              src={img10}
            />

            <img
              id="mockup"
              alt="image1"
              style={{ width: "100%", maxWidth: "905px", height: "100%" }}
              src={img11}
            />

            <img
              alt="image1"
              style={{ width: "100%", maxWidth: "905px", height: "auto" }}
              src={img12}
            />

            <img
              alt="image1"
              style={{ width: "100%", maxWidth: "905px", height: "auto" }}
              src={img13}
            />

            <img
              alt="image1"
              style={{ width: "100%", maxWidth: "905px", height: "auto" }}
              src={img14}
            />

            <img
              alt="image1"
              style={{ width: "100%", maxWidth: "905px", height: "auto" }}
              src={img15}
            />

            <img
              alt="image1"
              style={{ width: "100%", maxWidth: "905px", height: "auto" }}
              src={img16}
            />

            <img
              alt="image1"
              style={{ width: "100%", maxWidth: "905px", height: "auto" }}
              src={img17}
            />

            <img
              id="website"
              alt="image1"
              style={{ width: "100%", maxWidth: "905px", height: "auto" }}
              src={img18}
            />

            <img
              alt="image1"
              style={{ width: "100%", maxWidth: "905px", height: "auto" }}
              src={img19}
            />
          </Box>
        </div>

        {/* Third column */}
        <div
          className="navigationbar"
          style={{
            "@media screen and (max-width: 768px)": { display: "none" },
          }}
        >
          <div
            style={{
              display: "flex",
              position: "sticky",
              top: 0,
              zIndex: 1000,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <Typography
              fontFamily={"Krona One"}
              fontSize={{ xs: "10px", sm: "12px", paddingTop: "10px" }}
            >
              <a
                onMouseEnter={(e) => (e.target.style.color = "#AAE800")}
                onMouseLeave={(e) => (e.target.style.color = "black")}
                href="#top"
                style={{ color: "black", textDecoration: "none" }}
              >
                Top of Page
              </a>
            </Typography>
            <Typography
              fontFamily={"Krona One"}
              fontSize={{ xs: "10px", sm: "12px", paddingTop: "10px" }}
            >
              <a
                onMouseEnter={(e) => (e.target.style.color = "#AAE800")}
                onMouseLeave={(e) => (e.target.style.color = "black")}
                href="#branding"
                style={{ color: "black", textDecoration: "none" }}
              >
                Branding{" "}
              </a>
            </Typography>
            <Typography
              fontFamily={"Krona One"}
              fontSize={{ xs: "10px", sm: "12px", paddingTop: "10px" }}
            >
              <a
                onMouseEnter={(e) => (e.target.style.color = "#AAE800")}
                onMouseLeave={(e) => (e.target.style.color = "black")}
                href="#mockup"
                style={{ color: "black", textDecoration: "none" }}
              >
                Mockups{" "}
              </a>
            </Typography>
            <Typography
              fontFamily={"Krona One"}
              fontSize={{ xs: "10px", sm: "12px", paddingTop: "10px" }}
            >
              <a
                onMouseEnter={(e) => (e.target.style.color = "#AAE800")}
                onMouseLeave={(e) => (e.target.style.color = "black")}
                href="#website"
                style={{ color: "black", textDecoration: "none" }}
              >
                Website{" "}
              </a>
            </Typography>
          </div>
        </div>
      </div>
      <div>
        <Box
          width="100%"
          margin="auto"
          marginTop={"-2%"}
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems="center"
          sx={{ background: "black" }}
        >
          <Typography
            marginTop="7%"
            fontFamily={"Krona One"}
            fontWeight={100}
            color="white"
            fontSize={"21px"}
          >
            Thanks for watching
          </Typography>
          <Typography
            fontWeight={200}
            marginTop="1%"
            fontFamily={"Work Sans"}
            color="white"
            fontSize={"26.5px"}
          >
            {" "}
            💖
          </Typography>

          <Typography
            marginTop="1%"
            marginBottom="2%"
            fontFamily={"Krona One"}
            fontWeight={100}
            color="#787878"
            width={"40%"}
            textAlign={"center"}
            fontSize={"9.5px"}
            sx={{ "@media screen and (max-width: 550px)": { fontSize: "6px" } }}
          >
            Calling all feedback ninjas! I need your stealthy insights to level
            up!
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <a
              href="https://instagram.com/raghav._.xd?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
            >
              <InstagramIcon sx={{ color: "#E3E4E68C", margin: 3 }} />
            </a>
            <a
              href="https://www.linkedin.com/in/-raghavsharma/"
              target="_blank"
            >
              <LinkedInIcon sx={{ color: "#E3E4E68C", margin: 3 }} />
            </a>
            <a href="https://www.behance.net/raghavsharma3" target="_blank">
              <img
                alt="image1"
                src={behance}
                style={{
                  height: "32px",
                  width: "32px",
                  margin: "20px",
                }}
              ></img>
            </a>{" "}
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Project1;
