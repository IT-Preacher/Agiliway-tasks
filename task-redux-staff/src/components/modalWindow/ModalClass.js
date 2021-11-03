import React from "react";
import "./ModalClass.scss";
import Button from "../button";

class ModalClass extends React.Component {
  state = {
    show: false,
  };

  onShowModal = (event) => {
    this.setState({ show: true });
  };

  onCloseModal = (e) => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div>
        <button onClick={(event) => this.onShowModal(event)} className="button">
          open class modal
        </button>
        {this.state.show && (
          <div className="background-modal">
            <div className="class-modal-window">
              <h1>Modal Window with Class</h1>
              <button
                onClick={(event) => this.onCloseModal(event)}
                className="button-close"
              >
                close modal
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ModalClass;
