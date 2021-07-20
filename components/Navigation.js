import { Component } from 'react';
import Link from 'next/link';
import { teams } from '../pages/index';
import styles from '../styles/component/Navigation.module.css';
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
          {teams[team]}
        </Link>
      );
    });
    Array.from(this.props.registeredPrograms || []).forEach((program) => {
      program = program.program.toLowerCase();
      programList.push(
        <Link key={`program-${program}`} href={`/program/${program}`}>
          {teams[program]}
        </Link>
      );
    });
    return (
      <div id="navigation">
        <ul className={styles.navbar}>
          <li className={styles.navitem}>
            <Link href="/">
              <div className={styles.navtext}>About</div>
            </Link>
            <div className={styles.navunderline}></div>
          </li>
          <li className={styles.navitem}>
            <Link href="/join">
              <div className={styles.navtext}>Join</div>
            </Link>
            <div className={styles.navunderline}></div>
          </li>
          <li className={styles.navitem}>
            <div className={styles.navtext}>Programs</div>
            <div className={styles.programnav}>{programList}</div>
            <div className={styles.navunderline}></div>
          </li>
          <li className={styles.navitem}>
            <div className={styles.navtext}>Teams</div>
            <div className={styles.teamnav}>{teamList}</div>
            <div className={styles.navunderline}></div>
          </li>
          <li className={styles.navitem}>
            <Link href="/">
              <svg
                className={[styles.acm]}
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
          <li className={styles.navitem}>
            <Link href="/events">
              <div className={styles.navtext}>Events</div>
            </Link>
            <div className={styles.navunderline}></div>
          </li>
          <li className={styles.navitem}>
            <Link href="/sponsors">
              <div className={styles.navtext}>Sponsors</div>
            </Link>
            <div className={styles.navunderline}></div>
          </li>
          <li className={styles.navitem}>
            <Link href="/scholarship">
              <div className={styles.navtext}>Scholarship</div>
            </Link>
            <div className={styles.navunderline}></div>
          </li>
          <li className={styles.navitem}>
            <Link href="/contact">
              <div className={styles.navtext}>Contact</div>
            </Link>
            <div className={styles.navunderline}></div>
          </li>
        </ul>
      </div>
    );
  }
}
