import { Component } from 'react';
import styles from '../styles/component/Timeline.module.css';

export class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  test() {
    this.testVar = 'test text';
  }
  render() {
    const media = [];
    Array.from(this.props.media || []).forEach((m) =>
      media.push(
        <img
          key={m.url}
          className={styles.media}
          style={m.style}
          src={m.url}
        ></img>
      )
    );
    const connectup = this.props.connectup ? (
      <div className={styles.connectorup}></div>
    ) : (
      <div />
    );
    const connectdown = this.props.connectdown ? (
      <div className={styles.connectordown}></div>
    ) : (
      <div />
    );
    return (
      <div className={styles.container}>
        <div className={styles.semester}>
          {this.testVar || this.props.semester}
        </div>
        <div className={styles.diamond}></div>
        {connectup}
        {connectdown}
        <div className={styles.content}>
          <div className={styles.textcontent}>
            <div className={styles.title}>{this.props.title}</div>
            <div className={styles.description}>{this.props.description}</div>
          </div>
          <div className={styles.mediacontent}>{media}</div>
        </div>
      </div>
    );
  }
}

export default class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const events = [];
    Array.from(this.props.events).forEach((e, i, a) => {
      events.push(
        <Event
          key={e.semester}
          semester={e.semester}
          title={e.title}
          description={e.description}
          media={e.media}
          connectup={i === 0 ? false : true}
          connectdown={i === a.length - 1 ? false : true}
        />
      );
    });
    return <div className={styles.events}>{events}</div>;
  }
}
