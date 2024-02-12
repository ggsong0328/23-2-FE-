import React, { Component } from "react";

class AddTaskList extends Component {
  render() {
    let liStyle = {
      marginTop: 10,
    };

    let data = this.props.propsValue;
    // console.log(data);

    // let listTasks = data.map(function (task) {
    //   return (
    //     <li key={task.key} style={liStyle}>
    //       {task.msg}
    //     </li>
    //   );
    // });

    let listTasks = data.map((task) => (
      <li key={task.key} style={liStyle}>
        {task.msg}
      </li>
    ));

    return <ul>{listTasks}</ul>;
  }
}

export default AddTaskList;
