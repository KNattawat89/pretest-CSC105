import React from "react";
import { Box, Typography } from "@mui/material";


const NavbarItem = (props) => {
    return(
        <Box
        sx={{
            width: "132px",
            height: "37px",
            backgroundColor: "rgba(234,234,234,1)",
            borderRadius: "12px",
            marginLeft: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}
        >
            <Typography >{props.text}</Typography>
        </Box>
    );
}
export default NavbarItem;