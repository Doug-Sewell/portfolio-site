import React, { Component } from 'react';
import classes from './Modal.module.css';

class Modal extends Component {


    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    render() {

        let responsibilities = null;

        if (this.props.jobResponsibilities) {
            responsibilities = this.props.jobResponsibilities.map((responsibility, index) => <li key={index}>{responsibility}</li>);
        }

        return (

            <div>

                {/*Backdrop */}
                <div
                    style={{ display: this.props.show ? '' : 'none' }
                    }
                    className={classes.Backdrop}
                    onClick={this.props.closeModal}></div>



                {/*Modal */}
                <div className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translate(-50%,-50%)' : 'translate(-50%,-150vh)', //Keeps trajectory of straight up and down.
                        opacity: this.props.show ? '1' : '0' //Fades when show property is set to false.

                    }} >
                    <p
                        className={classes.Exit}
                        onClick={this.props.closeModal}>X</p>
                    <h2>{this.props.jobTitle}</h2>
                    <p>{this.props.jobDescription}</p>
                    {this.props.jobResponsibilities ? <ul>{responsibilities}</ul> : null}
                </div>

            </div>



        );
    }
}
export default Modal;