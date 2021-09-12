import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";

function Header() {
  return (
    <nav className={classes.header_container}>
      <NavLink className={classes.nav_item} to="/">
        Home
      </NavLink>
      {/* <NavLink to="/services" className={classes.nav_item}>
        Services
      </NavLink> */}
      <NavLink to="/portfolio" className={classes.nav_item}>
        Portfolio
      </NavLink>
      <div className={classes.dropdown}>
        <NavLink to="/about" className={classes.nav_item}>
          About
        </NavLink>
        <div className={classes.dropdowncontent}>
          <NavLink to="/about" className={classes.link}>
            about
          </NavLink>
          <a href="http://espn.com" className={classes.link}>
            resume(link to google docs)
          </a>
          <a href="https://github.com/pcrain9" className={classes.link}>
            github
          </a>
        </div>
      </div>
      <a
        className={classes.nav_item}
        href="mailto:pcrain9@gmail.com"
      >
        Contact
      </a>
    </nav>
  );
}

export default Header;
