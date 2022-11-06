import React, { Component } from "react";
import AddItem from "./Component/TestButton/Button/AddItem";
import ClickBtn from "./Component/TestButton/ClickBtn";
import Input from "./Component/TestButton/Input";
import Text from "./Component/TestButton/Text";
import Todo from "./Component/TestButton/TodoList/Todo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        {/* <Text />
        <Input /> */}
        {/* <ClickBtn /> */}
        {/* <div className="App"></div> */}
        {/* <button onClick={() => this.capNhatState()}>sang</button>
        <Input ten={this.state.trangthai2} /> */}
        {/* <AddItem /> */}
        <Todo />
      </div>
    );
  }
}

export default App;
