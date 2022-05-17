import React from "react";
import Navbar from "../components/Navbar";
import BlackBox from "../components/InputBox/BlackBox";
import { Container, Box } from "@mui/material";
const Welcome = () => {
    return(
    <div>
    <Navbar/>
    <Box sx={{width:"100vw", height:"100vh",  backgroundColor: "purple"}}>
    <Container sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
     }}>
       <BlackBox/>
    </Container>
    </Box>
    </div>

    );
}
export default Welcome