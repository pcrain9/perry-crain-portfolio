import React from 'react'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import classes from './About.module.css';

function About() {
    return (
        <div className={classes.container}>
            <Typography variant='h3'>About me</Typography>
            <Typography variant='p'>From understanding foundations of computing using C and Java to dedicating myself to the inner-workings of front- and back-end web, I’ve mastered React.js (functional and class-based components). I learned core features of CSS, HTML, and JavaScript, at which I am now adept. My back-end learning involved diving into core features of Node.js and the Express.js library.  I a learning more and more about web development every day and my passion for the field has never wavered!</Typography>
            <br />
            <Link underline='none' color='primary' variant='body2' href='https://drive.google.com/file/d/1QeEB7l3W1PkH7rD4P_b5yCDnXslZVBaT/view?usp=sharing'>Check out my resume here </Link>
        </div>
    )
}

export default About;
