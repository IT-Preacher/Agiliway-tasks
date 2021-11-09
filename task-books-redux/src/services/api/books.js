import client from "./client.js";
import { getBooksAction } from "../../store/actions/booksReducer";
import { getBookAction } from "../../store/actions/bookReducer";

export const getBooks = () => {
  return (dispatch) => {
    client
      .get("/Books")
      .then((response) => {
        dispatch(getBooksAction(response.data));
      })
      .catch((reject) => console.log(reject));
  };
};

export const getBook = (id) => {
  return (dispatch) => {
    client
      .get(`/books/${id}`)
      .then((response) => {
        console.log("responce ",response);
        console.log("responce-data ",response.data)
        dispatch(getBookAction(response.data));
      })
      .catch((reject) => console.log(reject));
  };
};
