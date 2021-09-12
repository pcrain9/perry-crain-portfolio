import React from 'react'
import { NavLink } from "react-router-dom";

import classes from './About.module.css';

function About() {
    return (
        <div className={classes.container}>
            <h1>About me</h1>
            <p>lorem ipsum</p>
            <NavLink to="/about">click here for resume</NavLink>
        </div>
    )
}

export default About;
