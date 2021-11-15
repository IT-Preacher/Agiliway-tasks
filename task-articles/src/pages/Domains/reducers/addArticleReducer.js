import {
  ADD_ARTICLE_START,
  ADD_ARTICLE_SUCCESS,
  ADD_ARTICLE_ERROR,
  ADD_ARTICLE_OPEN,
  ADD_ARTICLE_CLOSE,
} from "../action-types/articles.action-types";

const initialState = {
  isLoading: true,
  isError: false,
  modalVisible: false,
};

export const addArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE_START:
      return { ...state, isLoading: true };
    case ADD_ARTICLE_ERROR:
      return { isLoading: false, isError: true };
    case ADD_ARTICLE_SUCCESS:
      return { ...state, isLoading: false, modalVisible: false };
    case ADD_ARTICLE_OPEN:
      return { ...state, modalVisible: true };
    case ADD_ARTICLE_CLOSE:
      return { ...state, modalVisible: false };
    default:
      return state;
  }
};


