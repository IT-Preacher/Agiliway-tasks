import {
  deleteArticleStartAction,
  deleteArticleSuccessAction,
  deleteArticleErrorAction,
  getArticleForDeleteAction,
} from "../actions/deleteArticleAction";
import getArticlesThunk from "./getArticlesThunk";
import { deleteArticleRequest, getArticleRequest } from '../../../services/domain';

export const getArticleForDeleteThunk = (id) => {
  console.log(getArticleRequest);
  return (dispatch) => {
    getArticleRequest(id).then((response) => {
      dispatch(getArticleForDeleteAction(response.data));
    })
  }
}

export const deleteArticleThunk = (id) => {
  return (dispatch) => {
    dispatch(deleteArticleStartAction());
    deleteArticleRequest(id)
      .then((response) => {
        console.log(response);
        dispatch(deleteArticleSuccessAction());
        dispatch(getArticlesThunk());
      })
      .catch((error) => {
        console.error(error);
        dispatch(deleteArticleErrorAction(error));
      });
  };
};
