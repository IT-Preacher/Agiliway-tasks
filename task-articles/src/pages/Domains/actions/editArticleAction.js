import { ARTICLE_EDIT_CLOSE,
 ARTICLE_EDIT_SUCCESS,
 ARTICLE_EDIT_START,
 ARTICLE_EDIT_ERROR } from '../action-types/articles.action-types';

export const edithArticlStartAction = (payload) => ({
    type: ARTICLE_EDIT_START,
    payload
});

export const edithArticlSuccesstAction = (payload) => ({
    type: ARTICLE_EDIT_SUCCESS,
    payload
});

export const edithArticlCloseAction = (payload) => ({
    type: ARTICLE_EDIT_CLOSE,
    payload
});

export const edithArticlErrorAction = (payload) => ({
    type: ARTICLE_EDIT_ERROR,
    payload
});