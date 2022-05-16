import React from "react";
import NavbarItem from "./NavbarItems"
import { Container, Stack, Box, Typography } from "@mui/material";


const Navbar = () => {
    return (
        <Box
        sx={{
            width: "100%",
            backgroundColor: "rgb(248,248,248,1)",
            marginTop: "0px",
           
        }}
        >

        <Container>
           <Stack 
             direction="row"
             height= "75px"
             justifyContent= "space-between"
             alignItems="center"
            
            //  justifyContent="space-between"
            
           >
            <Stack direction="row"
            spacing={2}
            sx={{alignItems: "center"}}
            >
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Video-Game-Controller-Icon-IDV-green.svg/1024px-Video-Game-Controller-Icon-IDV-green.svg.png
            " width="35px" height="35px" />
            <Typography>Due Today, Do Tomorrow</Typography>
            </Stack>
            <Stack direction="row"
        
            >
               <NavbarItem text="Login"/>
               <NavbarItem text="Home"/>
           </Stack>
           </Stack>
        </Container>
        </Box>
    );
}

export default Navbar;