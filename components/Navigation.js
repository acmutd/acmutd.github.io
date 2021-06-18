import { Component } from 'react'
import { teams } from '../pages/index'
import styles from '../styles/Navigation.module.css'
export default class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const teamList = [teams.dev, teams.projects, teams.education, teams.research, teams.media, teams.community, teams.industry, teams.hackutd]
        return (
            <div id='navigation'>
                <ul className={styles.navbar}>
                    <li className={styles.navitem}><div className={styles.navtext}>About</div><div className={styles.navunderline}></div></li>
                    <li className={styles.navitem}><div className={styles.navtext}>Join</div><div className={styles.navunderline}></div></li>
                    <li className={styles.navitem}><div className={styles.navtext}>Programs</div><div className={styles.navunderline}></div></li>
                    <li className={styles.navitem}><div className={styles.navtext}>Teams</div><div className={styles.teamnav}>
                        {teamList}
                    </div><div className={styles.navunderline}></div></li>
                    <li className={styles.navitem}>
                        <svg className={[styles.acm]} viewBox="0 0 240 165" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g style={{mixBlendMode:'difference'}}>
                                <rect width="115.945" height="115.945" transform="matrix(0.702643 0.711543 -0.702643 0.711543 81.4683 0)" fill="white"/>
                            </g>
                            <g style={{mixBlendMode:'difference'}}>
                                <circle cx="162.5" cy="82.5" r="69.5" stroke="white" strokeWidth="15" />
                            </g>
                        </svg>
                    </li>
                    <li className={styles.navitem}><div className={styles.navtext}>Events</div><div className={styles.navunderline}></div></li>
                    <li className={styles.navitem}><div className={styles.navtext}>Sponsors</div><div className={styles.navunderline}></div></li>
                    <li className={styles.navitem}><div className={styles.navtext}>Scholarship</div><div className={styles.navunderline}></div></li>
                    <li className={styles.navitem}><div className={styles.navtext}>Contact</div><div className={styles.navunderline}></div></li>
                </ul>
            </div>
        )
    }
}
/*
<svg width="240" height="165" viewBox="0 0 240 165" fill="none" xmlns="http://www.w3.org/2000/svg">
<g style="mix-blend-mode:difference">
<path fill-rule="evenodd" clip-rule="evenodd" d="M108.618 27.4937L81.4681 0L0 82.5L81.4681 165L108.618 137.506C122.505 151.112 141.523 159.5 162.5 159.5C205.026 159.5 239.5 125.026 239.5 82.5C239.5 39.9741 205.026 5.5 162.5 5.5C141.523 5.5 122.505 13.8884 108.618 27.4937ZM119.158 38.167L108.618 27.4937C94.3521 41.4698 85.5003 60.9512 85.5003 82.5C85.5003 104.049 94.3521 123.53 108.618 137.506L119.158 126.833C130.336 137.763 145.631 144.5 162.5 144.5C196.742 144.5 224.5 116.742 224.5 82.5C224.5 48.2583 196.742 20.5 162.5 20.5C145.631 20.5 130.336 27.2369 119.158 38.167ZM119.158 38.167L162.936 82.5L119.158 126.833C107.646 115.577 100.5 99.8727 100.5 82.5C100.5 65.1273 107.646 49.4234 119.158 38.167Z" fill="black"/>
</g>
</svg>
*/