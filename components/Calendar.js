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
        className='transition mx-0 my-1 px-1 py-0 text-puny text-left text-bold bg-custom rounded cursor-pointer hover:filter md:text-xs'
        style={{ '--color': this.props.color || '#00ffff77', '--tw-brightness': 'brightness(110%)' }}
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
        className='w-2/15 h-2/15 text-base text-black bg-white rounded m-calendar'
        style={{ opacity: this.props.hidden ? 0 : 1 }}
      >
        <div className='px-1 py-0 w-min font-black text-lg'>{this.props.date}</div>
        <div className='events flex flex-col h-calendar text-base overflow-auto overflow-x-hidden rounded'>{events}</div>
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
    const cur = `${date.getFullYear()}-${Math.floor(
      (date.getMonth() + 1) / 10,
    )}${(date.getMonth() + 1) % 10}-${Math.floor(date.getDate() / 10)}${
      date.getDate() % 10
    }`;
    const events = [];
    for (const [key, value] of Object.entries(this.props.events)) {
      if (value.start.startsWith(cur)) {
        events.push({
          event: value.name,
          color: '#9b43ffa2',
        });
      }
    }
    return events;
  }
  render() {
    const svg = (c, f) => (
      <svg
        className={c}
        onClick={f}
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
        <div key={d} className='w-2/15 mx-calendar text-center'>
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
      <div className='w-4/5 m-auto'>
        <div className='text-2xl font-black text-center'>Event Calendar</div>
        <div className='flex justify-center items-center w-full'>
          {svg('transition transform -rotate-90 my-0 mx-1 w-6 h-6 cursor-pointer hover:text-gray-500', () =>
            this.setState({
              offset: this.state.month - 1,
              month: this.state.month - 1 < 0 ? 11 : this.state.month - 1,
            }),
          )}
          <div className='text-lg text-center w-40'>{this.getDate()}</div>
          {svg('transition transform rotate-90 my-0 mx-1 w-6 h-6 cursor-pointer hover:text-gray-500', () =>
            this.setState({
              offset: this.state.month + 1,
              month: this.state.month + 1 > 11 ? 0 : this.state.month + 1,
            }),
          )}
        </div>
        <div className='flex w-full m-auto text-puny font-bold lg:text-base'>{weekdays}</div>
        <div className='flex flex-wrap p-0'>
          {days}
        </div>
      </div>
    );
  }
}
