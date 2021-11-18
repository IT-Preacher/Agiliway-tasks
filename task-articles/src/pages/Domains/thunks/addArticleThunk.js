// import {
//   addArticleStart,
//   addArticleSuccess,
//   addArticleError,
// } from "../actions/addArticleAction";
import { 
  modalFunctionStartAction,
  modalFunctionSuccessAction,
} from "../actions/modalAction"
import { addArticleRequest } from "../../../services/domain.js";
import getArticlesThunk from "./getArticlesThunk";

export const addArticleThunk = (article) => {
  return (dispatch) => {
    dispatch(modalFunctionStartAction());
    addArticleRequest(article)
      .then((response) => {
        console.log(response);
        dispatch(modalFunctionSuccessAction());
        dispatch(getArticlesThunk());
      })
      .catch((error) => {
        console.error(error);
        //dispatch(addArticleError(error));
      });
  };
};
