import React, { Component, Fragment } from "react";
import gsap from "gsap";
import "./css/gsap1.css";

class App extends Component {
  componentDidMount() {
    let ball = document.getElementsByClassName("ball")[0];

    ball.addEventListener("click", function () {
      gsap.fromTo(
        ball,
        { opacity: 0 },
        { opacity: 1, left: 300, duration: 0.3, delay: 2 }
      );
    });
  }

  render() {
    return (
      <Fragment>
        <h1 className="title">basic :: React Example</h1>
        <div className="container">
          <div className="ball"></div>
        </div>
      </Fragment>
    );
  }
}

export default App;
