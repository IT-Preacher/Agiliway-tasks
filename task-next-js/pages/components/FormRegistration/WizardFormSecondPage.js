import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import styles from "../../../styles/Form.module.scss";
import { Radio } from "antd";
import {
  SelectConteiner,
  RadioConteiner,
  InputDateConteiner,
} from "./styled.component.js";
import RadioButton from "./components/renderRadio.js";
import RenderInfoSelector from "./components/renderSelector.js";

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const required = (value) => (value ? undefined : "Required");

function WizardFormSecondPage(props) {
  const { handleSubmit, previousPage } = props;
  
  return (
    <form onSubmit={handleSubmit} className={styles.semantic_teg_form}>
      <div className={styles.conteiner_second_wizard_page}>
        <InputDateConteiner>
          <label>date of birth</label>
          <div className="input_date_conteiner">
            <Field
              name="date_day"
              component="input"
              type="text"
              placeholder="DD"
              className={styles.input_date}
            />
            <Field
              name="date_month"
              component="input"
              type="text"
              className={styles.input_date}
              placeholder="MM"
            />
            <Field
              name="date_year"
              component="input"
              type="text"
              className={styles.input_date}
              placeholder="YYYY"
            />
          </div>
          <Field name="birth_date" component={renderError} />
        </InputDateConteiner>
        <RadioConteiner>
          <label>Gender</label>
          <div
            className="form_radio_conteiner"
            style={{ display: "flex", width: "100%" }}
          >
            <Radio.Group
              // defaultValue="unspecified"
              buttonStyle="solid"
              style={{ width: "100%" }}
            >
              <Field
                name="sex"
                component={RadioButton}
                type="radio"
                value="male"
              />
              <Field
                name="sex"
                component={RadioButton}
                type="radio"
                value="female"
              />
              <Field
                name="sex"
                component={RadioButton}
                type="radio"
                value="unspecified"
              />
              {/* <Field name="sex" component={renderError} /> */}
            </Radio.Group>
            {/* <Field name="sex" component={renderError} /> */}
          </div>
          <Field name="sex" component={renderError} />
        </RadioConteiner>
        <SelectConteiner>
          <label>where did you hear about us</label>
          <Field
            name="info_resource"
            component={RenderInfoSelector}
            validate={required}
          />
        </SelectConteiner>
      </div>
      <hr />
      <div className={styles.conteiner_button_second_page}>
        <button
          type="button"
          className={styles.form_button_next}
          onClick={previousPage}
        >
          Previous
        </button>
        <button type="submit" className={styles.form_button_next}>
          Next
        </button>
      </div>
    </form>
  );
}

export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormSecondPage);

// style={{
//   display: "flex",
//   width: "90%",
//   margin: "5% auto",
//   flexDirection: "column",
//   textAlign: "center",
// }}
