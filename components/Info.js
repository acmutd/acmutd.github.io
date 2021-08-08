import { Component } from 'react';

export default class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className={`m-8 max-w-3/5${
          this.props.className ? ` ${this.props.className}` : ''
        }`}
      >
        <div className="text-center font-bold text-xl mb-2 sm:text-2xl">
          {this.props.title}
        </div>
        <div className="text-base">{this.props.body}</div>
      </div>
    );
  }
}
