import React, { Component } from "react";
class BtnAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      id: "",
      isAdd: false,
    };
  }
  onChangeValue = (event) => {
    this.setState({
      task: event.target.value,
    });
  };
  addTask = (data) => {
    if (this.state.task === "") {
      alert("may da nhap gi dau");
      return;
    } else {
      this.props.onAdd(data);
      this.onClear();
    }
  };

  onClear = () => {
    this.setState({
      task: "",
    });
  };
  componentWillMount() {
    if (this.props.task) {
      this.setState({
        id: this.props.task.id,
        task: this.props.task.task,
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.task) {
      this.setState({
        id: nextProps.task.id,
        task: nextProps.task.task,
      });
    } else if (nextProps && nextProps.task == null) {
      this.setState({
        id: "",
        name: "",
      });
    }
  }
  render() {
    return (
      <div>
        <label htmlFor="">Nhiệm vụ của mày ngày hôm nay</label>
        <input
          type="text"
          placeholder="nhap ma k lm thi dung nhap"
          value={this.state.task}
          onChange={(event) => this.onChangeValue(event)}
        />

        <button onClick={() => this.addTask(this.state)}>
          {this.props.task ? "Update" : "ADD"}
        </button>
      </div>
    );
  }
}
export default BtnAdd;
