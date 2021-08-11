import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getRegisteredTeams, getRegisteredPrograms } from '../util/cms';

/**
 * A custom 404 page that has a link to the site root.
 */
export default function Custom404() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex flex-col text-center">
        <div className="text-4xl font-bold my-4">
          Whoops, that&apos;s not right.
        </div>
        <div className="text-xl">
          This group of people isn&apos;t sure how you got here. Perhaps you
          entered an incorrect link, but what you&apos;re looking for is
          probably here. We hope. :)
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
 * Fetches data for the 404 page during static generation.
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
