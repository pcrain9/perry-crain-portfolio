import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";

function TopBanner() {
  return (
    <>
      <Box
        sx={{ bgcolor: 'primary.main' }}
        variant="outlined"
      >
          <Container sx={{ border:'1px solid black', width:"25%"}}><Typography color="primary.contrastText" align="center" variant="h2" gutterBottom>
            Perry Crain
          </Typography>
          <Typography color="primary.contrastText" align="center" variant="h5">
            Full-stack web developer.
          </Typography></Container>
      </Box>
    </>
  );
}

export default TopBanner;
