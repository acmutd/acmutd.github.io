import { Component } from 'react';
import TeamPage from '../../components/TeamPage';
import { teams } from '../index';

export default class DevPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <TeamPage
        accent="#ff2bb8c7"
        team={teams.media}
        info="ACM Media description goes here. In this paragraph, ACM Media's purpose in and contributions to ACM will be described here. Until I get all the details from Media, this filler text will be displayed here instead. Hopefully by next week I've figured out which headless CMS to use so that I don't have to modify the content anymore."
        images={[
          'https://lh4.googleusercontent.com/d-Edumlj9Ss98mwqu6pO0DetsI9znoRKdqpf_M27a73D_53Ay1dwqSoDdX1reyd6UgyjgaCSdUaqSxFgvlnP=w3073-h1688-rw',
          'https://lh3.google.com/u/1/d/1Iitd8TX9afjmXlzF4QgTrr9QJkh1_6WD=w3073-h1688-iv1',
          'https://lh3.google.com/u/1/d/1diRdOd8YWunJRb1UytNJ0SUXHc6uAsXl=w2563-h1688-iv1',
        ]}
        officers={[
          {
            name: 'Bea Agron',
            position: 'Director of Media',
            image:
              'https://github.com/acmutd/acmutd.github.io/blob/master/png/team-board-bea.jpg?raw=true',
            linkedin: 'http://linkedin.com/in/beatrice-agron-9b625117a',
          },
          {
            name: 'Adonis Smith',
            position: 'Media Officer',
            image:
              'https://github.com/acmutd/acmutd.github.io/blob/master/png/dallas.jpg?raw=true',
            linkedin: 'https://www.linkedin.com/in/adonis-j-smith/',
          },
          {
            name: 'Vyshnavi Nalla',
            position: 'Media Officer',
            image:
              'https://github.com/acmutd/acmutd.github.io/blob/master/png/dallas.jpg?raw=true',
          },
          {
            name: 'Anjelica Avorque',
            position: 'Media Officer',
            image:
              'https://github.com/acmutd/acmutd.github.io/blob/master/png/dallas.jpg?raw=true',
            linkedin: 'https://www.linkedin.com/in/anjelica-avorque/',
          },
          {
            name: 'Nhi Huynh',
            position: 'Media Officer',
            image:
              'https://github.com/acmutd/acmutd.github.io/blob/master/png/dallas.jpg?raw=true',
          },
          {
            name: 'Neha Thomas',
            position: 'Media Officer',
            image:
              'https://github.com/acmutd/acmutd.github.io/blob/master/png/dallas.jpg?raw=true',
          },
        ]}
        events={[
          {
            semester: 'Spring 2021',
            title: 'Something happened here',
            description:
              "While I'm unsure what exactly transpired during this time, I am confident in saying that something, if at the very least a miniscule amount, happened during the Spring 2021 semester of ACM Media.",
            media: [],
          },
          {
            semester: 'Fall 2021',
            title: 'ACM Kickoff Success',
            description:
              "Not really much to say since it hasn't been a success yet, but it will be...",
            media: [
              {
                url: 'https://lh3.google.com/u/1/d/1diRdOd8YWunJRb1UytNJ0SUXHc6uAsXl=w2563-h1688-iv1',
                style: {
                  width: '80%',
                  aspectRatio: '4 / 3',
                },
              },
            ],
          },
        ]}
      />
    );
  }
}
