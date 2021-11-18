import React from "react";
import { Modal, Button } from "antd";
import ModalForm from "./ModalForm";

export class ArticleAddModal extends React.Component {

  render() {
    console.log("article add modal ",this.props)
    const { isLoading, isError, handleCloseModal, addArticle } = this.props;
    return (
        <Modal
          visible={true}
          title="Create article"
          onCancel={handleCloseModal}
          footer={[<button onClick={()=> console.log("cancel")}>Cancel</button>,
            <button key="submit" form="add-article-form" type="primary">
              Submit
            </button>,
          ]}
        >
          <ModalForm addArticle={addArticle}/>
        </Modal>
    );
  }
}

export default ArticleAddModal;