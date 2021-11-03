import React from "react";
import "./ModalRedux.scss";
import { showModalAction, SHOW_MODAL, hideModalAction } from "../../store/store.js";
import { connect } from "react-redux";

function ModalRedux(props) {
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

const mapStateToProps = (state) => {
  return {
    isOpen: state.isModalOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => {
      dispatch(showModalAction(true));
    },
    closeModal: () => {
      dispatch(hideModalAction(false));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalRedux);
