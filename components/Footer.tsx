import styles from '../styles/component/Footer.module.css';

/**
 * A site-wide footer containing links to other ACM resources.
 */
export default function Footer() {
  return (
    <div className={styles.footer}>
      <a className={styles.footitem} href="https://discord.com/invite/kWP6gBv">
        Discord<div className={styles.footunderline}></div>
      </a>
      <div className={styles.footitem}>
        <svg
          className={styles.logo}
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
      </div>
      <a className={styles.footitem} href="https://github.com/acmutd">
        GitHub
        <div className={styles.footunderline}></div>
      </a>
    </div>
  );
}
