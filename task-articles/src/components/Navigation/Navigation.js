import "./Navigation.scss";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "./logo.svg";

const HeaderContainer = styled.div`
  maxWidth: 1200px;
  padding: 15px 15px;
`;

function Navigation() {
  return (
    <HeaderContainer>
      <header>
        <div className="logo-container">
          <NavLink to={"/"}>
            <img src={logo} alt="Logo img" className="logo-img" />
          </NavLink>
        </div>
        <nav className="navigation-container">
          <NavLink to={"/"} activeClassName="selected" exact>
            Home
          </NavLink>
          <NavLink to={"/articles"} activeClassName="selected">
            Articles
          </NavLink>
          <NavLink to={"/statistic"} activeClassName="selected" exact>
            Statistic
          </NavLink>
          <NavLink to={"/signin"}>
            Sign In
          </NavLink>
        </nav>
      </header>
    </HeaderContainer>
  );
}

export default Navigation;
