import React, { Component } from "react";

class Component2_3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      snsData: props.propsValue,
    };
  }
  render() {
    let data = this.state.snsData;
    let snsList = data.map((d, i) => (
      <li key={i + 1}>
        <a href="" className={"fa fa-" + d.icon} title={d.icon}></a>
      </li>
    ));

    return (
      <div className="sns">
        <ul className="clearfix">
          {/* <li>
            <a href="" className="fa fa-facebook" title="facebook"></a>
          </li>
          <li>
            <a href="" className="fa fa-twitter" title="twitter"></a>
          </li>
          <li>
            <a href="" className="fa fa-google-plus" title="google plus"></a>
          </li> */}
          {snsList}
        </ul>
      </div>
    );
  }
}

export default Component2_3;
