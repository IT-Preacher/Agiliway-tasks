import React from "react";
import "./ModalRedux.scss";
import { useSelector, useDispatch } from "react-redux";
import { showModal, hideModal } from "./modalReducer";

function ModalRedux() {
  const isActive = useSelector((state) => state.modal_status.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button className="button" onClick={() => dispatch(showModal())}>
        Open Redux Modal
      </button>
      {isActive && (
        <div className="redux-modal-window">
          <h1>Modal Window with Redux</h1>
          <button onClick={() => dispatch(hideModal())} className="button-close">close modal</button>
        </div>
      )}
    </div>
  );
}

export default ModalRedux;
