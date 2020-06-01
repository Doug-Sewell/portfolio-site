import React from 'react';
import classes from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const navigation = () => {
    return (
        <div className={classes.NavContainer}>
            <ul className={classes.NavList}>
                <li><NavLink
                    exact
                    to="/"
                    activeStyle={{ color: 'yellow' }}>Home</NavLink></li>
                <li><NavLink
                    exact
                    to="/professional-experience"
                    hoverStyle={{color:'orange'}}
                    activeStyle={{ color: 'yellow' }}>Professional Experience</NavLink></li>
                <li><NavLink
                    exact
                    to="/contact"
                    activeStyle={{ color: 'yellow' }}>Contact</NavLink></li>
            </ul>
        </div>
    )
}

export default navigation;