import { Component } from 'react'
import styles from '../styles/component/Footer.module.css'

export default class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className={styles.footer}>
                <div className={styles.footitem} onClick={() => window.open('https://acmutd.co/discord')}>Discord<div className={styles.footunderline}></div></div>
                <div className={styles.footitem}>
                    <svg className={styles.logo} viewBox="0 0 240 165" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g style={{mixBlendMode:'difference'}}>
                            <rect width="115.945" height="115.945" transform="matrix(0.702643 0.711543 -0.702643 0.711543 81.4683 0)" fill="white"/>
                        </g>
                        <g style={{mixBlendMode:'difference'}}>
                            <circle cx="162.5" cy="82.5" r="69.5" stroke="white" strokeWidth="15" />
                        </g>
                    </svg>
                </div>
                <div className={styles.footitem} onClick={() => window.open('https://github.com/acmutd')}>GitHub<div className={styles.footunderline}></div></div>
            </div>
        )
    }
}
