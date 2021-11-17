import {
  editArticleStartAction,
  editArticleSuccessAction,
  editArticleErrorAction,
  articleGetElementAction,
} from "../actions/editArticleAction";
import {
  editArticleRequest,
  getArticleRequest,
} from "../../../services/domain.js";
import getArticlesThunk from "./getArticlesThunk.js";

export const getDataArticleThunk = (id) => {
  return (dispatch) => {
    getArticleRequest(id)
      .then((response) => {
        dispatch(articleGetElementAction(response.data))
      });
  };
};

export const editArticleThunk = (id, article) => {
  return (dispatch) => {
    dispatch(editArticleStartAction());
    editArticleRequest(id, article)
      .then((response) => {
        console.log(response);
        dispatch(editArticleSuccessAction());
        dispatch(getArticlesThunk());
      })
      .catch((error) => {
        console.error(error);
        dispatch(editArticleErrorAction(error));
      });
  };
};