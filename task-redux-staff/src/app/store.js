import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../components/modalWindowRedux/modalReducer";

export default configureStore({
  reducer: {
    modal_status: modalReducer,
  },
});