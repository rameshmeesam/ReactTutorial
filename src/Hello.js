import React from "react";

export default class Hello extends React.Component {
  render() {
    return (
      <div class="header">
        <h1>Hello {this.props.name}</h1>
      </div>
    );
  }
}
