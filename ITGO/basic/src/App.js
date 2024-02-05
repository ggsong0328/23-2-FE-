import React, { Component } from "react";
import LifeCycle from "./Lifecycle";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1>React Example</h1>
        <LifeCycle />
      </div>
    );
  }
}

export default App;
