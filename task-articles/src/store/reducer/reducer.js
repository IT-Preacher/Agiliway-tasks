import { combineReducers } from "redux";
import {
  getArticlesReducer,
  getArticleReducer,
  addArticleReducer,
} from "../../pages/Domains/reducers";

const rootReducer = combineReducers({
  articles: getArticlesReducer,
  article: getArticleReducer,
  addArticleModal: addArticleReducer,
});

export default rootReducer;
