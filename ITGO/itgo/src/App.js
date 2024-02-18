import React, { Component } from "react";
import Component1 from "./Component2_1";
import Component2 from "./Component2_2";
import Component3 from "./Component2_3";
// import "./css/basic1.css";
import "./css/basic2.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      logo: "Responsive Example",
      navigation: [
        { menu: "Tutorial" },
        { menu: "Reference" },
        { menu: "Example" },
      ],
      sns: [{ icon: "facebook" }, { icon: "twitter" }, { icon: "google-plus" }],
    };
  }
  render() {
    return (
      <section className="main">
        <footer>
          <div className="wrap">
            <Component1 propsValue={this.state.logo} />
            <Component2 propsValue={this.state.navigation} />
            <Component3 propsValue={this.state.sns} />
          </div>
        </footer>
      </section>
    );
  }
}

export default App;
