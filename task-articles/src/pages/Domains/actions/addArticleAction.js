import {
  ADD_ARTICLE_START,
  ADD_ARTICLE_SUCCESS,
  ADD_ARTICLE_ERROR,
  ADD_ARTICLE_OPEN,
  ADD_ARTICLE_CLOSE,
} from "../action-types/articles.action-types";

export const addArticleStart = () => {
  return {
    type: ADD_ARTICLE_START,
  };
};

export const addArticleSuccess = () => {
  return {
    type: ADD_ARTICLE_SUCCESS,
  };
};

export const addArticleError = () => {
  return {
    type: ADD_ARTICLE_ERROR,
  };
};
export const addArticleOpen = () => {
  return {
    type: ADD_ARTICLE_OPEN,
  };
};
export const addArticleClose = () => {
  return {
    type: ADD_ARTICLE_CLOSE,
  };
};
