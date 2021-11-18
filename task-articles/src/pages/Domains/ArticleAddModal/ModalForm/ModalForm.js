import React from "react";
import { Form, Field } from "react-final-form";
import { InputField } from "./InputField";
import { TextAreaField } from "./TextAreaField";

class ModalForm extends React.Component {
  handleSubmit = (event) => {
    this.props.addArticle(event);
  };

  render() {
    return (
      <Form
        id="add-article-form"
        onSubmit={this.handleSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} id="add-article-form">
            <Field name="name" placeholder="Name" component={InputField} />
            <Field name="author" placeholder="Author" component={InputField} />
            <Field
              name="description"
              placeholder="description"
              component={TextAreaField}
            />
          </form>
        )}
      />
    );
  }
}

export default ModalForm;
