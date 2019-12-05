import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      auotIncId: null
    };
  }

  increment = () => {
    this.setState({counter : this.state.counter + 1});
  }

  autoInc = () => {
    let setIncId = setInterval(this.increment, 500);
    this.setState({ auotIncId:setIncId });
  }

  decrement = () => {
    if(this.state.counter > 0)
    this.setState({ counter: this.state.counter - 1 });
  }

  stopAutoInc = () => {    
    console.log("auto inc id " + this.state.auotIncId);
    clearInterval(this.state.auotIncId);
  }


 render(){
   return(
     <div class="counter">
     <h1> Auto increment Demo </h1>
     <h2>
      { this.state.counter }      
      </h2>
      <button onClick = { this.autoInc } type="button">Start</button>
      <button onClick = { this.stopAutoInc } type="button">Stop</button>

      </div>
   )
 }

}