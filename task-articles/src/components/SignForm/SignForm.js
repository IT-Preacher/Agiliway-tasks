import React, { useContext, useState } from "react";
import SignInForm from "./SignInForm/SignInForm";
import SignUpForm from "./SignUpForm/SignUpForm";
import { ConteinerForm } from "./styled.components.js";
import "./SignForm.scss";
import { useSelector } from "react-redux";
import { Link, Route, useLocation } from "react-router-dom";

const FormContext = React.createContext({ singIn: true, signUp: false });

const SignForm = () => {
  const [formStatus, setFormStatus] = useState(true);
  let location = useLocation();
  console.log(location);

  return (
    <ConteinerForm>
      {location.pathname === "/signup" ? <SignUpForm /> : <SignInForm />}

      {/* v2 */}
      {/* {location.pathname === "/signin" && <Route to={`${location.pathname}/signin`} component={SignInForm}/>} */}
      {/* {location.pathname === "/signup" && <Route path={`${location.pathname}/signup`} component={SignUpForm}/>}*/}

      {/* v3 */}
      {/* <Route to={`${location.pathname}/signin`} component={SignInForm}/>
        <Route to={`${location.pathname}/signup`} component={SignUpForm}/> */}

      <span onClick={() => setFormStatus(!formStatus)}>
        {location.pathname === "/signup" ? (
          <Link to={"/signin"}>
            <span>Login</span>
          </Link>
        ) : (
          <Link to={"/signup"}>
            <span>Registration</span>
          </Link>
        )}
      </span>
    </ConteinerForm>
  );
};

export default SignForm;
