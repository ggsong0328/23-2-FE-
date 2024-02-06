import React, { Component } from "react";
import $ from "jquery";

class Jquery extends Component {
  componentDidMount() {
    $("#buttonId").on("click", function () {
      console.log($("#inputId").val());
    });
  }
  render() {
    let inputStyle = {
      marginTop: 30,
      padding: "0px 10px",
      lineHeight: "32px",
      border: "1px solid #ccc",
    };

    let buttonStyle = {
      marginLeft: 6,
      marginTop: 30,
      padding: 10,
      fontSize: 14,
      backgroundColor: "#999",
      color: "#fff",
      border: "none",
      cursor: "printer",
    };

    return (
      <div>
        <h2>This is jQuery.</h2>
        <input id="inputId" name="inputName" style={inputStyle} />
        <button id="buttonId" style={buttonStyle}>
          jQuery Button
        </button>
      </div>
    );
  }
}

export default Jquery;
