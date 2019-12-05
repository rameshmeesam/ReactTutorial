import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrement = () => {
    if (this.state.counter > 0)
      this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div class="counter">
        <h1> Counter Demo </h1>
        <h2>{this.state.counter}</h2>
        <button onClick={this.increment} type="button">
          +
        </button>
        <button onClick={this.decrement} type="button">
          _
        </button>
      </div>
    );
  }
}
