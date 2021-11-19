import {
  ARTICLES_FETCH_SUCCESS,
  ARTICLES_FETCH_START,
  ARTICLES_FETCH_ERROR,
} from "../action-types/articles.action-types.js";

const initialState = {
  articlesList: [],
  loading: true,
  error: null,
};

export const getArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTICLES_FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        articlesList: action.payload,
      };
    }
    case ARTICLES_FETCH_START: {
      return { ...state, loading: true };
    }
    case ARTICLES_FETCH_ERROR: {
      return { ...state, error: "error" };
    }
    default:
      return state;
  }
};
