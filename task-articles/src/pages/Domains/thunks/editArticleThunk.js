// import {
//   editArticleStartAction,
//   editArticleSuccessAction,
//   editArticleErrorAction,
//   articleGetElementAction,
// } from "../actions/editArticleAction";
import {
  modalFunctionStartAction,
  modalFunctionSuccessAction,
  editModalGetDataAction,
} from "../actions/modalAction"
import {
  editArticleRequest,
  getArticleRequest,
} from "../../../services/domain.js";
import getArticlesThunk from "./getArticlesThunk.js";

export const getDataArticleThunk = (id) => {
  return (dispatch) => {
    getArticleRequest(id)
      .then((response) => {
        dispatch(editModalGetDataAction(response.data))
      });
  };
};

export const editArticleThunk = (id, article) => {
  return (dispatch) => {
    dispatch(modalFunctionStartAction());
    editArticleRequest(id, article)
      .then((response) => {
        console.log(response);
        dispatch(modalFunctionSuccessAction());
        dispatch(getArticlesThunk());
      })
      .catch((error) => {
        console.error(error);
      });
  };
};