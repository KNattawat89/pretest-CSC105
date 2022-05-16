import React from "react";
import { Stack, Typography } from "@mui/material";
import pic from "../img/image.png";
const RightPart = () => {
    return (
      <Stack
      sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "157px"
      }}
      >
          <img src={pic} width="237px" height="59px"/>
          
          <Typography variant="h6" sx={{
                  color: "white", 
                  fontWeight: "700",
                  marginTop: "12px",
                  textAlign:"center"
                  }}>
                     Unable to Login
            </Typography>
            <Typography variant="body2" sx={{
                  color: "white", 
                  fontWeight: "100",
                  marginTop: "10px",
                  marginRight: "10px",
                  textAlign:"center"
                  }}>
                     Listen to some music, relax yourself, and take a deep breath until you can remember your password
            </Typography>
      </Stack>
    );
}
export default RightPart;