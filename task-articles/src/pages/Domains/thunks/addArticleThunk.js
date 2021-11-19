import { 
  modalFunctionStartAction,
  modalFunctionSuccessAction,
} from "../actions/modalAction";
import { message } from "antd";
import { addArticleRequest } from "../../../services/domain.js";
import getArticlesThunk from "./getArticlesThunk";

export const addArticleThunk = (article) => {
  return (dispatch) => {
    dispatch(modalFunctionStartAction());
    addArticleRequest(article)
      .then((response) => {
        console.log(response);
        message.success("Article added", 3);
        dispatch(modalFunctionSuccessAction());
        dispatch(getArticlesThunk());
      })
      .catch((error) => {
        message.error("Error", 3)
        console.error(error);
        //dispatch(addArticleError(error));
      });
  };
};
