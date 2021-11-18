import React from "react";
import { Modal, Button } from "antd";
import { Field, Form } from "react-final-form";
import { Spin } from 'antd';

class ArticleDeleteModal extends React.Component {
  hendleSubmitDelete = () => {
    const { uuid } = this.props.values;
    this.props.deleteArticle(uuid);
  };

  render() {
    const { visible, handleCloseModal, loading, values } =
      this.props;
    return (
      <Modal
        title="Delete article"
        visible={visible}
        // onOk={this.handleSubmitdelete}
        onCancel={handleCloseModal}
        footer={[
          <button onClick={this.hendleSubmitDelete} type="primary">
            Delete
          </button>,
        ]}
      >
        {loading ? (<Spin/>):(<h1>Delete article {values.name}?</h1>)}
      </Modal>
    );
  }
}

export default ArticleDeleteModal;