import React, { Component } from "react";

class ReturnMap extends Component {
  render() {
    let ulStyle = {
      marginTop: 15,
    };
    let liStyle = {
      lineHeight: 1.8,
    };
    let forArray = [
      <li key="1" style={liStyle}>
        React
      </li>,
      <li key="2" style={liStyle}>
        18.2.0
      </li>,
      <li key="3" style={liStyle}>
        Array Map
      </li>,
    ];
    //let forNewArray = [];

    /*
    for (let i = 0; i < forArray.length; i++) {
      forNewArray.push(forArray[i]);
    }
    */

    /*
    forArray.forEach(function (result) {
      //console.log(result);
      forNewArray.push(result);
    });
    */

    //forArray.forEach((result) => forNewArray.push(result));

    // let mapNewArray = forArray.map((arrayVal) => {
    //   console.log(arrayVal);
    // });

    // let mapNewArray = forArray.map((arrayVal, i) => {
    //   return arrayVal;
    // });

    // let mapNewArray = forArray.map((arrayVal) => arrayVal);

    return <ul style={ulStyle}>{forArray.map((arrayVal) => arrayVal)}</ul>;
  }
}

export default ReturnMap;
