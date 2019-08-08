import React, { Component } from "react";
import Header from "../components/Header/Header";
import Counters from "../components/Counters/Counters";
import Alert from "../components/Alert/Alert";
import CreateNewToDoInput from "../components/CreateNewToDoInput/CreateNewToDoInput";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      toDoItems: [
        { action: "Buy Flowers", done: false },
        { action: "Get Shoes", done: false },
        { action: "Collect Tickets", done: true },
        { action: "Call Joe", done: true }
      ],
      userName: "",
      newTextValue: "",
      noInputButClicked: false,
      itemAlreadyExists: false
    };
  }

  changeNameHandler = e => this.setState({ userName: e.target.value });

  updateNewTextValue = event =>
    this.setState({ newTextValue: event.target.value });

  createNewTodo = () => {
    if (!this.state.newTextValue) {
      this.setState({ noInputButClicked: true });
    } else if (
      this.state.toDoItems.find(item => item.action === this.state.newTextValue)
    ) {
      this.setState({ itemAlreadyExists: true, newTextValue: "" });
    } else {
      this.setState({
        toDoItems: [
          ...this.state.toDoItems,
          { action: this.state.newTextValue, done: false }
        ],
        newTextValue: "",
        noInputButClicked: false,
        itemAlreadyExists: false
      });
    }
  };

  render() {
    let {
      toDoItems,
      userName,
      newTextValue,
      noInputButClicked,
      itemAlreadyExists
    } = this.state;

    let itemsDone = toDoItems.filter(item => item.done === true).length;

    return (
      <div>
        <Header userName={userName} changingUserName={this.changeNameHandler} />
        <Counters
          itemsDone={itemsDone}
          itemsLeft={toDoItems.length - itemsDone}
        />
        <CreateNewToDoInput
          savingTheText={this.updateNewTextValue}
          currentText={newTextValue}
          addingNewItem={this.createNewTodo}
        />
        {noInputButClicked || itemAlreadyExists ? (
          <Alert empty={noInputButClicked} exists={itemAlreadyExists} />
        ) : null}
      </div>
    );
  }
}
