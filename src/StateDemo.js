import React from "react";

export default class StateDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [{ name: "John", id: "1" }, { name: "Ram", id: "2" }]
    };
  }

  clickHandle = () => {
    console.log("Inside clickHandle");
    this.setState({
      person: this.state.person.concat({ name: "Ram1", id: "3" })
    });
  };

  displayList = () => {
    if (this.state.person.length > 0) {
      return (
        <ul>
          {this.state.person.map((item, index) => {
            return <li>{item.name}</li>;
          })}

          <li>
            <button onClick={this.clickHandle} type="submit">
              Update List
            </button>
          </li>
        </ul>
      );
    } else {
      return "No list found";
    }
  };

  render() {
    return <div>{this.displayList()}</div>;
  }
}
