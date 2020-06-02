import React from 'react';
import classes from './BackDrop.module.css';

import classnames from 'classnames';

const backdrop = () => {
    return (
        <div className={classes.circleContainer}>
            <div className={classnames([classes.circle,classes.one])}></div>
            <div className={classnames([classes.circle,classes.two])}></div>
            <div className={classnames([classes.circle,classes.three])}></div>
            <div className={classnames([classes.circle,classes.four])}></div>
            <div className={classnames([classes.circle,classes.five])}></div>
            <div className={classnames([classes.circle,classes.six])}></div>
            <div className={classnames([classes.circle,classes.seven])}></div>
            <div className={classnames([classes.circle,classes.eight])}></div>
            <div className={classnames([classes.circle,classes.nine])}></div>
            <div className={classnames([classes.circle,classes.ten])}></div>
            <div className={classnames([classes.circle,classes.eleven])}></div>
            <div className={classnames([classes.circle,classes.twelve])}></div>
            <div className={classnames([classes.circle,classes.thirteen])}></div>
            <div className={classnames([classes.circle,classes.fourteen])}></div>
            <div className={classnames([classes.circle,classes.fifteen])}></div>
            <div className={classnames([classes.circle,classes.sixteen])}></div>
            <div className={classnames([classes.circle,classes.seventeen])}></div>
            <div className={classnames([classes.circle,classes.eighteen])}></div>
            <div className={classnames([classes.circle,classes.nineteen])}></div>
            <div className={classnames([classes.circle,classes.twenty])}></div>
        </div>
    );
}

export default backdrop;