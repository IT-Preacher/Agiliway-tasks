import React from "react";
import { Modal, Button } from "antd";
import { Field, Form } from "react-final-form";
import { CustomInput } from "./CustomInput.js";
import { CustomTextField } from "./CustomTextField.js";

class ModalEditForm extends React.Component {
  handleSubmit = (event) => {
    console.log(event)
    const id = event.uuid;
    const article = {
      name: event.name,
      author: event.author,
      description: event.description
    }
    this.props.editArticleData(id, article)
  };

  render() {
    const { values } = this.props;
    // const initialValues = {
    //   uuid: values.uuid,
    //   name: values.name,
    //   description: values.description,
    //   author: values.author
    // }

    return (
      <Form
        id="edit-article-form"
        initialValues={values}
        onSubmit={this.handleSubmit}
        render={({ handleSubmit }) => {
          return <form onSubmit={handleSubmit} id="edit-article-form">
            <label for="title">Title</label>
            <Field name="name" component={CustomInput} id="title" />
            <label for="author">Name</label>
            <Field name="author" component={CustomInput} id="author" />
            <label for="description">Description</label>
            <Field
              name="description"
              component={CustomTextField}
              id="description"
            />
          </form>;
        }}
      />
    );
  }
}

export default ModalEditForm;
