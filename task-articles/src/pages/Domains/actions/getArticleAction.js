import {
    ARTICLE_FETCH_SUCCESS,
    ARTICLE_FETCH_START,
    ARTICLE_FETCH_ERROR,
  } from "../action-types/articles.action-types.js";
  
  export const getArticleSuccessAction = (payload) => ({
    type: ARTICLE_FETCH_SUCCESS,
    payload,
  });
  
  export const getArticleStartAction = (payload) => ({
    type: ARTICLE_FETCH_START,
  });
  
  export const getArticleErrorAction = (payload) => ({
    type: ARTICLE_FETCH_ERROR,
  });