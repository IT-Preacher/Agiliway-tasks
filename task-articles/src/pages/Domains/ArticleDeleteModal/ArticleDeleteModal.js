import React from "react";
import { Modal, Button } from "antd";
import { Field, Form } from "react-final-form";
// import { CustomInput } from "./components/CustomInput.js";
// import { CustomTextField } from "./components/CustomTextField.js";

class ArticleDeleteModal extends React.Component {
  hendleSubmitDelete = () => {
    console.log("delete modal ");
  };

  render() {
    const { visible, handleCancel } = this.props;
    return (
      <Modal
        title="Delete article"
        visible={visible}
        onCancel={handleCancel}
        footer={[
          <button key="submit" form="form" type="primary">
            Delete
          </button>,
        ]}
      >
        {/* <Form
          id="delete-article-form"
          onSubmit={this.hendleSubmitDelete}
          render={({ hendleSubmitDelete }) => {
            <form onSubmit={hendleSubmitDelete} id="delete-article-form">
              <h1>Delete Article</h1>
            </form>;
          }}
        /> */}
        <h1>Item</h1>
      </Modal>
    );
  }
}

export default ArticleDeleteModal;
