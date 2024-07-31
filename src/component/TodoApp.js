import React, { Component } from "react";
import "./TodoApp.css";

export default class TodoApp extends Component {
  state = {
    input: "",
    items: [],
    editIndex: -1,
    editInput: ""
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  storeItems = (event) => {
    event.preventDefault();
    const { input, items } = this.state;
    this.setState({
      items: [...items, input],
      input: "",
    });
  };

  deleteItem = (index) => {
    const items = this.state.items.filter((_, i) => i !== index);
    this.setState({ items });
  };

  startEditItem = (index) => {
    this.setState({
      editIndex: index,
      editInput: this.state.items[index],
    });
  };

  handleEditChange = (event) => {
    this.setState({ editInput: event.target.value });
  };

  saveItem = (index) => {
    const items = [...this.state.items];
    items[index] = this.state.editInput;
    this.setState({
      items,
      editIndex: -1,
      editInput: "",
    });
  };

  render() {
    const { input, items, editIndex, editInput } = this.state;

    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeItems}>
          <h1>Todo App</h1>
          <input
            type="text"
            value={input}
            onChange={this.handleChange}
            placeholder="Enter items ..."
          />
        </form>

        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {editIndex === index ? (
                <>
                  <input
                    className="editInput"
                    type="text"
                    value={editInput}
                    onChange={this.handleEditChange}
                  />
                  <button onClick={() => this.saveItem(index)}>Save</button>
                </>
              ) : (
                <>
                  {item}
                  <i
                    onClick={() => this.startEditItem(index)}
                    className="fa-solid fa-pen"
                  ></i>
                  <i
                    onClick={() => this.deleteItem(index)}
                    className="fa-solid fa-trash-can"
                  ></i>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
