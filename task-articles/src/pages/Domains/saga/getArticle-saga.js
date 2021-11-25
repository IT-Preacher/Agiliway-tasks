import { call, put, takeEvery } from "redux-saga/effects";
import { getArticleRequestSaga } from "../../../services/domain";
import {
  ARTICLE_FETCH_ERROR,
  ARTICLE_FETCH_START_SAGA,
  ARTICLE_FETCH_SUCCESS,
} from "../action-types/articles.action-types";

function* getArticleSagaWorker(action) {
  try {
    const data = yield call(getArticleRequestSaga, action.payload);
    console.log(data);
    yield put({ type: ARTICLE_FETCH_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: ARTICLE_FETCH_ERROR });
  }
}

export function* watcherGetArticleSaga() {
  yield takeEvery(ARTICLE_FETCH_START_SAGA, getArticleSagaWorker);
}
