import React from 'react';
import Photo from '../../UI/DougPhoto/DougPhoto';
import classes from './Header.module.css';
import Card from '../../UI/Card/Card';

const Header = () => (
    <div className={classes.headerContainer}>
        <div className={classes.header}>
            <div className={classes.photo}>
                <Photo />
            </div>
            <Card className={classes.Card}>
                <h1>Doug Sewell</h1>
                <h2>Let's Build Great Things Together</h2>
            </Card>
        </div>
    </div>
)


export default Header;