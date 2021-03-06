import React from "react";
import { Modal, Button, Spin } from "antd";
import propTypes from "prop-types";

class ArticleDeleteModal extends React.Component {
  hendleSubmitDelete = () => {
    const { deleteModalStartSagaAction } = this.props;
    const { uuid } = this.props.values;
    //this.props.deleteArticle(uuid);
    deleteModalStartSagaAction(uuid);
  };

  render() {
    const { handleCloseModal, loading, values } = this.props;

    return (
      <Modal
        title="Delete article"
        visible={true}
        onCancel={handleCloseModal}
        footer={[
          <Button
            key="cancel-delete"
            onClick={handleCloseModal}
            type="primary"
            loading={loading}
          >
            Cancel
          </Button>,
          <Button
            key="submit-delete"
            onClick={this.hendleSubmitDelete}
            type="primary"
            loading={loading}
          >
            Delete
          </Button>,
        ]}
      >
        <Spin spinning={loading}>
          <h1>Delete article {values.name}?</h1>
        </Spin>
      </Modal>
    );
  }
}

ArticleDeleteModal.propTypes = {
  handleCloseModal: propTypes.func,
  loading: propTypes.bool,
  values: propTypes.object,
  deleteArticle: propTypes.func,
  deleteModalStartSagaAction: propTypes.func,
};

export default ArticleDeleteModal;
