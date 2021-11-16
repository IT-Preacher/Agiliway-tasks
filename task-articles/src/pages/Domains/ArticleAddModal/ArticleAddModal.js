import React from "react";
import { Modal, Button } from "antd";
import ModalForm from "./ModalForm";
import { connect } from "react-redux";
import { addArticleOpen, addArticleClose } from "../actions/addArticleAction";


export class ArticleAddModal extends React.Component {

  render() {
    const { modalVisible, isLoading, isError } = this.props;
    return (
      <div className="button-create-conteiner">
        <Button type="primary" onClick={this.props.openModal}>
          Create article
        </Button>
        <Modal
          visible={modalVisible}
          title="Create article"
          onCancel={this.props.closeModal}
          footer={[
            <button key="submit" form="add-article-form" type="primary">
              Submit
            </button>,
          ]}
        >
          <ModalForm />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.addArticleModal.isLoading,
    isError: state.addArticleModal.isError,
    modalVisible: state.addArticleModal.modalVisible,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => {
      dispatch(addArticleClose())
    },
    openModal: () => {
      dispatch(addArticleOpen())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleAddModal);
