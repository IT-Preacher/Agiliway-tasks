import {
  ARTICLE_EDIT_ELEMENT,
  ARTICLE_EDIT_CLOSE,
  ARTICLE_EDIT_SUCCESS,
  ARTICLE_EDIT_START,
  ARTICLE_EDIT_ERROR,
  ARTICLE_EDIT_OPEN,
} from "../action-types/articles.action-types";

export const editArticleStartAction = (payload) => ({
  type: ARTICLE_EDIT_START,
  payload,
});

export const editArticleSuccessAction = (payload) => ({
  type: ARTICLE_EDIT_SUCCESS,
  payload,
});

export const editArticleOpenAction = (payload) => ({
  type: ARTICLE_EDIT_OPEN,
  payload,
});

export const editArticleCloseAction = (payload) => ({
  type: ARTICLE_EDIT_CLOSE,
  payload,
});

export const editArticleErrorAction = (payload) => ({
  type: ARTICLE_EDIT_ERROR,
  payload,
});

export const articleGetElementAction = (article) => ({
    type: ARTICLE_EDIT_ELEMENT,
    payload: article
})