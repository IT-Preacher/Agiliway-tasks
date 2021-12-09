import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import RenderField from "./components/renderField.js";
import styles from "../../../styles/Form.module.scss";
import { confirmation } from "redux-form-validators"

const required = (value) => (value ? undefined : "Required");
const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;

const WizardFormFirstPage = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit} className={styles.semantic_teg_form}>
      <div className={styles.conteiner_first_wizard_page}>
        <Field
          name="email"
          type="text"
          component={RenderField}
          label="Email"
          classField={styles.custom_field_conteiner}
          classInput={styles.custom_field_input}
          validate={[required, email]}
        />
        <Field
          name="password"
          type="password"
          component={RenderField}
          label="password"
          classField={styles.custom_field_conteiner}
          classInput={styles.custom_field_input}
          validate={ required }
        />
        <Field
          name="confirmation"
          type="password"
          component={RenderField}
          label="confirm password"
          classField={styles.custom_field_conteiner}
          classInput={styles.custom_field_input}
          validate={[confirmation({ field: 'password', fieldLabel: 'password' }), required]}
        />
      </div>
      <hr />
      <div className={styles.conteiner_button_first_page}>
        <button type="submit" className={styles.form_button_next}>
          Next
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormFirstPage);
