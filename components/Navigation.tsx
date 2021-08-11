import Link from 'next/link';
import { getListSVG } from '../util/svg';

/**
 * A team in ACM that helps organize its programs or operations.
 *
 * TODO: Make this type less redunant.
 */
type Team = {
  /**
   * The name of the team.
   */
  team: string;
};

/**
 * One of ACM's core programs.
 */
type Program = {
  /**
   * The name of the program.
   *
   * TODO: Make this type less redunant.
   */
  program: string;
};

/**
 * Component properties for Navigation.
 */
type NavigationProps = {
  /**
   * A list of all teams that should appear in the site-wide navigation.
   *
   * Team pages are for team/division information and history.
   */
  registeredTeams: Team[];

  /**
   * A list of all programs that should appear in the site-wide navigation.
   *
   * Program pages are marketing pages for specific applyable programs that ACM has.
   */
  registeredPrograms: Program[];
};

export default function Navigation({
  registeredTeams = [],
  registeredPrograms = [],
}: NavigationProps) {
  const teamList = registeredTeams.map((team) => {
    const teamId = team.team.toLowerCase();
    // TODO: Don't hard-code development's route.
    return (
      <Link
        key={`team-${teamId}`}
        href={`/team/${teamId === 'development' ? 'dev' : teamId}`}
      >
        {getListSVG(teamId)}
      </Link>
    );
  });
  const programList = registeredPrograms.map((program) => {
    const programId = program.program.toLowerCase();
    return (
      <Link key={`program-${programId}`} href={`/program/${programId}`}>
        {getListSVG(programId)}
      </Link>
    );
  });
  // TODO: Extract these into components.
  const navItemStyle =
    'group transform relative text-puny ml-1 mr-1 cursor-pointer md:text-sm md:ml-3 md:mr-3 lg:text-lg lg:ml-8 lg:mr-8';
  const navLineStyle =
    'transition w-full h-0.5 bg-white opacity-0 group-hover:opacity-100';
  const navListStyle =
    'absolute flex flex-col left-1/2 transform scale-0 -translate-x-1/2 z-10 opacity-0 scale-0 bg-gray-900 p-3 rounded-lg cursor-default transition group-hover:opacity-100 group-hover:scale-100';
  return (
    <div id="navigation" className="">
      <ul className="flex flex-row flex-wrap justify-center items-center">
        <li className={`${navItemStyle}`}>
          <Link href="/">
            <a>About</a>
          </Link>
          <div className={navLineStyle}></div>
        </li>
        <li className={`${navItemStyle}`}>
          <Link href="/join">
            <a>Join</a>
          </Link>
          <div className={navLineStyle}></div>
        </li>
        <li className={`${navItemStyle}`}>
          <div>Programs</div>
          {programList.length > 0 ? (
            <div className={navListStyle}>{programList}</div>
          ) : (
            <div />
          )}
          <div className={navLineStyle}></div>
        </li>
        <li className={`${navItemStyle}`}>
          <a>Teams</a>
          {teamList.length > 0 ? (
            <div className={navListStyle}>{teamList}</div>
          ) : (
            <div />
          )}
          <div className={navLineStyle}></div>
        </li>
        <li className={`${navItemStyle}`}>
          <Link href="/">
            <a>
              <svg
                className="w-5 h-5 md:w-10 md:h-10"
                viewBox="0 0 240 165"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g style={{ mixBlendMode: 'difference' }}>
                  <rect
                    width="115.945"
                    height="115.945"
                    transform="matrix(0.702643 0.711543 -0.702643 0.711543 81.4683 0)"
                    fill="white"
                  />
                </g>
                <g style={{ mixBlendMode: 'difference' }}>
                  <circle
                    cx="162.5"
                    cy="82.5"
                    r="69.5"
                    stroke="white"
                    strokeWidth="15"
                  />
                </g>
              </svg>
            </a>
          </Link>
        </li>
        <li className={`${navItemStyle}`}>
          <Link href="/events">
            <a>Events</a>
          </Link>
          <div className={navLineStyle}></div>
        </li>
        {/*<li className={styles.navitem}>
            <Link href="/sponsors">
              <div className={styles.navtext}>Sponsors</div>
            </Link>
            <div className={styles.navunderline}></div>
            </li>*/}
        <li className={`${navItemStyle}`}>
          <Link href="/scholarship">
            <a>Scholarship</a>
          </Link>
          <div className={navLineStyle}></div>
        </li>
        <li className={`${navItemStyle}`}>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
          <div className={navLineStyle}></div>
        </li>
      </ul>
    </div>
  );
}
