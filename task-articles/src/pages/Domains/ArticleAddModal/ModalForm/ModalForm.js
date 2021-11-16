import React from "react";
import { Form, Field } from "react-final-form";
import addArticleThunk from "../../thunks/addArticleThunk.js";
import { connect } from "react-redux";
import { InputField } from "./InputField";
import { TextAreaField } from "./TextAreaField";

//D:\Agiliway\to-do-app\task-articles\src\pages\Domains\thunks\addArticleThunk.js

class ModalForm extends React.Component {

  handleSubmit = (event) => {
    console.log(event);
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

const mapStateToProps = (state) => {
  return {
    isLoading: state.addArticleModal.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: (values) => {
      dispatch(addArticleThunk(values));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);
