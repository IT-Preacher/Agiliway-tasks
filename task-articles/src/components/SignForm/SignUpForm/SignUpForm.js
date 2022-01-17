import React, { useEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import { useHistory } from "react-router-dom";
import CustomInput from "../Components/CustomInput/CustomInput.js";

const SignUpForm = (props) => {
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
            form="signUp"
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
