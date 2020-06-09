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
                description: 'Created and executed search engine optimization (SEO) strategies for clients in a variety of industries. Coordinated tasks that needed to be accomplished month-to-month, providing liaison between Account Managers and Account Coordinators. Assisted Account Coordinators with website changes - including JavaScript and CSS updates',
                responsibilities: ['Collaborated with colleagues and management to develop a new team as part of a company initiative',
                    'Created standard operating procedures to be carried out by team members',
                    'Increased web traffic and conversions to client websites',
                    'Assisted in the technical website changes, improving function and customer experience',
                    'Created quarterly, six-months, and twelve-month strategies for clients to achieve short term and long-term gains over time.',
                    'Analyzed data (such as organic web traffic, keyword targets, referral traffic, and other metrics) to judge campaign performance and create actionable tasks based on data analysis']
            },
            {
                company: "EarthKind",
                title: 'Marketing Coordinator',
                description: 'Executed various marketing efforts of the company including email compaigns, social campaigns, blog maintenance, data reporting, website maintenance, and other projects as they arose. Served as the central contact for various technical efforts both internally and externally for the company.',
                responsibilities: ['Utilize company CRM to manage current customers and prospects.',
                    'Organize e-mail lists and manage company newsletters.',
                    'Manage and update company website.',
                    'Manage company\'s social media accounts.',
                    'Conduct weekly meetings with company CEO and marketing partners.',
                    'Manage digital ad strategies for best ROI.',
                    'Coordinate marketing efforts with partners for uniformity.',
                    'Manage data reporting and analysis.']
            },
            {
                company: 'Townsquare Interactive',
                title: 'SEO Analyst',
                description: 'Implemented technical website changes to client websites. Identified improvement needs for campaigns. Collaborated with other analysts and management on education initiatives for Account Managers.',
                responsibilities: ['Authored many internal write-ups on technical tutorials for web design and SEO best practices as well as write-ups on industry trends that affected company performance', 'Orchestrated training sessions with sales, new employees, and seasoned employees on technical best practices as well as client objection handling']
            }
        ],
        showModal: false,
        jobToDisplay: 0
    }

    closeModal = () => {
        this.setState({ showModal: false });
    }


    jobClicked(num) {
        this.setState({ showModal: true, jobToDisplay: num });
    }

    render() {

        const jobs = this.state.jobs.map((job, index) => {
            return (
                <div
                    key={index}
                    className={classes.JobCard}
                    onClick={() => this.jobClicked(index)}>
                    <Card
                        className={classes.JobCard}
                    >{job.company}</Card>
                </div>
            );
        });

        return (
            <div className={classes.Container}>
                <h1>Work Experience</h1>
                {jobs}
                <Modal
                    company={this.state.jobs[this.state.jobToDisplay].company}
                    jobTitle={this.state.jobs[this.state.jobToDisplay].title}
                    jobDescription={this.state.jobs[this.state.jobToDisplay].description}
                    jobResponsibilities={this.state.jobs[this.state.jobToDisplay].responsibilities}
                    closeModal={this.closeModal}
                    show={this.state.showModal}
                />
            </div>
        )
    }
}

export default JobExperience;