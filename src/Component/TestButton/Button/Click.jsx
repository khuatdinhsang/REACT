import React, { Component } from "react";

class Click extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      salary: 0,
    };
  }
  handleOnChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;

    this.setState({
      [name]: value,
    });
  };
  addItem1 = () => {
    this.props.addItem(this.state);
  };
  render() {
    return (
      <>
        <label htmlFor="">Job's title</label>
        <input
          type="text"
          value={this.state.title}
          name="title"
          onChange={(event) => this.handleOnChange(event)}
        />
        <br />
        <label htmlFor="">Salary</label>
        <input
          type="text"
          value={this.state.salary}
          name="salary"
          onChange={(event) => this.handleOnChange(event)}
        />
        <br />
        <button onClick={() => this.addItem1()}>Add</button>
      </>
    );
  }
}

export default Click;
