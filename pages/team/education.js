import { Component } from 'react';
import TeamPage from '../../components/TeamPage';
import { teams } from '../index';

export default class DevPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <TeamPage
                accent='#42ff97ce'
                team={teams.education}
                info="ACM Education dedicates itself to improving ACM members through programs such as TIP and the ACM Mentor Program. ACM Education strives to educate aspiring computer scientitsts and software engineers in the practical practices and modern environments of today’s growing and competitive engineering industry."
                images={[
                    '/assets/carousel/a.png',
                    '/assets/carousel/b.png',
                    '/assets/carousel/c.png'
                ]}
                officers={[
                    {
                        name: 'Reshmi Ranjith',
                        position: 'Director of Education',
                        image: 'reshmi',
                        linkedin: 'https://www.linkedin.com/in/reshmi-ranjith/',
                    },
                    {
                        name: 'Ashwin Ravishankar',
                        position: 'Education Officer',
                        image: 'ashwin-r',
                        linkedin: 'https://www.linkedin.com/in/ravi-ashwin/'
                    },
                    {
                        name: 'Ifrit Maruf',
                        position: 'Education Officer',
                        linkedin: 'https://www.linkedin.com/in/ifrit-maruf/'
                    },
                    {
                        name: 'Saloni Shivdasani',
                        position: 'Education Officer',
                        image: 'saloni',
                        linkedin: 'https://www.linkedin.com/in/saloni-s/'
                    },
                    {
                        name: 'Trevor Tomer',
                        position: 'Education Officer',
                        linkedin: 'https://www.linkedin.com/in/trevor-tomer-3785a21a6/'
                    },
                    {
                        name: 'Varun Joshi',
                        position: 'Education Officer',
                        image: 'varun',
                        linkedin: 'https://www.linkedin.com/in/varunjos/'
                    }
                ]}
                events={[
                    {
                        semester: 'Spring 2021',
                        title: 'TIP Launch',
                        description: "ACM Education's Technical Interview Prep (TIP) launched this semester, and was a smashing success! With an elite cohort of participants, ACM Education navigated uncharted waters throughout the semester to provide its participants with quality interview preparation and practice.",
                        media: []
                    },
                    {
                        semester: 'Fall 2021',
                        title: 'ACM Kickoff Success',
                        description: "Not really much to say since it hasn't been a success yet, but it will be...",
                        media: [
                            {
                                url: '/assets/carousel/a.png',
                                style: {
                                    width: '80%',
                                    aspectRatio: '4 / 3'
                                }
                            }
                        ]
                    }
                ]}
            />
        )
    }
}
