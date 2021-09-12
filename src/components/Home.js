import React from "react";
import image from "./Capture.PNG";

import classes from "./Home.module.css";
function Home() {
  return (
    <div className={classes.home_container}>
      <h1 className={classes.home_page_text}>
        Passionate, driven, self-taught.
      </h1>
      <div className={classes.image_container}>
        <img src={image} alt="null" className={classes.home_page_image} />
      </div>
    </div>
  );
}

export default Home;
