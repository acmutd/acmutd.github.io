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
                accent='#ff2bb8c7'
                team={teams.media}
                info="ACM Media description goes here. In this paragraph, ACM Media's purpose in and contributions to ACM will be described here. Until I get all the details from Media, this filler text will be displayed here instead. Hopefully by next week I've figured out which headless CMS to use so that I don't have to modify the content anymore."
                images={[
                    '/assets/carousel/a.png',
                    '/assets/carousel/b.png',
                    '/assets/carousel/c.png'
                ]}
                officers={[
                    {
                        name: 'Bea Agron',
                        position: 'Director of Media',
                        image: 'bea',
                        linkedin: 'http://linkedin.com/in/beatrice-agron-9b625117a'
                    },
                    {
                        name: 'Adonis Smith',
                        position: 'Media Officer',
                        linkedin: 'https://www.linkedin.com/in/adonis-j-smith/'
                    },
                    {
                        name: 'Vyshnavi Nalla',
                        position: 'Media Officer'
                    },
                    {
                        name: 'Anjelica Avorque',
                        position: 'Media Officer',
                        linkedin: 'https://www.linkedin.com/in/anjelica-avorque/'
                    },
                    {
                        name: 'Nhi Huynh',
                        position: 'Media Officer'
                    },
                    {
                        name: 'Neha Thomas',
                        position: 'Media Officer'
                    }
                ]}
                events={[
                    {
                        semester: 'Spring 2021',
                        title: 'Something happened here',
                        description: "While I'm unsure what exactly transpired during this time, I am confident in saying that something, if at the very least a miniscule amount, happened during the Spring 2021 semester of ACM Media.",
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
