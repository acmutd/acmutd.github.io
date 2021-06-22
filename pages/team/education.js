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
        accent="#42ff97ce"
        team={teams.education}
        info="ACM Education dedicates itself to improving ACM members through programs such as TIP and the ACM Mentor Program. ACM Education strives to educate aspiring computer scientitsts and software engineers in the practical practices and modern environments of today’s growing and competitive engineering industry."
        images={[
          'https://lh4.googleusercontent.com/d-Edumlj9Ss98mwqu6pO0DetsI9znoRKdqpf_M27a73D_53Ay1dwqSoDdX1reyd6UgyjgaCSdUaqSxFgvlnP=w3073-h1688-rw',
          'https://lh3.google.com/u/1/d/1Iitd8TX9afjmXlzF4QgTrr9QJkh1_6WD=w3073-h1688-iv1',
          'https://lh3.google.com/u/1/d/1diRdOd8YWunJRb1UytNJ0SUXHc6uAsXl=w2563-h1688-iv1',
        ]}
        officers={[
          {
            name: 'Reshmi Ranjith',
            position: 'Director of Education',
            image:
              'https://github.com/acmutd/acmutd.github.io/blob/master/png/team-board-reshmi.jpg?raw=true',
            linkedin: 'https://www.linkedin.com/in/reshmi-ranjith/',
          },
          {
            name: 'Ashwin Ravishankar',
            position: 'Education Officer',
            image:
              'https://github.com/acmutd/acmutd.github.io/blob/master/png/team-education-ashwin-r.jpg?raw=true',
            linkedin: 'https://www.linkedin.com/in/ravi-ashwin/',
          },
          {
            name: 'Ifrit Maruf',
            position: 'Education Officer',
            image:
              'https://github.com/acmutd/acmutd.github.io/blob/master/png/dallas.jpg?raw=true',
            linkedin: 'https://www.linkedin.com/in/ifrit-maruf/',
          },
          {
            name: 'Saloni Shivdasani',
            position: 'Education Officer',
            image:
              'https://github.com/acmutd/acmutd.github.io/blob/master/png/team-education-saloni.jpg?raw=true',
            linkedin: 'https://www.linkedin.com/in/saloni-s/',
          },
          {
            name: 'Trevor Tomer',
            position: 'Education Officer',
            image:
              'https://github.com/acmutd/acmutd.github.io/blob/master/png/dallas.jpg?raw=true',
            linkedin: 'https://www.linkedin.com/in/trevor-tomer-3785a21a6/',
          },
          {
            name: 'Varun Joshi',
            position: 'Education Officer',
            image:
              'https://github.com/acmutd/acmutd.github.io/blob/master/png/team-education-varun.jpg?raw=true',
            linkedin: 'https://www.linkedin.com/in/varunjos/',
          },
        ]}
        events={[
          {
            semester: 'Spring 2021',
            title: 'TIP Launch',
            description:
              "ACM Education's Technical Interview Prep (TIP) launched this semester, and was a smashing success! With an elite cohort of participants, ACM Education navigated uncharted waters throughout the semester to provide its participants with quality interview preparation and practice.",
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
