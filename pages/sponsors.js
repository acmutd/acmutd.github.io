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
        <div className={styles.title}>ACM Sponsors</div>
        <div className={styles.info}>{data.description}</div>
        <div className={styles.sponsors}>{images}</div>
        <div className={styles.buttons}>
          <div
            onClick={() => window.open('https://williecubed.me/')}
            className={styles.button}
            style={{
              background:
                'linear-gradient(90.12deg, #FF00E5 0.1%, #FFA800 99.39%)',
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
