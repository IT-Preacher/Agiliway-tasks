import React, { useState } from "react";
import SignInForm from "./SignInForm/SignInForm";
import SignUpForm from "./SignUpForm/SignUpForm";
import { ContainerForm } from "./styled.components.js";
import { Link, useLocation } from "react-router-dom";

const SignForm = () => {
  const [formStatus, setFormStatus] = useState(true);
  let location = useLocation();
  console.log(location);

  return (
    <ContainerForm>
      {location.pathname === "/signup" ? <SignUpForm /> : <SignInForm />}
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
    </ContainerForm>
  );
};

export default SignForm;
