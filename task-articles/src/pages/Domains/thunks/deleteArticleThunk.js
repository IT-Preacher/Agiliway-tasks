import {
  modalFunctionStartAction,
  modalFunctionSuccessAction,
} from "../actions/modalAction";
import { message } from "antd";
import getArticlesThunk from "./getArticlesThunk";
import { deleteArticleRequest } from "../../../services/domain";

export const deleteArticleThunk = (id) => {
  return (dispatch) => {
    dispatch(modalFunctionStartAction());
    deleteArticleRequest(id)
      .then((response) => {
        console.log(response);
        message.success("Article deleted", 3);
        dispatch(modalFunctionStartAction());
        dispatch(modalFunctionSuccessAction());
        dispatch(getArticlesThunk());
      })
      .catch((error) => {
        message.error("Delete article error", 3);
        console.error(error);
      });
  };
};

