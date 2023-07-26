import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import video1 from "../assets/images/raghavLogo.mp4"
import { Link } from 'react-router-dom';
const LogoBar = () => {
  return (
    <Box sx={{ flexGrow: 1, width:"100%" , margin:"auto", height:"auto", '@media screen and (max-width: 1317px)': {
   display:"none"
    }
    }}>
    <AppBar position="static" sx={{background : "black", height:"15px" }}>
      <Toolbar  background="black">
      <Avatar  width="62.75px" height="49.6px" sx={{bgcolor:"black", paddingLeft:"5%" }} variant="square" ><a href="/"><video width="62.75px" height="49.6px"     autoPlay
       loop
       muted src={video1} /></a>
      </Avatar>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default LogoBar