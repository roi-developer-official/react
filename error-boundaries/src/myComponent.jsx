import React from "react";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    if (this.state.counter === 1) {
      throw new Error("somting wrong");
    }
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}

export default MyComponent;
