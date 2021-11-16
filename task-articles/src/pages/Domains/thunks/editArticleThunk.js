import {
  edithArticlStartAction,
  edithArticlSuccesstAction,
  edithArticlErrorAction,
} from "../actions/editArticleAction";
import { editArticleRequest } from "../../../services/domain.js";
import { getArticlesThunk } from "./getArticlesThunk.js";

const editArticleThunk = (id, article) => {
  return (dispatch) => {
    dispatch(edithArticlStartAction());
    editArticleRequest(id, article)
      .then((response) => {
        console.log(response);
        dispatch(edithArticlSuccesstAction());
        dispatch(getArticlesThunk());
      })
      .catch((error) => {
        console.error(error);
        dispatch(edithArticlErrorAction(error));
      });
  };
};

export default editArticleThunk;
