import { Component } from 'react';
import ProgramPage from '../../components/ProgramPage';
import { getRegisteredTeams, getRegisteredPrograms } from '../../util/cms';
import { teams } from '../index';

export default class TIPPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { data } = this.props;
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
      '*[_type == "program" && lower(program) == "tip"]{program, accent, left, right, why, benefits, link, how, "artifacts": artifacts[]->{project, tag, contributors, description, repo}, "images": images[].asset->url, "testimonials": testimonials[]{name, description, "image": image.asset->url}}',
    )
    .then((teams) => (data = teams[0]));
  const registeredTeams = await getRegisteredTeams();
  const registeredPrograms = await getRegisteredPrograms();
  return {
    props: { data, registeredTeams, registeredPrograms },
  };
}
