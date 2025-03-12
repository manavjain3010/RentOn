import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
// import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img style={{width: "150px"}}src="./images/RentOn.png" alt="my logo img" />
      </NavLink>
      {/* <SearchBar /> */}
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .swadesh {
    height: 5rem;
`;
export default Header;
