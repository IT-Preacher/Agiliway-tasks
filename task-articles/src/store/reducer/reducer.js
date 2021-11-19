import { combineReducers } from "redux";
import {
  getArticlesReducer,
  getArticleReducer,
  modalReducer,
} from "../../pages/Domains/reducers";

const rootReducer = combineReducers({
  articles: getArticlesReducer,
  article: getArticleReducer,
  modal: modalReducer,
});

export default rootReducer;