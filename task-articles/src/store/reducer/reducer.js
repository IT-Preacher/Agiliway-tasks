import { combineReducers } from "redux";
import {
  getArticlesReducer,
  getArticleReducer,
  addArticleReducer,
  editArticleReducer,
  deleteArticleReducer,
} from "../../pages/Domains/reducers";

const rootReducer = combineReducers({
  articles: getArticlesReducer,
  article: getArticleReducer,
  addArticleModal: addArticleReducer,
  editArticleModal: editArticleReducer,
  deleteArticleModal: deleteArticleReducer,
});

export default rootReducer;
