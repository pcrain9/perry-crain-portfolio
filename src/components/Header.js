import React from "react";
import { NavLink } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { Typography } from "@mui/material";
import { AppBar } from "@mui/material";
import { Link } from "@mui/material";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import ToolBar from "@mui/material/Toolbar";

import classes from "./Header.module.css";

function Header() {
  return (
    <AppBar position="relative">
      <ToolBar> 
      <NavLink className={classes.nav_item} to="/">
        Home
      </NavLink>
      <NavLink to="/portfolio" className={classes.nav_item}>
        Portfolio
      </NavLink>
      
        <NavLink to="/about" className={classes.nav_item}>
          About
        </NavLink>
        <Menu className={classes.dropdowncontent}>
          <MenuItem>
            <NavLink to="/about" className={classes.link}>
              about
            </NavLink>
          </MenuItem>
          <MenuItem>
            <Link
              href="https://drive.google.com/file/d/1QeEB7l3W1PkH7rD4P_b5yCDnXslZVBaT/view?usp=sharing"
              variant="body2"
            >
              resume(link to google docs)
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="https://github.com/pcrain9" variant="body2">
              github
            </Link>
          </MenuItem>
        </Menu>
        </ToolBar>
      <Link href="mailto:pcrain9@gmail.com">
        Contact
      </Link>
      
    </AppBar>
  );
}

export default Header;
