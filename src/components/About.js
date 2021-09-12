import React from 'react'
import { NavLink } from "react-router-dom";

import classes from './About.module.css';

function About() {
    return (
        <div className={classes.container}>
            <h1>About me</h1>
            <p>From understanding foundations of computing using C and Java to dedicating myself to the inner-workings of front- and back-end web, I’ve mastered React.js (functional and class-based components). I learned core features of CSS, HTML, and JavaScript, at which I am now adept. My back-end learning involved diving into core features of Node.js and the Express.js library.  I a learning more and more about web development every day and my passion for the field has never wavered!</p>
            <NavLink to="/about">click here for resume</NavLink>
        </div>
    )
}

export default About;
