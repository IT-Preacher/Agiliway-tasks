import React, { useEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import { Link } from "react-router-dom";
import CustomInput from "../Components/CustomInput/CustomInput";
import {
  PrimaryFormContainer,
  FormContainer,
  PageSignContainer,
  CustomParagraph as Paragraph,
  CustomButton as Button,
} from "../styled.components";
import Banner from "../Components/Banner";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const SignInForm = () => {
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    // setIsLoading(true);

    // window.addEventListener("load", () => {
    //   console.log("Load");
    //   setIsLoading(false);
    // });

    setTimeout(() => setIsLoading(false), 3000);

    return () => {
      clearInterval()
    };
  }, [isLoading]);

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const handleSubmit = (values) => {
    console.log("SignIn");
    console.log("Sign in props from fields ", values);
  };

  return (
    <PageSignContainer>
      <Spin indicator={antIcon} spinning={isLoading}>
        <PrimaryFormContainer>
          <Banner onLoad={() => setIsLoading(false)} />
          <FormContainer>
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
                  <Button form="signIn" htmltype="submit">
                    Confirm
                  </Button>
                </form>
              )}
            />
            <Paragraph>
              No account?{" "}
              <Link to={"/signup"}>
                <span>Registration</span>
              </Link>
            </Paragraph>
          </FormContainer>
        </PrimaryFormContainer>
      </Spin>
    </PageSignContainer>
  );
};

export default SignInForm;
