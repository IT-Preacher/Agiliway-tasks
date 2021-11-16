import React from "react";
import { Modal, Button } from "antd";
import ModalEditForm from "./ModalEditForm";

class ArticleEditModal extends React.Component {
  render() {
    const { visible, handleCancel } = this.props;
    return (
        <Modal
          title="Edit article"
          visible={visible}
          onCancel={handleCancel}
          footer={[
            <button key="submit" form="form" type="primary">
              Edit
            </button>,
          ]}
        >
          <ModalEditForm />
        </Modal>
    );
  }
}

export default ArticleEditModal;