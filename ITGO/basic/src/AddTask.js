import React, { Component } from "react";
import AddTaskList from "./AddTaskList";

class AddTask extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
    };
  }
  addTask = (e) => {
    e.preventDefault();
    // console.log(e);
    // console.log(this.value);
    // console.log(this._input);
    // console.log(this._input.value);
    // console.log(Date.now());

    let taskArray = this.state.tasks;

    if (this._input.value !== "") {
      taskArray.push({
        key: Date.now(),
        msg: this._input.value,
      });
    }

    this.setState({
      tasks: taskArray,
    });
    // console.log(taskArray);
  };

  render() {
    let inputStyle = {
      marginTop: 20,
      padding: "0px 10px",
      width: 125,
      lineHeight: "32px",
      fontSize: 14,
      border: "1px solid #ccc",
    };
    let buttonStyle = {
      margin: "20px 0px 0px 5px",
      padding: 10,
      fontSize: 14,
      backgroundColor: "#999",
      border: "none",
      cursor: "pointer",
    };

    // console.log(this.state.tasks);

    return (
      <div className="main">
        <div className="header">
          <form onSubmit={this.addTask}>
            <input
              type="text"
              placeholder="Add Task"
              style={inputStyle}
              ref={(e) => (this._input = e)}
            ></input>
            <button type="submit" style={buttonStyle}>
              Added
            </button>
            <AddTaskList propsValue={this.state.tasks} />
          </form>
        </div>
      </div>
    );
  }
}

export default AddTask;
