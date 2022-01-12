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
      label: "User Name",
      type: "text",
      placeholder: "User Name",
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

  useEffect(()=> {
    history.push("/sign/in");
  },[]);

  return (
    <Form
      id="sign_up_form"
      onSubmit={() => {
        console.log("SignUp");
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} id="sign_up_form">
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
          <button>Sign Up</button>
        </form>
      )}
    />
  );
};

export default SignUpForm;

{
  /* <label>
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
          </label> */
}
