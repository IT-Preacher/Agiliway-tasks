import React from "react";
import { Modal, Button, Spin } from "antd";
import propTypes from "prop-types";
import ModalForm from "../ModalForm";

export class ArticleAddModal extends React.Component {
  handleSubmit = (event) => {
    const { addArticle } = this.props;
    addArticle(event);
  };

  handleValid = (value) => (value ? undefined : "Required");

  render() {
    const { loading, handleCloseModal } = this.props;
    return (
      <Modal
        visible={true}
        title="Create article"
        onCancel={handleCloseModal}
        footer={[
          <Button key="submit" onClick={handleCloseModal} loading={loading}>
            Cancel
          </Button>,
          <Button key="submit" form="form" type="primary" htmlType="submit" loading={loading}>
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

ArticleAddModal.propTypes = {
  addArticle: propTypes.func,
  loading: propTypes.bool,
  handleCloseModal: propTypes.func,
} ;

export default ArticleAddModal;
