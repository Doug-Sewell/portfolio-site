import React from 'react';
import classes from './Modal.module.css';

const modal = props => {

    let responsibilities = null;

    if (props.jobResponsibilities) {
        responsibilities = props.jobResponsibilities.map(responsibility => <li>{responsibility}</li>);
    }

    console.log(responsibilities);

    return (
        <div className={classes.ModalContainer}>
            <div className={classes.Modal}>
                <p className={classes.Exit}>X</p>
                <h2>{props.company}</h2>
                <h3>{props.jobTitle}</h3>
                <hr />
                <p>{props.jobDescription}</p>
                {props.jobResponsibilities ? <ul>{responsibilities}</ul> : <p>Yo.</p>}
            </div>
        </div>);
}

export default modal;