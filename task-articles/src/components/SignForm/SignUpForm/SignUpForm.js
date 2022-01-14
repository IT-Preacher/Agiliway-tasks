import React, { useEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import { useHistory } from "react-router-dom";
import CustomInput from "../Components/CustomInput/CustomInput.js";

const SignUpForm = () => {
  const [fields, setFields] = useState({
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
  });

  const history = useHistory();

  //   useEffect(()=> {
  //     history.push("/sign/in");
  //   },[]);

  const handleSubmit = (event) => {
    console.log("SignUp");
    console.log("Sign up props from fields ", event);
  };

  return (
    <Form
      id="sign"
      onSubmit={handleSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} id="sign">
          <h1>Registration</h1>
          <div className="sign_form_inputs_conteiner">
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
            form="sign"
            htmltype="submit"
            className="sign_form_submit_button"
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
