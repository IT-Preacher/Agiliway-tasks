import {
  ARTICLES_FETCH_SUCCESS,
  ARTICLES_FETCH_START,
  ARTICLES_FETCH_ERROR,
  ARTICLES_FETCH_START_SAGA,
} from "../action-types/articles.action-types";

export const getArticlesSuccessAction = (payload) => ({
  type: ARTICLES_FETCH_SUCCESS,
  payload,
});

export const getArticlesStartAction = (payload) => ({
  type: ARTICLES_FETCH_START,
  payload,
});

export const getArticlesErrorAction = (payload) => ({
  type: ARTICLES_FETCH_ERROR,
  payload,
});

export const articlesFetchStartSaga = (payload) => ({
  type: ARTICLES_FETCH_START_SAGA,
  payload,
});