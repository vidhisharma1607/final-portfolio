import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import { Avatar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const HeaderBar = () => {
  return (
    <Box
    sx={{
      flexGrow: 1,
      width: "65%",
      margin: "auto",
      justifyContent: "space-between",
    }}
  >
    <AppBar position="static" sx={{ background: "black" }}>
      <Toolbar>
        <Button LinkComponent={Link} to="/">
          <ArrowBackIcon
            sx={{
              color: "white",
              fontSize: "30px",
              marginLeft: "-140%",
              "@media screen and (max-width: 450px)": {
                marginLeft: "-180%",
                fontSize: "18px",
              },
            }}
          />
        </Button>
        {/* <Avatar sx={{ bgcolor:"white"}} src="https://img.freepik.com/premium-photo/beautiful-taj-mahal-sunrise-its-reflection-india-agra_400112-861.jpg" variant="square"></Avatar> */}
        <Button
          sx={{ marginLeft: "auto", display: "flex", flexDirection: "row" }}
          LinkComponent={Link}
          to="/about"
        >
          <a
            onMouseEnter={(e) => (e.target.style.color = "#F600FF")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            <Typography
              color={"white"}
              fontFamily={"poppins"}
              fontSize={18}
              fontWeight={700}
              sx={{
                "@media screen and (max-width: 450px)": { fontSize: "13px" },
              }}
            >
              {" "}
              About Me{" "}
            </Typography>
          </a>{" "}
          <SouthEastIcon
            sx={{
              fontSize: "18px",
              color: "white",
              "@media screen and (max-width: 450px)": { fontSize: "13px" },
            }}
          />{" "}
        </Button>
      </Toolbar>
    </AppBar>
  </Box>
  );
};

export default HeaderBar;
