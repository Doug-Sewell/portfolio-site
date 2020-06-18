import React from 'react';
import Photo from '../../UI/DougPhoto/DougPhoto';
import classes from './Header.module.css';
import Card from '../../UI/Card/Card';

const Header = () => (
    <div className={classes.headerContainer}>
        <div className={classes.header}>
            <div className={classes.photoContainer}>
                <Photo />
            </div>
            <div className={classes.HeaderCard}>
                <Card>
                    <h1>Doug Sewell</h1>
                    <h2 className={classes.SubHeader}>Building for the Web</h2>
                    <p>Web Developer &amp; IT Professional with experience in various web technologies such React, Node, and
others. Experienced with Web API’s and various libraries to accomplish tasks. Received multiple
scholarships related to development and have a variety of development related certifications. Driven,
passionate, and love to create and learn.</p>
                </Card>
            </div>
        </div>
    </div>
)


export default Header;