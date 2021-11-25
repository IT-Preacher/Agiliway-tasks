import { call, put, takeEvery } from "redux-saga/effects";
import { getArticlesRequestSaga } from "../../../services/domain";
import {
  ARTICLES_FETCH_ERROR,
  ARTICLES_FETCH_START_SAGA,
  ARTICLES_FETCH_SUCCESS,
} from "./../action-types/articles.action-types";

function* getArticlesSagaWorker() {
  try {
    const data = yield call(getArticlesRequestSaga);
    console.log(data);
    yield put({ type: ARTICLES_FETCH_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: ARTICLES_FETCH_ERROR });
  }
}

export function* watcherGetArticlesSaga() {
  yield takeEvery(ARTICLES_FETCH_START_SAGA, getArticlesSagaWorker);
}
