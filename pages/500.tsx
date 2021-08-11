import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getRegisteredTeams, getRegisteredPrograms } from '../util/cms';

/**
 * A custom 500 page that has a link to the site root.
 */
export default function Custom404() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex flex-col text-center">
        <div className="text-3xl font-bold my-4">
          Hmm, something went wrong.
        </div>
        <div className="text-xl">
          Something went wrong here, but now that we have your attention, have a
          joke:
          <br />
          Why didn&apos;t the client hit the server?
          <div>It didn&apos;t have enough cache.</div>
        </div>
        <div className="text-lg my-2">
          Start from{' '}
          <Link href="/">
            <a>home</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

/**
 * Fetches data for the 500 page during static generation.
 *
 * @returns Site-wide navigation props.
 */
export const getStaticProps: GetStaticProps = async () => {
  const registeredTeams = await getRegisteredTeams();
  const registeredPrograms = await getRegisteredPrograms();

  return {
    props: {
      registeredTeams,
      registeredPrograms,
    },
  };
};
