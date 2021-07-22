import { Component } from 'react';
import Info from '../components/Info';
import ImageCarousel from './ImageCarousel';
import styles from '../styles/component/ProgramPage.module.css';
/**
 * Component for an individual testimonial on a program page.
 * right?: bool (is it right or left)
 * name: string
 * description: string
 * image: string (image url)
 */
export class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (this.props.right) {
      return (
        <div
          className={styles.testimonial}
          style={{ alignSelf: 'flex-end', justifyContent: 'flex-end' }}
        >
          <div className={styles.testimonial_container}>
            <div className={styles.testimonial_name}>{this.props.name}</div>
            <div className={styles.testimonial_description}>
              {this.props.description}
            </div>
          </div>
          <div className={styles.testimonial_image}>
            <img src={this.props.image} />
          </div>
        </div>
      );
    }
    return (
      <div className={styles.testimonial}>
        <div className={styles.testimonial_image}>
          <img src={this.props.image} />
        </div>
        <div className={styles.testimonial_container}>
          <div className={styles.testimonial_name}>{this.props.name}</div>
          <div className={styles.testimonial_description}>
            {this.props.description}
          </div>
        </div>
      </div>
    );
  }
}

/**
 * Component for an individual program page.
 * why: string (why do this program)
 * how: string (how to join)
 * benefits: string (program benefits)
 * images: string[] (image urls for carousel)
 * link: string (application url)
 * testimonials?: TestimonialObject[] (grabbed from CMS)
 * projects?: ProjectObject[] (grabbed from CMS)
 */
export default class ProgramPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const testimonials = [];
    let i = 0;
    Array.from(this.props.testimonials || []).forEach((t) => {
      testimonials.push(
        <Testimonial
          right={i % 2 !== 0}
          key={t.name}
          name={t.name}
          description={t.description}
          image={t.image}
        />,
      );
      i += 1;
    });
    return (
      <div style={{ '--accent': this.props.accent || '#ff00ff' }}>
        <div className={styles.logo}>{this.props.program}</div>
        <div className={styles.info_container}>
          <Info id={styles.team_info} title="Why us?" body={this.props.why} />
        </div>
        <div className={styles.info_container}>
          <Info
            id={styles.team_info}
            title="Program Benefits"
            body={this.props.benefits}
          />
        </div>
        <ImageCarousel id={styles.images} images={this.props.images} />
        <div className={styles.info_container}>
          <Info
            id={styles.team_info}
            title="How do I join?"
            body={this.props.how}
          />
        </div>
        <div className={styles.info_container}>
          <div
            onClick={() => window.open(this.props.link)}
            className={styles.join}
            style={{ '--left': this.props.left, '--right': this.props.right }}
          >
            Apply now!
          </div>
        </div>
        {this.props.projects.length > 0 ? (
          <div className={styles.projects_container}>
            <div className={styles.projects_title}>Past Submissions</div>
            <div className={styles.projects}>{this.props.projects}</div>
          </div>
        ) : (
          <div />
        )}
        {testimonials.length > 0 ? (
          <div className={styles.testimonials_container}>
          <div className={styles.testimonials_title}>Testimonials</div>
          <div className={styles.testimonials}>{testimonials}</div></div>) : <div />
        }
      </div>
    );
  }
}
