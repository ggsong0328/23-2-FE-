import React, { Component } from "react";
import SetState from "./SetState";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>React Example</h1>
        <SetState />
      </div>
    );
  }
}

export default App;
