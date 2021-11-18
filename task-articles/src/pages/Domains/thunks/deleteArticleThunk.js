import {
  modalFunctionStartAction,
  modalFunctionSuccessAction,
} from "../actions/modalAction"
import getArticlesThunk from "./getArticlesThunk";
import { deleteArticleRequest } from '../../../services/domain';

export const deleteArticleThunk = (id) => {
  return (dispatch) => {
    dispatch(modalFunctionStartAction());
    deleteArticleRequest(id)
      .then((response) => {
        console.log(response);
        dispatch(modalFunctionStartAction());
        dispatch(modalFunctionSuccessAction());
        dispatch(getArticlesThunk());
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

