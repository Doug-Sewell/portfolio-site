import React from 'react';
import classes from './ContactCard.module.css';

const contactCard = () => (
    <div className={classes.ContactContainer}>
        <div className={classes.ContactRowContainer}>
            <div className={classes.IconContainer}><span className={classes.MaterialIcons}>call</span></div>
            <div className={classes.ContactTextContainer}><p><a href="tel:+12012708671" title="Call Me!">(201) 270-8671</a></p></div>
        </div>
        <div className={classes.ContactRowContainer}>
            <div className={classes.IconContainer}><span className={classes.MaterialIcons}>mail</span></div>
            <div className={classes.ContactTextContainer}><p><a href="mailto:Doug@DougSewell.com" title="Email Me!">Doug@DougSewell.com</a></p></div>
        </div>
        <div className={classes.ContactRowContainer}>
            <div className={classes.IconContainer}><span className={classes.MaterialIcons}>code</span></div>
            <div className={classes.ContactTextContainer}><p><a href="https://www.github.com/doug-sewell/" title="See coding examples" target="_blank">GitHub</a></p></div>
        </div>

    </div>
);

export default contactCard;