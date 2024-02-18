import React, { Component } from "react";

class Component2_2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navigationData: this.props.propsValue,
    };
  }
  render() {
    let data = this.state.navigationData;
    let navigationList = data.map((d, i) => (
      <li key={i + 1}>
        <a href="">{d.menu}</a>
      </li>
    ));

    return (
      <div className="navi">
        <ul>
          {/* <li>
            <a href="">Tutorials</a>
          </li>
          <li>
            <a href="">References</a>
          </li>
          <li>
            <a href="">Examples</a>
          </li> */}
          {navigationList}
        </ul>
      </div>
    );
  }
}

export default Component2_2;
