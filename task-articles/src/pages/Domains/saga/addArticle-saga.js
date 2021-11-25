import { call, put, takeLatest } from "redux-saga/effects";
import {
  ADD_MODAL_START_SAGA,
  ARTICLES_FETCH_START_SAGA,
  IN_PROGRES_SAGA,
  MODAL_FUNCTION_SUCCESS,
} from "../action-types/articles.action-types";
import { addArticleRequestSaga } from "./../../../services/domain";

function* addArticleSagaWorker(action) {
  yield put({ type: IN_PROGRES_SAGA });
  yield call(addArticleRequestSaga, action.payload);
  yield put({ type: MODAL_FUNCTION_SUCCESS });
  yield put({ type: ARTICLES_FETCH_START_SAGA });
}

export function* watcherAddArticleSaga() {
  yield takeLatest(ADD_MODAL_START_SAGA, addArticleSagaWorker);
}
