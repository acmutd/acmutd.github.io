export async function getTeamInfo(team) {
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
      `*[_type == "team" && lower(team) == "${team}"]{team, accent, "content": {"refs": content[]->{_type, "info": info[], "officers": officers[]->{github, linkedin, website, name, position, "image": image.asset->url}, "images": images[].asset->{url}, "projects": projects[]->{contributors, description, overlay_description, project, repo, tag}}, "raw": content[]{_type, title, description,  "images": images->images[].asset->url}}}`,
    )
    .then((teams) => (data = teams[0]));
  return data;
}
export async function getRegisteredTeams() {
  const sanity = require('@sanity/client');
  const client = sanity({
    projectId: 'l82yvvx0',
    dataset: 'production',
    apiVersion: '2019-01-29',
    useCdn: false,
  });
  let registeredTeams;
  await client
    .fetch('*[_type == "team"]{team}')
    .then((teams) => (registeredTeams = teams));
  registeredTeams = [
    { team: 'Development' },
    { team: 'Media' },
    { team: 'Projects' },
    { team: 'Research' },
    { team: 'Education' },
    { team: 'Industry' },
    { team: 'HackUTD' },
  ].filter((val) => {
    for (let x of registeredTeams) {
      if (val.team === x.team) return true;
    }
    return false;
  });
  return registeredTeams;
}
export async function getRegisteredPrograms() {
  const sanity = require('@sanity/client');
  const client = sanity({
    projectId: 'l82yvvx0',
    dataset: 'production',
    apiVersion: '2019-01-29',
    useCdn: false,
  });
  let registeredPrograms;
  await client
    .fetch('*[_type == "program"]{program}')
    .then((programs) => (registeredPrograms = programs));
  return registeredPrograms;
}
