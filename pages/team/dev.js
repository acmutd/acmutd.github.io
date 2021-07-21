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
    const { data } = this.props;
    const projects = [];
    Array.from(data.artifacts).forEach((p) =>
      projects.push(
        <DevProject
          key={p.project}
          title={p.project}
          tag={p.tag}
          contributors={p.contributors}
          description={p.description}
          repo={p.repo.display}
          link={p.repo.url}
          overlay_description={p.overlay_description}
        />,
      ),
    );
    return (
      <TeamPage
        accent={data.accent}
        team={teams[data.team.toLowerCase()]}
        info={data.info}
        images={data.images}
        officers={data.officers}
        projects={projects}
        events={data.events}
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
      '*[_type == "team" && lower(team) == "development"]{team, accent, info, "artifacts": artifacts[]->{project, tag, contributors, description, repo, overlay_description}, "images": images[].asset->url, "officers": officers[]->{name, position, linkedin, github, website, "image": image.asset->url}, "events": timeline[]{semester, title, description, "media": media[]{style, "url": image.asset->url}}}',
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
