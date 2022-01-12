import React, { useContext, useState } from "react";
import SignInForm from "./SignInForm/SignInForm";
import SignUpForm from "./SignUpForm/SignUpForm";
import { ConteinerForm } from "./styled.components.js";
import "./SignForm.scss";
import { useSelector } from "react-redux";

const FormContext = React.createContext({ singIn: true, signUp: false });

const SignForm = () => {
  // const isSignFormOpen = useSelector()
  //const formContext = useContext(FormContext);
  const [formStatus, setFormStatus] = useState(true);

  return (
    <FormContext.Provider>
      <ConteinerForm>
        {formStatus ? <SignInForm /> : <SignUpForm />}
        <span onClick={() => setFormStatus(!formStatus)}>
          {formStatus ? "Registration" : "Login"}
        </span>
      </ConteinerForm>
    </FormContext.Provider>
  );
};

export default SignForm;