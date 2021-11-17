import {
  ADD_ARTICLE_START,
  ADD_ARTICLE_SUCCESS,
  ADD_ARTICLE_ERROR,
  ADD_ARTICLE_OPEN,
  ADD_ARTICLE_CLOSE,
} from "../action-types/articles.action-types";

export const addArticleStart = (payload) => {
  return {
    type: ADD_ARTICLE_START,
  };
};

export const addArticleSuccess = (payload) => {
  return {
    type: ADD_ARTICLE_SUCCESS,
    payload
  };
};

export const addArticleError = (payload) => {
  return {
    type: ADD_ARTICLE_ERROR,
  };
};
export const addArticleOpen = (payload) => {
  return {
    type: ADD_ARTICLE_OPEN,
  };
};
export const addArticleClose = (payload) => {
  return {
    type: ADD_ARTICLE_CLOSE,
  };
};
