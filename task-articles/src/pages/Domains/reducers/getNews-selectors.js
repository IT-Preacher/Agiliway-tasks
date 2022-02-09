import { createSelector } from "reselect";

const selectNewsList = (state) => state;

export const sortedListDateUp = createSelector( [selectNewsList], (newsList) => {
  console.log("Slice of state", selectNewsList());
  console.log("Slice of state for sort", newsList);
  return newsList.sort((a, b) => {
    if (a.publishedAt > b.publishedAt) {
      return -1;
    } else if (a.publishedAt < b.publishedAt) {
      return 1;
    }
    return 0;
  });
});

export const sortedListDateDown = createSelector([(state) => state.newsList], (newsList) =>
newsList.sort((a, b) => {
  if (a.publishedAt > b.publishedAt) {
    return 1;
  } else if (a.publishedAt < b.publishedAt) {
    return -1;
  }
  return 0;
})
);
