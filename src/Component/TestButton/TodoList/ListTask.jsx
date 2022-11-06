import React, { Component } from "react";
class ListTask extends React.Component {
  deleteTask = (data) => {
    this.props.onDelete(data);
  };
  updateTask = (data) => {
    console.log(data);
    this.props.onUpdate(data);
  };

  render() {
    var { listData } = this.props;
    console.log(listData);
    var elementTask = listData.map((item, index) => {
      return (
        <div key={item.id}>
          <h1>
            {index + 1}. {item.task} <></>
          </h1>
          <span>
            <button onClick={() => this.deleteTask(item)}>Delete</button>
            <> </>
            <button onClick={() => this.updateTask(item.id)}>Edit</button>
          </span>
        </div>
      );
    });
    return <div>{elementTask}</div>;
  }
}
export default ListTask;
