import {
  addArticleStart,
  addArticleSuccess,
  addArticleError,
} from "../actions/addArticleAction";
import { addArticleRequest } from "../../../services/domain.js";
import getArticlesThunk from "./getArticlesThunk";

const addArticleThunk = (article) => {
  return (dispatch) => {
    dispatch(addArticleStart());
    addArticleRequest(article)
      .then((response) => {
        console.log(response);
        dispatch(addArticleSuccess());
        dispatch(getArticlesThunk());
      })
      .catch((error) => {
        console.error(error);
        dispatch(addArticleError(error));
      });
  };
};

export default addArticleThunk;
