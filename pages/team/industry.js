import { Component } from 'react';
import TeamPage from '../../components/TeamPage';
import { teams } from '../index';
import {
  getRegisteredTeams,
  getRegisteredPrograms,
  getTeamInfo,
} from '../../util/cms';

export default class IndustryPage extends Component {
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
  const data = await getTeamInfo('industry');
  const registeredTeams = await getRegisteredTeams();
  const registeredPrograms = await getRegisteredPrograms();
  return {
    props: { data, registeredTeams, registeredPrograms },
  };
}
