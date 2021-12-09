import React from "react";
import { reduxForm } from "redux-form";
import Image from "next/image";
import styles from "../../../styles/Form.module.scss";

const WizardFormThirdPage = (props) => {
  const { handleSubmit, pristine, previousPage, submitting } = props;

  console.log("third page ", props.onSubmit);

  return (
    <form onSubmit={handleSubmit} className={styles.semantic_teg_form}>
      <div className={styles.conteiner_third_wizard_page}>
        <Image
          src="/check-symbol-4794.svg"
          alt="image"
          width="200px"
          height="200px"
        />
        <div className={styles.conteiner_button_third_page}>
          <button
            type="submit"
            disabled={pristine || submitting}
            className={styles.form_button_submit}
          >
            Go to Dasbord
          </button>
        </div>
      </div>
      {/* <hr />
      <div className={styles.conteiner_button_third_page}>
        <button
          type="submit"
          disabled={pristine || submitting}
          className={styles.form_button_submit}
        >
          Go to Dasbord
        </button>
      </div> */}
    </form>
  );
};

export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormThirdPage);
