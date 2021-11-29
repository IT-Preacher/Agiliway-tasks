import {
  ARTICLE_FETCH_SUCCESS,
  ARTICLE_FETCH_START,
  ARTICLE_FETCH_ERROR,
  ARTICLE_FETCH_START_SAGA,
} from "../action-types/articles.action-types.js";

export const getArticleSuccessAction = (payload) => ({
  type: ARTICLE_FETCH_SUCCESS,
  payload,
});

export const getArticleStartAction = (payload) => ({
  type: ARTICLE_FETCH_START,
  payload,
});

export const getArticleErrorAction = (payload) => ({
  type: ARTICLE_FETCH_ERROR,
  payload,
});

export const articleFetchStartSaga = (id) => ({
  type: ARTICLE_FETCH_START_SAGA,
  payload: id
});
