import React from "react";
import { Modal, Button } from "antd";
import ModalEditForm from "./ModalEditForm";

class ArticleEditModal extends React.Component {
  render() {
    return (
      <>
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Modal
          title="Edit article"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <button key="submit" form="form" type="primary">
              Submit
            </button>,
          ]}
        >
          <ModalEditForm />
        </Modal>
      </>
    );
  }
}

export default ArticleEditModal;
