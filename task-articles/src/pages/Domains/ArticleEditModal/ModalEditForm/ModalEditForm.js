import React from "react";
import { Modal, Button } from "antd";
import { Field, Form } from "react-final-form";
import { CustomInput } from "./CustomInput.js";
import CustomTextField from "./CustomTextField.js";

class ModalEditForm extends React.Component {
  handleSubmit = (event) => {
    this.props.addArticle(event);
  };

  render() {
    return (
      <Form
        id="form"
        onSubmit={this.handleSubmit}
        render={({ handleSubmit }) => {
          <form onSubmit={handleSubmit} id="form">
            <label for="title">Title</label>
            <Field name="title" component={CustomInput} id="title" />
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
