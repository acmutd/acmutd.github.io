import { Component } from 'react';
import Link from 'next/link';
import { getListSVG } from '../util/svg';
export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const teamList = [];
    const programList = [];
    Array.from(this.props.registeredTeams || []).forEach((team) => {
      team = team.team.toLowerCase();
      teamList.push(
        <Link
          key={`team-${team}`}
          href={`/team/${team === 'development' ? 'dev' : team}`}
        >
          {getListSVG(team)}
        </Link>,
      );
    });
    Array.from(this.props.registeredPrograms || []).forEach((program) => {
      program = program.program.toLowerCase();
      programList.push(
        <Link key={`program-${program}`} href={`/program/${program}`}>
          {getListSVG(program)}
        </Link>,
      );
    });
    const navItemStyle =
      'group transform relative text-xs ml-1 mr-1 cursor-pointer md:text-lg md:ml-8 md:mr-8';
    const navLineStyle =
      'transition w-full h-0.5 bg-white opacity-0 group-hover:opacity-100';
    const navListStyle =
      'absolute flex flex-col left-1/2 transform scale-0 -translate-x-1/2 z-10 opacity-0 scale-0 bg-gray-900 p-3 rounded-lg cursor-default transition group-hover:opacity-100 group-hover:scale-100';
    return (
      <div id="navigation" className="">
        <ul className="flex flex-row flex-wrap justify-center items-center">
          <li className={`${navItemStyle}`}>
            <Link href="/">
              <div>About</div>
            </Link>
            <div className={navLineStyle}></div>
          </li>
          <li className={`${navItemStyle}`}>
            <Link href="/join">
              <div>Join</div>
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
            <div>Teams</div>
            {teamList.length > 0 ? (
              <div className={navListStyle}>{teamList}</div>
            ) : (
              <div />
            )}
            <div className={navLineStyle}></div>
          </li>
          <li className={`${navItemStyle}`}>
            <Link href="/">
              <svg
                className="w-10 h-10"
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
            </Link>
          </li>
          <li className={`${navItemStyle}`}>
            <Link href="/events">
              <div>Events</div>
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
              <div>Scholarship</div>
            </Link>
            <div className={navLineStyle}></div>
          </li>
          <li className={`${navItemStyle}`}>
            <Link href="/contact">
              <div>Contact</div>
            </Link>
            <div className={navLineStyle}></div>
          </li>
        </ul>
      </div>
    );
  }
}
