import React, { Component } from "react";

class ListItem extends Component {
  //   constructor(props) {
  //     super(props);
  //   }
  onHandleDelete = (data) => {
    this.props.delete(data);
  };
  render() {
    let { data } = this.props;
    var ListItems = data.map((item, index) => {
      return (
        <div key={index}>
          <h1>
            {index}'''' {item.title}---{item.salary}
            <></>
            <span onClick={() => this.onHandleDelete(item)}>x</span>
          </h1>
        </div>
      );
    });

    return <>{ListItems}</>;
  }
}

export default ListItem;
