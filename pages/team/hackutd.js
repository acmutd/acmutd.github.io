import { Component } from 'react';
import TeamPage from '../../components/TeamPage';
import { getPageSVG } from '../../util/svg'
import {
  getRegisteredTeams,
  getRegisteredPrograms,
  getTeamInfo,
} from '../../util/cms';

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
        team={getPageSVG(data.team.toLowerCase())}
        content={data.content}
      />
    );
  }
}
export async function getStaticProps() {
  const data = await getTeamInfo('hackutd');
  const registeredTeams = await getRegisteredTeams();
  const registeredPrograms = await getRegisteredPrograms();
  return {
    props: { data, registeredTeams, registeredPrograms },
  };
}
