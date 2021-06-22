import { Component } from 'react';
import Info from '../components/Info';
import ImageCarousel from './ImageCarousel';
import Timeline from './Timeline';
import styles from '../styles/component/TeamPage.module.css';

export class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    github(link) {
        if (!link) return <div key='github' />
        return <svg key='github' onClick={() => window.open(link)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        
    }
    linkedin(link) {
        if (!link) return <div key='linkedin' />
        return <svg key='linkedin' onClick={() => window.open(link)} focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
    }
    website(link) {
        if (!link) return <div key='website' />
        return <svg key='website' onClick={() => window.open(link)} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5824 8.96178C18.3831 11.8529 18.3446 16.4882 15.5993 19.335C15.5941 19.3408 15.588 19.3471 15.5824 19.3529L12.4324 22.6013C9.65414 25.4664 5.13403 25.466 2.35617 22.6013C-0.42211 19.7367 -0.42211 15.0748 2.35617 12.2102L4.09552 10.4165C4.55677 9.94086 5.35111 10.257 5.37492 10.9292C5.4053 11.7859 5.55427 12.6466 5.82914 13.4777C5.92224 13.7592 5.85572 14.0705 5.65181 14.2808L5.03836 14.9134C3.72464 16.2681 3.68344 18.4741 4.98422 19.8421C6.29785 21.2236 8.457 21.2318 9.78071 19.8667L12.9307 16.6188C14.2522 15.2561 14.2466 13.0534 12.9307 11.6964C12.7572 11.5178 12.5825 11.3791 12.446 11.2821C12.3494 11.2138 12.2697 11.123 12.2131 11.0172C12.1566 10.9114 12.1248 10.7935 12.1203 10.6728C12.1018 10.162 12.2773 9.63559 12.6687 9.23195L13.6556 8.21416C13.9144 7.94728 14.3204 7.9145 14.6205 8.13048C14.9641 8.37796 15.286 8.65613 15.5824 8.96178ZM22.1888 2.14868C19.4109 -0.716033 14.8908 -0.716419 12.1125 2.14868L8.9625 5.39711C8.95688 5.40291 8.95078 5.4092 8.94563 5.415C6.20034 8.26182 6.16186 12.8971 8.9625 15.7882C9.25888 16.0939 9.58076 16.372 9.92442 16.6195C10.2245 16.8355 10.6305 16.8026 10.8893 16.5358L11.8762 15.518C12.2676 15.1144 12.4431 14.588 12.4245 14.0772C12.4201 13.9565 12.3883 13.8385 12.3317 13.7327C12.2752 13.6269 12.1955 13.5362 12.0989 13.4678C11.9624 13.3709 11.7877 13.2322 11.6142 13.0536C10.2983 11.6966 10.2927 9.49391 11.6142 8.13116L14.7642 4.88321C16.0879 3.51814 18.247 3.52636 19.5607 4.90786C20.8614 6.27588 20.8203 8.48182 19.5065 9.83659L18.8931 10.4692C18.6892 10.6795 18.6226 10.9908 18.7157 11.2722C18.9906 12.1034 19.1396 12.9641 19.17 13.8208C19.1938 14.493 19.9881 14.8091 20.4494 14.3334L22.1887 12.5397C24.967 9.67518 24.967 5.01329 22.1888 2.14868Z"/>
        </svg>
        
    }
    render() {
        const socials = [this.github(this.props.github), this.linkedin(this.props.linkedin), this.website(this.props.website)]
        return (
            <div className={styles.profile}>
                <div className={styles.profile_image}><img src={`/assets/officers/${this.props.image || 'default'}.png`} /></div>
                <div className={styles.profile_name}>{this.props.name}</div>
                <div className={styles.profile_position}>{this.props.position}</div>
                <div className={styles.profile_socials}>{socials}</div>
            </div>
        )
    }
}

export default class TeamPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const officers = [];
    Array.from(this.props.officers).forEach((o) =>
      officers.push(
        <Profile
          key={o.name}
          name={o.name}
          position={o.position}
          image={o.image}
          github={o.github}
          linkedin={o.linkedin}
          website={o.website}
        />,
      ),
    );
    return (
      <div style={{ '--accent': this.props.accent || '#ff00ff' }}>
        <div className={styles.logo}>{this.props.team}</div>
        <div className={styles.officers}>{officers}</div>
        <div className={styles.info_container}>
          <Info
            id={styles.team_info}
            title="What we do"
            body={this.props.info}
          />
        </div>
        <ImageCarousel id={styles.images} images={this.props.images} />
        <div className={styles.projects_container}>
          <div className={styles.projects_title}>Projects</div>
          <div className={styles.projects}>{this.props.projects || ''}</div>
        </div>
        <div className={styles.timeline}>
          <Timeline events={this.props.events} />
        </div>
      </div>
    );
  }
}
