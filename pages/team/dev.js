import { Component } from 'react';
import TeamPage from '../../components/TeamPage';
import DevProject from '../../components/DevProject';
import { teams } from '../index';

export default class DevPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <TeamPage
        accent="#c038ffce"
        team={teams.dev}
        info="ACM Development is the team that makes all the cool stuff. Currently, our members are on a season-long sprint to push the ACM infrastructure to production before ACM's Fall 2021 Kickoff, which includes this website. As always, it's currently 12:36 AM on June 22nd, and I've so many things to do. Since I don't the content for the website, I'm going to continue writing filler here and hope that nobody notices."
        images={[
          'https://lh4.googleusercontent.com/d-Edumlj9Ss98mwqu6pO0DetsI9znoRKdqpf_M27a73D_53Ay1dwqSoDdX1reyd6UgyjgaCSdUaqSxFgvlnP=w3073-h1688-rw',
          'https://lh3.google.com/u/1/d/1Iitd8TX9afjmXlzF4QgTrr9QJkh1_6WD=w3073-h1688-iv1',
          'https://lh3.google.com/u/1/d/1diRdOd8YWunJRb1UytNJ0SUXHc6uAsXl=w2563-h1688-iv1',
        ]}
        officers={[
          {
            name: 'Willie Chalmers III',
            position: 'Director of Development',
            image:
              'https://github.com/acmutd/acmutd.github.io/blob/master/png/team-hackutd-willie.jpg?raw=true',
            github: 'https://github.com/WillieCubed',
            linkedin: 'https://linkedin.com/in/willie-chalmers-iii',
            website: 'https://williecubed.me/',
          },
          {
            name: 'Nick Burnett',
            position: 'Dev Officer',
            image:
              'https://github.com/acmutd/acmutd.github.io/blob/master/png/dallas.jpg?raw=true',
            github: 'https://github.com/NickBurnett',
            linkedin: 'https://www.linkedin.com/in/nicolasaburnett/',
            website: 'https://nickburnett.dev/',
          },
          {
            name: 'Ashwin Somasundaram',
            position: 'Dev Officer',
            image:
              'https://github.com/acmutd/acmutd.github.io/blob/master/png/team-education-ashwin-s.jpg?raw=true',
            linkedin: 'https://www.linkedin.com/in/ashwin-somasundaram/',
          },
          {
            name: 'Steven Nguyen',
            position: 'Dev Officer',
            image:
              'https://github.com/acmutd/acmutd.github.io/blob/master/png/dallas.jpg?raw=true',
          },
          {
            name: 'Samuel Okei',
            position: 'Dev Officer',
            image:
              'https://github.com/acmutd/acmutd.github.io/blob/master/png/dallas.jpg?raw=true',
          },
          {
            name: 'Sai Bommisetty',
            position: 'Dev Officer',
            image:
              'https://github.com/acmutd/acmutd.github.io/blob/master/png/dallas.jpg?raw=true',
          },
          {
            name: 'Abudullah Hasani',
            position: 'Dev Officer',
            image:
              'https://github.com/acmutd/acmutd.github.io/blob/master/png/dallas.jpg?raw=true',
            linkedin: 'https://www.linkedin.com/in/abdullah-hasani/',
          },
          {
            name: 'Nam Truong',
            position: 'Dev Officer',
            image:
              'https://github.com/acmutd/acmutd.github.io/blob/master/png/dallas.jpg?raw=true',
          },
          {
            name: 'Thais Campanac-Climent',
            position: 'Dev Officer',
            image:
              'https://github.com/acmutd/acmutd.github.io/blob/master/png/dallas.jpg?raw=true',
          },
        ]}
        projects={[
          <DevProject
            key="discord-bot"
            title="Discord Bot"
            tag="Useful automation for everyone in ACM..."
            contributors={['Jafar Ali', 'Eric Zhang', 'Nick Burnett']}
            description="Coded in TypeScript, the ACM Discord Bot is the cornerstone to all the functionality available in the official ACM Discord."
            repo="acmutd/acm-bot"
            link="https://github.com/acmutd/acm-bot"
          />,
          <DevProject
            key="acm-website"
            title="ACM Website"
            tag="Instant information about everything ACM..."
            contributors={['Nick Burnett']}
            description="Made with NextJS, Strapi (not yet), and the rawest CSS you've ever seen. Learn everything you need to know about ACM UTD here."
            repo="acmutd/acmutd.github.io"
            link="https://github.com/acmutd/acmutd.github.io"
          />,
          <DevProject
            key="nebula"
            title="Project Nebula"
            tag="Don't really know what this is..."
            contributors={['Willie Chalmers III', 'Sunny Guan', 'Suraj Khosla']}
            description="Made by Willie & friends. Not completely sure what this does yet, but I'm willing to bet Willie does."
            repo="acmutd/project-nebula"
            link="https://github.com/acmutd/project-nebula"
          />,
        ]}
        events={[
          {
            semester: 'Spring 2021',
            title: 'Something happened here',
            description:
              "While I'm unsure what exactly transpired during this time, I am confident in saying that something, if at the very least a miniscule amount, happened during the Spring 2021 semester of ACM Development. As such, I will leave this momento to Director Willie as proof that media can be displayed. I'm pretty sure Willie was made director but since that didn't happen until later in the semester I guess that doesn't count just yet.",
            media: [
              {
                url: 'https://cdn.discordapp.com/emojis/752324497935171664.png?v=1',
                style: {
                  width: '40%',
                  aspectRatio: '1',
                },
              },
            ],
          },
          {
            semester: 'Summer 2021',
            title: 'So many projects !!',
            description:
              'Wow there are so many things to do for ACM Development! We have plenty of content due for release on August 1st (public at Fall kickoff) including the revamped ACM website, updated Member Portal, and lots of HackUTD tech.',
            media: [
              {
                url: 'https://lh3.google.com/u/1/d/1Iitd8TX9afjmXlzF4QgTrr9QJkh1_6WD=w3073-h1688-iv1',
                style: {
                  width: '70%',
                  aspectRatio: '4 / 3',
                },
              },
            ],
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
