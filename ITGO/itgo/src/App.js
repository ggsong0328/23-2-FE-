import React, { Component } from "react";
import Component1 from "./Component1_1";
import Component2 from "./Component1_2";
import Component3 from "./Component1_3";
import "./css/basic1.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      title: "Contact Me",
      description:
        "Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum integer. Integer eu ante ornare amet commetus.",
    };
  }
  render() {
    return (
      <div className="container">
        <section id="contact">
          <Component1 propsValue={this.state.title} />
          <Component2 propsValue={this.state.description} />
          <Component3 />
        </section>
      </div>
    );
  }
}

export default App;
