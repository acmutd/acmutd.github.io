import { Component } from 'react'
import styles from '../styles/component/Info.module.css'

export default class Info extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div id={this.props.id || ''} className={styles.info}>
        <div className={styles.title}>{this.props.title}</div>
        <div className={styles.body}>{this.props.body}</div>
      </div>
    )
  }
}
