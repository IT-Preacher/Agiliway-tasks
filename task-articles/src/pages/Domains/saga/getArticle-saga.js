import { call, put, takeEvery } from "redux-saga/effects";
import { getArticleRequestSaga } from "../../../services/domain";
import { ARTICLE_FETCH_START_SAGA } from "../action-types/articles.action-types";
import {
  getArticleSuccessAction,
  getArticleErrorAction,
} from "../actions/getArticleAction";

function* getArticleSagaWorker(action) {
  try {
    const data = yield call(getArticleRequestSaga, action.payload);
    //console.log(data);
    yield put(getArticleSuccessAction(data));
  } catch (error) {
    yield put(getArticleErrorAction());
  }
}

export function* watcherGetArticleSaga() {
  yield takeEvery(ARTICLE_FETCH_START_SAGA, getArticleSagaWorker);
}
