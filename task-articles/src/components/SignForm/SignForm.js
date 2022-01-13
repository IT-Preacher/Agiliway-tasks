import React, { useContext, useState } from "react";
import SignInForm from "./SignInForm/SignInForm";
import SignUpForm from "./SignUpForm/SignUpForm";
import { ConteinerForm } from "./styled.components.js";
import "./SignForm.scss";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const FormContext = React.createContext({ singIn: true, signUp: false });

const SignForm = () => {
  // const isSignFormOpen = useSelector()
  //const formContext = useContext(FormContext);
  const [formStatus, setFormStatus] = useState(true);
  let location = useLocation();
  console.log(location);

  return (
    <FormContext.Provider>
      <ConteinerForm>
        {formStatus ? <SignInForm /> : <SignUpForm />}
        <span onClick={() => setFormStatus(!formStatus)}>
          {formStatus ? "Registration" : "Login"}
          {/* <Link to={`${location.pathname}/reg`}><span>Registration</span></Link> */}
        </span>
      </ConteinerForm>
    </FormContext.Provider>
  );
};

export default SignForm;