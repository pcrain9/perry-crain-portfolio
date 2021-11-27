import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <Box sx={{ width:"100%", position:"absolute", bottom:"0", backgroundColor:"primary.dark", zIndex:"600" }}>
      <Container>
        <Typography variant="h6" textAlign="center" sx={{ color:"primary.contrastText" }}>copyright: Perry Crain, 2021</Typography>
      </Container>
    </Box>
  );
}

export default Footer;
