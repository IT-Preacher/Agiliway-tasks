import React from "react";
import './ModalClass.scss';
import Button from "../button";

class ModalClass extends React.Component {
  state = {
    show: false,
  };

  onShow = (event) => {
    this.setState({ show: true });
  };

  onClose = (e) => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div>
        <button onClick={(event) => this.onShow(event)} className="button">
          open class modal
        </button>
        {this.state.show && (
          <div className="class-modal-window">
            <h1>Modal Window with Class</h1>
            <button onClick={(event) => this.onClose(event)} className="button-close">close modal</button>
          </div>
        )}
      </div>
    );
  }
}

export default ModalClass;
