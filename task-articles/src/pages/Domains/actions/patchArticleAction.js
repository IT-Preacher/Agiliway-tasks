import { PATCH_ARTICLE } from '../action-types';

export const patchArticleAction = (payload) => ({
    type: PATCH_ARTICLE,
    payload
});