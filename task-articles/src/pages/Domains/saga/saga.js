import { all } from "redux-saga/effects";
import { watcherGetArticlesSaga } from "./getArticles-saga";
import { watcherGetArticleSaga } from "./getArticle-saga";
import { watcherDeleteArticleSaga } from "./deleteArticle-saga";
import { watcherEditArticleSaga } from "./editArticle-saga";
import { watcherAddArticleSaga } from "./addArticle-saga";

export default function* rootSaga() {
  yield all([
    watcherGetArticlesSaga(),
    watcherGetArticleSaga(),
    watcherDeleteArticleSaga(),
    watcherEditArticleSaga(),
    watcherAddArticleSaga()
  ]);
}
