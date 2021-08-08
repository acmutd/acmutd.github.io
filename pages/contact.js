import { Component } from 'react';
import { getRegisteredTeams, getRegisteredPrograms } from '../util/cms';
import { getEmail, getLocation } from '../util/svg'

export class ContactCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { icon, title, data, url } = this.props;
    return (
      <div className='transition rounded-xl bg-black py-4 px-6 m-10 cursor-pointer w-64 contact-card' onClick={() => window.open(url)}>
        <div className='flex flex-nowrap items-center'>
          <div className='w-6 h-6 mr-3'>{icon}</div>
          <div className='text-base font-bold'>{title}</div>
        </div>
        <div className='mt-5'>{data}</div>
      </div>
    )
  }
}
export default class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="mt-6 mb-10 text-2xl font-black text-center md:text-4xl">
          Contact Us
        </div>
        <div className="flex items-top justify-center flex-wrap text-sm mb-16">
          <ContactCard icon={getEmail()} title='Email Us' data='contact@acmutd.co' url='mailto:contact@acmutd.co' />
          <ContactCard icon={getLocation()} title='Visit Us' data='800 West Campbell Rd - Richardson, TX' url='https://www.utdallas.edu/visitors/directions/' />
        </div>
      </div>
    );
  }
}
export async function getStaticProps() {
  const registeredTeams = await getRegisteredTeams();
  const registeredPrograms = await getRegisteredPrograms();
  return {
    props: { registeredTeams, registeredPrograms },
  };
}
