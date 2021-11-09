import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import booksReducer from "./actions/booksReducer";
import bookReducer from "./actions/bookReducer";

const rootReducer = combineReducers({ books: booksReducer, book: bookReducer});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
