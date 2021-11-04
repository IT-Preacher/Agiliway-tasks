import React, { Component } from "react";
import Form from "../Form";
import TodoList from "./TodoList";
import { connect } from "react-redux";
import { removeTodoAction, addTodoAction } from "../../store/store.js";
//import Button from "../Button";

class Todo extends Component {
  state = {
    todoText: ''
  }

  render() {
    console.log(this.props)
    const { todoText } = this.state;
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault();
          const { todoText } = this.state;
          const { addTodo } = this.props;
          addTodo({ text: todoText });
        }}>
          <input value={todoText} onChange={(event) => this.setState({ todoText: event.target.value })} />
          <button type="submit">
            Add Todo
          </button>
        </form>
        {this.props.todos.map((todo, index) => <div key={`todo-${index}`}>
          <span>{todo.text}</span>
          <span onClick={() => {this.props.removeTodo(index)}}>❌</span>
        </div>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchToProps = {
  addTodo: addTodoAction,
  removeTodo: removeTodoAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

// state = {
//   todoText: "",
// };

// render() {
//   const { todoText } = this.state;
//   const { fields, todoList } = this.props;
//   let ListItemsLength = this.props.todoList.length;
//   console.log("Todo list from props " ,todoList)

//   return (
//     <div className="todo">
//       <h1>Todo App</h1>
//       {/* <Form 
//         onChangeFunction={this.handleChange}
//         type={fields.todoText.type}
//         label={fields.todoText.label}
//         value={fields.todoText.value}
//         name={fields.todoText.name}
//         id={fields.todoText.name}
//         onClickFunction={this.handleToDoItemAdd}
//         activeParam={ListItemsLength === 10}
//       /> */}
//       {/*Form*/}
//       <div className="form-todo">
//         <form
//           onSubmit={(event) => {
//             event.preventDefault();
//             const { todoText } = this.state;
//             const { handleAddTodo } = this.props;
//             handleAddTodo({ text: todoText });
//           }}
//         >
//           <label htmlFor="name">{fields.todoText.label}</label>
//           <input
//             type={fields.todoText.type}
//             onChange={(event) =>
//               this.setState({ todoText: event.target.value })
//             }
//             value={todoText}
//             name={fields.todoText.name}
//             id={fields.todoText.name}
//           />
//           <button>add todo</button>
//         </form>
//       </div>
//       {/* <TodoList todoItems={todoList} /> */}
//       {this.props.todoList.map((todo, index) => (
//         <div>
//           <span>{todo.text}</span>
//           <span
//             onClick={() => {
//               this.props.handleDeleteItem(index);
//             }}
//           >
//             ❌
//           </span>
//         </div>
//       ))}
//       <button onClick={this.props.handleDeleteItem}>delete</button>
//     </div>
//   );
// }
// }

// const mapStateToProps = (state) => {
// return {
//   todoList: state.todoList,
//   fields: state.fields,
// };
// };

// const mapDispatchToProps = (dispatch) => {
// return {
//   handleDeleteItem: () => {
//     dispatch(deleteItemTodoAction());
//   },
//   handleAddTodo: addItemTodoAction,
// };
// };
