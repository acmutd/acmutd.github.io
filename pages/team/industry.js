import { Component } from 'react'
import TeamPage from '../../components/TeamPage'
import { teams } from '../index'

export default class DevPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <TeamPage
                accent='#aaaaaaaa'
                team={teams.industry}
                info="ACM Industry description goes here. In this paragraph, ACM Industry's purpose in and contributions to ACM will be described here. Until I get the details from Industry, this filler text will be displayed here instead. Hopefully by next week I've figured out which headless CMS to use so that I don't have to modify the content anymore."
                images={[
                    '/assets/carousel/a.png',
                    '/assets/carousel/b.png',
                    '/assets/carousel/c.png'
                ]}
                officers={[
                    {
                        name: 'Kendra Huang',
                        position: 'Director of Industry',
                        image: 'kendra',
                        linkedin: 'https://www.linkedin.com/in/kendra-huang/'
                    },
                    {
                        name: 'Vishvak Bandi',
                        position: 'HackUTD Industry Lead',
                        linkedin: 'https://www.linkedin.com/in/vishvak-bandi/'
                    },
                    {
                        name: 'Abhitej Arora',
                        position: 'HackUTD Industry Coordinator',
                        image: 'abhitej',
                        linkedin: 'https://www.linkedin.com/in/abhitejarora/'
                    },
                    {
                        name: 'Alina Tieu',
                        position: 'HackUTD Industry Coordinator'
                    },
                    {
                        name: 'Nina Rao',
                        position: 'ACM Industry Coordinator'
                    },
                    {
                        name: 'Alvin Methoth',
                        position: 'ACM Industry Coordinator'
                    },
                    {
                        name: 'Ananya Sammidi',
                        position: 'ACM Industry Coordinator'
                    },
                    {
                        name: 'Riya Chakraborty',
                        position: 'ACM Industry Coordinator'
                    }
                ]}
                events={[
                    {
                        semester: 'Spring 2021',
                        title: 'Something happened here',
                        description: "While I'm unsure what exactly transpired during this time, I am confident in saying that something, if at the very least a miniscule amount, happened during the Spring 2021 semester of ACM Industry.",
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
