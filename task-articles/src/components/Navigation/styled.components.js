import styled from "styled-components";

export const HeaderContainer = styled.div`
  max-width: 1200px;
  padding: 15px 15px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  height: 90px;
`;

export const Nav = styled.nav`
  a {
    font-family: sans-serif;
    font-weight: 100;
    color: #3a3a3a;
    padding: 10px 20px;
    cursor: pointer;
    margin-left: 15px;
    font-size: 18px;
    box-sizing: border-box;
  }

  .selected {
    border: 2px solid black;
    border-radius: 82px;
  }

  @media screen and (max-width: 960px) {
    position: absolute;
    display: flex;
    top: 90px;
    left: ${({ open }) => (open ? "0" : "-100%")};
    width: 100%;
    height: 90vh;
    margin-top: 30px;
    flex-direction: column;
    transition: 0.5ms all ease;
    background-color: #f1f3f9;
    z-index: 100000;

    .selected {
      background-color: #1890ff;
      color: white;
      border: none;
      border-radius: 0;
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    align-items: center;
    cursor: pointer;
  }
`;
