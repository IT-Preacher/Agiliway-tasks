import React from "react";
import { Modal, Button, Spin } from "antd";
import ModalForm from "../ModalForm";
import propTypes from "prop-types";

class ArticleEditModal extends React.Component {
  handleSubmit = (event) => {
    const id = event.uuid;
    const article = {
      name: event.name,
      author: event.author,
      description: event.description,
    };

    this.props.editModalStartSagaAction(id, article);
  };

  render() {
    const { handleCloseModal, values, loading } = this.props;

    return (
      <Modal
        title="Edit article"
        visible={true}
        onCancel={handleCloseModal}
        footer={[
          <Button
            htmlType="cancel-edit"
            key="submit"
            form="edit-article-form"
            onClick={handleCloseModal}
            type="primary"
            loading={loading}
          >
            Cancel
          </Button>,
          <Button
            key="submit-edit"
            htmlType="submit"
            form="form"
            type="primary"
            loading={loading}
          >
            Edit
          </Button>,
        ]}
      >
        <Spin spinning={loading}>
          <ModalForm initialValues={values} handleSubmit={this.handleSubmit} />
        </Spin>
      </Modal>
    );
  }
}

ArticleEditModal.propTypes = {
  handleCloseModal: propTypes.func, 
  values: propTypes.object, 
  loading: propTypes.bool, 
  editArticleData: propTypes.func,
  editModalStartSagaAction: propTypes.func,
};

export default ArticleEditModal;
