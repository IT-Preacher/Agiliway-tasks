import React, { useContext, useEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import { useHistory } from "react-router-dom";
import CustomInput from "../Components/CustomInput/CustomInput";

const SignInForm = () => {
  const [fields, setFields] = useState({
    email: { name: "email", label: "email", type: "email", placeholder: "Email@gmail.com" },
    password: { name: "password", label: "password", type: "password", placeholder: "Password" },
  });

  const history = useHistory();

//   useEffect(()=> {
//     history.push("/sign/in");
//   },[]);

  const submitLogin = () => {
    console.log("Submited");
  };

  //const formContext = useContext(FormContext);

  return (
    <div>
      <Form
        id="sign_in_form"
        onSubmit={submitLogin}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} id="sign_in_form">
            {Object.entries(fields).map(([, fieldState]) => {
              console.log(fieldState)
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
            <button>Sign In</button>
          </form>
        )}
      />
    </div>
  );
};

export default SignInForm;