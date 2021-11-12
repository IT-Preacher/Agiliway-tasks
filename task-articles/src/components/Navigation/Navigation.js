import "./Navigation.scss";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import frontBaner from "./front_page_baner.png";
import logo from "./logo.svg";

const HeaderConteiner = styled.div`
  width: 1200px;
  padding: 15px 15px;
`;

function Navigation() {
  return (
    <HeaderConteiner>
      <header>
        <div className="logo-conteiner">
          <NavLink to={"/"}>
            <img src={logo} alt="Logo img" className="logo-img" />
            <span>Articles</span>
          </NavLink>
        </div>
        <nav className="navigation-conteiner">
          <NavLink to={"/"} activeClassName="selected">
            Home
          </NavLink>
          <NavLink to={"/articles"} activeClassName="selected">
            Articles
          </NavLink>
          <NavLink to={"/statistic"} activeClassName="selected">
            Statistic
          </NavLink>
        </nav>
      </header>
    </HeaderConteiner>
    // </div>
  );
}

export default Navigation;
