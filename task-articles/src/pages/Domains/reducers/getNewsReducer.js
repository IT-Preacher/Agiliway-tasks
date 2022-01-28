import {
  NEWS_FETCH_START,
  NEWS_FETCH_SUCCESS,
  NEWS_POPULAR_FETCH_SUCCESS,
  NEWS_FETCH_ERROR,
  NEWS_SORT_PUBLISHED_FRESH,
  NEWS_SORT_PUBLISHED_OLD,
} from "../action-types/news.action-types";

const initialState = {
  popularNewsList: [],
  newsList: [],
  loading: true,
  error: null,
};

export const getNewsAPIReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        newsList: action.payload,
      };
    }
    case NEWS_POPULAR_FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        popularNewsList: action.payload,
      };
    }
    case NEWS_FETCH_START: {
      return { ...state, loading: true };
    }
    case NEWS_FETCH_ERROR: {
      return { ...state, error: action.payload, loading: false };
    }
    case NEWS_SORT_PUBLISHED_FRESH: {
      return {
        ...state,
        newsList: action.payload,
        loading: false,
      };
    }
    case NEWS_SORT_PUBLISHED_OLD: {
      return {
        ...state,
        newsList: action.payload,
        loading: false,
      };
    }
    default:
      return state;
  }
};
