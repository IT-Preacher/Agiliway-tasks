import {
  ARTICLE_EDIT_CLOSE,
  ARTICLE_EDIT_SUCCESS,
  ARTICLE_EDIT_START,
  ARTICLE_EDIT_ERROR,
  ARTICLE_EDIT_OPEN,
  ARTICLE_EDIT_ELEMENT,
} from "../action-types/articles.action-types";

const initialState = {
  isLoading: true,
  isError: false,
  modalVisible: false,
  articleItem: {},
};

export const editArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTICLE_EDIT_START:
      return { ...state, isLoading: true };
    case ARTICLE_EDIT_ERROR:
      return { isLoading: false, isError: true };
    case ARTICLE_EDIT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        modalVisible: false,
        articleItem: action.payload,
      };
    case ARTICLE_EDIT_OPEN:
      return { ...state, modalVisible: true };
    case ARTICLE_EDIT_CLOSE:
      return { ...state, modalVisible: false };
    case ARTICLE_EDIT_ELEMENT:
      return {
        ...state,
        articleItem: action.payload,
      };
    default:
      return state;
  }
};
