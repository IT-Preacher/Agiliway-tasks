import React from "react";
import { Form, Field } from "react-final-form";
import CustomInput from "../Components/CustomInput/CustomInput.js";

const SignUpForm = () => {
  const fields = {
    email: {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Email@gmail.com",
    },
    UserName: {
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Username",
    },
    password: {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Password",
    },
    confirmPassword: {
      name: "confirm-password",
      label: "Confirm Password",
      type: "password",
      placeholder: "Repeat your password",
    },
  };

  const handleSubmit = (values) => {
    console.log("SignUp");
    console.log("Sign up props from fields ", values);
  };

  return (
    <Form
      id="signUp"
      onSubmit={(values) => handleSubmit(values)}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit} id="signUp">
          <h1>Registration</h1>
          <div className="sign-form-inputs-container">
            {Object.entries(fields).map(([, fieldState]) => {
              return (
                <Field
                  name={fieldState.name}
                  label={fieldState.label}
                  type={fieldState.type}
                  key={fieldState.name}
                  placeholder={fieldState.placeholder}
                  component={CustomInput}
                />
              );
            })}
          </div>
          <button
            form="signUp"
            htmltype="submit"
            className="sign-form-submit-button"
            disabled={submitting}
          >
            Confirm
          </button>
        </form>
      )}
    />
  );
};

export default SignUpForm;
