import React, { Component } from "react";
import BtnAdd from "./BtnAdd";
import ListTask from "./ListTask";
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskEditing: null,
      isShow: false,
    };
  }
  s4 = () => {
    return Math.floor((1 + Math.random()) * 0x100000)
      .toString(16)
      .substring(1);
  };
  generateID = () => {
    return this.s4() + "-" + this.s4() + "-" + this.s4();
  };
  generateData = () => {
    var { tasks } = this.state;
    this.setState({
      tasks: tasks,
    });
    var localTasks = JSON.stringify(tasks);
    localStorage.setItem("listTasks", localTasks);
  };
  componentWillMount() {
    let localTasks = localStorage.getItem("listTasks");
    if (localTasks && localStorage) {
      var tasks = JSON.parse(localTasks);
      this.setState({ tasks: tasks });
    }
  }
  onAdd = (data) => {
    var { tasks } = this.state;
    if (data.id == "") {
      data.id = this.generateID();
      tasks.push(data);
    } else {
      var index = this.findIndex(data.id);
      tasks[index] = data;
    }

    this.setState({ tasks: tasks, taskEditing: null });
    var localTasks = JSON.stringify(tasks);
    localStorage.setItem("listTasks", localTasks);
  };

  onDelete = (data) => {
    var { tasks } = this.state;
    tasks = tasks.filter((item) => {
      return item.id != data.id;
    });
    this.setState({ tasks: tasks });
    var localTasks = JSON.stringify(tasks);
    localStorage.setItem("listTasks", localTasks);
  };
  findIndex = (id) => {
    var { tasks } = this.state;
    var result = -1;
    tasks.forEach((item, index) => {
      if (id === item.id) {
        result = index;
        return result;
      }
    });
    return result;
  };
  onUpdate = (data) => {
    var { tasks } = this.state;
    var index = this.findIndex(data);
    var taskEditing = tasks[index];
    this.setState({ taskEditing: taskEditing });
  };
  changeShowHide = () => {
    this.setState({ isShow: !this.state.isShow });
  };

  render() {
    return (
      <div>
        <BtnAdd task={this.state.taskEditing} onAdd={this.onAdd} />
        <h1>Những nhiệm vụ m phải làm hoặc là chết</h1>
        {(!this.state.isShow || this.state.tasks.length === 0) && (
          <button onClick={() => this.changeShowHide()}>Show</button>
        )}
        {this.state.isShow && this.state.tasks.length !== 0 && (
          <>
            <ListTask
              onDelete={this.onDelete}
              onUpdate={this.onUpdate}
              listData={this.state.tasks}
            />
            <button onClick={() => this.changeShowHide()}>Hide</button>
          </>
        )}
      </div>
    );
  }
}
export default Todo;
