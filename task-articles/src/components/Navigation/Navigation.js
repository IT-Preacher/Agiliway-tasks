import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HeaderContainer,
  Logo,
  Header,
  Nav,
  MobileIcon,
} from "./styled.components";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import logo from "./logo.svg";

function Navigation() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <HeaderContainer>
      <Header>
        <div>
          <NavLink to={"/"}>
            <Logo src={logo} alt="Logo img" />
          </NavLink>
        </div>

        <MobileIcon
          onClick={() => {
            console.log("OPEN: ", isMobileOpen);
            setIsMobileOpen(!isMobileOpen);
          }}
        >
          {!isMobileOpen && <MenuOutlined style={{ fontSize: 50 }} />}
          {isMobileOpen && <CloseOutlined style={{ fontSize: 50 }} />}
        </MobileIcon>

        <Nav open={isMobileOpen}>
          <NavLink
            to={"/"}
            activeClassName="selected"
            onClick={() => setIsMobileOpen(false)}
            exact
          >
            Home
          </NavLink>
          <NavLink
            to={"/articles"}
            activeClassName="selected"
            onClick={() => setIsMobileOpen(false)}
          >
            Articles
          </NavLink>
          <NavLink
            to={"/statistic"}
            activeClassName="selected"
            onClick={() => setIsMobileOpen(false)}
            exact
          >
            Statistic
          </NavLink>
          <NavLink to={"/signin"} onClick={() => setIsMobileOpen(false)}>
            Sign In
          </NavLink>
        </Nav>
      </Header>
    </HeaderContainer>
  );
}

export default Navigation;
