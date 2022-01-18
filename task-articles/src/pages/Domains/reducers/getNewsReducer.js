import {
  NEWS_FETCH_START,
  NEWS_FETCH_SUCCESS,
  NEWS_FETCH_ERROR,
} from "../action-types/news.action-types";

const initialState = {
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
    case NEWS_FETCH_START: {
      return { ...state, loading: true };
    }
    case NEWS_FETCH_ERROR: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};
