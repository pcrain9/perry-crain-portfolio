import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { Typography } from "@mui/material";
import { AppBar } from "@mui/material";
import { Link } from "@mui/material";
import { Menu } from "@mui/material";
import { Button } from "@mui/material";
import { MenuItem } from "@mui/material";
import ToolBar from "@mui/material/Toolbar";

import classes from "./Header.module.css";

function Header() {
  const [anchorEl, setAnchorE1] = useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorE1(event.currentTarget);
  }

  function handleClose() {
    setAnchorE1(null);
  }

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <ToolBar>
          <NavLink className={classes.nav_item} to="/">
            Home
          </NavLink>
          <NavLink to="/portfolio" className={classes.nav_item}>
            Portfolio
          </NavLink>
          <Button
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            position='inherit'
            onClick={handleClick}
            sx={{
              margin:'auto'
            }}
          >
            About
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Typography variant="p">About</Typography>
            <MenuItem onClick={handleClose}>
              <NavLink to="/about" className={classes.link}>
                about
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                href="https://drive.google.com/file/d/1QeEB7l3W1PkH7rD4P_b5yCDnXslZVBaT/view?usp=sharing"
                variant="body2"
              >
                resume(link to google docs)
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="https://github.com/pcrain9" variant="body2">
                github
              </Link>
            </MenuItem>
          </Menu>
        </ToolBar>
        <Link href="mailto:pcrain9@gmail.com">Contact</Link>
      </AppBar>
    </>
  );
}

export default Header;
