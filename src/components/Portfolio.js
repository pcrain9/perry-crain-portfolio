import React from 'react';

import classes from './Portfolio.module.css';

function Portfolio() {
    return (
        <>
            <h2 className={classes.top_description}>These are links to different React.js projects that I have created from scratch.  All stylings and logic done by myself.</h2>
        
        <nav>
            <ul className={classes.list}>
                <li>
                    <a href='http://pcrain9.github.io/react_food_order_project'
                    className={classes.link}>Food order app</a> <p>This app simulates a food ordering experience.  Users can add items to their cart, edit their cart from the top of the page, then 'checkout' their order.</p>
                </li>
                <li>
                    <a href='http://pcrain9.github.io/react_sites'
                    className={classes.link}>Stadium finder app</a><p>This app will ask for a location and return all nearby professional baseball stadiums.
                    Uses a number of API calls including Google APIs and a geolocator for baseball stadiums that I discovered.</p>
                </li>
                <li>
                    <a href='http://pcrain9.github.io/weather_app'
                    className={classes.link}>Weather app</a> <p>This app was made to simulate weather.com.  In this app, it will first display the weather
                    near your location.  Then, the user can serach for the weather anywhere in the United States through an integrated
                    Google search bar.</p>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Portfolio;
