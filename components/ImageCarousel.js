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
      this.images.push(<img src={i} />),
    );
    return (
      <div className={`m-auto w-3/4 rounded-3xl overflow-hidden${this.props.className ? ` ${this.props.className}` : ''}`
  }>
        {this.images[this.state.image] || <div />}
      </div>
    );
  }
}
