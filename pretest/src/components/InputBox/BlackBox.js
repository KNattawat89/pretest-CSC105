import React from "react";
import { Box, Grid } from "@mui/material";
import InputPart from "./Inputpart";
import RightPart from "./RightPart";
const BlackBox = () => {
    return (
        <Box
            sx={{
                width: "804px",
                height: "502px",
                backgroundColor: "rgb(47,50,55,1)",
                borderRadius: "12px",
                display: "flex",
            }}
        >
            <Box flex={2}>
                <InputPart />
            </Box>
            <Box flex={1}>
                <RightPart/>
            </Box>
        </Box>
    );
}
export default BlackBox;