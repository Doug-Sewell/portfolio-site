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
                    <h2 className={classes.SubHeader}>Let's Build Great Things Together</h2>
                </Card>
            </div>
        </div>
    </div>
)


export default Header;