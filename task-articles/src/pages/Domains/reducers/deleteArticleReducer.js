import {
  ARTICLE_DELETE_START,
  ARTICLE_DELETE_OPEN,
  ARTICLE_DELETE_SUCCESS,
  ARTICLE_DELETE_CLOSE,
  ARTICLE_DELETE_ERROR,
  ARTICLE_DELETE_ELEMENT,
} from "../action-types/articles.action-types";

const initialState = {
  isLoading: true,
  isError: false,
  modalVisible: false,
  deleteItem: {},
};

export const deleteArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTICLE_DELETE_START:
      return { ...state, isLoading: true };
    case ARTICLE_DELETE_ERROR:
      return { isLoading: false, isError: true };
    case ARTICLE_DELETE_SUCCESS:
      return { ...state, isLoading: false, modalVisible: false };
    case ARTICLE_DELETE_OPEN:
      return { ...state, modalVisible: true };
    case ARTICLE_DELETE_CLOSE:
      return { ...state, modalVisible: false };
    case ARTICLE_DELETE_ELEMENT:
      return { ...state, deleteItem: action.payload };
    default:
      return state;
  }
};
