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
    this.mainStyle = 'flex flex-wrap items-top mb-5 text-base min-w-4/5 max-w-4/5 lg:flex-nowrap'
    this.containerStyle = 'flex flex-col max-w-3/5'
    this.titleStyle = 'text-base font-black'
    this.descriptionStyle = 'text-sm'
    this.imageStyle = 'rounded-full w-1/5 m-5 lg:w-1/3'
  }
  render() {
    if (this.props.right) {
      return (
        <div
          className={this.mainStyle}
          style={{ alignSelf: 'flex-end', justifyContent: 'flex-end' }}
        >
          <div className={this.containerStyle}>
            <div className={this.titleStyle}>{this.props.name}</div>
            <div className={this.descriptionStyle}>
              {this.props.description}
            </div>
          </div>
          <div className={this.imageStyle}>
            <img className='rounded-full' style={{ aspectRatio: 1 }} src={this.props.image} />
          </div>
        </div>
      );
    }
    return (
      <div className={this.mainStyle}>
        <div className={this.imageStyle}>
          <img className='rounded-full' style={{ aspectRatio: 1 }} src={this.props.image} />
        </div>
        <div className={this.containerStyle}>
          <div className={this.titleStyle}>{this.props.name}</div>
          <div className={this.descriptionStyle}>
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
    this.infoStyle = 'flex items-center justify-center my-10'
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
        <div className='flex items-center justify-center mb-14'>{this.props.program}</div>
        <div className={this.infoStyle}>
          <Info title="Why us?" body={this.props.why} />
        </div>
        <div className={this.infoStyle}>
          <Info
            title="Program Benefits"
            body={this.props.benefits}
          />
        </div>
        <ImageCarousel images={this.props.images} />
        <div className={this.infoStyle}>
          <Info
            title="How do I join?"
            body={this.props.how}
          />
        </div>
        <div className={this.infoStyle}>
          <div
            onClick={() => window.open(this.props.link)}
            className='join transition cursor-pointer rounded-2xl p-2 px-12 mx-24 my-3 hover:filter'
            style={{ '--left': this.props.left, '--right': this.props.right, '--tw-brightness': 'brightness(140%)', }}
          >
            Apply now!
          </div>
        </div>
        {this.props.projects && this.props.projects.length > 0 ? (
          <div className='flex items-center justify-center flex-wrap text-sm mb-14'>
            <div className='m-0 text-xl font-bold text-center'>Past Submissions</div>
            <div className='flex flex-wrap items-center justify-center text-base'>{this.props.projects}</div>
          </div>
        ) : (
          <div />
        )}
        {testimonials.length > 0 ? (
          <div className='m-auto flex flex-col w-4/5'>{testimonials}</div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}
