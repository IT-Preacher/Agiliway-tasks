import { createSelector } from "reselect";

const selectArticle = (state) => state.article;

export const selectArticleItem = createSelector(
  selectArticle,
  (article) => article.articleItem
);

export const selectArticleLoading = createSelector(
  selectArticle,
  (article) => article.loading
);

export const selectArticleError = createSelector(
    selectArticle,
    (article) => article.error
);