import {
  modalFunctionStartAction,
  modalFunctionSuccessAction,
  editModalGetDataAction,
  editModalGetDataStartAction,
  editModalGetDataSuccessAction,
  editModalGetDataErrorAction,
} from "../actions/modalAction";
import { message } from "antd";
import {
  editArticleRequest,
  getArticleRequest,
} from "../../../services/domain.js";
import getArticlesThunk from "./getArticlesThunk.js";

export const getDataArticleThunk = (id) => {
  return (dispatch) => {
    dispatch(editModalGetDataStartAction())
    getArticleRequest(id)
      .then((response) => {
        dispatch(editModalGetDataSuccessAction())
        dispatch(editModalGetDataAction(response.data))
      });
  };
};

export const editArticleThunk = (id, article) => {
  return (dispatch) => {
    console.log("Article edit", id, article)
    dispatch(modalFunctionStartAction());
    editArticleRequest(id, article)
      .then((response) => {
        message.success("Article edit success", 3);
        console.log(response);
        dispatch(modalFunctionSuccessAction());
        dispatch(getArticlesThunk());
      })
      .catch((error) => {
        message.success("Error article update", 3);
        console.error(error);
      });
  };
};