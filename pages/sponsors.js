import { Component } from 'react';
import { getRegisteredTeams, getRegisteredPrograms } from '../util/cms';
import styles from '../styles/page/Sponsors.module.css';

export default class SponsorsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { data } = this.props;
    const images = [];
    Array.from(data.images || []).forEach((i) =>
      images.push(<img key={i} src={i} />),
    );
    return (
      <div>
        <div className="mt-6 text-2xl font-black text-center md:text-4xl">
          ACM Sponsors
        </div>
        <div className="m-auto mt-6 text-base font-medium text-center max-w-3/5 md:text-lg">
          {data.description}
        </div>
        <div className={styles.sponsors}>{images}</div>
        <div className="flex flex-wrap justify-center items-center mx-auto my-0 text-base text-bold max-w-3/5 text-center md:text-lg">
          <div
            onClick={() => window.open('')}
            className="transition cursor-pointer rounded-2xl p-2 px-12 mx-24 my-3 hover:filter"
            style={{
              background:
                'linear-gradient(90.12deg, #FF00E5 0.1%, #FFA800 99.39%)',
              '--tw-brightness': 'brightness(140%)',
            }}
          >
            Sponsor ACM!
          </div>
        </div>
      </div>
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
  const registeredTeams = await getRegisteredTeams();
  const registeredPrograms = await getRegisteredPrograms();
  let data;
  await client
    .fetch(
      '*[_type == "sponsorpage"]{description, "images": images[].asset->url}',
    )
    .then((page) => (data = page[0]));
  return {
    props: { data, registeredTeams, registeredPrograms },
  };
}
