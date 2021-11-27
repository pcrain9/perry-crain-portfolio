import React from "react";
import image from "./Capture.PNG";
import Box from '@mui/material/Box';

import classes from "./Home.module.css";
function Home() {
  return (
    <Box className={classes.home_container}>
      <h1 className={classes.home_page_text}>
        Passionate, driven, self-taught.
      </h1>
      <div className={classes.image_container}>
        <img src={image} alt="null" className={classes.home_page_image} />
      </div>
    </Box>
  );
}

export default Home;
