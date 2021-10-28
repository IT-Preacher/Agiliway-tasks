import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoItems }) => {

  return (
    <React.Fragment>
      <div>{todoItems.length === 0 && <h1>No Items</h1>}</div>
      <div>
        {Array.isArray(todoItems) && todoItems.map((todoItem) => <TodoItem item={todoItem}/>)}
      </div>
    </React.Fragment>
  );
};

export default TodoList;
