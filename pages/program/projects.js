import { Component } from 'react';
import ProgramPage from '../../components/ProgramPage';
import DevProject from '../../components/DevProject';
import { teams } from '../index';

export default class ProjectsPage extends Component {
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
      <ProgramPage
        accent={data.accent}
        left={data.left}
        right={data.right}
        program={teams[data.program.toLowerCase()]}
        why={data.why}
        benefits={data.benefits}
        how={data.how}
        link={data.link}
        images={data.images}
        testimonials={data.testimonials}
        projects={projects}
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
      '*[_type == "program" && lower(program) == "projects"]{program, accent, left, right, why, benefits, link, how, "artifacts": artifacts[]->{project, tag, contributors, description, repo}, "images": images[].asset->url, "testimonials": testimonials[]{name, description, "image": image.asset->url}}',
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