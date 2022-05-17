import React from "react";
import { Container, Button, Link, Stack, TextField, Typography, Box } from "@mui/material";
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
           <TextField required id="input1" type="email" sx={{
               backgroundColor: "white",
               borderRadius: "12px",
               width: "407px",
               height: "40px",
               marginTop: "10px"
        }} size="small"></TextField>
         <Typography variant="body2" sx={{
                  color: "rgb(197,197,197,1)", 
                  fontWeight: "100",
                  marginTop: "10px",
                  textAlign:"center",
                  alignSelf: "flex-start"
                  }}>
                     PASSWORD
        </Typography>
        <TextField required id="input1" type="password"
         sx={{
               backgroundColor: "white",
               borderRadius: "12px",
               width: "407px",
               height: "40px",
               marginTop: "10px"
        }} size="small"></TextField>
         <Link href="#" underline="none" sx={{alignself: "flex-start", marginTop: "5px"}}>Forget your password</Link>
         <Button variant="contained" sx={{
             height: "51px", 
             marginTop: "10px",
             backgroundColor: "rgba(80,92,234,1)",
             borderRadius: "12px",
             fontSize: "22px",
             fontWeight: "700",
             }}>Login</Button> 
         <Box sx={{mt: "5px", color:"#C5C5C5", display: "inline"}}>
             <Typography variant="body2" color="#C5C5C5" > Need an account? <Link href="#" underline="none">Register</Link> </Typography>
             
             </Box>
        </Stack>
        </Container>
     </Stack>
    );
}
export default InputPart;