import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <h1 className="logo">SmartBuys</h1>
      </NavLink>
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
  .logo
  {
    color: white;
    font-size: 3.8rem;
    font-weight: 500;

  }

  
`;
export default Header;