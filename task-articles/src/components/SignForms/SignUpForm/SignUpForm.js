import React, { useEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import { Link } from "react-router-dom";
import Banner from "../Components/Banner";
import CustomInput from "../Components/CustomInput/CustomInput.js";
import {
  PrimaryFormContainer,
  FormContainer,
  PageSignContainer,
  CustomParagraph as Paragraph,
  CustomButton as Button,
} from "../styled.components.js";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(true);
  const fields = {
    email: {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Email@gmail.com",
      message: "Required",
    },
    UserName: {
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Username",
      message: "Required: Must include A-Z or a-z simbols",
    },
    password: {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Password",
      message: "Required: Must include minimal 8 with big and small simbols",
    },
    confirmPassword: {
      name: "confirm-password",
      label: "Confirm Password",
      type: "password",
      placeholder: "Repeat your password",
      message: "Required: Must be match with fild password",
    },
  };

  useEffect(() => {
    window.addEventListener("load", () => {
      console.log("Load");
      setIsLoading(false);
    });

    return () => {
      window.removeEventListener("load", () => setIsLoading(true));
    };
  }, []);

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const handleSubmit = (values) => {
    const { username } = values;
    const userData = JSON.stringify(values);

    console.log("Sign up props from fields ", userData);
    console.log("Sign up props from fields ", values);
    localStorage.setItem(username, userData);
  };

  return (
    <PageSignContainer>
      <Spin indicator={antIcon} spinning={isLoading}>
        <PrimaryFormContainer>
          <Banner />
          <FormContainer>
            <Form
              id="signUp"
              onSubmit={(values) => handleSubmit(values)}
              validate={(values) => {
                const usernameRegExp = /^[a-zA-Z]+$/;
                const passwordRegExp =
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
                const errors = {};

                if (!values.email) {
                  errors.email = "Required";
                }

                if (!usernameRegExp.test(values.username)) {
                  errors.username = "Required";
                }

                if (!passwordRegExp.test(values.password)) {
                  errors.password = "Required";
                }

                if (values.password !== values["confirm-password"]) {
                  errors["confirm-password"] = "Required";
                }

                return errors;
              }}
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
                          message={fieldState.message}
                          placeholder={fieldState.placeholder}
                          component={CustomInput}
                        />
                      );
                    })}
                  </div>
                  <Button form="signUp" htmltype="submit" disabled={submitting}>
                    Confirm
                  </Button>
                </form>
              )}
            />
            <div>
              <Paragraph>
                Already have an accountt?{" "}
                <Link to={"/signin"}>
                  <span>Sign In</span>
                </Link>
              </Paragraph>
            </div>
          </FormContainer>
        </PrimaryFormContainer>
      </Spin>
    </PageSignContainer>
  );
};

export default SignUpForm;
