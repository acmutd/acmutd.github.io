import { Component } from 'react';
import Info from '../components/Info';
import { getRegisteredTeams, getRegisteredPrograms } from '../util/cms';
import styles from '../styles/page/Scholarship.module.css';
export default class ScholarshipPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { data } = this.props;
    return (
      <div>
        <div className={styles.title}>ACM Scholarship</div>
        <div className={styles.tagline}>
          Dr. Gopal Gupta Undergraduate Scholarship for Computer Science...
        </div>
        <div className={styles.buttons}>
          <div
            onClick={() => window.open('')}
            className={styles.button}
            style={{
              background:
                'linear-gradient(90.12deg, #2400FF 0.1%, #00FFC2 99.39%)',
            }}
          >
            Apply now!
          </div>
        </div>
        <div className={styles.infocontainer}>
          <Info title="Who it's for" body={data.who} />
          <Info title="How to apply" body={data.how} />
        </div>
        <div className={styles.infocontainer_2}>
          <Info title="Inspiration" body={data.inspiration} />
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
    .fetch('*[_type == "scholarshippage"]{who, how, inspiration}')
    .then((page) => (data = page[0]));

  return {
    props: { data, registeredTeams, registeredPrograms },
  };
}
