import React from 'react';
import classes from './Navigation.module.css';
const navigation = () => {
    return (
        <div className={classes.NavContainer}>
            <ul className={classes.NavList}>
                <li>Home</li>
                <li>Professional Experience</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default navigation;