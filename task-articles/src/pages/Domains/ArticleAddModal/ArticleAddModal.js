import React from "react";
import { Modal, Button, Spin } from "antd";
import ModalForm from "../ModalForm";

export class ArticleAddModal extends React.Component {
  handleSubmit = (event) => {
    const { addArticle } = this.props;
    addArticle(event);
  };

  handleValid = (value) => (value ? undefined : "Required");

  render() {
    const { loading, isError, handleCloseModal, addArticle } = this.props;
    return (
      <Modal
        visible={true}
        title="Create article"
        onCancel={handleCloseModal}
        footer={[
          <Button onClick={handleCloseModal} loading={loading}>
            Cancel
          </Button>,
          <Button key="submit" form="form" type="primary" htmlType="submit">
            Submit
          </Button>,
        ]}
      >
        <Spin spinning={loading}>
          <ModalForm
            handleSubmit={this.handleSubmit}
            validator={this.handleValid}
          />
        </Spin>
      </Modal>
    );
  }
}

export default ArticleAddModal;
