import React, { useState } from "react";
import SignInForm from "./SignInForm/SignInForm";
import SignUpForm from "./SignUpForm/SignUpForm";
import { ConteinerForm } from "./styled.components.js";
import "./SignForm.scss";
//import { useSelector } from "react-redux";
import { Link, Route, useLocation } from "react-router-dom";

const SignForm = () => {
  const [formStatus, setFormStatus] = useState(true);
  let location = useLocation();
  console.log(location);

  return (
    <ConteinerForm>
      {/* v1 */}
      {location.pathname === "/signup" ? <SignUpForm /> : <SignInForm />}

      {/* v2 */}
      {/* {location.pathname === "/signin" && <Route to={`${location.pathname}/signin`} component={SignInForm}/>} */}
      {/* {location.pathname === "/signup" && <Route path={`${location.pathname}/signup`} component={SignUpForm}/>}*/}

      {/* v3 */}
      {/* <Route to={`${location.pathname}/signin`} component={SignInForm}/>
        <Route to={`${location.pathname}/signup`} component={SignUpForm}/> */}

      <span onClick={() => setFormStatus(!formStatus)}>
        {location.pathname === "/signup" ? (
          <p>
            Already have an account?{" "}
            <Link to={"/signin"}>
              <span>Sign In</span>
            </Link>
          </p>
        ) : (
          <p>
            No account?{" "}
            <Link to={"/signup"}>
              <span>Registration</span>
            </Link>
          </p>
        )}
      </span>
    </ConteinerForm>
  );
};

export default SignForm;

{
  /* v4 */
}
{
  /* <Switch>
        <Route exact path="/invoices/dashboard" component={Dashboard} />
        <Route path="/invoices/:id" component={Invoice} />
      </Switch> */
}
