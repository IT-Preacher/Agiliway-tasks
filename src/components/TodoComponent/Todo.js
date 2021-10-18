import React, { Component } from "react";
import Form from "../Form";
import TodoList from "./TodoList";
import Button from "../Button";

class Todo extends Component {
  state = {
    todoItems: [],
    fields: {
        todoText: {
          name: "todoText",
          label: "Todo text",
          value: "",
          error: null,
          validator: (value = "") => {
            return value ? false : "Required";
          },
        },
      },
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    const currentField = this.state.fields[name];
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: { ...currentField, value },
      },
    });
  }

  handleToDoItemDelete = (event) => {
    let itemArray = [...this.state.todoItems];
    itemArray.pop();
    this.setState({ todoItems: itemArray });
  };

  handleToDoItemAdd = (event) => {
    event.preventDefault();
    let itemArray = [...this.state.todoItems];
    let {fields:{todoText}} = this.state;

    console.log(todoText.value);
    itemArray.push({id: 1, textTodo: todoText.value});
    this.setState({ todoItems: itemArray });
  };

  render() {
    const {
        todoList,
        fields: { todoText },
    } = this.state;
    let ListItemsLength = this.state.todoItems.length;

    return (
      <div>
        <h1>Todo App</h1>
        <Form 
          type="text"
          onChangeFunction={this.handleChange}
          label={todoText.label}
          value={todoText.value}
          name={todoText.name}
          id={todoText.name}
          onClickFunction={this.handleToDoItemAdd}
          activeParam={ListItemsLength === 10}
        />
        <TodoList todoItems={this.state.todoItems} />
        <Button 
          activeParam={ListItemsLength === 0}
          name="Delete"
          handleFunction={this.handleToDoItemDelete}
        />
      </div>
    );
  }
}

export default Todo;



















