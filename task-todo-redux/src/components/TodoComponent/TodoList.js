import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoItems }) => {
  console.log(todoItems)
  return (
    <React.Fragment>
      <div>{todoItems.length === 0 && <h1>No Items</h1>}</div>
      <div>
        {Array.isArray(todoItems) && todoItems.map((todoItem, index) => <TodoItem item={todoItem} key={`todo-${index}`}/>)}
      </div>
    </React.Fragment>
  );
};

export default TodoList;
