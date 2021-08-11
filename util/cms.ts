import sanity from '@sanity/client';

export const sanityClient = sanity({
  projectId: 'l82yvvx0',
  dataset: 'production',
  apiVersion: '2019-01-29',
  useCdn: false,
});

const REGISTERED_TEAM_QUERY = `
*[_type == "team"] {
  team
}
`;

const REGISTERED_PROGRAM_QUERY = `
*[_type == "program"] {
  program
}
`;

const ALL_TEAMS = [
  { team: 'Development' },
  { team: 'Media' },
  { team: 'Projects' },
  { team: 'Research' },
  { team: 'Education' },
  { team: 'Industry' },
  { team: 'HackUTD' },
];

/**
 * Generate a query to fetch information about a team.
 *
 * @param team The ID of the team to fetch
 *
 * @returns A team-specific Sanity CMS query.
 */
function getTeamQuery(team: string) {
  return `
    *[_type == "team" && lower(team) == "${team}"] {
      team, accent, "content": {
        "refs": content[] -> {
          _type,
          "info": info[],
          "officers": officers[] -> {
            github,
            linkedin,
            website,
            name,
            position,
            "image": image.asset -> url
          },
          "images": images[].asset -> {
            url
          },
          "projects": projects[] -> {
            contributors,
            description,
            overlay_description,
            project,
            repo,
            tag
          }
        },
        "raw": content[] {
          _type,
          title,
          description,
          "images": images -> images[].asset-> url
        }
      }
    }
  `;
}

/**
 * Returns CMS data for a given team.
 *
 * @param team The ID of the team whose information to fetch.
 */
export async function getTeamInfo(team: string) {
  const teams = await sanityClient.fetch(getTeamQuery(team));
  const data = teams[0];
  return data;
}

/**
 * Return all the teams pages enabled by the CMS.
 */
export async function getRegisteredTeams() {
  const registeredTeams = await sanityClient.fetch(REGISTERED_TEAM_QUERY);
  // Nicolas expresses no regrets to the amount of times team is here.
  // TODO: Fix schema to avoid duplicate naming.
  const displayedTeams = ALL_TEAMS.filter((team) => {
    for (let cmsTeam of registeredTeams) {
      if (team.team === cmsTeam.team) {
        return true;
      }
    }
    return false;
  });
  return displayedTeams;
}

/**
 * Return all the program pages enabled by the CMS.
 */
export async function getRegisteredPrograms() {
  const registeredPrograms = await sanityClient.fetch(REGISTERED_PROGRAM_QUERY);
  return registeredPrograms;
}
