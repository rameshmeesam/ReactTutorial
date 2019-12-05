import React from "react";
import ReactDOM from "react-dom";
import CounterDemo from "./SetInterval";
import UserListDemo from "./LifeCycle";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <CounterDemo />
      <UserListDemo />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
