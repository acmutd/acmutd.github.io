import { Component } from 'react';
import ImageCarousel from '../components/ImageCarousel';
import Info from '../components/Info';
import styles from '../styles/page/Join.module.css';

export default class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { data } = this.props;
    return (
      <div>
        <div className={styles.title}>Get Involved with ACM</div>
        <div className={styles.tagline}>Join the group of people...</div>
        <ImageCarousel id={styles.images} images={data.images} />
        <div className={styles.infocontainer}>
          <Info title="How to join" body={data.how} />
          <Info title="When to join" body={data.when} />
        </div>
        <div className={styles.buttons}>
          <div
            onClick={() => window.open('https://acmutd.co/discord')}
            className={styles.button}
            style={{
              background:
                'linear-gradient(90.12deg, #8B00E1 0.1%, #E500EA 99.39%)',
            }}
          >
            Join our Discord
          </div>
          <div
            onClick={() => window.open('https://acmutd.co/mailing')}
            className={styles.button}
            style={{
              background:
                'linear-gradient(90.12deg, #FF0000 0.1%, #FFB800 99.39%)',
            }}
          >
            Join our Newsletter
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
  let registeredTeams;
  await client
    .fetch('*[_type == "team"]{team}')
    .then((teams) => (registeredTeams = teams));
  let registeredPrograms;
  await client
    .fetch('*[_type == "program"]{program}')
    .then((programs) => (registeredPrograms = programs));
  let data;
  await client
    .fetch('*[_type == "joinpage"]{how, when, "images": images[].asset->url}')
    .then((page) => (data = page[0]));
  return {
    props: { data, registeredTeams, registeredPrograms },
  };
}
