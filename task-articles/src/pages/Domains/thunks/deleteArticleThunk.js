import {
    deleteArticleStartAction,
    deleteArticleSuccessAction,
    deleteArticleErrorAction,
} from "../actions/editArticleAction";
import { deleteArticleRequest } from "../../../services/domain.js";
import { getArticlesThunk } from "./getArticlesThunk.js";

const deleteArticleThunk = (id) => {
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

export default deleteArticleThunk;
