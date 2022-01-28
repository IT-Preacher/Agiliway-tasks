import {
  NEWS_FETCH_START,
  NEWS_FETCH_SUCCESS,
  NEWS_FETCH_ERROR,
  NEWS_POPULAR_FETCH_SUCCESS,
  NEWS_SORT_PUBLISHED_FRESH,
  NEWS_SORT_PUBLISHED_OLD,
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

export const newsSortFreshAction = (payload) => ({
  type: NEWS_SORT_PUBLISHED_FRESH,
  payload,
});

export const newsSortOldAction = (payload) => ({
  type: NEWS_SORT_PUBLISHED_OLD,
  payload,
});
