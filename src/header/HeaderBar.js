import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import { Avatar, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const HeaderBar = () => {
  return (
    <Box sx={{ flexGrow: 1, width:"72%" , margin:"auto", justifyContent:"space-around" }}>
    <AppBar position="static" sx={{background : "black" }}>
      <Toolbar >
        <Button LinkComponent={Link} to="/" >
      <ArrowBackIcon  sx={{color: "white" , '@media screen and (max-width: 450px)':{
        marginLeft:"-100%"
      }}} /></Button>
      {/* <Avatar sx={{ bgcolor:"white"}} src="https://img.freepik.com/premium-photo/beautiful-taj-mahal-sunrise-its-reflection-india-agra_400112-861.jpg" variant="square"></Avatar> */}
      <Button sx={{marginLeft:"auto" }} LinkComponent={Link} to ="/about"><Typography color={"white"} fontFamily={"poppins"}  fontSize={23} fontWeight={700} >About Me {" "}<SouthEastIcon sx={{fontSize:"23px" , position:"absolute", paddingTop:"5px"}}/></Typography> </Button>
      </Toolbar>
     
    </AppBar>
  </Box>
  )
}

export default HeaderBar