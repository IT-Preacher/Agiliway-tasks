import {
  ARTICLE_DELETE_START,
  ARTICLE_DELETE_OPEN,
  ARTICLE_DELETE_SUCCESS,
  ARTICLE_DELETE_CLOSE,
  ARTICLE_DELETE_ERROR,
  ARTICLE_DELETE_ELEMENT,
} from "../action-types/articles.action-types.js";

export const deleteArticleStartAction = (payload) => ({
  type: ARTICLE_DELETE_START,
  payload,
});

export const deleteArticleOpenAction = (payload) => ({
  type: ARTICLE_DELETE_OPEN,
  payload,
});

export const deleteArticleSuccessAction = (payload) => ({
  type: ARTICLE_DELETE_SUCCESS,
  payload,
});

export const deleteArticleCloseAction = (payload) => ({
  type: ARTICLE_DELETE_CLOSE,
  payload,
});

export const deleteArticleErrorAction = (payload) => ({
  type: ARTICLE_DELETE_ERROR,
  payload,
});

export const getArticleForDeleteAction = (article) => ({
  type: ARTICLE_DELETE_ELEMENT,
  payload: article
});
