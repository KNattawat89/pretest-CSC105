import React from "react";
import Navbar from "../components/Navbar";
import BlackBox from "../components/InputBox/BlackBox";
import { Container } from "@mui/material";
const Welcome = () => {
    return(
    <div>
    <Navbar/>
    <Container sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
     }}>
       <BlackBox/>
    </Container>
    </div>

    );
}
export default Welcome