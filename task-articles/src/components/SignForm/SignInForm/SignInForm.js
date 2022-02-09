import React from "react";
import { Form, Field } from "react-final-form";
import { Link } from "react-router-dom";
import CustomInput from "../Components/CustomInput/CustomInput";
import { ContainerForm } from "../styled.components";

const SignInForm = () => {
  const fields = {
    email: {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Email@gmail.com",
    },
    password: {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Password",
    },
  };

  const handleSubmit = (values) => {
    console.log("SignIn");
    console.log("Sign in props from fields ", values);
  };

  return (
    <ContainerForm>
      <Form
        id="signIn"
        onSubmit={(values) => handleSubmit(values)}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} id="signIn">
            <h1>Sign In</h1>
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
              form="signIn"
              htmltype="submit"
              className="sign-form-submit-button"
            >
              Confirm
            </button>
          </form>
        )}
      />
      <p>
        No account?{" "}
        <Link to={"/signup"}>
          <span>Registration</span>
        </Link>
      </p>
    </ContainerForm>
  );
};

export default SignInForm;
