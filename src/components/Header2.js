import React from "react";
// import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav2 from "./Nav2";

const Header2 = () => {
  return (
    <MainHeader>
      {/* <NavLink to="/">
        <img src="./images/logo.png" alt="my logo img" />
      </NavLink>  */}
      <Nav2 />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
`;
export default Header2;

