import { GET_ARTICLES } from '../action-types';

export const getArticlesAction = (payload) => ({
    type: GET_ARTICLES,
    payload
});