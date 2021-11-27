import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";

import classes from "./Portfolio.module.css";

function Portfolio() {
  return (
    <>
      <Card>
        <Typography
          variant="h4"
          align="center"
          className={classes.top_description}
          gutterBotom gutterTop
        >
          These are links to different React.js projects that I have created
          from scratch. All stylings and logic done by myself.
        </Typography>
        <List className={classes.list}>
          <ListItem disablePadding >
            <Typography variant="p" gutterBottom>
              <Link
                href="http://pcrain9.github.io/react_food_order_project"
                className={classes.link}
              >
                This app
              </Link>{" "}
              simulates a food ordering experience. Users can add items to their
              cart, edit their cart from the top of the page, then 'checkout'
              their order.
            </Typography>
          </ListItem>
          <ListItem disablePadding>
            <Typography variant="p" gutterBottom>
              <Link
                href="http://pcrain9.github.io/react_sites"
                className={classes.link}
              >
                This stadium finder app
              </Link>{" "}
              will ask for a location and return all nearby professional
              baseball stadiums. Uses a number of API calls including Google
              APIs and a geolocator for baseball stadiums that I discovered.
            </Typography>
          </ListItem>
          <ListItem disablePadding>
            <Typography variant="p">
              <Link
                href="http://pcrain9.github.io/weather_app"
                className={classes.link}
              >
                This weather app
              </Link>{" "}
              was made to simulate weather.com. In this app, it will first
              display the weather near your location. Then, the user can serach
              for the weather anywhere in the United States through an
              integrated Google search bar.
            </Typography>
          </ListItem>
        </List>
      </Card>
    </>
  );
}

export default Portfolio;
