import React from "react";
import { Modal, Button } from "antd";
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
        onCancel={handleCloseModal}
        footer={[
          <Button onClick={handleCloseModal} type="primary" loading={loading}>
            Cancel
          </Button>,
          <Button onClick={this.hendleSubmitDelete} type="primary" loading={loading}>
            Delete
          </Button>
        ]}
      >
        <Spin spinning={loading}>
          <h1>Delete article {values.name}?</h1>
        </Spin>
        {/* {loading ? (<Spin/>):(<h1>Delete article {values.name}?</h1>)} */}
      </Modal>
    );
  }
}

export default ArticleDeleteModal;