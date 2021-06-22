import { Component } from 'react';
import styles from '../styles/component/Calendar.module.css';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
export class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className={styles.event}
        style={{ '--color': this.props.color || '#00ffff77' }}
      >
        {this.props.event}
      </div>
    );
  }
}
export class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const events = [];
    if (this.props.events)
      Array.from(this.props.events).forEach((e) =>
        events.push(
          <Event
            key={`${e.event}${e.color}`}
            event={e.event}
            color={e.color}
          />,
        ),
      );
    return (
      <div
        className={styles.daycontainer}
        style={{ opacity: this.props.hidden ? 0 : 1 }}
      >
        <div className={styles.daydate}>{this.props.date}</div>
        <div className={styles.events}>{events}</div>
      </div>
    );
  }
}
export default class Calendar extends Component {
  constructor(props) {
    super(props);
    const data = new Date().getMonth();
    this.state = { offset: data, month: data };
  }
  getDate() {
    const date = new Date();
    return `${months[this.state.month]} ${
      date.getFullYear() + Math.floor(this.state.offset / 12)
    }`;
  }
  getEvents(day, month, year) {
    const date = new Date();
    date.setMonth(month);
    date.setFullYear(year);
    date.setDate(day);
    if (
      date.getDate() === 18 &&
      date.getMonth() === 5 &&
      date.getFullYear() === 2021
    ) {
      return [
        {
          event: 'Dev Meeting',
          color: '#9b43ffa2',
        },
        {
          event: '3 Dev things Due xD',
          color: '#fa4d4dad',
        },
      ];
    } else if (
      date.getDate() === 22 &&
      date.getMonth() === 5 &&
      date.getFullYear() === 2021
    ) {
      return [
        {
          event: 'Skip Work',
          color: '#fa4d4dad',
        },
        {
          event: 'Do Website',
          color: '#55ff9c',
        },
        {
          event: 'Board Meeting',
          color: '#9b43ffa2',
        },
      ];
    } else if (
      date.getDate() === 23 &&
      date.getMonth() === 5 &&
      date.getFullYear() === 2021
    ) {
      return [
        {
          event: 'An Event',
          color: '#fa4d4dad',
        },
        {
          event: 'Another Event',
        },
        {
          event: 'A Third Event',
          color: '#55ff9c',
        },
        {
          event: 'Overflow Yet?',
          color: '#9b43ffa2',
        },
        {
          event: 'Now it did',
          color: '#fa4d4dad',
        },
      ];
    } else if (
      date.getDate() === 1 &&
      date.getMonth() === 7 &&
      date.getFullYear() === 2021
    ) {
      return [
        {
          event: 'Doomsday :((',
          color: '#55ff9c',
        },
      ];
    }
    return [];
  }
  render() {
    const svg = (c, f) => (
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="chevron-up"
        className={c}
        onClick={f}
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"
        ></path>
      </svg>
    );
    const weekdays = [];
    Array.from(daysOfWeek).forEach((d) =>
      weekdays.push(
        <div key={d} className={styles.weekday}>
          {d}
        </div>,
      ),
    );
    const days = [];
    const date = new Date();
    date.setFullYear(date.getFullYear() + Math.floor(this.state.offset / 12));
    date.setMonth(Math.abs(this.state.month % 12));
    date.setDate(1);
    for (let i = 0; i < date.getDay(); i++)
      days.push(<Day key={Math.random()} hidden />);
    for (let i = 0; i < daysInMonth[this.state.month]; i++)
      days.push(
        <Day
          key={i}
          date={`${i + 1}`}
          events={this.getEvents(i + 1, date.getMonth(), date.getFullYear())}
        />,
      );
    return (
      <div className={styles.calendar}>
        <div className={styles.calendartitle}>Event Calendar</div>
        <div className={styles.control}>
          {svg(styles.left, () =>
            this.setState({
              offset: this.state.month - 1,
              month: this.state.month - 1 < 0 ? 11 : this.state.month - 1,
            }),
          )}
          <div className={styles.controldate}>{this.getDate()}</div>
          {svg(styles.right, () =>
            this.setState({
              offset: this.state.month + 1,
              month: this.state.month + 1 > 11 ? 0 : this.state.month + 1,
            }),
          )}
        </div>
        <div className={styles.weekdays}>{weekdays}</div>
        <div className={styles.days}>
          {/*<Day date='1' />
                    <Day date='2' events={[
                        {
                            event: 'An Event'
                        },
                        {
                            event: 'An Event',
                            color: '#ff00ff77'
                        },
                        {
                            event: 'An Event'
                        },
                        {
                            event: 'An Event'
                        },
                        {
                            event: 'An Event'
                        },
                        {
                            event: 'An Event'
                        }
                    ]}/>
                    <Day date='3' />
                    <Day date='4' />
                    <Day date='5' />
                    <Day date='6' />
                    <Day date='7' />
                <Day date='8' />*/}
          {days}
        </div>
      </div>
    );
  }
}
