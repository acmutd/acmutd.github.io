import { GetStaticProps, InferGetStaticPropsType } from 'next';
import ImageCarousel from '../components/ImageCarousel';
import Info from '../components/Info';
import {
  getRegisteredTeams,
  getRegisteredPrograms,
  sanityClient,
} from '../util/cms';

/**
 * A page giving more information on how to get involved with ACM.
 */
export default function JoinPage({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const buttonStyle =
    'transition cursor-pointer rounded-2xl p-2 px-12 mx-24 my-3 hover:filter';
  return (
    <div>
      <div className="mt-6 text-2xl font-black text-center md:text-4xl">
        Get Involved with ACM
      </div>
      <div className="w-3/4 mx-auto my-8">
        <ImageCarousel images={data.images} />
      </div>
      <div className="mx-auto mt-8 mb-10 flex flex-wrap justify-center w-4/5 lg:flex-nowrap">
        <Info title="How to join" body={data.how} />
        <Info title="When to join" body={data.when} />
      </div>
      <div className="relative flex flex-wrap justify-center items-center mx-auto my-0 text-base text-bold max-w-3/5 text-center md:text-lg">
        <a
          href="https://discord.com/invite/kWP6gBv"
          className={buttonStyle}
          style={{
            background:
              'linear-gradient(90.12deg, #8B00E1 0.1%, #E500EA 99.39%)',
            // TODO: Update styles to put CSS variables in right place
            // '--tw-brightness': 'brightness(140%)',
          }}
        >
          Join our Discord
        </a>
        <a
          href="https://cdn.forms-content.sg-form.com/22d851f4-5f47-11eb-9b58-e2c4feadfaf0"
          className={buttonStyle}
          style={{
            background:
              'linear-gradient(90.12deg, #FF0000 0.1%, #FFB800 99.39%)',
            // TODO: Update styles to put CSS variables in right place
            // '--tw-brightness': 'brightness(140%)',
          }}
        >
          Join our Newsletter
        </a>
      </div>
    </div>
  );
}

const JOIN_PAGE_QUERY = `
*[_type == "joinpage"] {
  how,
  when,
  "images": images[].asset -> url
}
`;

/**
 * Component propreties for the JoinPage.
 */
type JoinPageProps = {
  data: {
    images: string[];
    how: string;
    when: string;
  };
};

/**
 * Fetches data for the dev page during static generation.
 *
 * @returns Dev team page-specific data and site-wide navigation props.
 */
export const getStaticProps: GetStaticProps<JoinPageProps> = async () => {
  try {
    const data = await sanityClient.fetch(JOIN_PAGE_QUERY);
    const page = data[0];
    const registeredTeams = await getRegisteredTeams();
    const registeredPrograms = await getRegisteredPrograms();

    return {
      props: {
        data: page,
        registeredTeams,
        registeredPrograms,
      },
    };
  } catch (error) {
    console.error('Could not fetch data for page.', error);
    throw error;
  }
};
