import React, { Component } from "react";

const App = () => {
  return <Counter></Counter>;
};

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(this.state);
    this.state = { count: 0 };
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleNegativeButton = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    console.log("render");
    return (
      <>
        <div>counter: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleNegativeButton}>-1</button>
      </>
    );
  }
}

export default App;
