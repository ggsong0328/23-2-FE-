import React, { Component } from "react";

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("1. constructor()");
  }
  render() {
    console.log("3.render()");
    return <h2>This is Render Function.</h2>;
  }
}

export default LifeCycle;
