import React, { Component } from 'react';
import Card from '../../UI/Card/Card';
import Modal from '../../UI/Modal/Modal';
import classes from './JobExperience.module.css';

class JobExperience extends Component {

    state = {
        jobs: [
            {
                company: 'Practis',
                title: 'Digital Marketing Technologist',
                description: 'Assist Development Team as well as Marketing Managers in site updates. Utilize various web development and marketing tools to research and identify strategy and digital marketing opportunities for clients.',
                responsibilities: ['Editing and implementing code such as PHP, HTML, CSS, and JavaScript on client accounts',
                    'Website updates & troubleshooting various content management systems (CMS) or through SFTP.',
                    'Routinely audit client websites for WCAG 2.0 AA accessibility and website performance',
                    'Learn front-end technologies and obtain knowledge of latest web and online marketing standards.',
                    'Provide web support for internal and external customers.',
                    'Publish web content across web properties on WordPress websites as well as make theme updates as needed.',
                    'Creation and modification of JSON for web page structured data (schema)']
            },
            {
                company: 'Straight North',
                title: 'SEO Analyst',
                description: 'Add later'
            },
            {
                company: "EarthKind",
                title: 'Marketing Coordinator',
                description: 'Add later'
            },
            {
                company: 'Townsquare Interactive',
                title: 'SEO Analyst',
                description: 'Add later'
            }
        ],
        showModal: true
    }

    closeModal() {
        this.setState({ showModal: false });
    }

    render() {

        const jobs = this.state.jobs.map((job, index) => {
            return (<div key={index} className={classes.JobCard}>
                <Card
                    className={classes.JobCard}>{job.company}</Card>
            </div>);
        });

        let modal = null;

        if (this.state.showModal) {
            modal = <Modal
                company={this.state.jobs[0].company}
                jobTitle={this.state.jobs[0].title}
                jobDescription={this.state.jobs[0].description}
                jobResponsibilities={this.state.jobs[0].responsibilities}
                closeModal={() => this.closeModal()} />
        }

        return (
            <div className={classes.Container}>
                <h1>Work Experience</h1>
                {jobs}
                {modal}
            </div>
        )
    }
}

export default JobExperience;