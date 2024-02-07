import React, { Component, Fragment } from "react";

class SetState extends Component {
  constructor() {
    super();

    this.state = {
      comment: "Original State",
    };
  }

  modifyComment = () => {
    this.setState({
      comment: "Change State",
    });
  };

  render() {
    let buttonStyle = {
      marginTop: 20,
      padding: 10,
      fontSize: 14,
      backgroundColor: "#999",
      color: "#fff",
      border: "none",
      cursor: "pointer",
    };

    return (
      <Fragment>
        <p>{this.state.comment}</p>
        <button onClick={this.modifyComment} style={buttonStyle}>
          Modify Comment
        </button>
      </Fragment>
    );
  }
}

export default SetState;
