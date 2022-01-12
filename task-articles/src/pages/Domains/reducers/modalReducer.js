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
  SIGN_FORM_OPEN,
} from "../action-types/articles.action-types";

const initialState = {
  isLoading: false,
  data: {},
  type: "",
  id: undefined,
  error: undefined,
  isSignFormOpen: false,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MODAL_OPEN:
      return {
        ...state,
        type: ADD_MODAL_OPEN,
      };
    case EDIT_MODAL_OPEN:
      return {
        ...state,
        type: EDIT_MODAL_OPEN,
      };
    case DELETE_MODAL_OPEN:
      return {
        ...state,
        type: DELETE_MODAL_OPEN,
        data: action.payload,
        id: action.payload.uuid,
      };
    case MODAL_FUNCTION_START:
      return { ...state, isLoading: true };
    case MODAL_FUNCTION_SUCCESS:
      return { ...state, isLoading: false, data: {}, type: "", id: undefined };
    case MODAL_CLOSE:
      return { ...state, isLoading: false, data: {}, type: "", id: undefined };
    case EDIT_MODAL_GET_DATA:
      return { ...state, data: action.payload, isLoading: false };
    case EDIT_MODAL_GET_DATA_START_ACTION:
      return { ...state, isLoading: true };
    case EDIT_MODAL_GET_DATA_SUCCESS_ACTION:
      return { ...state, isLoading: false};
    case EDIT_MODAL_GET_DATA_ERROR_ACTION:
      return { ...state, error: action.payload };
    case SIGN_FORM_OPEN: 
      return { ...state, isSignFormOpen: true}
    default:
      return state;
  }
};
