import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

export const REMOVE_TODO = "REMOVE_TODO";
export const ADD_TODO = "ADD_TODO";

export const addTodoAction = (todo) => ({
  type: ADD_TODO,
  payload: todo
});

export const removeTodoAction = (todoId) => ({
  type: REMOVE_TODO,
  payload: todoId
});

const initialState = {
  todos: [],
};


function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      return { ...state, todos: [...state.todos, action.payload] };
    }
    case REMOVE_TODO: {
      const todoIndex = action.payload;
      const updatedTodos = state.todos.filter((todo, index) => index !== todoIndex)
      return { ...state, todos: updatedTodos };
    }
    default: {
        return state;
    }
  }
}

export const store = createStore(
  todoReducer,
  composeWithDevTools()
  // other store enhancers if any
);


// export const ADD_ITEM_TODO = "ADD_ITEM_TODO";
// export const DELETE_ITEM_TODO = "DELETE_ITEM_TODO";
// //export const INPUT_TODO_CHANGE_ACTION = "INPUT_TODO_CHANGE_ACTION";

// export const addItemTodoAction = (todo) => ({
//   type: ADD_ITEM_TODO,
//   payload: todo,
// });

// export const deleteItemTodoAction = (todoId) => ({
//   type: DELETE_ITEM_TODO,
//   payload: todoId,
// });

// // export const inputTodoChangeAction = (isOpen) => ({
// //   type: INPUT_TODO_CHANGE_ACTION,
// //   payload: isOpen,
// // });

// const initialState = {
//   todoList: [{text: 'etertrt'}],
//   fields: {
//     todoText: {
//       name: "todoText",
//       label: "Todo text",
//       type:"text",
//       error: null,
//     },
//   },
// };

// /*
//     type: ""
//     payload: {} 
//     error: {}
// */

// function modalReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_ITEM_TODO:
//       return { ...state, todos: [...state.todos, action.payload] };
//     case DELETE_ITEM_TODO: {
//         const todoIndex = action.payload;
//         const updatedTodos = state.todos.filter((todo, index) => index !== todoIndex)
//         return { ...state, todos: updatedTodos };
//     }
//     default:
//       return state;
//   }
// }
