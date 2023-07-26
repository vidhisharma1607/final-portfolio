import { AppBar, Avatar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import logoRaghav from "../assets/images/logoRaghav.mp4"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import img1 from "../assets/Raahi/1.png"
import img2 from "../assets/Raahi/2.png"
import img3 from "../assets/Raahi/3.jpg"
import img4 from "../assets/Raahi/4.png"
import img5 from "../assets/Raahi/5.png"
import img6 from "../assets/Raahi/6.png"
import img7 from "../assets/Raahi/7.png"
import img8 from "../assets/Raahi/8.png"
import img9 from "../assets/Raahi/9.png"
import img10 from "../assets/Raahi/10.png"
import img11 from "../assets/Raahi/11.png"


import behance from "../assets/images/Behance.png"
import { Link } from 'react-router-dom';
import "./projextDesc.css"
import InstagramIcon from '@mui/icons-material/Instagram';
const Project5 = () => {
  return (
    <div className='projectDescription'>
    <div id='top' className="grid" style={{  width: '100%', height: "100%", backgroundColor: 'white', gap: '20px' }}>
      {/* First column */}
      <div className='verticalBar' style={{  '@media screen and (max-width: 768px)': { display: 'none' } }}>
      <div style={{ display: 'flex', position: 'sticky', top: 0, zIndex:1000, flexDirection: "column", paddingTop:"35%", alignItems: "center", height: "100vh" }}>
        <Avatar width="62.75px" height="49.6px" sx={{ bgcolor: "black",  }} variant="square">
          <video width="62.75px" height="49.6px" autoPlay loop muted src={logoRaghav} />
        </Avatar>
      </div>
      </div>
      

      {/* Second column */}
      <div style={{ width: '100%' }}>
        <Box sx={{ flexGrow: 1, width: "100%", margin: "auto",display: 'block', '@media screen and (max-width: 768px)': { width: "100%" } }}>
          <Button LinkComponent={Link} to="/work">
            <ArrowBackIcon className='arrowIcon' sx={{ color: "#0101F6"}} />
          </Button>
        </Box>
        <Box className="ProjDesc" sx={{ flexGrow: 1,  marginTop: "40px" }} >
          <Typography fontFamily={"Poppins"} fontWeight={700} fontSize={{ xs: "10px", sm: "30px" }} sx={{ color: "#0101F3" }}>Raahi - Har Safar ka Saathi</Typography>
          <Typography fontFamily={"Poppins"} fontSize={{ xs: "10px", sm: "14px" }} lineHeight={3} sx={{ color: "#0101F3" }}><i>UX UI | Case Study | App Design</i></Typography>
          <Box sx={{ flexGrow: 1, width: { xs: "90%", sm: "60%" } }}>
            <Typography variant='body' fontFamily={"Poppins"} fontSize={{ xs: "8px", sm: "12px" }} lineHeight={-1} sx={{ color: "#000000" }}>The objective of this UX case study was to recognize and tackle the challenges confronted by truck drivers and develop an application to resolve them. The project aimed to enhance the working conditions of truck drivers, as well as boost their productivity and safety levels.</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", marginTop:"20px", flexDirection: "column", width: "100%", height: "auto", '@media screen and (max-width: 450px)': { width: "100%" } }}>
          
            <img alt="image1" style={{ width: "100%", maxWidth: "905px", height: "auto" }} src={img1} />
        
            <img alt="image1" style={{ width: "100%", maxWidth: "905px", height: "auto" }} src={img2} />
         
            <img id="research" alt="image1" style={{ width: "100%", maxWidth: "905px", height: "auto" }} src={img3} />
         
            <img alt="image1" style={{ width: "100%", maxWidth: "905px", height: "auto" }} src={img4} />
        
         
            <img id="finding" alt="image1"  style={{ width: "100%", maxWidth: "905px", height: "auto" }} src={img5} />
          
            <img alt="image1" style={{ width: "100%", maxWidth: "905px", height: "auto" }} src={img6} />
     
            <img alt="image1" style={{ width: "100%", maxWidth: "905px", height: "auto" }} src={img7} />
          
            <img alt="image1" style={{ width: "100%", maxWidth: "905px", height: "auto" }} src={img8} />
       
            <img alt="image1" style={{ width: "100%", maxWidth: "905px", height: "auto" }} src={img9} />
          
            <img id="interface" alt="image1" style={{ width: "100%", maxWidth: "905px", height: "auto" }} src={img10} />
     
       
       
            <img alt="image1" style={{ width: "100%", maxWidth: "905px", height: "auto" }} src={img11} />
       
        </Box>
      </div>

      {/* Third column */}
      <div className='navigationbar' style={{'@media screen and (max-width: 768px)': { display: 'none' } }} >
      <div style={{ display: 'flex', position: 'sticky', top: 0, zIndex: 1000, flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
       <Typography fontFamily={"Krona One"} fontSize={{ xs: "10px", sm: "12px" , paddingTop:"10px"}}><a onMouseEnter={(e) => e.target.style.color = '#AAE800'} onMouseLeave={(e) => e.target.style.color = 'black'}  href="#top"  style={{color:"black" , textDecoration:"none" }}>Top of Page</a></Typography>
        <Typography fontFamily={"Krona One"} fontSize={{ xs: "10px", sm: "12px",  paddingTop:"10px"}}><a onMouseEnter={(e) => e.target.style.color = '#AAE800'} onMouseLeave={(e) => e.target.style.color = 'black'}  href='#branding'  style={{color:"black" , textDecoration:"none"}}>Branding </a></Typography>
        <Typography fontFamily={"Krona One"} fontSize={{ xs: "10px", sm: "12px" ,  paddingTop:"10px"}}><a onMouseEnter={(e) => e.target.style.color = '#AAE800'} onMouseLeave={(e) => e.target.style.color = 'black'}  href='#mockup'  style={{color:"black" , textDecoration:"none"}}>Mockups </a></Typography>
        <Typography fontFamily={"Krona One"} fontSize={{ xs: "10px", sm: "12px" , paddingTop:"10px"}}><a onMouseEnter={(e) => e.target.style.color = '#AAE800'} onMouseLeave={(e) => e.target.style.color = 'black'}  href='#website'  style={{color:"black" , textDecoration:"none"}}>Website </a></Typography>
      </div>
      </div>
    </div>
    <div>
    <Box width="100%" margin="auto" marginTop={"-5%"} display="flex" flexDirection={"column"}
  justifyContent="center"
  alignItems="center" sx={{ background:"black"}} >
    <Typography  marginTop="10%" fontFamily={"Krona One"} fontWeight={100}  color="white"  fontSize={"21px"}>Thanks for watching
          </Typography>
          <Typography fontWeight={200}   fontFamily={"Work Sans"} fontWeight={100}  color="white" fontSize={"20.5px"} > 💖
          </Typography>
         
        <Typography  marginTop="2%" marginBottom="2%" fontFamily={"Krona One"}  fontWeight={100} color="#787878" width={"40%"} textAlign={"center"} fontSize={"10.5px"}>Calling all feedback ninjas! I need your stealthy insights to level up!

          </Typography>
          <Box sx={{display:"flex", flexDirection:"row"}}><a href="https://instagram.com/raghav._.xd?igshid=OGQ5ZDc2ODk2ZA=="><InstagramIcon sx={{color:"#E3E4E68C" , margin:3}}/></a><a href="https://www.linkedin.com/in/-raghavsharma/"><LinkedInIcon sx={{color:"#E3E4E68C" , margin:3}}/></a><a href="https://www.behance.net/raghavsharma3"><img alt="image1" src={behance} style={{
            height:"32px" ,width:"32px" ,margin:"20px"
          }} ></img></a> </Box>
          </Box>
    </div>
  </div>
  )
}

export default Project5