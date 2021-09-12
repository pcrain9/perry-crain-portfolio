import React from 'react';

import classes from './TopBanner.module.css';

function TopBanner() {
    return (
        <div className={classes.banner_container}>
            <h2 className={classes.banner_title}>Perry Crain</h2>
            <h5 className={classes.banner_words}>Front-end Web Developer</h5>
        </div>
    )
}

export default TopBanner;
