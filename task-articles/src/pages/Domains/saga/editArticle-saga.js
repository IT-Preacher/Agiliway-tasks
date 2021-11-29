import { call, put, takeLatest } from "redux-saga/effects";
import { editArticleRequestSaga } from "../../../services/domain";
import {
  ARTICLES_FETCH_START_SAGA,
  EDIT_MODAL_START_SAGA,
  IN_PROGRES_SAGA,
  MODAL_FUNCTION_SUCCESS,
} from "../action-types/articles.action-types";

function* editArticleSagaWorker(action) {
  try {
    yield put({ type: IN_PROGRES_SAGA });
    console.log("action0 ", action.payload);
    console.log("action1 ", action.payload.uuid);
    yield call(editArticleRequestSaga, action.payload.id, action.payload.element);
    yield put({ type: MODAL_FUNCTION_SUCCESS });
    yield put({ type: ARTICLES_FETCH_START_SAGA });
  } catch (error) {
    yield put({ type: "ARTICLES_FETCH_ERROR" });
  }
}

export function* watcherEditArticleSaga() {
  yield takeLatest(EDIT_MODAL_START_SAGA, editArticleSagaWorker);
}
