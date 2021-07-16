import { ArraySetLength } from 'es-abstract'
import { Component } from 'react'
import styles from '../styles/component/ImageCarousel.module.css'

const scrollSpeed = 7 /* seconds */ * 1000

export default class ImageCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = { image: 0 }
    this.images = []
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ image: (this.state.image + 1) % this.images.length })
    }, scrollSpeed)
  }
  render() {
    Array.from(this.props.images).forEach((i) =>
      this.images.push(<img src={i} />),
    )
    return (
      <div id={this.props.id || ''} className={styles.container}>
        {this.images[this.state.image] || <div />}
        <div className={styles.nav}>
          {/* TODO: Add a manual interactive navigator */}
        </div>
      </div>
    )
  }
}
