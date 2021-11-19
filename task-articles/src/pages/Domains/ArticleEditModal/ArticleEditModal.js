import React from "react";
import { Modal, Button } from "antd";
import ModalForm from "../ModalForm";
import { Spin } from "antd";

class ArticleEditModal extends React.Component {
  handleSubmit = (event) => {
    console.log("modal", event);
    const id = event.uuid;
    const article = {
      name: event.name,
      author: event.author,
      description: event.description,
    };
    this.props.editArticleData(id, article);
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
            htmlType="submit"
            form="edit-article-form"
            onClick={handleCloseModal}
            type="primary"
            loading={loading}
          >
            Cancel
          </Button>,
          <Button
            key="submit"
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

export default ArticleEditModal;
