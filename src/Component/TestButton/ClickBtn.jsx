import React, { Component } from "react";

class ClickBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      status: true,
      name: "",
    };
  }
  renderInput = () => {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          name="name"
          placeholder="enter me"
          onChange={(event) => this.onChangeHandle(event)}
        />
      </div>
    );
  };
  RenderText = () => {
    var { tasks } = this.state;
    tasks = tasks.map((task, index) => {
      return <div>{task}</div>;
    });
    return tasks;
  };
  onReset = () => {
    this.setState({
      name: "",
    });
  };
  onClickMe = () => {
    this.setState({ status: !this.state.status });
  };
  handleBtn = () => {
    if (this.state.status) {
      return this.renderInput();
    } else {
      return;
    }
  };
  addBtn = (data) => {
    var { tasks } = this.state;
    tasks.push(data);
    this.setState({
      tasks: tasks,
    });
    this.onReset();
  };
  onChangeHandle = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div>
        <this.RenderText />
        {this.handleBtn()}
        <button
          style={{
            color: "red",
            backgroundColor: "pink",
          }}
          onClick={() => this.onClickMe()}
        >
          CLick me
        </button>
        <button onClick={() => this.addBtn(this.state.name)}>add me</button>
      </div>
    );
  }
}

export default ClickBtn;
