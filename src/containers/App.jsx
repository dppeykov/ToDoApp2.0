import React, { Component } from "react";
import Header from "../components/Header/Header";
import Counters from "../components/Counters/Counters";
import Alert from "../components/Alert/Alert";
import CreateNewToDoInput from "../components/CreateNewToDoInput/CreateNewToDoInput";
import AllDoneCard from "../components/AllDoneCard/AllDoneCard";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      toDoItems: [],
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
    let itemsToDoInQueue = toDoItems.length - itemsDone;

    return (
      <div>
        <Header userName={userName} changingUserName={this.changeNameHandler} />
        <Counters itemsDone={itemsDone} itemsLeft={itemsToDoInQueue} />
        <CreateNewToDoInput
          savingTheText={this.updateNewTextValue}
          currentText={newTextValue}
          addingNewItem={this.createNewTodo}
        />
        {noInputButClicked || itemAlreadyExists ? (
          <Alert empty={noInputButClicked} exists={itemAlreadyExists} />
        ) : null}
        {itemsToDoInQueue === 0 ? (
          <div>
            <AllDoneCard />
            <h3>+ ALL DONE ITEMS</h3>
          </div>
        ) : (
          <div>ALL ITEMS TO DO + ALL ITEMS DONE</div>
        )}
      </div>
    );
  }
}
