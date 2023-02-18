import React, { Component } from "react";
import "./TodoApp.css";

export default class TodoApp extends Component {
  state = {
    input: "",
    items: [],
  };
  handlChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  storeItems = (event) => {
    event.preventDefault();
    const { input } = this.state;

    this.setState({
      items: [...this.state.items, input],
      input: "", //spread operators
    });
  };

  deleteItem = (index) => {
    const allItems = this.state.items;
    allItems.splice(index, 1);

    this.setState({
      items: allItems,

      //items : this.state.items.filter((data,index) => index !== index)
    });
  };
  render() {
    const { input, items } = this.state; //destructuring
    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeItems}>
          <h1>Todo App</h1>

          <input
            type="text"
            value={input}
            onChange={this.handlChange}
            placeholder="Enter items ..."
          />
        </form>

        <ul>
          {items.map((data, index) => (
            <li key={index}>
              {data}{" "}
              <i
                onClick={() => this.deleteItem(index)}
                className="fa-solid fa-trash-can"
              ></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
