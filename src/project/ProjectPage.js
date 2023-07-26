import React from 'react'
import ProjectItemData from './ProjectItemData'
import { Box, Typography } from '@mui/material'
import LogoBar from '../header/LogoBar'
import HeaderBar from '../header/HeaderBar'
import image1 from "../assets/images/first.png"
import image2 from "../assets/images/second.png"
import image3 from "../assets/images/third.png"
import image4 from "../assets/images/video4.mp4"
import image6 from "../assets/images/video6.mp4"
import image5 from "../assets/images/fifth.png"
import ProjectItemForVideo from './ProjectItemForVideo'
// import Navbar from '../header/Header'
// import Header from '../header/Header'
// import first from "../../public/images/first"

const ProjectPage = () => {

    const images=[{
        imageUrl : image1,
        title : "Vetic",
        description:"UX UI | Branding | System design",
        routerLink:"/project/vetic"
    },
{
    imageUrl:image2,
    title : "CURA - Microsoft DC'22",
        description:"UI UX | Case Study",
        routerLink:"/project/cura"
}
,{
    imageUrl:image3,
title : "Paws&Wimgs",
description:"UX UI | Branding | System design",
routerLink:"/project/paws&wings"} 
] 
  return (
<Box height={"100%"} width={"100%"} background="black" >
 
   <HeaderBar/>

 <LogoBar /> 
    <Box

      display="flex"
      flexWrap={"wrap"}
      flexDirection={"row"}
      maxHeighteight={"980"}
      maxWidth={1260}
      // padding={1}
    margin="auto"
    marginTop={"auto"}
      justifyContent="center"
      alignItems={"center"}
    >
   { images.map((item,index) => (
        <ProjectItemData
        imageUrl={item.imageUrl}
        title={item.title}
        description={item.description}
        routerLink={item.routerLink}/>
    ))}
    <ProjectItemForVideo 
    imageUrl={image4}
    title={"Looks Salon"}
    description={"Social Media | Visual Design"}
    routerLink={"/project/looks"}
    />
    <ProjectItemData
    imageUrl={image5}
    title={"Raahi"}
    description={"UI UX | Case Study"}
    routerLink={"/project/raahi"}
    />
    <ProjectItemForVideo
    imageUrl={image6}
    title={"NID Portfolio"}
    description={"All Indian Rank 3 | Graphic Design 2023 "}
    />
        </Box>
        <Box width="80%" margin="auto"  display="flex"
  justifyContent="center"
  alignItems="center" >
        <Typography marginTop="2%" marginBottom={2} fontFamily={"Work Sans"} color="white" >Made with ❣️ by <b>Raghav Sharma</b>
          </Typography>
          </Box>
    </Box>
   
  )
}

export default ProjectPage;