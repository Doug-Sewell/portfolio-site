import React from 'react';
import Card from '../../UI/Card/Card';
import classes from './contact.module.css';
import ContactCard from './ContactCard/ContactCard';

const contact = () =>
    <div className={classes.ContactContainer}>
        <h1>Contact</h1>
        <Card>
            <ContactCard />
        </Card>
    </div>

export default contact;