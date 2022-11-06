import React, { Component } from "react";
import Click from "./Click";
import ListItem from "./ListItem";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      salary: "",
      listItem: [
        { id: 1, title: "sang1", salary: 1100 },
        { id: 2, title: "sang2", salary: 1200 },
        { id: 3, title: "sang3", salary: 1300 },
      ],
    };
  }

  addItem = (data) => {
    var { listItem } = this.state;
    data.id = Math.random();
    listItem.push(data);
    this.setState({ listItem: listItem });
  };
  delete = (data) => {
    var { listItem } = this.state;
    listItem = listItem.filter((item, index) => {
      return item.id != data.id;
    });
    this.setState({ listItem: listItem });
  };
  render() {
    return (
      <div>
        <Click addItem={this.addItem}></Click>
        <ListItem data={this.state.listItem} delete={this.delete} />
      </div>
    );
  }
}

export default AddItem;
