import { call, put, takeLatest } from "redux-saga/effects";
import { deleteArticleRequestSaga } from "../../../services/domain";
import {
  modalFunctionStartAction,
  modalFunctionSuccessAction,
} from "../actions/modalAction";
import {
  DELETE_MODAL_START_SAGA,
  MODAL_FUNCTION_SUCCESS,
  ARTICLES_FETCH_START_SAGA,
  IN_PROGRES_SAGA,
} from "./../action-types/articles.action-types";

function* deleteArticleSagaWorker(action) {
  try {
    yield put({ type: IN_PROGRES_SAGA });
    yield call(deleteArticleRequestSaga, action.payload);
    yield put({ type: MODAL_FUNCTION_SUCCESS });
    yield put({type: ARTICLES_FETCH_START_SAGA});

  } catch (error) {
    yield put({ type: "ARTICLES_FETCH_ERROR" });
  }
}

export function* watcherDeleteArticleSaga() {
  yield takeLatest(DELETE_MODAL_START_SAGA, deleteArticleSagaWorker);
}
