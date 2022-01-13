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
      name: "user-name",
      label: "Username",
      type: "text",
      placeholder: "Username",
    },
    password: {
      name: "password",
      label: "Password",
      type: "password",
    },
    confirmPassword: {
      name: "confirm-password",
      label: "Confirm Password",
      type: "password",
    },
  });

  const history = useHistory();

  //   useEffect(()=> {
  //     history.push("/sign/in");
  //   },[]);

  return (
    <Form
      id="sign_up_form"
      onSubmit={() => {
        console.log("SignUp");
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} id="sign_up_form">
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
          <button className="sign_form_submit_button">Confirm</button>
        </form>
      )}
    />
  );
};

export default SignUpForm;
