import React from 'react';
import image from '../../assets/images/doug.png';
import classes from './DougPhoto.module.css';

const photo = () => <img
    className={classes.photo}
    src={image}
    alt="Doug Sewell" />;

export default photo;