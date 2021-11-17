import React from "react";
import { Modal, Button } from "antd";
import { Field, Form } from "react-final-form";
// import { CustomInput } from "./components/CustomInput.js";
// import { CustomTextField } from "./components/CustomTextField.js";

class ArticleDeleteModal extends React.Component {
  hendleSubmitDelete = () => {
    const { uuid } = this.props.elementToDeleteData;
    this.props.deleteArticle(uuid);
  };

  render() {
    const { visible, handleCancel, deleteArticle, elementToDeleteData } =
      this.props;
    const { name } = elementToDeleteData;
    return (
      <Modal
        title="Delete article"
        visible={visible}
        // onOk={this.handleSubmitdelete}
        onCancel={handleCancel}
        footer={[
          <button onClick={this.hendleSubmitDelete} type="primary">
            Delete
          </button>,
        ]}
      >
        <h1>Delete article {name}?</h1>
      </Modal>
    );
  }
}

export default ArticleDeleteModal;

// footer={[
//   <button key="submit" form="form" type="primary">
//     Delete
//   </button>,
// ]}

{
  /* <Form
          id="delete-article-form"
          onSubmit={this.hendleSubmitDelete}
          render={({ hendleSubmitDelete }) => {
            <form onSubmit={hendleSubmitDelete} id="delete-article-form">
              <h1>Delete Article</h1>
            </form>;
          }}
        /> */
}
