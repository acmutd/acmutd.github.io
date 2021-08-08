import { Component } from 'react';
import ImageCarousel from '../components/ImageCarousel';
import Info from '../components/Info';
import { getRegisteredTeams, getRegisteredPrograms } from '../util/cms';

export default class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.buttonStyle =
      'transition cursor-pointer rounded-2xl p-2 px-12 mx-24 my-3 hover:filter';
  }
  render() {
    const { data } = this.props;
    return (
      <div>
        <div className="mt-6 text-2xl font-black text-center md:text-4xl">
          Get Involved with ACM
        </div>
        <ImageCarousel className="w-3/4 mx-auto my-8" images={data.images} />
        <div className="mx-auto mt-8 mb-10 flex flex-wrap justify-center w-4/5 lg:flex-nowrap">
          <Info title="How to join" body={data.how} />
          <Info title="When to join" body={data.when} />
        </div>
        <div className="relative flex flex-wrap justify-center items-center mx-auto my-0 text-base text-bold max-w-3/5 text-center md:text-lg">
          <div
            onClick={() => window.open('https://acmutd.co/discord')}
            className={this.buttonStyle}
            style={{
              background:
                'linear-gradient(90.12deg, #8B00E1 0.1%, #E500EA 99.39%)',
              '--tw-brightness': 'brightness(140%)',
            }}
          >
            Join our Discord
          </div>
          <div
            onClick={() => window.open('https://acmutd.co/mailing')}
            className={this.buttonStyle}
            style={{
              background:
                'linear-gradient(90.12deg, #FF0000 0.1%, #FFB800 99.39%)',
              '--tw-brightness': 'brightness(140%)',
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
  const registeredTeams = await getRegisteredTeams();
  const registeredPrograms = await getRegisteredPrograms();
  let data;
  await client
    .fetch('*[_type == "joinpage"]{how, when, "images": images[].asset->url}')
    .then((page) => (data = page[0]));
  return {
    props: { data, registeredTeams, registeredPrograms },
  };
}
