import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>React Example</h1>
        <AddTask />
      </div>
    );
  }
}

export default App;
