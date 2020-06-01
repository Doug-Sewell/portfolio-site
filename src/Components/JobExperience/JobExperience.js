import React, { Component } from 'react';
import Card from '../../UI/Card/Card';
import classes from './JobExperience.module.css';

class JobExperience extends Component {

    state = {
        jobs: [
            {
                company: 'Practis',
                title: 'Digital Marketing Technologist',
                description: 'Add later'
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
        ]
    }

    render() {

        const jobs = this.state.jobs.map((job, index) => {
            return (<div className={classes.JobCard}>
                <Card
                    key={index}
                    className={classes.JobCard}>{job.company}</Card>
            </div>);
        });

        return (
            <div>
                <h1>Work Experience</h1>
                {jobs}
            </div>
        )
    }
}

export default JobExperience;