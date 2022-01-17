import { combineReducers } from "redux";
import {
  getArticlesReducer,
  getArticleReducer,
  modalReducer,
  getNewsAPIReducer,
} from "../../pages/Domains/reducers";

const rootReducer = combineReducers({
  articles: getArticlesReducer,
  article: getArticleReducer,
  modal: modalReducer,
  news: getNewsAPIReducer,
});

export default rootReducer;