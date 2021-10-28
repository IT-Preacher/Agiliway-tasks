import React, { Component } from "react";
import "./Navigation.scss";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <div className="header-conteiner">
        <header>
          <div className="navigation-conteiner">
            <nav>
              <NavLink to={"/"} activeClassName="selected">
                Home
              </NavLink>
              <NavLink to={"/books"} activeClassName="selected">
                Books
              </NavLink>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

export default Navigation;
