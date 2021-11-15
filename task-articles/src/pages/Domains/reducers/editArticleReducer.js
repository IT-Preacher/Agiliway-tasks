import {
    ARTICLE_EDIT_CLOSE,
 ARTICLE_EDIT_SUCCESS,
 ARTICLE_EDIT_START,
 ARTICLE_EDIT_ERROR,
  } from "../action-types/articles.action-types";
  
  const initialState = {
    isLoading: true,
    isError: false,
    modalVisible: false,
  };
  
  export const addArticleReducer = (state = initialState, action) => {
    switch (action.type) {
      case ARTICLE_EDIT_START:
        return { ...state, isLoading: true };
      case ARTICLE_EDIT_ERROR:
        return { isLoading: false, isError: true };
      case ARTICLE_EDIT_SUCCESS:
        return { ...state, isLoading: false, modalVisible: false };
      case ADD_ARTICLE_OPEN:
        return { ...state, modalVisible: true };
      case ARTICLE_EDIT_CLOSE:
        return { ...state, modalVisible: false };
      default:
        return state;
    }
  };