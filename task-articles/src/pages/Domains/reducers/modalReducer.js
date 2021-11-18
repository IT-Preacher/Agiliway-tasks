// import {
//   ADD_ARTICLE_START,
//   ADD_ARTICLE_SUCCESS,
//   ADD_ARTICLE_ERROR,
//   ADD_ARTICLE_OPEN,
//   ADD_ARTICLE_CLOSE,
//   ARTICLE_DELETE_START,
//   ARTICLE_DELETE_OPEN,
//   ARTICLE_DELETE_SUCCESS,
//   ARTICLE_DELETE_CLOSE,
//   ARTICLE_DELETE_ERROR,
//   ARTICLE_DELETE_ELEMENT,
//   ARTICLE_EDIT_CLOSE,
//   ARTICLE_EDIT_SUCCESS,
//   ARTICLE_EDIT_START,
//   ARTICLE_EDIT_ERROR,
//   ARTICLE_EDIT_OPEN,
//   ARTICLE_EDIT_ELEMENT,
// } from "../action-types/articles.action-types";

// const ARTICLE_ADD_MODAL_TYPE = "ARTICLE_ADD_MODAL_TYPE";
// const ARTICLE_DELETE_MODAL_TYPE = "ARTICLE_DELETE_MODAL_TYPE";
// const ARTICLE_EDIT_MODAL_TYPE = "ARTICLE_EDIT_MODAL_TYPE";

// const initialState = {
//   addModal: {
//     isLoading: true,
//     isError: false,
//     modalVisible: false,
//   },
//   deleteModal: {
//     isLoading: true,
//     isError: false,
//     modalVisible: false,
//     deleteItem: {},
//   },
//   editModal: {
//     isLoading: true,
//     isError: false,
//     modalVisible: false,
//     articleItem: {},
//   },
// };

// export const addArticleReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_ARTICLE_START:
//       return { ...state, addModal: { ...state.addModal, isLoading: true } };
//     case ADD_ARTICLE_ERROR:
//       return {
//         ...state,
//         addModal: { ...state.addModal, isLoading: false, isError: true },
//       };
//     case ADD_ARTICLE_SUCCESS:
//       return {
//         ...state,
//         addModal: { ...state.addModal, isLoading: false, modalVisible: false },
//       };
//     case ADD_ARTICLE_OPEN:
//       return { ...state, addModal: { ...state.addModal, modalVisible: true } };
//     case ADD_ARTICLE_CLOSE:
//       return { ...state, addModal: { ...state.addModal, modalVisible: false } };
//     default:
//       return state;
//   }
// };

// export const deleteArticleReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ARTICLE_DELETE_START:
//       return {
//         ...state,
//         deleteModal: { ...state.deleteModal, isLoading: true },
//       };
//     case ARTICLE_DELETE_ERROR:
//       return {
//         ...state,
//         deleteModal: { ...state.deleteModal, isLoading: false, isError: true },
//       };
//     case ARTICLE_DELETE_SUCCESS:
//       return {
//         ...state,
//         deleteModal: {
//           ...state.deleteModal,
//           isLoading: false,
//           modalVisible: false,
//         },
//       };
//     case ARTICLE_DELETE_OPEN:
//       return {
//         ...state,
//         deleteModal: { ...state.deleteModal, modalVisible: true },
//       };
//     case ARTICLE_DELETE_CLOSE:
//       return {
//         ...state,
//         deleteModal: { ...state.deleteModal, modalVisible: false },
//       };
//     case ARTICLE_DELETE_ELEMENT:
//       return {
//         ...state,
//         deleteModal: {
//           ...state.deleteModal,
//           isLoading: false,
//           deleteItem: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };

// export const editArticleReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ARTICLE_EDIT_START:
//       return { ...state, editModal: { ...state.editModal, isLoading: true } };
//     case ARTICLE_EDIT_ERROR:
//       return {
//         ...state,
//         editModal: { ...state.editModal, isLoading: false, isError: true },
//       };
//     case ARTICLE_EDIT_SUCCESS:
//       return {
//         ...state,
//         editModal: {
//           ...state.editModal,
//           isLoading: false,
//           modalVisible: false,
//           articleItem: action.payload,
//         },
//       };
//     case ARTICLE_EDIT_OPEN:
//       return {
//         ...state,
//         editModal: { ...state.editModal, modalVisible: true },
//       };
//     case ARTICLE_EDIT_CLOSE:
//       return {
//         ...state,
//         editModal: { ...state.editModal, modalVisible: false },
//       };
//     case ARTICLE_EDIT_ELEMENT:
//       return {
//         ...state,
//         editModal: { ...state.editModal, articleItem: action.payload },
//       };
//     default:
//       return state;
//   }
// };

// import {
//     ADD_MODAL_OPEN,
//     EDIT_MODAL_OPEN,
//     DELETE_MODAL_OPEN,
//     MODAL_FUNCTION_START,
//     MODAL_FUNCTION_SUCCESS,
//     MODAL_CLOSE,
//     EDIT_MODAL_GET_DATA,
//   } from "../action-types/magazines.action-types";

import {
    ADD_MODAL_OPEN,
    EDIT_MODAL_OPEN, 
    DELETE_MODAL_OPEN, 
    MODAL_FUNCTION_START, 
    MODAL_FUNCTION_SUCCESS, 
    MODAL_CLOSE,
    EDIT_MODAL_GET_DATA,
} from "../action-types/articles.action-types";

const initialState = {
  isLoading: false,
  data: {},
  type: "",
  id: undefined,
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
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
