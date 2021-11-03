import React from "react";
import "./ModalRedux.scss";
import { useSelector, useDispatch } from "react-redux";
import { showModal, hideModal } from "./modalReducer";
import { showModalAction, SHOW_MODAL, hideModalAction } from "../../store/store.js";
import { connect } from "react-redux";

function ModalRedux(props) {
  const isActive = useSelector((state) => state.modalStatus.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button className="button" onClick={props.openModal}>
        Open Redux Modal
      </button>
      {props.isOpen && (
        <div className="background-modal">
          <div className="redux-modal-window">
            <h1>Modal Window with Redux</h1>
            <button
              className="button-close"
              onClick={props.closeModal}
            >
              close modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalRedux;
