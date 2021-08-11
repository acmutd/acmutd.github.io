import { InferGetStaticPropsType, GetStaticProps } from 'next';
import React from 'react';
import TeamPage from '../../components/TeamPage';
import {
  getTeamInfo,
  getRegisteredTeams,
  getRegisteredPrograms,
} from '../../util/cms';
/**
 * The page that shows information about ACM's executive board.
 */
export default function ExecutiveBoardPage({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { accent, team, content } = data;

  // TODO: Swap out with actual team icon
  return <TeamPage accent={accent} team={<div></div>} content={content} />;
}

const PAGE_ID = 'board';

/**
 * Component properties for the ExecutiveBoardPage.
 */
type ExecutiveBoardPageProps = {
  data: {
    /**
     * The accent color used throughout the page.
     */
    accent: string;

    /**
     * The ID for this team.
     */
    team: string;

    /**
     * Text used to populate this page's description.
     */
    content: string;
  };
};

/**
 * Fetches data for the dev page during static generation.
 *
 * @returns Dev team page-specific data and site-wide navigation props.
 */
export const getStaticProps: GetStaticProps<ExecutiveBoardPageProps> =
  async () => {
    const data = await getTeamInfo(PAGE_ID);
    const registeredTeams = await getRegisteredTeams();
    const registeredPrograms = await getRegisteredPrograms();

    return {
      props: {
        data,
        registeredTeams,
        registeredPrograms,
      },
    };
  };
