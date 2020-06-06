import React from 'react';
import classes from './Modal.module.css';

const modal = props => {

    let responsibilities = null;

    if (props.jobResponsibilities) {
        responsibilities = props.jobResponsibilities.map((responsibility,index) => <li key={index}>{responsibility}</li>);
    }

    return (
        <div className={classes.ModalContainer}>
            <div className={classes.Modal}>
                <p 
                className={classes.Exit}
                onClick={() => props.closeModal()}>X</p>
                <h2>{props.company}</h2>
                <h3>{props.jobTitle}</h3>
                <hr />
                <p>{props.jobDescription}</p>
                {props.jobResponsibilities ? <ul>{responsibilities}</ul> : <p>Yo.</p>}
            </div>
        </div>);
}

export default modal;