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
        <div className='mt-6 text-2xl font-black text-center md:text-4xl'>ACM Scholarship</div>
        <div className='text-xl font-bold text-center md:text-2xl'>
          Dr. Gopal Gupta Undergraduate Scholarship for Computer Science...
        </div>
        <div className='relative flex flex-wrap justify-center items-center mx-auto my-0 text-base text-bold max-w-3/5 text-center md:text-lg'>
          <div
            onClick={() => window.open('https://engineering.utdallas.edu/engineering/academics/undergraduate-majors/scholarships/')}
            className='transition cursor-pointer rounded-2xl p-2 px-12 mx-24 my-3 hover:filter'
            style={{
              background:
                'linear-gradient(90.12deg, #2400FF 0.1%, #00FFC2 99.39%)',
              '--tw-brightness': 'brightness(140%)',
            }}
          >
            Apply now!
          </div>
        </div>
        <div className='mx-auto mt-8 mb-10 flex flex-wrap justify-center w-4/5 lg:flex-nowrap'>
          <Info title="Who it's for" body={data.who} />
          <Info title="How to apply" body={data.how} />
        </div>
        <div className='mx-auto mt-8 mb-10 flex flex-wrap justify-center w-4/5 lg:flex-nowrap'>
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
