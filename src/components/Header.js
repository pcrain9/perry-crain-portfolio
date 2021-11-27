import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { styled } from '@mui/system';
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ToolBar from "@mui/material/Toolbar";

import classes from "./Header.module.css";

function Header() {
  const [anchorEl, setAnchorE1] = useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    console.log(event.currentTarget);
    setAnchorE1(event.currentTarget);
  }

  function handleClose() {
    setAnchorE1(null);
  }

  const CustomButton = styled("Button")({
    color:"red"
  });

  
  return (
    <>
      <CssBaseline />
      <AppBar
        position="relative"
        sx={{
          backgroundColor: "primary.light",
        }}
      >
        <ToolBar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button component={NavLink} to={"/"} sx={{ color: "primary.contrastText" }}>
            Home
          </Button>
          <Button
            component={NavLink}
            to={"/portfolio"}
            sx={{ color:"primary.contrastText" }}
          >
            Portfolio
          </Button>
          <Button
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            position="inherit"
            onClick={handleClick}
            sx={{ color:"primary.contrastText" }}
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
            <MenuItem component={NavLink} to={"/about"} onClick={handleClose}>
              About
            </MenuItem>
            <MenuItem
              label="Resume"
              component={Link}
              href={
                "https://drive.google.com/file/d/1QeEB7l3W1PkH7rD4P_b5yCDnXslZVBaT/view?usp=sharing"
              }
              onClick={handleClose}
            >
              Resume
            </MenuItem>
            <MenuItem
              component={Link}
              href={"https://github.com/pcrain9"}
              onClick={handleClose}
            >
              github
            </MenuItem>
          </Menu>
          <Button
            component={Link}
            href={"mailto:pcrain9@gmail.com"}
            sx={{ color:"primary.contrastText" }}
          >
            Contact
          </Button>
        </ToolBar>
      </AppBar>
    </>
  );
}

export default Header;
