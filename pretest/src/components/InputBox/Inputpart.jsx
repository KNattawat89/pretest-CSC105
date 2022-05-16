import React from "react";
import { Container, Grid, Stack, TextField, Typography } from "@mui/material";
const InputPart=() => {
    return (
     <Stack>
         <Typography variant="h6" sx={{
                  color: "white", 
                  fontWeight: "700",
                  marginTop: "48px",
                  textAlign:"center"
                  }}>
                      Welcome back
                </Typography>
         <Typography variant="h6" sx={{
                  color: "white", 
                  fontWeight: "100",
                  marginTop: "10px",
                  textAlign:"center"
                  }}>
                     We're so excited to sleep again
        </Typography> 
        
        <Container sx={{
           display: "flex",
           justifyContent: "center",
           alignItems: "center",
        }}>
        <Stack>
        <Typography variant="body2" sx={{
                  color: "rgb(197,197,197,1)", 
                  fontWeight: "100",
                  marginTop: "40px",
                  textAlign:"center",
                  alignSelf: "flex-start"
                  }}>
                      EMAIL OR PHONE NUMBER
        </Typography>
           <TextField id="input1" sx={{
               backgroundColor: "white",
               borderRadius: "12px",
               width: "407px",
               height: "40px",
               marginTop: "10px"
        }} size="small"></TextField>
        </Stack>
        </Container>
     </Stack>
    );
}
export default InputPart;