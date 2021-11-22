import { createSelector } from "reselect";

const selectArticles = (state) => state.articles;

export const selectArticleData = createSelector(
  selectArticles,
  ( articles ) => articles.articlesList
);

export const selectArticleLoading = createSelector(
  selectArticles,
  ( articles ) => articles.loading
);

export const selectArticleError = createSelector(
  selectArticles,
  ( articles ) => articles.error
);
