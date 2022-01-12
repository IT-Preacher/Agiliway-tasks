import React from "react";
import { Form, Field } from "react-final-form";
import CustomInput from "../components/CustomInput/CustomInput.js";

const SignUpForm = () => {
  return (
    <Form
      id="sign_up_form"
      onSubmit={() => {
        console.log("SignUp");
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} id="sign_up_form">
          <label>
            Email{" "}
            <Field name="email" placeholder="Email" component={CustomInput} />
          </label>
          <label>
            User name{" "}
            <Field
              name="user-name"
              placeholder="User name"
              component={CustomInput}
            />
          </label>
          <label>
            Password{" "}
            <Field
              name="password"
              placeholder="Password"
              component={CustomInput}
            />
          </label>
          <label>
            Confirm Password{" "}
            <Field
              name="confirm-password"
              placeholder="Confirm password"
              component={CustomInput}
            />
          </label>
          <button>
              Sign Up
            </button>
        </form>
      )}
    />
  );
};

export default SignUpForm;
