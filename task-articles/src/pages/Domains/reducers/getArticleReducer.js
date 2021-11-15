import {
  ARTICLE_FETCH_SUCCESS,
  ARTICLE_FETCH_START,
  ARTICLE_FETCH_ERROR,
} from "../action-types/articles.action-types.js";

const initialState = {
  articleItem: {},
  loading: true,
  error: null,
};

export const getArticleReducer = (state = initialState, action) => {
  console.log("Payload ", action.payload);
  switch (action.type) {
    case ARTICLE_FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        articleItem: action.payload,
      };
    }
    case ARTICLE_FETCH_START: {
      return { ...state, loading: true };
    }
    case ARTICLE_FETCH_ERROR: {
      return { ...state, error: "error" };
    }
    default:
      return state;
  }
};
