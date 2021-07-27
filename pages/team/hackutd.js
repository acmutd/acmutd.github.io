import { Component } from 'react';
import TeamPage from '../../components/TeamPage';
import { teams } from '../index';

export default class HackUTDPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { data } = this.props;
    return (
      <TeamPage
        accent={data.accent}
        team={teams[data.team.toLowerCase()]}
        content={data.content}
      />
    );
  }
}
export async function getStaticProps() {
  const sanity = require('@sanity/client');
  const client = sanity({
    projectId: 'l82yvvx0',
    dataset: 'production',
    apiVersion: '2019-01-29',
    useCdn: false,
  });
  let data;
  await client
    .fetch(
      '*[_type == "team" && lower(team) == "hackutd"]{team, accent, "content": {"refs": content[]->{_type, "info": info[], "officers": officers[]->{github, linkedin, website, name, position, "image": image.asset->url}, "images": images[].asset->{url}, "projects": projects[]->{contributors, description, overlay_description, project, repo, tag}}, "raw": content[]{_type, title, description,  "images": images->images[].asset->url}}}',
    )
    .then((teams) => (data = teams[0]));
  let registeredTeams;
  await client
    .fetch('*[_type == "team"]{team}')
    .then((teams) => (registeredTeams = teams));
  let registeredPrograms;
  await client
    .fetch('*[_type == "program"]{program}')
    .then((programs) => (registeredPrograms = programs));
  return {
    props: { data, registeredTeams, registeredPrograms },
  };
}
