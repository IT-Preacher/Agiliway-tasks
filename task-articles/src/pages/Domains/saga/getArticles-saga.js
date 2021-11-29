import { call, put, takeEvery } from "redux-saga/effects";
import { getArticlesRequestSaga } from "../../../services/domain";
import { ARTICLES_FETCH_START_SAGA } from "./../action-types/articles.action-types";
import {
  getArticlesSuccessAction,
  getArticlesErrorAction,
} from "../actions/getArticlesAction";

export function* getArticlesSagaWorker() {
  try {
    const data = yield call(getArticlesRequestSaga);
    yield put(getArticlesSuccessAction(data));
  } catch (error) {
    yield put(getArticlesErrorAction());
  }
}

export function* watcherGetArticlesSaga() {
  yield takeEvery(ARTICLES_FETCH_START_SAGA, getArticlesSagaWorker);
}

// export function* getArticlesSagaWorker() {
//   try {
//     const data = yield call(getArticlesRequestSaga);
//     console.log(data);
//     yield put({ type: ARTICLES_FETCH_SUCCESS, payload: data });
//   } catch (error) {
//     yield put({ type: ARTICLES_FETCH_ERROR });
//   }
// }

// export function* watcherGetArticlesSaga() {
//   yield takeEvery(ARTICLES_FETCH_START_SAGA, getArticlesSagaWorker);
// }
