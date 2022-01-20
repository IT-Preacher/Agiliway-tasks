import {
  NEWS_FETCH_START,
  NEWS_FETCH_SUCCESS,
  NEWS_FETCH_ERROR,
  NEWS_POPULAR_FETCH_SUCCESS,
} from "../action-types/news.action-types";

export const getNewsListStartAction = (payload) => ({
  type: NEWS_FETCH_START,
  payload,
});

export const getNewsListSuccessAction = (payload) => ({
  type: NEWS_FETCH_SUCCESS,
  payload,
});

export const getNewsPopularListSuccessAction = (payload) => ({
  type: NEWS_POPULAR_FETCH_SUCCESS,
  payload,
});

export const getNewsListErrorAction = (payload) => ({
  type: NEWS_FETCH_ERROR,
  payload,
});
