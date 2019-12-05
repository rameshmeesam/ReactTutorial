import React from "react";
import ReactDOM from "react-dom";
import AutoIncDemo from "./SetInterval";
import CounterDemo from "./Counter";
import UserListDemo from "./LifeCycle";
import StateDemo from "./StateDemo";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <CounterDemo />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
