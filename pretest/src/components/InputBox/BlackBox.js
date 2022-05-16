import React from "react";
import { Box, Grid, Typography } from "@mui/material";
const BlackBox = () => {
    return ( 
     <Box
      sx={{
          width: "804px",
          height: "502px",
          backgroundColor: "rgb(47,50,55,1)",
          borderRadius: "12px",
        
      }}
     >
       <Grid container>
        {/* <Grid item xs={8}>
           <Grid item xs={8} 
            sx={{display: "flex",
                justifyContent: "center",
                alignItems: "center"
             }}
            >
                <Typography variant="h6" sx={{
                  color: "white", 
                  fontWeight: "700",
                  marginTop: "48px",
                  }}>
                      Welcome back
                </Typography>
            </Grid>
            <Grid item xs={8} 
              <Typography variant="h6" sx={{
                  color: "white", 
                  fontWeight: "100",
                  marginTop: "12px",
                  }}>
                     We're so excited to sleep again
              </Typography>
          
           <Grid item xs={4}>

           </Grid>
        </Grid> */}
       </Grid>
     </Box>
    );
}
export default BlackBox;