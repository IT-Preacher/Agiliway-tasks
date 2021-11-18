import React from "react";
import { Modal, Button } from "antd";
import ModalEditForm from "./ModalEditForm";

class ArticleEditModal extends React.Component {
  render() {
    const { visible, handleCloseModal, values, editArticleData } = this.props;
    return (
      <Modal
        title="Edit article"
        visible={visible}
        onCancel={handleCloseModal}
        footer={[
          <button
            key="submit"
            htmlType="submit"
            form="edit-article-form"
            onClick={handleCloseModal}
            type="primary"
          >
            Cancel
          </button>,
          <button
            key="submit"
            htmlType="submit"
            form="edit-article-form"
            type="primary"
          >
            Edit
          </button>,
        ]}
      >
        <ModalEditForm values={values} editArticleData={editArticleData} />
      </Modal>
    );
  }
}

export default ArticleEditModal;
