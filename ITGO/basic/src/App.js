import React, { Component } from "react";
import Jquery from "./Jquery";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>React Example</h1>
        <Jquery />
      </div>
    );
  }
}

export default App;
