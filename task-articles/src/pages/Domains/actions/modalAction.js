import {
  ADD_MODAL_OPEN,
  EDIT_MODAL_OPEN,
  DELETE_MODAL_OPEN,
  MODAL_FUNCTION_START,
  MODAL_FUNCTION_SUCCESS,
  MODAL_CLOSE,
  EDIT_MODAL_GET_DATA,
  EDIT_MODAL_GET_DATA_START_ACTION,
  EDIT_MODAL_GET_DATA_SUCCESS_ACTION,
  EDIT_MODAL_GET_DATA_ERROR_ACTION,
} from "../action-types/articles.action-types";

export const addModalOpenAction = (payload) => ({
  type: ADD_MODAL_OPEN,
  payload,
});

export const editModalOpenAction = (payload) => ({
  type: EDIT_MODAL_OPEN,
  payload,
});

export const deleteModalOpenAction = (payload) => ({
  type: DELETE_MODAL_OPEN,
  payload,
});

export const modalFunctionStartAction = (payload) => ({
  type: MODAL_FUNCTION_START,
  payload,
});

export const modalFunctionSuccessAction = (payload) => ({
  type: MODAL_FUNCTION_SUCCESS,
  payload,
});

export const modalFunctionCloseAction = (payload) => ({
  type: MODAL_CLOSE,
  payload,
});
//
export const editModalGetDataAction = (element) => ({
  type: EDIT_MODAL_GET_DATA,
  payload: element,
});
//

export const editModalGetDataStartAction = (element) => ({
  type: EDIT_MODAL_GET_DATA_START_ACTION,
  payload: element,
});

export const editModalGetDataSuccessAction = (element) => ({
  type: EDIT_MODAL_GET_DATA_SUCCESS_ACTION,
  payload: element,
});

export const editModalGetDataErrorAction = (element) => ({
  type: EDIT_MODAL_GET_DATA_ERROR_ACTION,
  payload: element,
});