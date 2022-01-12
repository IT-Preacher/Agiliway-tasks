import React, { useState } from "react";
import "./Navigation.scss";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "./logo.svg";
import SignForm from './../Form/SignForm';

const HeaderConteiner = styled.div`
  maxWidth: 1200px;
  padding: 15px 15px;
`;

function Navigation() {
  const [ isSignFormOpen, setFormOpen ] = useState(false);

  const handleOpenSignForm = () => {
    setFormOpen(true);
    console.log(isSignFormOpen);
  }

  return (
    <HeaderConteiner>
      <header>
        <div className="logo-conteiner">
          <NavLink to={"/"}>
            <img src={logo} alt="Logo img" className="logo-img" />
          </NavLink>
        </div>
        <nav className="navigation-conteiner">
          <NavLink to={"/"} activeClassName="selected" exact>
            Home
          </NavLink>
          <NavLink to={"/articles"} activeClassName="selected">
            Articles
          </NavLink>
          <NavLink to={"/statistic"} activeClassName="selected" exact>
            Statistic
          </NavLink>
          <button onClick={() => handleOpenSignForm()}>
            Sign In
          </button>
        </nav>
      </header>

      {isSignFormOpen && <SignForm />}

      {/* {isSignFormOpen && <div>form opened</div>} */}
    </HeaderConteiner>
  );
}

export default Navigation;
