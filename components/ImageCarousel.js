import { Component } from 'react';
import styles from '../styles/component/ImageCarousel.module.css';

const scrollSpeed = 7 /* seconds */ * 1000;

export default class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { image: 0 };
    this.images = [];
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ image: (this.state.image + 1) % this.images.length });
    }, scrollSpeed);
  }
  render() {
    Array.from(this.props.images || []).forEach((i) =>
      this.images.push(<img className="w-full h-full" src={i} />),
    );
    return (
      <div
        className={`m-auto w-3/4 aspect-w-16 aspect-h-7 rounded-3xl overflow-hidden${
          this.props.className ? ` ${this.props.className}` : ''
        }`}
        style={{ zIndex: -3 }}
      >
        {this.images[this.state.image] || <div />}
      </div>
    );
  }
}
