import React from 'react';
import Card from '../../UI/Card/Card';
import classes from './contact.module.css';
import { Icon } from '@material-ui/core';

const contact = () =>
    <div className={classes.ContactContainer}>
        <Card>
            <h1>Let's get in touch</h1>
        </Card>
    </div>

export default contact;