import React from "react";
import { Form, Field } from "react-final-form";
import { InputField } from "./InputField";
import { TextAreaField } from "./TextAreaField";
import propTypes from "prop-types";

class ModalForm extends React.Component {
  Validators = (values) =>{
        const errors = {};

        if (!values.title) {
          errors.title = "Required";
        } else if (values.name.length < 2) {
          errors.title = "title is to short";
        }

        return errors;
  }

  render() {
    const { handleSubmit, initialValues } = this.props;
    return (
      <Form
        id="form"
        initialValues={initialValues}
        onSubmit={handleSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} id="form">
            <label>
              Title{" "}
              <Field
                name="name"
                placeholder="Name"
                component={InputField}
              />
            </label>
            <label>
              Authro{" "}
              <Field
                name="author"
                placeholder="Author"
                component={InputField}
              />
            </label>
            <label>
              Description{" "}
              <Field
                name="description"
                placeholder="description"
                component={TextAreaField}
              />
            </label>
          </form>
        )}
      />
    );
  }
}

ModalForm.propTypes = {
  handleSubmit: propTypes.func,
  initialValues: propTypes.object,
};

export default ModalForm;
